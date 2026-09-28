// =====================================================
// ISTQB Quest — ui/sfx.js
// Efectos de sonido retro sintetizados con WebAudio
// (sin archivos). Si no hay AudioContext, no hace nada.
// =====================================================

let ctx = null;

function getCtx() {
  if (typeof window === "undefined") return null;
  const AC = window.AudioContext || window.webkitAudioContext;
  if (!AC) return null;
  if (!ctx) {
    try {
      ctx = new AC();
    } catch {
      return null;
    }
  }
  if (ctx.state === "suspended") ctx.resume?.();
  return ctx;
}

function tone(freq, duration, { type = "square", volume = 0.045, endFreq = null, delay = 0 } = {}) {
  const ac = getCtx();
  if (!ac) return;
  const t0 = ac.currentTime + delay;
  const osc = ac.createOscillator();
  const gain = ac.createGain();
  osc.type = type;
  osc.frequency.setValueAtTime(freq, t0);
  if (endFreq) osc.frequency.exponentialRampToValueAtTime(Math.max(1, endFreq), t0 + duration);
  gain.gain.setValueAtTime(volume, t0);
  gain.gain.exponentialRampToValueAtTime(0.0001, t0 + duration);
  osc.connect(gain);
  gain.connect(ac.destination);
  osc.start(t0);
  osc.stop(t0 + duration + 0.03);
}

function noise(duration = 0.06, volume = 0.03) {
  const ac = getCtx();
  if (!ac) return;
  const frames = Math.max(1, Math.floor(ac.sampleRate * duration));
  const buffer = ac.createBuffer(1, frames, ac.sampleRate);
  const data = buffer.getChannelData(0);
  for (let i = 0; i < frames; i++) {
    data[i] = (Math.random() * 2 - 1) * (1 - i / frames);
  }
  const src = ac.createBufferSource();
  src.buffer = buffer;
  const gain = ac.createGain();
  gain.gain.value = volume;
  src.connect(gain);
  gain.connect(ac.destination);
  src.start();
}

/** Reproduce el sonido asociado a un evento de combate. */
export function playEvent(type) {
  switch (type) {
    case "player-shot":
      tone(880, 0.08, { endFreq: 220 });
      noise(0.05, 0.03);
      break;
    case "enemy-shot":
      tone(320, 0.09, { type: "sawtooth", endFreq: 140 });
      noise(0.05, 0.03);
      break;
    case "enemy-down":
      tone(660, 0.12, { type: "triangle" });
      tone(440, 0.16, { type: "triangle", delay: 0.12 });
      tone(220, 0.3, { type: "triangle", delay: 0.28, endFreq: 110 });
      break;
    case "player-down":
      tone(300, 0.22, { type: "sawtooth", endFreq: 80 });
      tone(150, 0.32, { type: "sawtooth", delay: 0.18, endFreq: 60 });
      break;
  }
}
