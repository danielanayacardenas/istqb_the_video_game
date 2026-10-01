// =====================================================
// ISTQB Quest — scripts/analyze-bias.mjs
// Mide el sesgo de longitud de las opciones: la opción
// (o conjunto) correcto no debe ser sistemáticamente más
// largo que los distractores. Uso: bun scripts/analyze-bias.mjs [--json]
// =====================================================

import { worlds } from "../js/data/index.js";
import { bossBank } from "../js/data/boss/bank.js";

const RANGE = { min: 0.7, max: 1.4 };
const GLOBAL_TARGET = 1.15;

const jsonMode = process.argv.includes("--json");

/** Ratio de longitud: media de correctas / media de incorrectas. */
function questionStats(q) {
  const lens = q.options.map((o) => o.length);
  const correctIdx = Array.isArray(q.correct) ? q.correct : [q.correct];
  const correctLens = correctIdx.map((i) => lens[i]);
  const wrongLens = lens.filter((_, i) => !correctIdx.includes(i));
  const avgCorrect = correctLens.reduce((a, b) => a + b, 0) / correctLens.length;
  const avgWrong = wrongLens.reduce((a, b) => a + b, 0) / wrongLens.length;
  return {
    id: q.id,
    isMulti: Array.isArray(q.correct),
    avgCorrect: Math.round(avgCorrect),
    avgWrong: Math.round(avgWrong),
    ratio: avgWrong > 0 ? avgCorrect / avgWrong : 1,
  };
}

const sections = [
  ...worlds.map((w) => ({
    name:
      w.type === "challenge"
        ? `Desafío ${w.challengeNumber} · ${w.title}`
        : `Mundo ${w.number} · ${w.title}`,
    questions: w.levels.flatMap((l) => l.questions),
  })),
  { name: "Boss Final (banco)", questions: bossBank },
];

const sectionReports = [];
const allStats = [];

for (const section of sections) {
  const stats = section.questions.map(questionStats);
  allStats.push(...stats);
  const ratios = stats.map((r) => r.ratio);
  sectionReports.push({
    name: section.name,
    total: stats.length,
    avgRatio: ratios.reduce((a, b) => a + b, 0) / ratios.length,
    outOfRange: stats.filter((r) => r.ratio > RANGE.max || r.ratio < RANGE.min).length,
    longer: stats.filter((r) => r.ratio > 1).length,
  });
}

const globalAvg = allStats.reduce((a, r) => a + r.ratio, 0) / allStats.length;
const globalOutOfRange = allStats.filter((r) => r.ratio > RANGE.max || r.ratio < RANGE.min).length;
const multiCount = allStats.filter((r) => r.isMulti).length;
const worst = [...allStats].sort((a, b) => b.ratio - a.ratio).slice(0, 10);

const report = {
  total: allStats.length,
  multi: multiCount,
  global: {
    avgRatio: Number(globalAvg.toFixed(2)),
    target: GLOBAL_TARGET,
    outOfRange: globalOutOfRange,
    ok: globalAvg <= GLOBAL_TARGET,
  },
  range: RANGE,
  sections: sectionReports.map((s) => ({
    ...s,
    avgRatio: Number(s.avgRatio.toFixed(2)),
  })),
  worst: worst.map((r) => ({ id: r.id, ratio: Number(r.ratio.toFixed(2)) })),
};

if (jsonMode) {
  console.log(JSON.stringify(report, null, 2));
} else {
  const pct = (n, d) => `${Math.round((100 * n) / d)}%`;
  console.log("ISTQB Quest — Análisis de sesgo de longitud (Etapa 14)\n");
  console.log(
    `Total: ${report.total} preguntas · Multi-selección: ${multiCount} · Rango aceptable: ${RANGE.min}–${RANGE.max} · Media objetivo: ≤ ${GLOBAL_TARGET}\n`
  );
  console.log(
    `GLOBAL: ratio medio ${report.global.avgRatio} · fuera de rango: ${globalOutOfRange}/${report.total} (${pct(globalOutOfRange, report.total)}) ${report.global.ok ? "OK" : "REVISAR"}\n`
  );
  console.log("Por sección:");
  for (const s of report.sections) {
    const flag = s.outOfRange === 0 ? "OK " : "!! ";
    console.log(
      `  ${flag} ${s.name.padEnd(42)} ${String(s.total).padStart(3)} preg · ratio ${String(s.avgRatio).padStart(4)} · fuera ${s.outOfRange}`
    );
  }
  console.log("\nTop 10 peores casos:");
  for (const r of report.worst) {
    console.log(`  ${r.id.padEnd(12)} ratio ${r.ratio}`);
  }
  console.log("\nTip: los lotes de contenido re-equilibran por mundo hasta dejar 0 fuera de rango.");
}
