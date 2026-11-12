/*
 * Geenie Media Showroom — bestehende Homepage-Integration
 * Tactical Magic / Material Archive: präzise Navigation, Graphit, Signal White, System Lime.
 * Kein Warenkorb, keine Preise — eine informative Produktübersicht für Corporate Identity und Print.
 */
import React, { useEffect, useState } from "react";
import { ArrowDownRight, ArrowRight, ArrowUpRight, ChevronRight } from "lucide-react";
import { Link } from "wouter";
import Layout from "../components/Layout";
import "../showroom.css";

const base = "/assets/showroom";
const logo = `${base}/geenie-logo-original.svg`;
const mark = `${base}/mark.webp`;

const categories = [
  { id: "01", name: "Präsentationsmappen", short: "Mappen" },
  { id: "02", name: "Visitenkarten & Papeterie", short: "Papeterie" },
  { id: "03", name: "Notizblöcke & Publikationen", short: "Publikationen" },
  { id: "04", name: "Werbeartikel & Büroausstattung", short: "Büro" },
  { id: "05", name: "Premium-Broschüren & Hardcover", short: "Premium" },
];

function ProductImage({ src, alt, className = "" }: { src: string; alt: string; className?: string }) {
  return (
    <figure className={`gm-media ${className}`}>
      <img src={src} alt={alt} loading="lazy" decoding="async" sizes="(max-width: 720px) 50vw, (max-width: 1100px) 42vw, 32vw" />
      <figcaption>GEENIE / MATERIAL</figcaption>
    </figure>
  );
}

function ProductSection({
  id,
  number,
  title,
  description,
  images,
  specs,
  reverse = false,
}: {
  id: string;
  number: string;
  title: React.ReactNode;
  description: string;
  images: Array<{ src: string; alt: string; className?: string }>;
  specs: string[];
  reverse?: boolean;
}) {
  return (
    <section id={`gm-category-${id}`} className={`gm-product-section ${reverse ? "gm-product-section--reverse" : ""}`}>
      <div className="gm-section-rail">
        <strong>{number}</strong><span /><small>PRODUKTWELT</small>
      </div>
      <div className="gm-product-copy">
        <p className="gm-kicker">{number} / MATERIAL ARCHIVE</p>
        <h2>{title}</h2>
        <p className="gm-description">{description}</p>
        <div className="gm-specs">{specs.map((spec) => <span key={spec}>— {spec}</span>)}</div>
      </div>
      <div className="gm-product-gallery">
        {images.map((image) => <ProductImage key={image.src} {...image} />)}
      </div>
    </section>
  );
}

export default function Showroom() {
  const [active, setActive] = useState("01");
  useEffect(() => {
    const nodes = categories.map((category) => document.getElementById(`gm-category-${category.id}`)).filter(Boolean) as HTMLElement[];
    const observer = new IntersectionObserver((entries) => {
      const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
      if (visible) setActive(visible.target.id.replace("gm-category-", ""));
    }, { rootMargin: "-20% 0px -58%", threshold: [0.1, 0.4, 0.7] });
    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, []);

  return (
    <Layout>
      <div className="gm-showroom">
        <section className="gm-hero">
          <img className="gm-hero-image" src={`${base}/hero.webp`} alt="Taktile schwarze Printmaterialien und Papierlagen" width={2560} height={1440} loading="eager" fetchPriority="high" decoding="async" />
          <div className="gm-hero-shade" />
          <div className="gm-hero-content">
            <p className="gm-kicker gm-kicker--light">GEENIE MEDIA / DIGITALER SHOWROOM</p>
            <h1>Printdesign für<br /><span>Muttenz &amp; Basel.</span></h1>
            <p>Von der Präsentationsmappe bis zum Hardcover: Markenmaterial, das Ihre Leistungen sichtbar macht und den ersten Eindruck bei Kunden trägt.</p>
            <a className="gm-text-cta" href="#gm-category-01">Produktwelten entdecken <ArrowDownRight size={17} /></a>
          </div>
          <div className="gm-hero-index">01—05 / ARCHIVE<br /><span>WENIGER MARKETING.<br />MEHR SYSTEM.</span></div>
        </section>

        <section className="gm-intro">
          <div className="gm-intro-mark"><img src={mark} alt="" loading="lazy" decoding="async" width={768} height={768} /><span>CURATED<br />MATERIALS</span></div>
          <div className="gm-intro-copy">
            <p className="gm-kicker">DAS PRINZIP</p>
            <h2>Ein System für alles,<br /><span>was Ihre Marke berührt.</span></h2>
            <p>Wir denken Print nicht als einzelne Artikel, sondern als zusammenhängende Materialwelt. Für regionale Dienstleister, Handwerksbetriebe und KMU in Muttenz, Basel und der Schweiz planen wir Oberfläche, Format und Veredelung passend zu Ihrem Auftritt.</p>
            <Link href="/projektanfrage"><a className="gm-text-cta gm-text-cta--dark">Projekt besprechen <ArrowUpRight size={15} /></a></Link>
          </div>
          <div className="gm-intro-paper"><img src={`${base}/paper-texture.webp`} alt="Warme Papierlagen mit sichtbarer Materialstruktur" loading="lazy" decoding="async" width={2304} height={1536} /></div>
          <div className="gm-intro-detail"><img src={`${base}/system-detail.webp`} alt="Präzise arrangierte Printmaterialien" loading="lazy" decoding="async" width={1664} height={2080} /><span>01—05 / TACTILE SYSTEM</span></div>
        </section>

        <section className="gm-project-intro" aria-labelledby="gm-project-title">
          <div>
            <p className="gm-kicker">PROJEKTE &amp; ANWENDUNGEN</p>
            <h2 id="gm-project-title">Material, das im<br /><span>Geschäft wirkt.</span></h2>
          </div>
          <div className="gm-project-intro__copy">
            <p>Gute Printprodukte sind kein Selbstzweck. Sie helfen beim Kundentermin, strukturieren Angebote und machen die Qualität eines Unternehmens greifbar.</p>
            <div className="gm-project-grid">
              <article>
                <span>01 / HANDWERK &amp; DIENSTLEISTUNG</span>
                <h3>Präsentationsmappen für Offerten</h3>
                <p>Ein klar aufgebautes Set aus Mappe, Angebotsunterlagen und Visitenkarten für professionelle Kundentermine.</p>
              </article>
              <article>
                <span>02 / REGIONALE MARKEN</span>
                <h3>Visitenkarten &amp; Papeterie</h3>
                <p>Durchgängige Geschäftsdrucksachen, die den Markenauftritt vom ersten Kontakt bis zur Offerte konsistent halten.</p>
              </article>
              <article>
                <span>03 / PREMIUM-AUFTRITT</span>
                <h3>Broschüren &amp; Hardcover</h3>
                <p>Hochwertige Publikationen für Referenzen, Produkte und Leistungen, die auch haptisch im Gedächtnis bleiben.</p>
              </article>
            </div>
          </div>
        </section>

        <section className="gm-archive">
          <aside className="gm-archive-nav" aria-label="Produktwelten">
            <p className="gm-kicker">PRODUKTWELTEN</p>
            <nav>{categories.map((category) => <a key={category.id} className={active === category.id ? "is-active" : ""} href={`#gm-category-${category.id}`}><b>{category.id}</b><span>{category.short}</span><ChevronRight size={14} /></a>)}</nav>
            <p className="gm-archive-note">Kein Shop.<br />Ein Materialarchiv.</p>
          </aside>
          <div className="gm-archive-content">
            <ProductSection id="01" number="01" title={<>Präsentations-<br />mappen</>} description="Der erste Eindruck hat Gewicht. Unsere hochwertigen Präsentationsmappen aus schwerem Naturkarton bringen Ihre Unterlagen perfekt geordnet und haptisch überzeugend zu Ihren Kunden. Mit integrierten Taschen und optionalen Veredelungen." images={[{ src: `${base}/presentation-folder-closed.webp`, alt: "Geschlossene Präsentationsmappe aus Naturkarton", className: "gm-media--large" }, { src: `${base}/presentation-folder-open.webp`, alt: "Geöffnete Präsentationsmappe mit integrierten Taschen", className: "gm-media--small" }]} specs={["NATURKARTON", "INTEGRIERTE TASCHE", "VEREDLUNGEN"]} />
            <ProductSection id="02" number="02" title={<>Visitenkarten &<br />Papeterie</>} description="Haptik, die beim ersten Händedruck bleibt. Von schweren, strukturierten Visitenkarten mit edler Prägung bis hin zu klassischem, bedrucktem A4-Briefpapier und passenden Couverts – für einen durchgehenden, professionellen Auftritt." images={[{ src: `${base}/papeterie-cards.webp`, alt: "Stapel hochwertiger Visitenkarten", className: "gm-media--medium" }, { src: `${base}/letter-envelope.webp`, alt: "Bedrucktes Briefpapier und passende Couverts", className: "gm-media--tall" }, { src: `${base}/letterhead.webp`, alt: "A4-Briefpapier mit hochwertigem Druck", className: "gm-media--small" }]} specs={["PRÄGUNG", "A4 BRIEFSET", "COUVERTS"]} reverse />
            <ProductSection id="03" number="03" title={<>Notizblöcke &<br />Publikationen</>} description="Perfekt für den täglichen Büroalltag oder als edles Give-away. Unsere A4-Notizblöcke mit sauberer Leimbindung bieten viel Raum für Ideen. Ergänzt durch klassische Musterkataloge und Broschüren mit sauberer Drahtheftung." images={[{ src: `${base}/notepad.webp`, alt: "A4-Notizblock mit sauberer Leimbindung", className: "gm-media--large" }, { src: `${base}/brochure.webp`, alt: "Aufgeschlagene Broschüre mit sauberer Bindung", className: "gm-media--small" }]} specs={["A4 FORMAT", "LEIMBINDUNG", "DRAHTHEFTUNG"]} />
            <ProductSection id="04" number="04" title={<>Werbeartikel &<br />Büroausstattung</>} description="Kleine Details mit grosser Wirkung. Verleihen Sie Ihrem Büro oder Ihren Events den letzten Schliff – mit minimalistischen, edlen Kugelschreibern, hochwertigen Computer-Mausmatten und detailgetreuen Pins." images={[{ src: `${base}/pen.webp`, alt: "Edler Kugelschreiber", className: "gm-media--small" }, { src: `${base}/mouse-mat.webp`, alt: "Hochwertige Computer-Mausmatte", className: "gm-media--large" }, { src: `${base}/pin.webp`, alt: "Detailgetreuer Metall-Pin", className: "gm-media--small" }]} specs={["OFFICE", "EVENTS", "DETAILS"]} reverse />
            <ProductSection id="05" number="05" title={<>Premium-Broschüren &<br />Hardcover</>} description="Wenn es exklusiver sein muss. Tiefschwarze Feinpapier-Einbände, veredelt mit edlen Heissfolienprägungen und haptischem Relief, sorgen dafür, dass Ihre Publikationen garantiert im Gedächtnis bleiben." images={[{ src: `${base}/premium-hardcover.webp`, alt: "Schwarze Premium-Broschüre mit haptischem Einband", className: "gm-media--hero" }]} specs={["FEINPAPIER", "HEISSFOLIE", "RELIEF"]} />
          </div>
        </section>

        <section className="gm-showroom-cta">
          <div><p className="gm-kicker gm-kicker--light">DER NÄCHSTE SCHRITT</p><h2>Was soll Ihre Marke<br /><span>haptisch erzählen?</span></h2></div>
          <Link href="/projektanfrage"><a className="gm-button">Projekt anfragen <ArrowRight size={16} /></a></Link>
        </section>
      </div>
    </Layout>
  );
}
