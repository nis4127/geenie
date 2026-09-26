import type { ReactNode } from "react";
import Layout from "../components/Layout";

const sections = [
  ["1", "Geltungsbereich und Vertragspartner"],
  ["2", "Angebot, Vertragsabschluss und Rangfolge"],
  ["3", "Leistungen und Leistungsumfang"],
  ["4", "Starter-Website und standardisierte Angebote"],
  ["5", "Mitwirkungspflichten des Kunden"],
  ["6", "Termine, Verzögerungen und höhere Gewalt"],
  ["7", "Änderungswünsche und Zusatzleistungen"],
  ["8", "Abnahme und Gewährleistung"],
  ["9", "Hosting, Domains und Drittanbieter"],
  ["10", "Suchmaschinen, Werbung und messbare Ergebnisse"],
  ["11", "Printprodukte"],
  ["12", "Preise, Rechnungen und Zahlungsverzug"],
  ["13", "Kündigung und Projektabbruch"],
  ["14", "Urheberrecht und Nutzungsrechte"],
  ["15", "Vom Kunden bereitgestellte Inhalte und Rechte Dritter"],
  ["16", "Referenznutzung"],
  ["17", "Vertraulichkeit und Datenschutz"],
  ["18", "Haftung"],
  ["19", "Änderungen der AGB"],
  ["20", "Schlussbestimmungen"],
] as const;

interface TermsSectionProps {
  number: string;
  title: string;
  children: ReactNode;
}

function TermsSection({ number, title, children }: TermsSectionProps) {
  return (
    <section id={`abschnitt-${number}`} className="scroll-mt-32 border-t border-[#242832] pt-8 sm:pt-10">
      <div className="mb-5 flex items-start gap-4">
        <span className="mt-1 shrink-0 font-mono text-xs font-bold tracking-[0.18em] text-[#DEFF9A]">
          §{number.padStart(2, "0")}
        </span>
        <h2 className="text-xl font-bold leading-tight tracking-tight text-[#F6F4EA] sm:text-2xl">
          {title}
        </h2>
      </div>
      <div className="space-y-4 pl-0 leading-relaxed text-slate-400 sm:pl-12">{children}</div>
    </section>
  );
}

export default function Agb() {
  return (
    <Layout>
      <div className="bg-[#050505] py-20 sm:py-24 lg:py-32">
        <div className="container mx-auto max-w-5xl px-6 lg:px-12">
          <header className="max-w-5xl border-b border-[#242832] pb-12 sm:pb-16">
            <span className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-[#DEFF9A]">
              Rechtliches · Version 1.0
            </span>
            <h1 className="mt-5 text-3xl font-bold uppercase leading-[0.95] tracking-tight text-[#F6F4EA] sm:text-5xl lg:text-6xl">
              <span className="block">Allgemeine</span>
              <span className="block sm:hidden">Geschäfts-</span>
              <span className="block sm:hidden">bedingungen.</span>
              <span className="hidden sm:block">Geschäftsbedingungen.</span>
            </h1>
            <p className="mt-7 max-w-2xl text-base leading-relaxed text-slate-400 sm:text-lg">
              Diese AGB regeln die Zusammenarbeit mit Geenie Media bei Webdesign, Starter-Websites,
              digitalen Systemen, Strategie und Consulting sowie Printleistungen.
            </p>
            <p className="mt-5 font-mono text-xs uppercase tracking-[0.16em] text-slate-500">
              Gültig ab 26. September 2026
            </p>
          </header>

          <nav aria-label="Inhaltsverzeichnis der AGB" className="border-b border-[#242832] py-10 sm:py-12">
            <p className="mb-6 font-mono text-xs font-bold uppercase tracking-[0.18em] text-[#DEFF9A]">
              Inhaltsverzeichnis
            </p>
            <ol className="grid gap-x-10 gap-y-3 text-sm text-slate-400 sm:grid-cols-2">
              {sections.map(([number, title]) => (
                <li key={number}>
                  <a
                    href={`#abschnitt-${number}`}
                    className="group flex min-h-11 items-start gap-3 py-2 transition-colors hover:text-[#DEFF9A] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#DEFF9A]"
                  >
                    <span className="font-mono text-xs text-slate-600 transition-colors group-hover:text-[#DEFF9A]">
                      {number.padStart(2, "0")}
                    </span>
                    <span>{title}</span>
                  </a>
                </li>
              ))}
            </ol>
          </nav>

          <div className="space-y-12 pt-12 text-[15px] font-medium sm:space-y-16 sm:pt-16 sm:text-base">
            <TermsSection number="1" title="Geltungsbereich und Vertragspartner">
              <p>1. Diese Allgemeinen Geschäftsbedingungen («AGB») gelten für sämtliche Verträge über Dienstleistungen und Lieferungen von Geenie Media, Yannis Denzler, Pestalozzistrasse 68a, 4132 Muttenz, Schweiz («Geenie Media»).</p>
              <p>2. Sie gelten insbesondere für Webdesign und Webentwicklung, standardisierte Starter-Websites, Strategie- und Beratungsleistungen, Grafik- und Markenarbeiten, digitale Systeme, Hosting-nahe Leistungen sowie Printprodukte.</p>
              <p>3. Die Angebote von Geenie Media richten sich primär an Unternehmen, Selbstständige, Vereine und andere gewerblich handelnde Kunden. Soweit ein Kunde als Konsument handelt, bleiben zwingende gesetzliche Bestimmungen vorbehalten.</p>
              <p>4. Abweichende Bedingungen des Kunden gelten nur, wenn Geenie Media ihnen ausdrücklich in Textform zugestimmt hat.</p>
            </TermsSection>

            <TermsSection number="2" title="Angebot, Vertragsabschluss und Rangfolge">
              <p>1. Ein Vertrag kommt zustande, sobald der Kunde eine Offerte, Auftragsbestätigung oder sonstige Leistungsvereinbarung von Geenie Media in Textform annimmt. Als Textform gelten insbesondere E-Mail und digital bestätigte Dokumente.</p>
              <p>2. Individuelle Offerten, Auftragsbestätigungen und Projektverträge gehen diesen AGB vor, soweit sie ausdrücklich abweichende Regelungen enthalten.</p>
              <p>3. Angebote sind während der darin genannten Frist verbindlich. Fehlt eine Frist, kann Geenie Media das Angebot bis zur Annahme jederzeit ändern oder zurückziehen.</p>
              <p>4. Angaben auf der Website, in Präsentationen oder in Werbemitteln sind unverbindlich, sofern sie nicht ausdrücklich Bestandteil einer individuellen Offerte geworden sind.</p>
            </TermsSection>

            <TermsSection number="3" title="Leistungen und Leistungsumfang">
              <p>1. Art und Umfang der geschuldeten Leistungen ergeben sich aus der jeweiligen Offerte oder Auftragsbestätigung. Nur ausdrücklich aufgeführte Leistungen sind im vereinbarten Preis enthalten.</p>
              <p>2. Geenie Media erbringt die vereinbarten Leistungen mit branchenüblicher Sorgfalt. Ein bestimmter wirtschaftlicher Erfolg wird nur geschuldet, wenn dies ausdrücklich schriftlich vereinbart wurde.</p>
              <p>3. Konzepte, Entwürfe, Zwischenstände, Prototypen und Vorschläge dienen der Projektentwicklung. Sie gelten nicht als zugesicherte Endleistung, solange sie nicht ausdrücklich freigegeben oder als Endprodukt bezeichnet wurden.</p>
              <p>4. Geenie Media darf zur Leistungserbringung geeignete Mitarbeitende, Freelancer und andere Erfüllungsgehilfen einsetzen.</p>
            </TermsSection>

            <TermsSection number="4" title="Starter-Website und standardisierte Angebote">
              <p>1. Das Angebot «Starter-Website für CHF 499.–» umfasst eine standardisierte One-Pager-Website auf Basis der von Geenie Media vorgesehenen performanten Vorlagen. Der konkrete Inhalt ergibt sich aus der jeweils gültigen Leistungsbeschreibung und Offerte.</p>
              <p>2. Der Kunde liefert Texte, Logo, Bilder, Kontaktangaben und weitere benötigte Inhalte vollständig und in digital verwertbarer Form. Redaktion, professionelle Fotografie, Logoentwicklung und umfassendes Copywriting sind nur enthalten, wenn dies ausdrücklich vereinbart wurde.</p>
              <p>3. Zusätzliche Unterseiten, individuelle Funktionen, komplexes Tracking, Shop-Funktionen, Schnittstellen, Mehrsprachigkeit, Google-Ads-Kampagnen und andere Erweiterungen sind nicht im Grundpreis enthalten. Sie können separat offeriert werden.</p>
              <p>4. Die kommunizierte Umsetzungszeit von sieben Tagen beginnt erst, wenn alle benötigten Inhalte, Zugänge, Freigaben und eine allfällig vereinbarte Akontozahlung vollständig vorliegen. Sie ist eine Zielangabe, sofern sie nicht ausdrücklich als verbindlicher Termin bestätigt wurde.</p>
              <p>5. Reguläre Domain-, Hosting- und Drittanbieterkosten sind nicht im einmaligen Erstellungspreis enthalten, sofern die Offerte nichts anderes bestimmt.</p>
            </TermsSection>

            <TermsSection number="5" title="Mitwirkungspflichten des Kunden">
              <p>1. Der Kunde stellt alle für das Projekt benötigten Inhalte, Informationen, Zugänge und Entscheidungen rechtzeitig, vollständig und in geeigneter Qualität zur Verfügung.</p>
              <p>2. Der Kunde benennt eine entscheidungsberechtigte Kontaktperson und prüft Entwürfe, Rückfragen und Freigaben innerhalb angemessener Frist.</p>
              <p>3. Verzögerungen, die durch fehlende Inhalte, verspätete Rückmeldungen, nachträgliche Änderungswünsche oder nicht funktionierende Kundenzugänge entstehen, verschieben vereinbarte Termine entsprechend. Daraus entstehen keine Verzugsansprüche gegen Geenie Media.</p>
              <p>4. Bleibt eine erforderliche Mitwirkung trotz Erinnerung länger als 30 Tage aus, darf Geenie Media das Projekt pausieren, den bis dahin erbrachten Aufwand abrechnen und für die spätere Wiederaufnahme einen neuen Zeitplan festlegen.</p>
              <p>5. Der Kunde ist für die fachliche, sprachliche und rechtliche Prüfung seiner Inhalte verantwortlich. Dies gilt insbesondere für Preise, Leistungsversprechen, Kontaktangaben, Pflichtinformationen und branchenspezifische Aussagen.</p>
            </TermsSection>

            <TermsSection number="6" title="Termine, Verzögerungen und höhere Gewalt">
              <p>1. Termine und Lieferfristen sind nur verbindlich, wenn sie ausdrücklich als verbindlich bestätigt wurden.</p>
              <p>2. Lieferfristen verlängern sich angemessen, wenn der Kunde seine Mitwirkungspflichten nicht rechtzeitig erfüllt oder nachträgliche Änderungen verlangt.</p>
              <p>3. Für Verzögerungen aufgrund höherer Gewalt oder anderer Ereignisse ausserhalb des zumutbaren Einflussbereichs haftet Geenie Media nicht. Dazu gehören insbesondere erhebliche Ausfälle von Hosting-, Cloud-, Telekommunikations- oder Drittanbieterdiensten, behördliche Massnahmen, Arbeitsausfälle und Lieferengpässe.</p>
              <p>4. Ist eine Leistung dauerhaft unmöglich, informieren sich die Parteien gegenseitig und rechnen die bis dahin ordnungsgemäss erbrachten Leistungen sowie nicht stornierbare Drittleistungen ab.</p>
            </TermsSection>

            <TermsSection number="7" title="Änderungswünsche und Zusatzleistungen">
              <p>1. Änderungswünsche, die über den vereinbarten Leistungsumfang hinausgehen, werden als Zusatzleistung behandelt.</p>
              <p>2. Geenie Media informiert den Kunden nach Möglichkeit vorab über die Auswirkungen auf Preis und Zeitplan. Zusatzleistungen werden nach separater Offerte oder nach dem vereinbarten Stundensatz verrechnet.</p>
              <p>3. Inbegriffene Korrekturschleifen ergeben sich aus der Offerte. Ohne ausdrückliche Regelung ist eine zusammengefasste Korrekturrunde pro klar abgegrenztem Entwurf enthalten.</p>
              <p>4. Bereits freigegebene oder umgesetzte Inhalte, Konzepte und Funktionen gelten bei späteren Änderungswünschen als Zusatzaufwand.</p>
            </TermsSection>

            <TermsSection number="8" title="Abnahme und Gewährleistung">
              <p>1. Nach Fertigstellung stellt Geenie Media die Leistung zur Prüfung bereit. Der Kunde meldet erkennbare Mängel innerhalb von zehn Arbeitstagen in Textform und beschreibt sie nachvollziehbar.</p>
              <p>2. Erfolgt innerhalb dieser Frist keine begründete Mängelmeldung, gilt die Leistung als abgenommen. Die produktive Nutzung, Veröffentlichung oder vorbehaltlose Bezahlung gilt ebenfalls als Abnahme.</p>
              <p>3. Ein Mangel liegt vor, wenn die Leistung erheblich von der schriftlich vereinbarten Beschaffenheit abweicht. Geschmacksfragen, neue Wünsche oder Einschränkungen, die auf späteren Änderungen von Browsern, Betriebssystemen oder Drittanbietern beruhen, gelten nicht automatisch als Mangel.</p>
              <p>4. Bei einem von Geenie Media zu vertretenden Mangel erhält Geenie Media zuerst eine angemessene Möglichkeit zur Nachbesserung. Weitere gesetzliche Rechte bleiben vorbehalten.</p>
              <p>5. Nach der Abnahme sind Wartung, Inhaltsänderungen, technische Aktualisierungen, Backups und Support nur geschuldet, wenn dafür eine separate Vereinbarung besteht.</p>
            </TermsSection>

            <TermsSection number="9" title="Hosting, Domains und Drittanbieter">
              <p>1. Leistungen von Hostinganbietern, Domainregistraren, E-Mail-Diensten, Analyseplattformen, Kartenanbietern, Werbenetzwerken, Stockmedien, Schriftanbietern, Plugins, APIs und anderen Drittanbietern unterliegen zusätzlich deren Bedingungen und Verfügbarkeiten.</p>
              <p>2. Geenie Media haftet nicht für Ausfälle, Sicherheitslücken, Preisänderungen, Funktionsänderungen oder die Einstellung von Drittleistungen, soweit diese ausserhalb des zumutbaren Einflussbereichs von Geenie Media liegen.</p>
              <p>3. Wiederkehrende Drittanbieter-, Domain- und Hostingkosten trägt der Kunde, sofern die Offerte nichts anderes bestimmt. Preisänderungen der jeweiligen Anbieter dürfen weiterverrechnet werden.</p>
              <p>4. Der Kunde ist für die sichere Aufbewahrung seiner Zugangsdaten verantwortlich. Zugänge dürfen nur an berechtigte Personen weitergegeben werden.</p>
              <p>5. Ein Umzug, eine Datenmigration oder die Übergabe von technischen Systemen ist nur enthalten, wenn dies ausdrücklich vereinbart wurde. Zusätzlicher Aufwand darf separat verrechnet werden.</p>
            </TermsSection>

            <TermsSection number="10" title="Suchmaschinen, Werbung und messbare Ergebnisse">
              <p>1. Geenie Media kann technische Grundlagen für Suchmaschinenoptimierung, Tracking oder Werbekampagnen umsetzen, soweit diese beauftragt wurden.</p>
              <p>2. Geenie Media schuldet ohne ausdrückliche schriftliche Zusicherung keine bestimmte Position bei Google oder anderen Suchmaschinen und keine bestimmte Anzahl an Aufrufen, Anfragen, Leads, Verkäufen oder Umsätzen.</p>
              <p>3. Ergebnisse können insbesondere von Wettbewerb, Markt, Angebot, Budget, Kundendaten, Plattformregeln und Änderungen von Algorithmen abhängen.</p>
              <p>4. Werbebudgets und direkte Plattformkosten sind nicht im Agenturhonorar enthalten, sofern die Offerte nichts anderes bestimmt.</p>
            </TermsSection>

            <TermsSection number="11" title="Printprodukte">
              <p>1. Der Kunde prüft Druckdaten und Korrekturabzüge vor der Druckfreigabe vollständig. Mit dem «Gut zum Druck» bestätigt er insbesondere die Richtigkeit von Texten, Preisen, Kontaktdaten, Gestaltung, Format und Auflage.</p>
              <p>2. Geenie Media haftet nicht für Fehler, die der Kunde bei der Druckfreigabe hätte erkennen können.</p>
              <p>3. Branchenübliche Abweichungen bei Farbe, Material, Schnitt, Falzung, Verarbeitung und Liefermenge stellen keinen Mangel dar, soweit sie zumutbar sind.</p>
              <p>4. Erkennbare Transportschäden oder Produktionsmängel sind Geenie Media nach Erhalt unverzüglich mit Bildern und einer Beschreibung zu melden. Gesetzliche Rechte bleiben vorbehalten.</p>
              <p>5. Liefertermine von Druckereien und Logistikpartnern sind Richtwerte, soweit sie nicht ausdrücklich garantiert wurden.</p>
            </TermsSection>

            <TermsSection number="12" title="Preise, Rechnungen und Zahlungsverzug">
              <p>1. Sämtliche Preise verstehen sich in Schweizer Franken. Ob die gesetzliche Mehrwertsteuer enthalten ist, ergibt sich aus der jeweiligen Offerte oder Rechnung.</p>
              <p>2. Geenie Media darf eine angemessene Akontozahlung sowie Teilzahlungen nach Projektfortschritt verlangen. Höhe und Fälligkeit ergeben sich aus der Offerte.</p>
              <p>3. Rechnungen sind innert 14 Tagen ab Rechnungsdatum ohne Abzug zahlbar, sofern nichts anderes vereinbart wurde.</p>
              <p>4. Nach Ablauf der Zahlungsfrist gerät der Kunde ohne weitere Mahnung in Verzug. Es gilt der gesetzliche Verzugszins. Angemessene Mahn- und Inkassokosten können zusätzlich in Rechnung gestellt werden, soweit gesetzlich zulässig.</p>
              <p>5. Bei erheblichem Zahlungsverzug darf Geenie Media weitere Arbeiten oder laufende Leistungen nach vorgängiger Ankündigung pausieren. Vereinbarte Termine verschieben sich entsprechend.</p>
              <p>6. Der Kunde darf Forderungen nur mit unbestrittenen oder rechtskräftig festgestellten Gegenforderungen verrechnen.</p>
            </TermsSection>

            <TermsSection number="13" title="Kündigung und Projektabbruch">
              <p>1. Die Laufzeit und Kündigungsfrist wiederkehrender Leistungen ergeben sich aus der jeweiligen Offerte oder Leistungsvereinbarung.</p>
              <p>2. Kündigt der Kunde ein laufendes Projekt vor Abschluss, sind die bis zum Kündigungszeitpunkt erbrachten Leistungen und nicht mehr stornierbaren Drittleistungen zu bezahlen.</p>
              <p>3. Beide Parteien dürfen den Vertrag aus wichtigem Grund kündigen. Ein wichtiger Grund liegt insbesondere vor, wenn die andere Partei trotz schriftlicher Nachfrist wesentliche Vertragspflichten nicht erfüllt.</p>
              <p>4. Nach Vertragsende unterstützt Geenie Media eine vereinbarte Übergabe der vorhandenen Kundendaten und Zugänge. Weitergehende Migrationen, Dokumentationen oder Aufbereitungen werden nach Aufwand verrechnet, sofern sie nicht Bestandteil der Offerte sind.</p>
            </TermsSection>

            <TermsSection number="14" title="Urheberrecht und Nutzungsrechte">
              <p>1. Konzepte, Entwürfe, Designs, Texte, Grafiken, Fotografien, Quellcode und andere Arbeitsergebnisse von Geenie Media sind urheberrechtlich geschützt.</p>
              <p>2. Bis zur vollständigen Bezahlung verbleiben sämtliche Rechte bei Geenie Media. Nach vollständiger Bezahlung erhält der Kunde die in der Offerte vereinbarten Nutzungsrechte für den vereinbarten Zweck.</p>
              <p>3. Ohne abweichende schriftliche Vereinbarung erhält der Kunde am finalen Arbeitsergebnis ein einfaches, zeitlich und räumlich unbeschränktes Nutzungsrecht für den vereinbarten eigenen Geschäftszweck.</p>
              <p>4. Offene Arbeitsdateien, Rohdaten, nicht verwendete Entwürfe, interne Komponenten, Entwicklungswerkzeuge und übertragbare Quellcode-Repositories sind nur geschuldet, wenn dies ausdrücklich vereinbart wurde.</p>
              <p>5. Rechte an Drittsoftware, Open-Source-Komponenten, Schriften, Stockmedien und anderen lizenzierten Bestandteilen richten sich nach den jeweiligen Lizenzbedingungen.</p>
              <p>6. Wiederverwendbare Methoden, Vorlagen, Komponenten und allgemeines Know-how von Geenie Media bleiben unabhängig vom Kundenprojekt bei Geenie Media.</p>
            </TermsSection>

            <TermsSection number="15" title="Vom Kunden bereitgestellte Inhalte und Rechte Dritter">
              <p>1. Der Kunde bestätigt, dass er über alle erforderlichen Rechte an den von ihm gelieferten Texten, Bildern, Logos, Marken, Videos, Daten und sonstigen Inhalten verfügt.</p>
              <p>2. Der Kunde trägt die Verantwortung dafür, dass seine Inhalte keine Rechte Dritter und keine gesetzlichen Vorschriften verletzen.</p>
              <p>3. Wird Geenie Media aufgrund rechtswidriger oder unberechtigt verwendeter Kundeninhalte von Dritten in Anspruch genommen, unterstützt der Kunde die Abwehr und ersetzt Geenie Media die daraus entstehenden angemessenen Kosten, soweit er die Rechtsverletzung zu vertreten hat.</p>
              <p>4. Geenie Media ist nicht verpflichtet, Kundeninhalte umfassend rechtlich zu prüfen. Offensichtlich rechtswidrige oder problematische Inhalte dürfen zurückgewiesen oder bis zur Klärung nicht veröffentlicht werden.</p>
            </TermsSection>

            <TermsSection number="16" title="Referenznutzung">
              <p>1. Geenie Media darf abgeschlossene und öffentlich zugängliche Projekte in angemessener Form als Referenz verwenden. Dies umfasst insbesondere die Nennung des Kundennamens, das Logo, Screenshots, Projektbeschreibung und Verlinkung.</p>
              <p>2. Der Kunde kann der Referenznutzung vor Vertragsabschluss oder aus berechtigtem Grund später in Textform widersprechen.</p>
              <p>3. Ein Hinweis auf Geenie Media im Footer oder Impressum der erstellten Website wird nur angebracht, wenn dies vereinbart wurde oder der Kunde dem nicht widerspricht.</p>
            </TermsSection>

            <TermsSection number="17" title="Vertraulichkeit und Datenschutz">
              <p>1. Beide Parteien behandeln nicht öffentlich bekannte geschäftliche, technische und persönliche Informationen der jeweils anderen Partei vertraulich.</p>
              <p>2. Die Vertraulichkeitspflicht gilt über das Vertragsende hinaus, solange ein berechtigtes Geheimhaltungsinteresse besteht.</p>
              <p>3. Geenie Media bearbeitet Personendaten gemäss der auf der Website veröffentlichten Datenschutzerklärung und dem anwendbaren Schweizer Datenschutzrecht.</p>
              <p>4. Soweit Geenie Media im Auftrag des Kunden Personendaten bearbeitet und eine separate Vereinbarung erforderlich ist, schliessen die Parteien eine Auftragsbearbeitungsvereinbarung ab.</p>
            </TermsSection>

            <TermsSection number="18" title="Haftung">
              <p>1. Geenie Media haftet für Schäden, die vorsätzlich oder grobfahrlässig verursacht wurden. Weitergehende Haftung wird ausgeschlossen, soweit dies gesetzlich zulässig ist.</p>
              <p>2. Soweit gesetzlich zulässig, haftet Geenie Media nicht für indirekte Schäden, Folgeschäden, entgangenen Gewinn, ausgebliebene Einsparungen, Datenverlust oder Ansprüche Dritter.</p>
              <p>3. Für leichte Fahrlässigkeit haftet Geenie Media nur bei Verletzung einer wesentlichen Vertragspflicht und höchstens bis zur Höhe des für den betroffenen Auftrag bezahlten Honorars, soweit gesetzlich zulässig.</p>
              <p>4. Die Haftungsbeschränkungen gelten nicht, soweit zwingendes Recht entgegensteht.</p>
              <p>5. Der Kunde ist für angemessene Sicherungskopien seiner Daten verantwortlich, sofern Backups nicht ausdrücklich als Leistung von Geenie Media vereinbart wurden.</p>
            </TermsSection>

            <TermsSection number="19" title="Änderungen der AGB">
              <p>1. Für einzelne Aufträge gilt grundsätzlich die bei Vertragsabschluss einbezogene Fassung dieser AGB.</p>
              <p>2. Änderungen für laufende Vertragsverhältnisse werden dem Kunden in Textform mitgeteilt. Wesentliche nachteilige Änderungen gelten nur mit Zustimmung des Kunden oder nach Ablauf einer mitgeteilten angemessenen Widerspruchsfrist, sofern dies rechtlich zulässig ist.</p>
            </TermsSection>

            <TermsSection number="20" title="Schlussbestimmungen">
              <p>1. Es gilt schweizerisches Recht unter Ausschluss des Kollisionsrechts.</p>
              <p>2. Ausschliesslicher Gerichtsstand ist Muttenz, soweit kein zwingender gesetzlicher Gerichtsstand entgegensteht.</p>
              <p>3. Sollten einzelne Bestimmungen dieser AGB unwirksam oder undurchsetzbar sein, bleiben die übrigen Bestimmungen davon unberührt. Die Parteien ersetzen die betroffene Regelung durch eine zulässige Regelung, die dem wirtschaftlichen Zweck möglichst nahekommt.</p>
              <p>4. Änderungen und Ergänzungen des Vertrags bedürfen der Textform, soweit nicht zwingendes Recht eine andere Form verlangt.</p>
            </TermsSection>
          </div>

          <aside className="mt-16 border border-[#242832] bg-[#111318] p-6 sm:mt-20 sm:p-8" aria-label="Kontakt zu den AGB">
            <p className="font-mono text-xs font-bold uppercase tracking-[0.18em] text-[#DEFF9A]">Vertragspartner</p>
            <address className="mt-4 not-italic leading-relaxed text-slate-400">
              <strong className="text-[#F6F4EA]">Geenie Media</strong><br />
              Yannis Denzler<br />
              Pestalozzistrasse 68a<br />
              4132 Muttenz, Schweiz<br />
              <a className="transition-colors hover:text-[#DEFF9A]" href="mailto:info@geenie-media.ch">info@geenie-media.ch</a><br />
              UID: CHE-260.224.627
            </address>
          </aside>
        </div>
      </div>
    </Layout>
  );
}
