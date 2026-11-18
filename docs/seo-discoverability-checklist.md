# SEO-/SEA-Discoverability-Checkliste

Diese Checkliste ergänzt `scripts/test-seo-discoverability.mjs`. Das Skript prüft die technische Auslieferung; die Suchmaschinen müssen die URLs zusätzlich selbst crawlen und verarbeiten.

## 1. Automatisierter Schnelltest

Im Projektverzeichnis ausführen:

```bash
node scripts/test-seo-discoverability.mjs
```

Für eine Staging- oder Preview-Domain:

```bash
SITE_URL=https://preview.example.com node scripts/test-seo-discoverability.mjs
```

Der Test prüft:

- `robots.txt` mit Sitemap-Verweis
- HTTP 200 für `sitemap.xml`
- alle erwarteten öffentlichen URLs in der Sitemap
- Ausschluss von `/danke-musterdruck`
- HTTP 200 und HTML für jede Sitemap-URL
- selbstreferenzierende Canonicals
- fehlende `noindex`-Direktiven auf indexierbaren Seiten
- gültiges JSON-LD
- Homepage: `ProfessionalService`, `WebSite`, `WebPage`, `BreadcrumbList`, `Service`, `FAQPage`
- Starter-Website: `Product`, `Offer`, `WebSite`, `WebPage`, `BreadcrumbList`, `FAQPage`

## 2. Google Search Console

1. **URL-Prüfung** öffnen: `https://search.google.com/search-console`
2. Nacheinander prüfen:
   - `https://www.geenie-media.ch/`
   - `https://www.geenie-media.ch/starter-website`
   - `https://www.geenie-media.ch/musterdruck`
   - `https://www.geenie-media.ch/kreation`
   - `https://www.geenie-media.ch/showroom`
   - `https://www.geenie-media.ch/ueber-uns`
   - `https://www.geenie-media.ch/projektanfrage`
3. Erwartung pro URL:
   - URL ist bei Google bekannt beziehungsweise indexierbar
   - kein `noindex`-Problem
   - Canonical wird akzeptiert
   - Crawling ist nicht durch robots.txt blockiert
4. Unter **Indexierung → Sitemaps** eintragen oder prüfen:
   - `sitemap.xml`
   - Status: **Erfolgreich**
   - erkannte URLs entsprechen den 9 indexierbaren URLs
5. Nach neuen Deployments bei wichtigen Seiten **Indexierung beantragen** verwenden. Das ist ein Anstoss, keine Garantie für sofortige Indexierung.
6. Unter **Verbesserungen** beziehungsweise **Ergebnisse** prüfen, ob strukturierte Daten ohne Fehler erkannt wurden.

## 3. Google-Rich-Results- und Schema-Prüfung

- Rich-Results-Test: `https://search.google.com/test/rich-results`
- Schema Markup Validator: `https://validator.schema.org/`

Für Homepage und Starter-Website jeweils die Live-URL testen. Erwartung:

- JSON-LD ohne Syntaxfehler
- keine fehlenden Pflichtfelder bei Product/Offer
- FAQ-Inhalte sind auf der Seite sichtbar und stimmen mit den Antworten im Schema überein
- keine erfundenen Bewertungen, Preise oder Standortangaben

## 4. Bing Webmaster Tools

1. `https://www.bing.com/webmasters/` öffnen.
2. Domain `geenie-media.ch` verifizieren oder die vorhandene Property auswählen.
3. Unter **Sitemaps** prüfen beziehungsweise einreichen:
   - `https://www.geenie-media.ch/sitemap.xml`
4. Mit **URL Inspection** Homepage, Starter-Website und Musterdruck prüfen.
5. Erwartung:
   - URL erreichbar
   - Crawl erlaubt
   - Canonical korrekt
   - Sitemap-Zuordnung erkannt
6. Optional IndexNow einrichten. Nur verwenden, wenn der API-Schlüssel sicher im Projekt hinterlegt und die IndexNow-URL korrekt ausgeliefert wird.

## 5. LLM-/Agenten-Lesbarkeit

Manuell prüfen, ob ein nicht eingeloggter Crawler folgende Ressourcen direkt lesen kann:

- `https://www.geenie-media.ch/robots.txt`
- `https://www.geenie-media.ch/sitemap.xml`
- Homepage-HTML mit JSON-LD
- Starter-Website-HTML mit JSON-LD

Wichtige Inhalte dürfen nicht ausschliesslich nach einer Benutzerinteraktion oder nur in Bildern erscheinen. Die sichtbaren FAQs, Überschriften, Leistungen und Preise müssen mit JSON-LD, Title, Description und Canonical übereinstimmen.

## 6. Nach jedem Deployment

- `pnpm check`
- `pnpm build`
- `node scripts/test-seo-discoverability.mjs`
- Homepage und Starter-Website im Rich-Results-Test prüfen, wenn Schema geändert wurde
- in Search Console bei einer wichtigen Änderung eine neue Indexierungsanfrage stellen
- nach 3–7 Tagen Coverage-, Impressionen- und Klickdaten prüfen
