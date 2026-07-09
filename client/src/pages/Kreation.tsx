import React, { useState } from "react";
import { Link } from "wouter"; 
import { 
  ArrowRight, 
  CheckCircle2, 
  Smartphone,
  Globe,
  Layout as LayoutIcon,
  Maximize,
  Settings,
  Palette,
  CreditCard,
  FileText,
  BookOpen,
  Printer,
  Briefcase,
  Share2,
  Sparkles
} from "lucide-react";
import Layout from "../components/Layout";

export default function Kreation() {
  const [systemCheckOpen, setSystemCheckOpen] = useState(false);
  const digitalServices = [
    {
      title: "Unternehmenswebsites",
      description: "Professionelle Webauftritte, die Ihre Marke digital zum Leben erwecken.",
      icon: <Globe className="w-6 h-6 text-[#DEFF9A]" />
    },
    {
      title: "Landingpages",
      description: "Hochperformante Einzelseiten für maximale Conversion Ihrer Marketing-Kampagnen.",
      icon: <LayoutIcon className="w-6 h-6 text-[#DEFF9A]" />
    },
    {
      title: "Conversion-optimiert",
      description: "Webseiten, die Besucher in Kunden verwandeln – psychologisch und technisch optimiert.",
      icon: <Sparkles className="w-6 h-6 text-[#DEFF9A]" />
    },
    {
      title: "Responsive Umsetzung",
      description: "Perfekte Darstellung auf allen Endgeräten – vom Smartphone bis zum Desktop.",
      icon: <Smartphone className="w-6 h-6 text-[#DEFF9A]" />
    },
    {
      title: "Technische Optimierung",
      description: "Blitzschnelle Ladezeiten und saubere technische Basis für SEO und Performance.",
      icon: <Settings className="w-6 h-6 text-[#DEFF9A]" />
    }
  ];

  const printServices = [
    {
      title: "Corporate Design",
      description: "Ein konsistentes visuelles Erscheinungsbild für Ihre gesamte Marke.",
      icon: <Palette className="w-6 h-6 text-[#1B6BFF]" />
    },
    {
      title: "Visitenkarten",
      description: "Hinterlassen Sie einen bleibenden Eindruck bei jedem physischen Kontakt.",
      icon: <CreditCard className="w-6 h-6 text-[#1B6BFF]" />
    },
    {
      title: "Flyer & Broschüren",
      description: "Hochwertige Printmedien, die Ihre Botschaft greifbar machen.",
      icon: <BookOpen className="w-6 h-6 text-[#1B6BFF]" />
    },
    {
      title: "Geschäftsausstattung",
      description: "Vom Briefpapier bis zum Couvert – alles aus einem Guss.",
      icon: <Briefcase className="w-6 h-6 text-[#1B6BFF]" />
    },
    {
      title: "Druckdaten & Abwicklung",
      description: "Wir erstellen druckfertige Daten und kümmern uns um die Koordination.",
      icon: <Printer className="w-6 h-6 text-[#1B6BFF]" />
    },
    {
      title: "Social Media Grafiken",
      description: "Professionelle Assets für Ihren digitalen Auftritt in sozialen Netzwerken.",
      icon: <Share2 className="w-6 h-6 text-[#1B6BFF]" />
    }
  ];

  return (
    <Layout onSystemCheckOpen={() => setSystemCheckOpen(true)}>
      <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative py-24 lg:py-32 overflow-hidden border-b border-[#242832]">
        <div className="absolute inset-0 opacity-40 mix-blend-screen pointer-events-none">
          <img 
            src="/assets/bg-services.png" 
            alt="Kreation Background" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-[radial-gradient(#242832_1px,transparent_1px)] [background-size:24px_24px] opacity-25 pointer-events-none"></div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#111318] border border-[#DEFF9A] border-opacity-20 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-[#DEFF9A] animate-pulse"></span>
              <span className="text-[10px] font-mono tracking-widest text-[#DEFF9A] uppercase">Sichtbarkeit &bull; Ästhetik &bull; Performance</span>
            </div>

            <h1 className="font-sans font-bold text-4xl sm:text-5xl lg:text-7xl tracking-tight leading-none mb-6">
              Wir machen Qualität <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFD400] via-[#DEFF9A] to-[#1B6BFF]">
                online & offline sichtbar.
              </span>
            </h1>

            <p className="text-base sm:text-lg lg:text-xl text-[#94A3B8] leading-relaxed max-w-2xl mb-8">
              Von der ersten Website bis zum vollständigen Corporate Design: Wir setzen Ihre Marke professionell um. Technisch brillant und visuell beeindruckend.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center w-full sm:w-auto">
              <Link href="/projektanfrage">
                <a className="bg-[#DEFF9A] hover:bg-[#cbf47d] text-[#050505] px-8 py-4 rounded font-mono font-bold flex items-center justify-center gap-2 transition-all active:scale-[0.98]">
                  Jetzt Projekt anfragen <ArrowRight className="w-4 h-4" />
                </a>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Digitale Umsetzung */}
      <section className="py-24 bg-[#111318] border-b border-[#242832] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 mix-blend-screen pointer-events-none">
          <img 
            src="/assets/bg-transformation.png" 
            alt="Digital Background" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="text-xs font-mono text-[#DEFF9A] tracking-widest uppercase font-bold">Web & Digital</span>
            <h2 className="text-3xl sm:text-4xl font-sans font-bold mt-2">Digitale Umsetzung</h2>
            <p className="text-slate-400 mt-2">Hochwertige Web-Lösungen für maximale digitale Wirkung.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {digitalServices.map((service, index) => (
              <div key={index} className="bg-[#050505] p-8 rounded-xl border border-[#242832] hover:border-[#DEFF9A] transition-all group">
                <div className="mb-6">{service.icon}</div>
                <h3 className="text-xl font-bold mb-3 text-[#F6F4EA]">{service.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Print & Design */}
      <section className="py-24 bg-[#050505] border-b border-[#242832] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 mix-blend-screen pointer-events-none">
          <img 
            src="/assets/bg-problem.png" 
            alt="Design Background" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="text-xs font-mono text-[#1B6BFF] tracking-widest uppercase font-bold">Branding & Print</span>
            <h2 className="text-3xl sm:text-4xl font-sans font-bold mt-2">Print & Design</h2>
            <p className="text-slate-400 mt-2">Haptische Erlebnisse und ein konsistentes Markenbild.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {printServices.map((service, index) => (
              <div key={index} className="bg-[#111318] p-8 rounded-xl border border-[#242832] hover:border-[#1B6BFF] transition-all group">
                <div className="mb-6">{service.icon}</div>
                <h3 className="text-xl font-bold mb-3 text-[#F6F4EA]">{service.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-[#111318] relative overflow-hidden border-b border-[#242832]">
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
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#1B6BFF] opacity-10 blur-3xl -ml-32 -mb-32 rounded-full"></div>
            
            <div className="relative z-10">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-sans font-bold tracking-tight mb-6">
                Starten wir Ihr <br />nächstes Projekt?
              </h2>
              <p className="text-lg font-medium mb-10 max-w-xl mx-auto opacity-80">
                Ob neue Website oder frisches Design – wir setzen Ihre Vision professionell um. Fragen Sie jetzt unverbindlich an.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/projektanfrage">
                  <a className="bg-[#050505] text-[#DEFF9A] hover:bg-[#111318] px-10 py-5 rounded-xl font-mono font-bold flex items-center justify-center gap-3 transition-all active:scale-[0.98] shadow-xl">
                    Jetzt Projekt anfragen <ArrowRight className="w-5 h-5" />
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      </div>
    </Layout>
  );
}
