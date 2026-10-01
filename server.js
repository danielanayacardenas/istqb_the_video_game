// =====================================================
// ISTQB Quest — server.js
// Servidor de desarrollo local con Bun (sin dependencias).
// Uso: bun server.js   (o: bun run dev)
// =====================================================

import path from "node:path";

const root = import.meta.dir; // raíz del proyecto
const port = Number(process.env.PORT || 4173);

const server = Bun.serve({
  port,
  async fetch(req) {
    const url = new URL(req.url);
    let pathname = decodeURIComponent(url.pathname);
    if (pathname === "/") pathname = "/index.html";

    // Normaliza y evita salir de la raíz del proyecto (path traversal)
    const filePath = path.normalize(path.join(root, pathname));
    if (!filePath.startsWith(root)) {
      return new Response("403 Forbidden", { status: 403 });
    }

    const file = Bun.file(filePath);
    if (await file.exists()) {
      return new Response(file, {
        headers: { "Cache-Control": "no-store" },
      });
    }

    return new Response("404 Not Found", { status: 404 });
  },
});

console.log(`ISTQB Quest listo en http://localhost:${server.port}`);
