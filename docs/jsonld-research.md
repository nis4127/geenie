# JSON-LD-Recherche für den Print-Showroom

## Quellen

- Google Search Central: https://developers.google.com/search/docs/appearance/structured-data/product
- Google Search Central: https://developers.google.com/search/docs/appearance/structured-data/product-snippet
- Schema.org Product: https://schema.org/Product
- Schema.org ItemList: https://schema.org/ItemList

## Relevante Erkenntnisse

Google unterscheidet zwischen Product Snippets für Produktseiten ohne direkten Kauf und Merchant Listings für Seiten, auf denen Produkte gekauft werden können. Der Geenie-Showroom ist eine informative Produktübersicht ohne Warenkorb, Preise, Verfügbarkeiten, Bewertungen oder Kaufangebot. Deshalb sollen keine Offers, Reviews, AggregateRatings oder erfundenen kaufbezogenen Werte ausgezeichnet werden.

Für die fünf Produktwelten ist ein ItemList-Markup mit jeweils einem Product-Element sinnvoll, sofern Name, Beschreibung, URL und Bild den sichtbaren Inhalten entsprechen. Das Markup unterstützt die semantische Einordnung; ein Rich Result oder eine bestimmte Darstellung in Google ist nicht garantiert.

Google empfiehlt, strukturierte Daten nach der Implementierung mit dem Rich Results Test sowie der URL-Prüfung in der Search Console zu validieren und die Sitemap einzureichen.
