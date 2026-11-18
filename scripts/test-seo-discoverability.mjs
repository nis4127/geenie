#!/usr/bin/env node
/**
 * Prüft die öffentlich ausgelieferte SEO- und Structured-Data-Struktur.
 * Aufruf:
 *   node scripts/test-seo-discoverability.mjs
 *   SITE_URL=https://staging.example.com node scripts/test-seo-discoverability.mjs
 */

const site = (process.env.SITE_URL || "https://www.geenie-media.ch").replace(/\/$/, "");
const expectedPages = [
  "/",
  "/starter-website",
  "/musterdruck",
  "/kreation",
  "/showroom",
  "/ueber-uns",
  "/projektanfrage",
  "/agb",
  "/datenschutz",
];
const requiredTypes = new Set(["ProfessionalService", "WebSite", "WebPage", "BreadcrumbList", "Service", "FAQPage"]);

let passed = 0;
let failed = 0;
const failures = [];

function ok(message) {
  passed += 1;
  console.log(`PASS  ${message}`);
}

function fail(message) {
  failed += 1;
  failures.push(message);
  console.error(`FAIL  ${message}`);
}

async function get(url) {
  const response = await fetch(url, { redirect: "follow", headers: { "user-agent": "Geenie-SEO-Healthcheck/1.0" } });
  return { response, text: await response.text() };
}

function assert(condition, message) {
  if (condition) ok(message);
  else fail(message);
}

function schemaTypes(value) {
  const types = [];
  const seen = new Set();
  const add = (node) => {
    if (!node || typeof node !== "object") return;
    if (seen.has(node)) return;
    seen.add(node);
    if (typeof node["@type"] === "string") types.push(node["@type"]);
    if (Array.isArray(node["@type"])) types.push(...node["@type"]);
    Object.values(node).forEach((value) => {
      if (Array.isArray(value)) value.forEach(add);
      else if (value && typeof value === "object") add(value);
    });
  };
  add(value);
  return types;
}

function jsonLdBlocks(html) {
  const blocks = [];
  const pattern = /<script[^>]*type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi;
  for (const match of html.matchAll(pattern)) {
    try {
      blocks.push(JSON.parse(match[1].trim()));
    } catch (error) {
      fail(`JSON-LD ist ungültig: ${error.message}`);
    }
  }
  return blocks;
}

function locsFromSitemap(xml) {
  return [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((match) => match[1].trim());
}

console.log(`SEO-Discoverability-Check für ${site}\n`);

const robots = await get(`${site}/robots.txt`);
assert(robots.response.ok, `robots.txt liefert HTTP ${robots.response.status}`);
assert(/User-agent:\s*\*/i.test(robots.text), "robots.txt enthält User-agent: *");
assert(/Allow:\s*\//i.test(robots.text), "robots.txt erlaubt den öffentlichen Root-Pfad");
assert(/Disallow:\s*\/danke-musterdruck/i.test(robots.text), "Dankesseite ist in robots.txt ausgeschlossen");
assert(new RegExp(`Sitemap:\\s*${site.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}\\/sitemap\\.xml`, "i").test(robots.text), "robots.txt verweist auf die korrekte Sitemap");

const sitemap = await get(`${site}/sitemap.xml`);
assert(sitemap.response.ok, `sitemap.xml liefert HTTP ${sitemap.response.status}`);
assert(sitemap.text.includes("<urlset"), "Sitemap enthält ein urlset");
const sitemapUrls = locsFromSitemap(sitemap.text);
assert(sitemapUrls.length > 0, "Sitemap enthält URLs");
assert(new Set(sitemapUrls).size === sitemapUrls.length, "Sitemap enthält keine doppelten URLs");
assert(!sitemapUrls.includes(`${site}/danke-musterdruck`), "Dankesseite ist nicht in der Sitemap");
for (const path of expectedPages) {
  assert(sitemapUrls.includes(`${site}${path}`), `Sitemap enthält ${path}`);
}

for (const url of sitemapUrls) {
  const page = await get(url);
  assert(page.response.status === 200, `${url} liefert HTTP 200`);
  assert(/<html[\s>]/i.test(page.text), `${url} liefert HTML`);
  const canonical = page.text.match(/<link[^>]+rel=["']canonical["'][^>]+href=["']([^"']+)["']/i)?.[1];
  assert(canonical === url, `${url} hat den korrekten Canonical (${canonical || "fehlt"})`);

  const robotsMeta = page.text.match(/<meta[^>]+name=["']robots["'][^>]+content=["']([^"']+)["']/i)?.[1] || "";
  assert(!/noindex/i.test(robotsMeta), `${url} ist nicht auf noindex gesetzt`);

  const blocks = jsonLdBlocks(page.text);
  assert(blocks.length > 0, `${url} enthält JSON-LD`);
  const types = new Set(blocks.flatMap(schemaTypes));
  if (url === `${site}/`) {
    for (const type of ["ProfessionalService", "WebSite", "WebPage", "BreadcrumbList", "Service", "FAQPage"]) {
      assert(types.has(type), `Homepage enthält ${type}`);
    }
  }
  if (url === `${site}/starter-website`) {
    assert(types.has("Product"), "Starter-Website enthält Product");
    assert(types.has("Offer"), "Starter-Website enthält Offer");
    assert(types.has("WebSite"), "Starter-Website enthält WebSite");
    assert(types.has("WebPage"), "Starter-Website enthält WebPage");
    assert(types.has("BreadcrumbList"), "Starter-Website enthält BreadcrumbList");
    assert(types.has("FAQPage"), "Starter-Website enthält FAQPage");
  }
}

console.log(`\nErgebnis: ${passed} bestanden, ${failed} fehlgeschlagen.`);
if (failures.length) {
  console.error("\nFehlgeschlagene Prüfungen:");
  failures.forEach((message) => console.error(`- ${message}`));
  process.exitCode = 1;
} else {
  console.log("Alle automatisierten Checks sind erfolgreich.");
}
