#!/usr/bin/env node
import { access, readdir, readFile } from "node:fs/promises";
import path from "node:path";

const roots = process.argv.slice(2).length ? process.argv.slice(2) : ["client", "dist/public"];
const htmlFiles = [];

async function collect(directory) {
  try {
    await access(directory);
  } catch {
    return;
  }
  for (const entry of await readdir(directory, { withFileTypes: true })) {
    const filePath = path.join(directory, entry.name);
    if (entry.isDirectory()) await collect(filePath);
    else if (entry.isFile() && entry.name.endsWith(".html")) htmlFiles.push(filePath);
  }
}

for (const root of roots) await collect(root);
htmlFiles.sort();
if (htmlFiles.length === 0) throw new Error("Keine HTML-Dateien zum Prüfen gefunden.");

let blockCount = 0;
let failed = 0;
for (const filePath of htmlFiles) {
  const html = await readFile(filePath, "utf8");
  const blocks = [...html.matchAll(/<script\s+type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi)];
  if (blocks.length === 0) {
    console.error(`FAIL ${filePath}: kein application/ld+json-Block gefunden`);
    failed += 1;
    continue;
  }
  blocks.forEach((match, index) => {
    blockCount += 1;
    try {
      JSON.parse(match[1].trim());
      console.log(`PASS ${filePath} · Block ${index + 1}`);
    } catch (error) {
      console.error(`FAIL ${filePath} · Block ${index + 1}: ${error instanceof Error ? error.message : String(error)}`);
      failed += 1;
    }
  });
}

if (failed > 0) {
  console.error(`\n${failed} Fehler in ${htmlFiles.length} HTML-Dateien; ${blockCount} JSON-LD-Blöcke geprüft.`);
  process.exit(1);
}
console.log(`\nJSON-LD-Syntax OK: ${blockCount} Blöcke in ${htmlFiles.length} HTML-Dateien geprüft.`);
