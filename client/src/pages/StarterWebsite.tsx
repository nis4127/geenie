import { ArrowDown, ArrowRight, Check, Clock3, Mail, Zap } from "lucide-react";
import Layout from "../components/Layout";
import { useSystemCheck } from "../contexts/SystemCheckContext";

const offerMailto = "mailto:info@geenie-media.ch?subject=Anfrage%3A%20Starter-Website%20f%C3%BCr%20499%20CHF&body=Hallo%20Geenie%20Media%2C%0A%0Aich%20interessiere%20mich%20f%C3%BCr%20die%20Starter-Website%20f%C3%BCr%20499%20CHF.%0A%0AName%3A%20%0AFirma%3A%20%0ATelefon%3A%20%0A%0AFreundliche%20Gr%C3%BCsse";

const included = [
  "Die Digitale Visitenkarte: Eine perfekt strukturierte Seite (One-Pager) mit all deinen Leistungen, Über-uns-Bereich und Kontakt.",
  "High-Performance Technik: Superschnelles Hosting im Hintergrund (kein langsames WordPress oder starrer Baukasten).",
  "Google-Ready (Basic SEO): Sauber programmiert, damit du lokal gefunden wirst.",
  "Kontakt- & Maps-Integration: Kunden finden direkt zu dir und können per Klick anrufen.",
  "Keine laufenden Agentur-Kosten: Du zahlst nur die minimalen, regulären Hosting-/Domainkosten.",
];

export default function StarterWebsite() {
  const { openSystemCheck } = useSystemCheck();

  return (
    <Layout>
      <div className="relative overflow-hidden">
        <section className="border-b border-[#242832] px-6 pb-20 pt-20 sm:pb-28 sm:pt-28 lg:px-12 lg:pb-36 lg:pt-36">
          <div className="container mx-auto">
            <div className="grid max-w-7xl items-end gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:gap-24">
              <div>
                <div className="mb-8 flex items-center gap-3 text-xs font-mono font-bold uppercase tracking-[0.2em] text-[#DEFF9A]">
                  <span className="h-2 w-2 bg-[#DEFF9A]" />
                  Starter-Website / Festpreis
                </div>
                <h1 className="max-w-5xl text-5xl font-bold leading-[0.92] tracking-[-0.05em] text-[#F6F4EA] sm:text-7xl lg:text-[7.2rem]">
                  Das digitale Fundament für <span className="text-[#DEFF9A]">499.– CHF.</span>
                </h1>
                <p className="mt-8 max-w-2xl text-xl font-medium leading-relaxed text-slate-300 sm:text-2xl">
                  Kein Baukasten-Frust. Keine Agentur-Mondpreise. Deine neue Website in 7 Tagen.
                </p>
                <p className="mt-6 max-w-2xl text-base leading-relaxed text-slate-400 sm:text-lg">
                  Die meisten Handwerker und regionalen Betriebe brauchen keine riesige Website mit 20 Unterseiten. Sie brauchen eine Plattform, die extrem schnell lädt, auf dem Handy perfekt aussieht und aus Besuchern echte Anfragen macht. Genau das liefern wir.
                </p>
                <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
                  <a href={offerMailto} className="inline-flex items-center justify-center gap-3 bg-[#DEFF9A] px-7 py-4 font-mono text-sm font-bold uppercase tracking-wider text-[#050505] transition-transform hover:bg-[#cbf47d] active:scale-[0.98]">
                    Jetzt Starter-Website anfragen <ArrowRight className="h-4 w-4" />
                  </a>
                  <a href="#system" className="inline-flex items-center justify-center gap-2 px-4 py-3 font-mono text-xs font-bold uppercase tracking-widest text-slate-400 transition-colors hover:text-[#DEFF9A]">
                    Mehr erfahren <ArrowDown className="h-4 w-4" />
                  </a>
                </div>
              </div>

              <div className="relative border border-[#242832] bg-[#111318] p-7 sm:p-10 lg:mb-5">
                <div className="absolute -right-px -top-px h-16 w-16 border-l border-b border-[#DEFF9A]" />
                <div className="mb-14 flex items-center justify-between text-xs font-mono uppercase tracking-widest text-slate-500">
                  <span>System 01</span><span>Ready to launch</span>
                </div>
                <div className="text-7xl font-bold tracking-[-0.07em] text-[#F6F4EA] sm:text-8xl">499.–</div>
                <div className="mt-2 font-mono text-sm uppercase tracking-widest text-[#DEFF9A]">CHF / einmalig</div>
                <div className="my-8 h-px bg-[#242832]" />
                <div className="grid gap-5 text-sm text-slate-300">
                  <div className="flex items-center gap-3"><Zap className="h-4 w-4 text-[#DEFF9A]" /> One-Pager für lokale Betriebe</div>
                  <div className="flex items-center gap-3"><Clock3 className="h-4 w-4 text-[#DEFF9A]" /> Umsetzung in 7 Tagen</div>
                  <div className="flex items-center gap-3"><Mail className="h-4 w-4 text-[#DEFF9A]" /> Direkte Anfrage ohne Umwege</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="system" className="border-b border-[#242832] px-6 py-20 sm:py-28 lg:px-12 lg:py-32">
          <div className="container mx-auto grid max-w-7xl gap-14 lg:grid-cols-[0.7fr_1.3fr] lg:gap-28">
            <div>
              <span className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-[#DEFF9A]">01 / Das System</span>
              <h2 className="mt-5 max-w-md text-4xl font-bold leading-tight sm:text-5xl">Das System dahinter.</h2>
            </div>
            <div className="max-w-3xl">
              <p className="text-xl leading-relaxed text-[#F6F4EA] sm:text-2xl">Wir erfinden das Rad nicht jedes Mal neu. Statt wochenlanger Konzeptphasen nutzen wir unser bewährtes High-Performance-Setup.</p>
              <p className="mt-6 text-base leading-relaxed text-slate-400 sm:text-lg">Du bekommst eine „Digitale Visitenkarte“, die technisch auf dem neuesten Stand ist – zu einem festen Preis. Ohne versteckte Kosten.</p>
            </div>
          </div>
        </section>

        <section className="border-b border-[#242832] px-6 py-20 sm:py-28 lg:px-12 lg:py-32">
          <div className="container mx-auto grid max-w-7xl gap-14 lg:grid-cols-[0.7fr_1.3fr] lg:gap-28">
            <div>
              <span className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-[#DEFF9A]">02 / Leistungsumfang</span>
              <h2 className="mt-5 max-w-md text-4xl font-bold leading-tight sm:text-5xl">Was ist für 499.– CHF drin?</h2>
            </div>
            <div className="divide-y divide-[#242832] border-y border-[#242832]">
              {included.map((item) => (
                <div key={item} className="flex gap-5 py-6 text-base leading-relaxed text-slate-300 sm:text-lg">
                  <Check className="mt-1 h-5 w-5 shrink-0 text-[#DEFF9A]" strokeWidth={3} />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="border-b border-[#242832] px-6 py-20 sm:py-28 lg:px-12 lg:py-32">
          <div className="container mx-auto grid max-w-7xl gap-14 lg:grid-cols-[0.7fr_1.3fr] lg:gap-28">
            <div>
              <span className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-[#DEFF9A]">03 / Ablauf</span>
              <h2 className="mt-5 max-w-md text-4xl font-bold leading-tight sm:text-5xl">Was wir von dir brauchen:</h2>
            </div>
            <div className="max-w-3xl">
              <p className="text-xl leading-relaxed text-[#F6F4EA] sm:text-2xl">Dein Logo, ein paar gute Bilder von deiner Arbeit und Stichworte zu deinem Angebot. Den Rest machen wir.</p>
              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <a href={offerMailto} className="inline-flex items-center justify-center gap-3 bg-[#DEFF9A] px-7 py-4 font-mono text-sm font-bold uppercase tracking-wider text-[#050505] transition-colors hover:bg-[#cbf47d]">
                  Starter-Website anfragen <ArrowRight className="h-4 w-4" />
                </a>
                <button onClick={openSystemCheck} className="inline-flex items-center justify-center gap-3 border border-[#242832] px-7 py-4 font-mono text-sm font-bold uppercase tracking-wider text-[#F6F4EA] transition-colors hover:border-[#DEFF9A] hover:text-[#DEFF9A]">
                  15-Minuten System-Check buchen <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        </section>

        <section className="px-6 py-10 lg:px-12 lg:py-14">
          <div className="container mx-auto max-w-7xl">
            <p className="max-w-5xl text-[11px] leading-relaxed text-slate-600">Angebot gilt für eine standardisierte One-Pager-Website auf Basis unserer performanten Vorlagen. Texte, Logo und Bildmaterial werden vom Kunden digital angeliefert. Erweiterungen wie zusätzliche Unterseiten, komplexes Tracking oder Google-Ads-Kampagnen sind nicht im Preis inbegriffen, können aber jederzeit modular hinzugebucht werden.</p>
          </div>
        </section>
      </div>

      <div className="fixed inset-x-0 bottom-0 z-40 border-t border-[#242832] bg-[#050505]/95 p-3 backdrop-blur-sm sm:hidden">
        <a href={offerMailto} className="flex items-center justify-center gap-2 bg-[#DEFF9A] px-4 py-3 font-mono text-xs font-bold uppercase tracking-wider text-[#050505]">499.– CHF anfragen <ArrowRight className="h-4 w-4" /></a>
      </div>
    </Layout>
  );
}
