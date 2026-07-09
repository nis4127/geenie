import React from "react";
import Layout from "../components/Layout";

export default function Agb() {
  return (
    <Layout onSystemCheckOpen={() => {}}>
      <div className="py-24 lg:py-32 bg-[#050505]">
        <div className="container mx-auto px-6 lg:px-12 max-w-4xl">
          <span className="text-xs font-mono text-[#DEFF9A] tracking-[0.2em] uppercase font-bold">Rechtliches</span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mt-4 uppercase leading-tight mb-12">AGB.</h1>
          
          <div className="space-y-12 text-slate-400 leading-relaxed font-medium">
            <section>
              <h2 className="text-xl font-bold text-[#F6F4EA] uppercase tracking-tight mb-4">1. Geltungsbereich</h2>
              <p>Diese AGB gelten für alle Dienstleistungen und Lieferungen von Geenie Media (Yannis Denzler). Mit der Auftragserteilung erkennt der Kunde diese AGB vollumfänglich an.</p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#F6F4EA] uppercase tracking-tight mb-4">2. Vertragsabschluss</h2>
              <p>Ein Vertrag kommt durch die schriftliche Annahme eines Angebots durch den Kunden zustande. Alle Preise verstehen sich in Schweizer Franken (CHF), exklusive Mehrwertsteuer, sofern nicht anders ausgewiesen.</p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#F6F4EA] uppercase tracking-tight mb-4">3. Dienstleistungen & Webdesign</h2>
              <p><span className="text-[#F6F4EA] font-bold">Mitwirkung:</span> Der Kunde stellt alle notwendigen Inhalte rechtzeitig zur Verfügung. Verzögerungen durch den Kunden können die Projektzeitpläne verschieben.</p>
              <p className="mt-4"><span className="text-[#F6F4EA] font-bold">Abnahme:</span> Nach Fertigstellung der vereinbarten Leistungen erfolgt eine Abnahme durch den Kunden. Erfolgt innerhalb von 5 Arbeitstagen keine Rückmeldung, gelten die Leistungen als abgenommen.</p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#F6F4EA] uppercase tracking-tight mb-4">4. Printprodukte & Warenlieferung</h2>
              <p><span className="text-[#F6F4EA] font-bold">Druckdaten:</span> Der Kunde ist für die inhaltliche Richtigkeit und die Druckfähigkeit seiner Daten verantwortlich. Geenie Media prüft Daten nur auf offensichtliche Mängel, übernimmt aber keine Garantie für das Druckergebnis bei fehlerhaften Kundendaten.</p>
              <p className="mt-4"><span className="text-[#F6F4EA] font-bold">Lieferung:</span> Liefertermine sind Richtwerte. Produktionsbedingte Abweichungen (z.B. bei Farben oder Schnitt) im branchenüblichen Rahmen sind zulässig.</p>
              <p className="mt-4"><span className="text-[#F6F4EA] font-bold">Mängelrüge:</span> Mängel müssen innerhalb von 48 Stunden nach Erhalt der Ware schriftlich gerügt werden.</p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#F6F4EA] uppercase tracking-tight mb-4">5. Geistiges Eigentum & Nutzungsrechte</h2>
              <p>Alle durch Geenie Media erstellten Konzepte, Designs und Codes bleiben bis zur vollständigen Bezahlung Eigentum von Geenie Media. Mit vollständiger Zahlung erhält der Kunde ein einfaches, räumlich und zeitlich unbeschränktes Nutzungsrecht für den vereinbarten Zweck.</p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#F6F4EA] uppercase tracking-tight mb-4">6. Haftung</h2>
              <p>Geenie Media haftet nur für grobe Fahrlässigkeit und Vorsatz. Eine Haftung für indirekte Schäden, entgangenen Gewinn oder Datenverlust ist ausgeschlossen. Die Haftung für Mängel bei Drucksachen ist auf den Warenwert begrenzt.</p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#F6F4EA] uppercase tracking-tight mb-4">7. Zahlungsbedingungen</h2>
              <p>Rechnungen sind innert 14 Tagen netto zahlbar. Bei Zahlungsverzug ist Geenie Media berechtigt, weitere Arbeiten am Projekt einzustellen.</p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#F6F4EA] uppercase tracking-tight mb-4">8. Datenschutz</h2>
              <p>Es gilt die separate Datenschutzerklärung, die integrierter Bestandteil dieser AGB ist.</p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#F6F4EA] uppercase tracking-tight mb-4">9. Gerichtsstand & Anwendbares Recht</h2>
              <p>Es gilt ausschliesslich Schweizer Recht. Gerichtsstand ist der Sitz von Geenie Media (Muttenz).</p>
            </section>
          </div>
        </div>
      </div>
    </Layout>
  );
}
