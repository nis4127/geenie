#!/usr/bin/env node

const baseUrl = (process.env.BASE_URL || "http://127.0.0.1:4173").replace(/\/$/, "");
const routes = [
  "/",
  "/ueber-uns",
  "/kreation",
  "/projektanfrage",
  "/datenschutz",
  "/agb",
  "/showroom",
];

let failed = 0;
console.log(`Direktlink-Test gegen ${baseUrl}`);

for (const route of routes) {
  const url = `${baseUrl}${route}`;
  try {
    const response = await fetch(url, { redirect: "follow", headers: { accept: "text/html" } });
    const contentType = response.headers.get("content-type") || "";
    const body = await response.text();
    const checks = {
      status: response.status === 200,
      html: /text\/html/i.test(contentType) && /<html[\s>]/i.test(body),
      title: /<title>[^<]+<\/title>/i.test(body),
    };
    const passed = Object.values(checks).every(Boolean);
    console.log(`${passed ? "PASS" : "FAIL"} ${route} -> ${response.status} ${contentType.split(";")[0] || "unknown"}${response.url !== url ? ` (final: ${response.url})` : ""}`);
    if (!passed) {
      console.error(`  checks: ${JSON.stringify(checks)}`);
      failed += 1;
    }
  } catch (error) {
    console.error(`FAIL ${route} -> ${error instanceof Error ? error.message : String(error)}`);
    failed += 1;
  }
}

if (failed > 0) {
  console.error(`\n${failed}/${routes.length} Direktlinks fehlgeschlagen.`);
  process.exit(1);
}

console.log(`\nAlle ${routes.length} Direktlinks liefern HTTP 200 mit HTML und Seitentitel.`);
