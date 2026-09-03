import React from "react";
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
import { useSystemCheck } from "../contexts/SystemCheckContext";

export default function Kreation() {
  const { openSystemCheck } = useSystemCheck();

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
    <Layout>
      <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative py-24 lg:py-32 overflow-hidden border-b border-[#242832]">
        <div className="absolute inset-0 opacity-40 mix-blend-screen pointer-events-none">
          <img 
            src="/assets/bg-services.webp" 
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

            <h1 className="font-bold text-5xl sm:text-6xl lg:text-8xl tracking-tight leading-[0.9] mb-8 uppercase">
              Qualität braucht <br />
              <span className="text-[#DEFF9A]">Sichtbarkeit.</span>
            </h1>

            <p className="text-lg sm:text-xl lg:text-2xl text-slate-400 leading-relaxed max-w-3xl mb-12 font-medium">
              Von der technischen Exzellenz bis zum haptischen Erlebnis: Wir übersetzen dein Können in ein konsistentes System, das Vertrauen schafft und Ergebnisse liefert.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center w-full sm:w-auto">
              <Link href="/projektanfrage">
                <a className="bg-[#DEFF9A] hover:bg-[#cbf47d] text-[#050505] px-10 py-5 font-mono font-bold flex items-center justify-center gap-3 transition-all active:scale-[0.98] uppercase tracking-wider">
                  Projekt anfragen <ArrowRight className="w-5 h-5" />
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
            src="/assets/bg-transformation.webp" 
            alt="Digital Background" 
            className="w-full h-full object-cover"
            loading="lazy"
            decoding="async"
          />
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto mb-20">
            <span className="text-xs font-mono text-[#DEFF9A] tracking-[0.2em] uppercase font-bold">Web & Digital &bull; Systembau</span>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mt-4 uppercase leading-tight">Digitale <br />Umsetzung.</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-[#242832] max-w-6xl mx-auto border border-[#242832]">
            {digitalServices.map((service, index) => (
              <div key={index} className="bg-[#050505] p-12 transition-all group">
                <div className="mb-8">{service.icon}</div>
                <h3 className="text-2xl font-bold mb-4 text-[#F6F4EA] uppercase tracking-tight">{service.title}</h3>
                <p className="text-slate-400 leading-relaxed font-medium">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Print & Design */}
      <section className="py-24 bg-[#050505] border-b border-[#242832] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 mix-blend-screen pointer-events-none">
          <img 
            src="/assets/bg-problem.webp" 
            alt="Design Background" 
            className="w-full h-full object-cover"
            loading="lazy"
            decoding="async"
          />
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto mb-20">
            <span className="text-xs font-mono text-[#1B6BFF] tracking-[0.2em] uppercase font-bold">Branding & Print &bull; Ästhetik</span>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mt-4 uppercase leading-tight">Print & <br />Design.</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-[#242832] max-w-6xl mx-auto border border-[#242832]">
            {printServices.map((service, index) => (
              <div key={index} className="bg-[#111318] p-12 transition-all group">
                <div className="mb-8">{service.icon}</div>
                <h3 className="text-2xl font-bold mb-4 text-[#F6F4EA] uppercase tracking-tight">{service.title}</h3>
                <p className="text-slate-400 leading-relaxed font-medium">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-[#111318] relative overflow-hidden border-b border-[#242832]">
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
              Bereit für <br /><span className="text-[#DEFF9A]">echte Sichtbarkeit?</span>
            </h2>
            <p className="text-xl lg:text-2xl font-medium mb-12 max-w-2xl mx-auto text-slate-400">
              Wir übersetzen dein Können in ein digitales System, das Premium-Kunden anzieht und deine Qualität sichtbar macht.
            </p>
            <Link href="/projektanfrage">
              <a className="inline-flex bg-[#DEFF9A] hover:bg-[#cbf47d] text-[#050505] px-12 py-6 font-mono font-bold items-center justify-center gap-3 transition-all active:scale-[0.98] uppercase tracking-wider">
                Projekt anfragen <ArrowRight className="w-5 h-5" />
              </a>
            </Link>
          </div>
        </div>
      </section>
      </div>
    </Layout>
  );
}
