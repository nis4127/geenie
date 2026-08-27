import { mkdir, writeFile } from "node:fs/promises";

const site = "https://www.geenie-media.ch";
const analytics = `    <script defer src="%VITE_ANALYTICS_ENDPOINT%/umami" data-website-id="%VITE_ANALYTICS_WEBSITE_ID%"></script>`;
const pages = [
  { path: "", title: "Geenie Media | Webdesign & digitale Systeme in Muttenz", description: "Geenie Media baut digitale Systeme und Markenauftritte für KMU in Basel und der ganzen Schweiz.", image: "/assets/bg-hero.webp" },
  { path: "ueber-uns", title: "Über uns — Geenie Media", description: "Geenie Media — Über uns, Arbeitsweise und Systemverständnis.", image: "/assets/bg-hero.webp" },
  { path: "kreation", title: "Kreation & Umsetzung — Geenie Media", description: "Geenie Media — Kreation, Print und digitale Umsetzung.", image: "/assets/showroom/hero.jpg" },
  { path: "projektanfrage", title: "Projektanfrage — Geenie Media", description: "Geenie Media — Projektanfrage und System-Check.", image: "/assets/bg-cta.webp" },
  { path: "datenschutz", title: "Datenschutz — Geenie Media", description: "Datenschutzerklärung von Geenie Media.", image: "/assets/bg-hero.webp" },
  { path: "agb", title: "AGB — Geenie Media", description: "Allgemeine Geschäftsbedingungen von Geenie Media.", image: "/assets/bg-hero.webp" },
  { path: "showroom", title: "Print Showroom — Geenie Media", description: "Geenie Media — digitaler Showroom für Corporate Identity und Print.", image: "/assets/showroom/hero.jpg" },
];

function html(page) {
  const url = page.path ? `${site}/${page.path}` : site;
  const image = `${site}${page.image}`;
  const jsonLd = JSON.stringify({ "@context": "https://schema.org", "@type": "WebPage", name: page.title, description: page.description, url, isPartOf: { "@type": "WebSite", name: "Geenie Media", url: site } });
  return `<!doctype html>
<html lang="de-CH">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="theme-color" content="#050505" />
    <meta name="robots" content="index,follow" />
    <meta name="description" content="${page.description}" />
    <link rel="canonical" href="${url}" />
    <meta property="og:type" content="website" />
    <meta property="og:site_name" content="Geenie Media" />
    <meta property="og:locale" content="de_CH" />
    <meta property="og:title" content="${page.title}" />
    <meta property="og:description" content="${page.description}" />
    <meta property="og:url" content="${url}" />
    <meta property="og:image" content="${image}" />
    <meta property="og:image:alt" content="Geenie Media — ${page.title}" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="${page.title}" />
    <meta name="twitter:description" content="${page.description}" />
    <meta name="twitter:image" content="${image}" />
    <script type="application/ld+json">${jsonLd}</script>
    <title>${page.title}</title>
  </head>
  <body>
    <div id="root"></div>
    <noscript>Bitte JavaScript aktivieren, um diese Seite zu öffnen.</noscript>
    <script type="module" src="/src/main.tsx"></script>
${analytics}
  </body>
</html>
`;
}

for (const page of pages) {
  const destination = page.path ? `client/${page.path}/index.html` : "client/index.html";
  await mkdir(destination.includes("/") ? destination.slice(0, destination.lastIndexOf("/")) : ".", { recursive: true });
  await writeFile(destination, html(page));
}

const urls = pages.map((page) => {
  const path = page.path ? `/${page.path}` : "/";
  const priority = page.path === "showroom" ? "0.9" : page.path === "" ? "1.0" : "0.7";
  return `  <url>\n    <loc>${site}${path}</loc>\n    <lastmod>2026-08-27</lastmod>\n    <changefreq>monthly</changefreq>\n    <priority>${priority}</priority>\n  </url>`;
}).join("\n");
await writeFile("client/public/sitemap.xml", `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`);
await writeFile("client/public/robots.txt", `User-agent: *\nAllow: /\nSitemap: ${site}/sitemap.xml\n`);
