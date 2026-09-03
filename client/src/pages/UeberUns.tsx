import React from "react";
import { 
  ArrowRight, 
  CheckCircle2, 
  Clock, 
  Users, 
  TrendingUp, 
  ShieldCheck, 
  Zap,
  BarChart3,
  Globe,
  Briefcase
} from "lucide-react";
import { Link } from "wouter";
import Layout from "../components/Layout";
import { useSystemCheck } from "../contexts/SystemCheckContext";

export default function UeberUns() {
  const { openSystemCheck } = useSystemCheck();

  const benefits = [
    {
      title: "Weniger Koordinationsaufwand",
      description: "Ich koordiniere Designer, Entwickler, Druckereien und Produktionspartner. Sie sprechen mit genau einer Ansprechperson.",
      icon: <Users className="w-6 h-6 text-[#DEFF9A]" />
    },
    {
      title: "Mehr Zeit für Ihr Kerngeschäft",
      description: "Während Ihr Projekt umgesetzt wird, können Sie sich vollständig auf Ihr Unternehmen konzentrieren.",
      icon: <Clock className="w-6 h-6 text-[#1B6BFF]" />
    },
    {
      title: "Qualität aus einem starken Netzwerk",
      description: "Je nach Projekt arbeiten wir mit erfahrenen Spezialisten zusammen. Immer mit einem kompromisslosen Qualitätsanspruch.",
      icon: <ShieldCheck className="w-6 h-6 text-[#FFD400]" />
    },
    {
      title: "Wirtschaftlich gedacht",
      description: "Durch Erfahrung im Einkauf entstehen Lösungen, die nicht nur hochwertig aussehen, sondern auch wirtschaftlich sinnvoll sind.",
      icon: <TrendingUp className="w-6 h-6 text-[#DEFF9A]" />
    },
    {
      title: "Genau die Expertise, die Ihr Projekt braucht",
      description: "Keine Standardlösung. Für jedes Projekt wird genau das passende Netzwerk zusammengestellt.",
      icon: <Zap className="w-6 h-6 text-[#1B6BFF]" />
    }
  ];

  return (
    <Layout>
      <div className="flex flex-col bg-[#050505]">
        {/* HERO SECTION */}
        <section className="relative py-24 lg:py-32 overflow-hidden border-b border-[#242832]">
          <div className="absolute inset-0 opacity-20 mix-blend-screen pointer-events-none">
            <img 
              src="/assets/bg-hero.webp" 
              alt="Hero Background" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
              <h1 className="font-bold text-5xl sm:text-6xl lg:text-8xl tracking-tight leading-[0.9] mb-8 uppercase">
                Warum wir <br />
                <span className="text-[#DEFF9A]">Verantwortung</span> übernehmen.
              </h1>
              <p className="text-lg sm:text-xl lg:text-2xl text-slate-400 leading-relaxed max-w-3xl mb-12 font-medium">
                Geenie Media ist kein Dienstleister für Werbeversprechen. Wir sind die operative Instanz, die dein Unternehmen digital auf Premium-Niveau hebt und dort hält.
              </p>
              <button 
                onClick={openSystemCheck}
                className="bg-[#DEFF9A] hover:bg-[#cbf47d] text-[#050505] px-10 py-5 font-mono font-bold flex items-center justify-center gap-3 transition-all active:scale-[0.98] uppercase tracking-wider"
              >
                System-Check starten <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </section>

        {/* ABSCHNITT 1: Fokus */}
        <section className="py-24 border-b border-[#242832] relative overflow-hidden">
          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <span className="text-xs font-mono text-[#DEFF9A] tracking-widest uppercase font-bold">Ihre Entlastung</span>
                <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mt-4 leading-tight uppercase">
                  Dein Fokus: Wachstum. <br />
                  <span className="text-[#DEFF9A]">Unser Fokus: Das System.</span>
                </h2>
              </div>
              <div className="space-y-8 text-slate-400 text-lg leading-relaxed font-medium">
                <p>
                  KMUs verlieren wertvolle Zeit in der Koordination von Agenturen, Designern und Freelancern. Das Ergebnis ist oft Stückwerk statt System.
                </p>
                <p>
                  Wir eliminieren Reibungsverluste. Wir schreiben die Briefings, wir halten die Termine, wir kontrollieren die Qualität. 
                  <span className="text-[#F6F4EA] font-bold block mt-4 uppercase tracking-tight">Wir sind die einzige Schnittstelle, die du brauchst.</span>
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ABSCHNITT 2: Persönlich & Strategie */}
        <section className="py-24 bg-[#111318] border-b border-[#242832] relative overflow-hidden">
          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-5">
                <div className="relative group">
                  <div className="relative aspect-[4/5] overflow-hidden border border-[#242832] bg-[#111318]">
                    <img 
                      src="/assets/portrait-yannis-optimized.webp" 
                      alt="Yannis K. Denzler" 
                      className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                </div>
              </div>
              <div className="lg:col-span-7 space-y-8">
                <span className="text-xs font-mono text-[#1B6BFF] tracking-widest uppercase font-bold">Über den Gründer</span>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-sans font-bold leading-tight">
                  Strategie trifft <br />Umsetzung.
                </h2>
                <div className="space-y-6 text-slate-400 text-lg leading-relaxed">
                  <p>
                    Mein Name ist <span className="text-[#F6F4EA] font-bold">Yannis K. Denzler</span>. Ich begleite Unternehmen dabei, Marken nicht nur strategisch zu entwickeln, sondern auch konsequent umzusetzen.
                  </p>
                  <p>
                    Von der ersten Idee bis zum fertigen Produkt erhalten Sie einen zentralen Ansprechpartner. Ohne Reibungsverluste. Ohne unnötige Abstimmungen. Ohne zusätzliche Schnittstellen.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ABSCHNITT 3: Benefit Cards */}
        <section className="py-24 border-b border-[#242832] relative overflow-hidden">
          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <span className="text-xs font-mono text-[#FFD400] tracking-widest uppercase font-bold">Ihre Vorteile</span>
              <h2 className="text-3xl sm:text-4xl font-sans font-bold mt-4">Eine Schnittstelle. Alle Möglichkeiten.</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-[#242832] max-w-6xl mx-auto border border-[#242832]">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-[#111318] p-12 transition-all group">
                  <div className="mb-8">{benefit.icon}</div>
                  <h3 className="text-2xl font-bold mb-4 text-[#F6F4EA] uppercase tracking-tight">{benefit.title}</h3>
                  <p className="text-slate-400 leading-relaxed font-medium">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ABSCHNITT 4: Ihr Vorteil */}
        <section className="py-24 bg-[#050505] relative overflow-hidden">
          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-5xl mx-auto bg-[#111318] border border-[#242832] p-12 sm:p-20 relative overflow-hidden">
              <div className="relative z-10">
                <span className="text-xs font-mono text-[#DEFF9A] tracking-widest uppercase font-bold mb-4 block">Zusammenfassung</span>
                <h2 className="text-4xl sm:text-5xl font-bold mb-12 uppercase">Dein System-Vorteil.</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                  <div className="space-y-6">
                    <p className="text-slate-400 text-xl leading-relaxed font-medium">
                      Du erhältst die Schlagkraft einer eigenen Marketing-Abteilung, ohne deren Komplexität.
                    </p>
                    <ul className="space-y-4">
                      {["Keine Personalführung", "Keine Prozess-Koordination", "Kein Dienstleister-Chaos", "Keine Qualitäts-Sorgen"].map((item, i) => (
                        <li key={i} className="flex items-center gap-4 text-[#F6F4EA] font-bold uppercase tracking-tight text-sm">
                          <CheckCircle2 className="w-5 h-5 text-[#DEFF9A] shrink-0" /> {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="flex flex-col justify-center border-l border-[#242832] pl-16 hidden md:flex">
                    <p className="text-2xl font-bold text-[#F6F4EA] leading-tight uppercase italic">
                      "Eine Schnittstelle. <br />Volle Kontrolle. <br />Maximale Wirkung."
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CALL TO ACTION */}
        <section className="py-32 bg-[#111318] relative overflow-hidden border-t border-[#242832]">
          <div className="absolute inset-0 opacity-20 mix-blend-screen pointer-events-none">
            <img 
              src="/assets/bg-cta.webp" 
              alt="CTA Background" 
              className="w-full h-full object-cover"
              loading="lazy"
              decoding="async"
            />
          </div>
          <div className="container mx-auto px-6 relative z-10 text-center">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight mb-8 uppercase leading-[0.9]">
                Bereit für das <br /><span className="text-[#DEFF9A]">nächste Level?</span>
              </h2>
              <p className="text-xl lg:text-2xl font-medium mb-12 max-w-2xl mx-auto text-slate-400">
                Lass uns prüfen, wie wir dein Können in ein digitales System übersetzen, das Premium-Kunden anzieht.
              </p>
              <button 
                onClick={openSystemCheck}
                className="inline-flex bg-[#DEFF9A] hover:bg-[#cbf47d] text-[#050505] px-12 py-6 font-mono font-bold items-center justify-center gap-3 transition-all active:scale-[0.98] uppercase tracking-wider"
              >
                System-Check starten <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
