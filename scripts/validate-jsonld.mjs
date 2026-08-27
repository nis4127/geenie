import { readFile } from "node:fs/promises";

const files = [
  "client/index.html",
  "client/ueber-uns/index.html",
  "client/kreation/index.html",
  "client/projektanfrage/index.html",
  "client/datenschutz/index.html",
  "client/agb/index.html",
  "client/showroom/index.html",
];

for (const file of files) {
  const html = await readFile(file, "utf8");
  const match = html.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/);
  if (!match) throw new Error(`${file}: JSON-LD fehlt`);
  const data = JSON.parse(match[1]);
  if (data["@context"] !== "https://schema.org") throw new Error(`${file}: falscher @context`);
  if (file.endsWith("showroom/index.html")) {
    const graph = data["@graph"] || [];
    const list = graph.find((entry) => entry["@type"] === "ItemList");
    if (!list || list.numberOfItems !== 5 || list.itemListElement?.length !== 5) throw new Error(`${file}: ItemList ist nicht vollständig`);
    for (const [index, element] of list.itemListElement.entries()) {
      const product = element.item;
      if (element.position !== index + 1 || product?.["@type"] !== "Product" || !product.name || !product.description || !product.image || !product.url) {
        throw new Error(`${file}: Produkt ${index + 1} ist unvollständig`);
      }
      if (product.offers || product.review || product.aggregateRating) throw new Error(`${file}: unbelegte Kauf-/Bewertungsdaten gefunden`);
    }
    console.log(`${file}: WebPage + ItemList mit 5 Product-Elementen OK`);
  } else {
    if (data["@type"] !== "WebPage" || !data.name || !data.description || !data.url) throw new Error(`${file}: WebPage ist unvollständig`);
    console.log(`${file}: WebPage OK`);
  }
}
