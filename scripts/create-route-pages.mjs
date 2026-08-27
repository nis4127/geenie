import { mkdir, writeFile } from "node:fs/promises";

const routes = {
  kreation: ["Kreation & Umsetzung — Geenie Media", "Geenie Media — Kreation, Print und digitale Umsetzung."],
  projektanfrage: ["Projektanfrage — Geenie Media", "Geenie Media — Projektanfrage und System-Check."],
  datenschutz: ["Datenschutz — Geenie Media", "Datenschutzerklärung von Geenie Media."],
  agb: ["AGB — Geenie Media", "Allgemeine Geschäftsbedingungen von Geenie Media."],
  showroom: ["Print Showroom — Geenie Media", "Geenie Media — digitaler Showroom für Corporate Identity und Print."],
};
const template = (title, description) => `<!doctype html>\n<html lang="de">\n  <head>\n    <meta charset="UTF-8" />\n    <meta name="viewport" content="width=device-width, initial-scale=1.0" />\n    <meta name="theme-color" content="#050505" />\n    <meta name="description" content="${description}" />\n    <title>${title}</title>\n  </head>\n  <body>\n    <div id="root"></div>\n    <noscript>Bitte JavaScript aktivieren, um diese Seite zu öffnen.</noscript>\n    <script type="module" src="/src/main.tsx"></script>\n  </body>\n</html>\n`;
for (const [route, [title, description]] of Object.entries(routes)) {
  await mkdir(`client/${route}`, { recursive: true });
  await writeFile(`client/${route}/index.html`, template(title, description));
}
