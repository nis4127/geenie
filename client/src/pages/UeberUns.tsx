import React, { useState } from "react";
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

export default function UeberUns() {
  const [systemCheckOpen, setSystemCheckOpen] = useState(false);

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
    <Layout onSystemCheckOpen={() => setSystemCheckOpen(true)}>
      <div className="flex flex-col bg-[#050505]">
        {/* HERO SECTION */}
        <section className="relative py-24 lg:py-32 overflow-hidden border-b border-[#242832]">
          <div className="absolute inset-0 opacity-20 mix-blend-screen pointer-events-none">
            <img 
              src="/assets/bg-hero.png" 
              alt="Hero Background" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
              <h1 className="font-sans font-bold text-4xl sm:text-5xl lg:text-7xl tracking-tight leading-tight mb-8">
                Warum Sie bei Geenie Media <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFD400] via-[#DEFF9A] to-[#1B6BFF]">
                  genau richtig sind.
                </span>
              </h1>
              <p className="text-lg sm:text-xl lg:text-2xl text-[#94A3B8] leading-relaxed max-w-3xl mb-12">
                Sie suchen keine weitere Marketing-Agentur. Sie suchen jemanden, der Verantwortung übernimmt und Projekte zuverlässig zum Erfolg führt.
              </p>
              <Link href="/projektanfrage">
                <a className="bg-[#DEFF9A] hover:bg-[#cbf47d] text-[#050505] px-10 py-5 rounded-xl font-mono font-bold flex items-center justify-center gap-3 transition-all active:scale-[0.98] shadow-xl">
                  Projekt anfragen <ArrowRight className="w-5 h-5" />
                </a>
              </Link>
            </div>
          </div>
        </section>

        {/* ABSCHNITT 1: Fokus */}
        <section className="py-24 border-b border-[#242832] relative overflow-hidden">
          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <span className="text-xs font-mono text-[#DEFF9A] tracking-widest uppercase font-bold">Ihre Entlastung</span>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-sans font-bold mt-4 leading-tight">
                  Ihr Fokus bleibt Ihr Unternehmen. <br />
                  <span className="text-[#DEFF9A]">Den Rest übernehmen wir.</span>
                </h2>
              </div>
              <div className="space-y-6 text-slate-400 text-lg leading-relaxed">
                <p>
                  Viele KMU verlieren wertvolle Zeit mit der Koordination verschiedener Agenturen, Designer, Druckereien oder Freelancer.
                </p>
                <p>
                  Briefings müssen geschrieben werden. Termine abgestimmt. Korrekturen verfolgt. Qualität kontrolliert. 
                  <span className="text-[#F6F4EA] font-medium block mt-4">Genau diese Verantwortung übernehmen wir.</span>
                </p>
                <p>
                  Sie konzentrieren sich auf Ihr Unternehmen. Wir kümmern uns um die Umsetzung.
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
                  <div className="absolute -inset-1 bg-gradient-to-r from-[#DEFF9A] to-[#1B6BFF] rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
                  <div className="relative aspect-[4/5] rounded-2xl overflow-hidden border border-[#242832]">
                    <img 
                      src="/assets/portrait-yannis.webp" 
                      alt="Yannis K. Denzler" 
                      className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
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
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-[#111318] p-10 rounded-2xl border border-[#242832] hover:border-[#DEFF9A] transition-all duration-300 group">
                  <div className="mb-6 transform group-hover:scale-110 transition-transform duration-300">{benefit.icon}</div>
                  <h3 className="text-xl font-bold mb-4 text-[#F6F4EA]">{benefit.title}</h3>
                  <p className="text-slate-400 leading-relaxed text-sm">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ABSCHNITT 4: Ihr Vorteil */}
        <section className="py-24 bg-[#050505] relative overflow-hidden">
          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-4xl mx-auto bg-[#111318] border border-[#242832] rounded-3xl p-10 sm:p-16 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#DEFF9A] opacity-5 blur-3xl -mr-32 -mt-32 rounded-full"></div>
              
              <div className="relative z-10">
                <span className="text-xs font-mono text-[#DEFF9A] tracking-widest uppercase font-bold mb-4 block">Zusammenfassung</span>
                <h2 className="text-3xl sm:text-4xl font-sans font-bold mb-8">Ihr entscheidender Vorteil</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                  <div className="space-y-4">
                    <p className="text-slate-400 text-lg leading-relaxed">
                      Sie erhalten die Betreuung einer eigenen Marketing-Abteilung. Mit einem entscheidenden Unterschied:
                    </p>
                    <ul className="space-y-3">
                      {["Sie müssen niemanden führen", "Keine Prozesse koordinieren", "Keine Dienstleister organisieren", "Keine Qualität kontrollieren"].map((item, i) => (
                        <li key={i} className="flex items-center gap-3 text-slate-300 text-sm">
                          <CheckCircle2 className="w-4 h-4 text-[#DEFF9A] shrink-0" /> {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="flex flex-col justify-center border-l border-[#242832] pl-12 hidden md:flex">
                    <p className="text-xl font-medium text-[#F6F4EA] leading-relaxed italic">
                      "Sie haben einen Ansprechpartner. Wir kümmern uns um den Rest."
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CALL TO ACTION */}
        <section className="py-24 bg-[#111318] relative overflow-hidden border-t border-[#242832]">
          <div className="absolute inset-0 opacity-20 mix-blend-screen pointer-events-none">
            <img 
              src="/assets/bg-cta.png" 
              alt="CTA Background" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-4xl mx-auto bg-[#DEFF9A] rounded-3xl p-10 sm:p-16 text-[#050505] text-center relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-20 blur-3xl -mr-32 -mt-32 rounded-full"></div>
              
              <div className="relative z-10">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-sans font-bold tracking-tight mb-6">
                  Lassen Sie uns Ihr nächstes Projekt gemeinsam realisieren.
                </h2>
                <p className="text-lg font-medium mb-10 max-w-xl mx-auto opacity-80">
                  Erzählen Sie uns von Ihrem Vorhaben. Wir zeigen Ihnen, wie daraus eine professionelle Lösung wird.
                </p>
                <Link href="/projektanfrage">
                  <a className="bg-[#050505] text-[#DEFF9A] hover:bg-[#111318] px-10 py-5 rounded-xl font-mono font-bold flex items-center justify-center gap-3 transition-all active:scale-[0.98] shadow-xl">
                    Projekt-Anfrage starten <ArrowRight className="w-5 h-5" />
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
