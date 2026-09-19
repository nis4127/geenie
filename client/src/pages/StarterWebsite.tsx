import { ArrowDown, ArrowRight, Check, Clock3, Mail, MapPin, Search, Zap } from "lucide-react";
import Layout from "../components/Layout";
import { useSystemCheck } from "../contexts/SystemCheckContext";

const offerMailto = "mailto:info@geenie-media.ch?subject=Anfrage%3A%20Starter-Website%20499%20CHF&body=Hallo%20Geenie%20Media%2C%0A%0Aich%20interessiere%20mich%20f%C3%BCr%20die%20Starter-Website%20f%C3%BCr%20499%20CHF.%0A%0AName%3A%20%0AFirma%3A%20%0ATelefon%3A%20%0A%0AFreundliche%20Gr%C3%BCsse";

const included = [
  "Die Digitale Visitenkarte: Eine perfekt strukturierte Seite (One-Pager) mit all deinen Leistungen, Über-uns-Bereich und Kontakt.",
  "High-Performance Technik: Superschnelles Hosting im Hintergrund (kein langsames WordPress oder starrer Baukasten).",
  "Google-Ready (Basic SEO): Sauber programmiert, damit du lokal gefunden wirst.",
  "Kontakt- & Maps-Integration: Kunden finden direkt zu dir und können per Klick anrufen.",
  "Keine laufenden Agentur-Kosten: Du zahlst nur die minimalen, regulären Hosting-/Domainkosten.",
];

const steps = [
  ["01", "Inhalt schicken", "Logo, Bilder und Stichworte digital an uns senden."],
  ["02", "Wir bauen das System", "Wir setzen deine Inhalte in unser High-Performance-Setup."],
  ["03", "Live gehen", "Nach deiner kurzen Freigabe ist deine Website online."],
];

export default function StarterWebsite() {
  const { openSystemCheck } = useSystemCheck();

  return (
    <Layout>
      <div className="relative overflow-hidden pb-16 sm:pb-0">
        <section className="border-b border-[#242832] px-6 pb-20 pt-16 sm:pb-28 sm:pt-24 lg:px-12 lg:pb-36 lg:pt-28">
          <div className="container mx-auto">
            <div className="grid max-w-7xl items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">
              <div>
                <div className="mb-7 flex items-center gap-3 text-xs font-mono font-bold uppercase tracking-[0.2em] text-[#DEFF9A]">
                  <span className="h-2 w-2 bg-[#DEFF9A]" />
                  Starter-Website / Festpreis
                </div>
                <h1 className="max-w-4xl text-5xl font-bold leading-[0.9] tracking-[-0.055em] text-[#F6F4EA] sm:text-7xl lg:text-[6.4rem]">
                  Das digitale Fundament für <span className="text-[#DEFF9A]">499.– CHF.</span>
                </h1>
                <div className="mt-7 flex flex-wrap gap-x-4 gap-y-2 font-mono text-[11px] font-bold uppercase tracking-[0.12em] text-[#DEFF9A] sm:text-xs">
                  <span>Live in 7 Tagen</span><span className="text-slate-600">•</span><span>Keine versteckten Abo-Kosten</span><span className="text-slate-600">•</span><span>100% High-Performance</span>
                </div>
                <p className="mt-7 max-w-2xl text-xl font-medium leading-relaxed text-slate-300 sm:text-2xl">
                  Kein Baukasten-Frust. Keine Agentur-Mondpreise. Deine neue Website in 7 Tagen.
                </p>
                <p className="mt-5 max-w-2xl text-base leading-relaxed text-slate-400 sm:text-lg">
                  Die meisten Handwerker und regionalen Betriebe brauchen keine riesige Website mit 20 Unterseiten. Sie brauchen eine Plattform, die extrem schnell lädt, auf dem Handy perfekt aussieht und aus Besuchern echte Anfragen macht. Genau das liefern wir.
                </p>
                <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
                  <a href={offerMailto} className="inline-flex min-h-12 items-center justify-center gap-3 bg-[#DEFF9A] px-7 py-4 font-mono text-sm font-bold uppercase tracking-wider text-[#050505] transition-transform hover:bg-[#cbf47d] active:scale-[0.98]">
                    Jetzt Starter-Website anfragen <ArrowRight className="h-4 w-4" />
                  </a>
                  <a href="#vergleich" className="inline-flex min-h-12 items-center justify-center gap-2 px-4 py-3 font-mono text-xs font-bold uppercase tracking-widest text-slate-400 transition-colors hover:text-[#DEFF9A]">
                    System verstehen <ArrowDown className="h-4 w-4" />
                  </a>
                </div>
              </div>

              <div className="space-y-7">
                <div className="relative border border-[#DEFF9A] bg-[#111318] p-7 sm:p-10">
                  <div className="absolute -right-px -top-px h-16 w-16 border-l border-b border-[#DEFF9A]" />
                  <div className="mb-8 flex items-center justify-between text-xs font-mono uppercase tracking-widest text-slate-500">
                    <span>System 01</span><span className="text-[#DEFF9A]">Ready to launch</span>
                  </div>
                  <div className="text-[5.5rem] font-bold leading-none tracking-[-0.09em] text-[#F6F4EA] sm:text-[7rem]">499.–</div>
                  <div className="mt-3 font-mono text-base font-bold uppercase tracking-[0.18em] text-[#DEFF9A]">CHF / einmalig</div>
                  <div className="my-8 h-px bg-[#242832]" />
                  <div className="grid gap-4 text-sm text-slate-300">
                    <div className="flex items-center gap-3"><Zap className="h-4 w-4 text-[#DEFF9A]" /> One-Pager für lokale Betriebe</div>
                    <div className="flex items-center gap-3"><Clock3 className="h-4 w-4 text-[#DEFF9A]" /> Umsetzung in 7 Tagen</div>
                    <div className="flex items-center gap-3"><Mail className="h-4 w-4 text-[#DEFF9A]" /> Anfrage ohne Umwege</div>
                  </div>
                </div>

                <div className="border border-[#242832] bg-[#0b0c0e] p-3 sm:p-4">
                  <div className="mb-3 flex items-center gap-2 px-2 text-[10px] font-mono uppercase tracking-widest text-slate-600"><span className="h-2 w-2 rounded-full bg-[#DEFF9A]" /> Beispiel / Handwerker-One-Pager</div>
                  <div className="overflow-hidden border border-[#242832] bg-[#F6F4EA] text-[#111318]">
                    <div className="flex h-7 items-center gap-1 border-b border-[#d7d8d2] bg-[#e8e9e4] px-3"><span className="h-2 w-2 rounded-full bg-[#ff6b6b]" /><span className="h-2 w-2 rounded-full bg-[#ffd166]" /><span className="h-2 w-2 rounded-full bg-[#77dd77]" /><div className="ml-3 h-3 flex-1 bg-white/70" /></div>
                    <div className="grid min-h-[190px] grid-cols-[1.25fr_0.75fr] gap-3 p-4 sm:min-h-[220px] sm:p-6">
                      <div className="flex flex-col justify-between">
                        <div><div className="mb-5 h-2 w-20 bg-[#111318]" /><div className="h-5 w-4/5 bg-[#111318] sm:h-7" /><div className="mt-2 h-5 w-3/5 bg-[#DEFF9A] sm:h-7" /><p className="mt-4 max-w-[190px] text-[9px] leading-relaxed text-slate-500 sm:text-[10px]">Saubere Arbeit. Klare Beratung. Ihr Partner für regionale Projekte.</p></div>
                        <div className="flex items-center gap-2"><div className="bg-[#111318] px-3 py-2 text-[8px] font-bold text-[#F6F4EA]">Kontakt aufnehmen</div><MapPin className="h-4 w-4 text-[#111318]" /></div>
                      </div>
                      <div className="relative overflow-hidden bg-[#242832]"><div className="absolute inset-0 bg-gradient-to-br from-[#687263] via-[#3f493c] to-[#111318]" /><div className="absolute bottom-3 left-3 right-3 flex items-end justify-between"><span className="text-[8px] font-bold text-white">MÜLLER & SOHN</span><Search className="h-4 w-4 text-[#DEFF9A]" /></div></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="vergleich" className="border-b border-[#242832] px-6 py-24 sm:py-32 lg:px-12 lg:py-40">
          <div className="container mx-auto max-w-7xl">
            <div className="mb-14 max-w-2xl"><span className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-[#DEFF9A]">01 / Warum so günstig?</span><h2 className="mt-5 text-4xl font-bold leading-tight tracking-[-0.04em] sm:text-5xl">Kein Rabatt. Ein besseres System.</h2></div>
            <div className="grid border-y border-[#242832] md:grid-cols-2">
              <div className="border-b border-[#242832] p-7 sm:p-10 md:border-b-0 md:border-r"><div className="mb-10 flex items-center justify-between font-mono text-xs uppercase tracking-widest text-slate-500"><span>Klassische Agentur</span><span>Oft 4'000+ CHF</span></div><div className="space-y-4 text-slate-400"><div className="flex gap-3"><span className="text-slate-600">—</span> Lange Konzeptphasen</div><div className="flex gap-3"><span className="text-slate-600">—</span> Komplexe Pakete und Zusatzkosten</div><div className="flex gap-3"><span className="text-slate-600">—</span> Schwerfällige Baukasten-Technik</div></div></div>
              <div className="bg-[#111318] p-7 sm:p-10"><div className="mb-10 flex items-center justify-between font-mono text-xs uppercase tracking-widest text-[#DEFF9A]"><span>Geenie System</span><span>499.– CHF</span></div><div className="space-y-4 text-[#F6F4EA]"><div className="flex gap-3"><Check className="h-5 w-5 shrink-0 text-[#DEFF9A]" /> Klarer One-Pager-Fokus</div><div className="flex gap-3"><Check className="h-5 w-5 shrink-0 text-[#DEFF9A]" /> Fixer Preis, live in 7 Tagen</div><div className="flex gap-3"><Check className="h-5 w-5 shrink-0 text-[#DEFF9A]" /> Ultraschnelles High-Performance-Setup</div></div></div>
            </div>
          </div>
        </section>

        <section id="system" className="border-b border-[#242832] px-6 py-24 sm:py-32 lg:px-12 lg:py-40">
          <div className="container mx-auto grid max-w-7xl gap-14 lg:grid-cols-[0.7fr_1.3fr] lg:gap-28"><div><span className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-[#DEFF9A]">02 / Das System</span><h2 className="mt-5 max-w-md text-4xl font-bold leading-tight tracking-[-0.04em] sm:text-5xl">Alles, was du brauchst. Nichts, was du nicht brauchst.</h2></div><div className="max-w-3xl"><p className="text-xl leading-relaxed text-[#F6F4EA] sm:text-2xl">Wir erfinden das Rad nicht jedes Mal neu. Statt wochenlanger Konzeptphasen nutzen wir unser bewährtes High-Performance-Setup.</p><p className="mt-7 text-base leading-relaxed text-slate-400 sm:text-lg">Du bekommst eine „Digitale Visitenkarte“, die technisch auf dem neuesten Stand ist – zu einem festen Preis. Ohne versteckte Kosten.</p></div></div>
        </section>

        <section className="border-b border-[#242832] px-6 py-24 sm:py-32 lg:px-12 lg:py-40"><div className="container mx-auto grid max-w-7xl gap-14 lg:grid-cols-[0.7fr_1.3fr] lg:gap-28"><div><span className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-[#DEFF9A]">03 / Leistungsumfang</span><h2 className="mt-5 max-w-md text-4xl font-bold leading-tight tracking-[-0.04em] sm:text-5xl">Was ist für 499.– CHF drin?</h2></div><div className="divide-y divide-[#242832] border-y border-[#242832]">{included.map((item) => <div key={item} className="flex gap-5 py-7 text-base leading-relaxed text-slate-300 sm:text-lg"><Check className="mt-1 h-5 w-5 shrink-0 text-[#DEFF9A]" strokeWidth={3} /><span>{item}</span></div>)}</div></div></section>

        <section className="border-b border-[#242832] px-6 py-24 sm:py-32 lg:px-12 lg:py-40"><div className="container mx-auto max-w-7xl"><div className="mb-14 max-w-2xl"><span className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-[#DEFF9A]">04 / Ablauf</span><h2 className="mt-5 text-4xl font-bold leading-tight tracking-[-0.04em] sm:text-5xl">In drei Schritten online.</h2></div><div className="grid gap-px border border-[#242832] bg-[#242832] md:grid-cols-3">{steps.map(([number, title, text]) => <div key={number} className="bg-[#050505] p-7 sm:p-9"><div className="mb-14 font-mono text-sm font-bold text-[#DEFF9A]">{number}</div><h3 className="text-2xl font-bold tracking-[-0.03em]">{title}</h3><p className="mt-4 text-sm leading-relaxed text-slate-400">{text}</p></div>)}</div><div className="mt-12 flex flex-col gap-3 sm:flex-row"><a href={offerMailto} className="inline-flex min-h-12 items-center justify-center gap-3 bg-[#DEFF9A] px-7 py-4 font-mono text-sm font-bold uppercase tracking-wider text-[#050505] transition-colors hover:bg-[#cbf47d]">Starter-Website anfragen <ArrowRight className="h-4 w-4" /></a><button onClick={openSystemCheck} className="inline-flex min-h-12 items-center justify-center gap-3 border border-[#242832] px-7 py-4 font-mono text-sm font-bold uppercase tracking-wider text-[#F6F4EA] transition-colors hover:border-[#DEFF9A] hover:text-[#DEFF9A]">15-Minuten System-Check buchen <ArrowRight className="h-4 w-4" /></button></div></div></section>

        <section className="px-6 py-12 lg:px-12 lg:py-16"><div className="container mx-auto max-w-7xl"><p className="max-w-5xl text-[11px] leading-relaxed text-slate-500">Angebot gilt für eine standardisierte One-Pager-Website auf Basis unserer performanten Vorlagen. Texte, Logo und Bildmaterial werden vom Kunden digital angeliefert. Erweiterungen wie zusätzliche Unterseiten, komplexes Tracking oder Google-Ads-Kampagnen sind nicht im Preis inbegriffen, können aber jederzeit modular hinzugebucht werden.</p></div></section>
      </div>

      <div className="fixed inset-x-0 bottom-0 z-40 border-t border-[#242832] bg-[#050505]/95 p-3 backdrop-blur-sm sm:hidden"><a href={offerMailto} className="flex min-h-12 items-center justify-center gap-2 bg-[#DEFF9A] px-4 py-3 font-mono text-xs font-bold uppercase tracking-wider text-[#050505]">499.– CHF anfragen <ArrowRight className="h-4 w-4" /></a></div>
    </Layout>
  );
}
