import React from "react";
import { 
  ArrowRight, 
  CheckCircle2, 
  XCircle, 
  Layers, 
  Zap, 
  ShieldCheck, 
  Users, 
  TrendingUp, 
  Clock, 
  Smartphone,
  ExternalLink,
  ChevronRight,
  Menu,
  X,
  Target,
  FileText,
  Workflow,
  Sparkles,
  DollarSign,
  BarChart3,
  Award
} from "lucide-react";
import { Link } from "wouter";
import Layout from "../components/Layout";
import { useSystemCheck } from "../contexts/SystemCheckContext";

export default function Home() {
  const { openSystemCheck } = useSystemCheck();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Layout>
      {/* 1. Hero Section */}
      <section className="relative py-24 lg:py-32 overflow-hidden border-b border-[#242832]">
        <div className="absolute inset-0 opacity-40 mix-blend-screen pointer-events-none">
          <img 
            src="/assets/bg-hero.webp" 
            alt="Hero Background" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-[radial-gradient(#242832_1px,transparent_1px)] [background-size:24px_24px] opacity-25 pointer-events-none"></div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#111318] border border-[#DEFF9A] border-opacity-20 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-[#DEFF9A] animate-pulse"></span>
              <span className="text-[10px] font-mono tracking-widest text-[#DEFF9A] uppercase">Strategie &bull; Consulting &bull; Wachstum</span>
            </div>

            <h1 className="font-bold text-5xl sm:text-6xl lg:text-8xl tracking-tight leading-[0.9] mb-8 uppercase">
              Dein Können ist stark. <br />
              <span className="text-[#DEFF9A]">Dein Auftritt bremst.</span>
            </h1>

            <p className="text-lg sm:text-xl lg:text-2xl text-slate-400 leading-relaxed max-w-3xl mb-12 font-medium">
              Wir bauen digitale Systeme, die echte Qualität sichtbar machen und Premiumpreise legitimieren. Keine Agentur-Floskeln. Nur präzise Systemlogik für messbares Wachstum.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center w-full sm:w-auto">
              <button 
                onClick={openSystemCheck}
                className="bg-[#DEFF9A] hover:bg-[#cbf47d] text-[#050505] px-10 py-5 font-mono font-bold flex items-center justify-center gap-3 transition-all active:scale-[0.98] uppercase tracking-wider"
              >
                System-Check starten <ArrowRight className="w-5 h-5" />
              </button>
              <button 
                onClick={() => scrollToSection("problem")}
                className="bg-transparent hover:bg-[#111318] text-[#F6F4EA] border border-[#242832] px-10 py-5 font-mono font-bold flex items-center justify-center transition-all uppercase tracking-wider"
              >
                Status Quo prüfen
              </button>
            </div>

            <div className="grid grid-cols-3 gap-2 sm:gap-8 mt-16 pt-12 border-t border-[#242832] border-opacity-50 w-full max-w-2xl">
              <div className="text-center flex flex-col items-center">
                <span className="block text-2xl sm:text-3xl font-bold text-[#FFD400] mb-2">0%</span>
                <span className="text-[8px] sm:text-[10px] text-slate-500 font-mono uppercase tracking-widest leading-relaxed max-w-[80px] sm:max-w-none">
                  Leere<br className="sm:hidden" /> Versprechen
                </span>
              </div>
              <div className="text-center border-x border-[#242832] border-opacity-50 px-2 flex flex-col items-center">
                <span className="block text-2xl sm:text-3xl font-bold text-[#DEFF9A] mb-2">100%</span>
                <span className="text-[8px] sm:text-[10px] text-slate-500 font-mono uppercase tracking-widest leading-relaxed max-w-[80px] sm:max-w-none">
                  Umsetzungs<br className="sm:hidden" />fokus
                </span>
              </div>
              <div className="text-center flex flex-col items-center">
                <span className="block text-2xl sm:text-3xl font-bold text-[#1B6BFF] mb-2">100%</span>
                <span className="text-[8px] sm:text-[10px] text-slate-500 font-mono uppercase tracking-widest leading-relaxed max-w-[80px] sm:max-w-none">
                  Volle<br className="sm:hidden" /> Kontrolle
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Problem Section */}
      <section id="problem" className="py-20 bg-[#111318] border-b border-[#242832] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 mix-blend-screen pointer-events-none">
          <img 
            src="/assets/bg-problem.webp" 
            alt="Problem Background" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto mb-20">
            <span className="text-xs font-mono text-[#DEFF9A] tracking-[0.2em] uppercase font-bold">Diagnose &bull; Die Bremse lösen</span>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mt-4 uppercase leading-tight">Warum du trotz <br />Qualität unsichtbar bleibst.</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[#242832] max-w-6xl mx-auto border border-[#242832]">
            <div className="bg-[#050505] p-12 transition-all group">
              <div className="space-y-6">
                <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest">Engpass 01</span>
                <h3 className="text-2xl font-bold text-[#F6F4EA] uppercase">Digitale Unsichtbarkeit</h3>
                <p className="text-slate-400 leading-relaxed font-medium">
                  Deine Arbeit ist exzellent, aber deine Webseite ist ein Relikt. Langsame Ladezeiten und fehlende mobile Optimierung lassen Premium-Kunden abspringen, bevor der erste Kontakt entsteht.
                </p>
              </div>
            </div>

            <div className="bg-[#050505] p-12 transition-all group">
              <div className="space-y-6">
                <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest">Engpass 02</span>
                <h3 className="text-2xl font-bold text-[#F6F4EA] uppercase">Die Vergleichbarkeits-Falle</h3>
                <p className="text-slate-400 leading-relaxed font-medium">
                  Ohne klare Positionierung wirst du über den Preis verglichen. Du verkaufst dich unter Wert, weil dein digitaler Auftritt deine fachliche Autorität nicht widerspiegelt.
                </p>
              </div>
            </div>

            <div className="bg-[#050505] p-12 transition-all group">
              <div className="space-y-6">
                <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest">Engpass 03</span>
                <h3 className="text-2xl font-bold text-[#F6F4EA] uppercase">Vertrauens-Vakuum</h3>
                <p className="text-slate-400 leading-relaxed font-medium">
                  Schlechtes Design signalisiert unbewusst operative Schwäche. Wer digital nicht präzise auftritt, dem traut man auch bei der eigentlichen Dienstleistung keine Perfektion zu.
                </p>
              </div>
            </div>

            <div className="bg-[#050505] p-12 transition-all group">
              <div className="space-y-6">
                <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest">Engpass 04</span>
                <h3 className="text-2xl font-bold text-[#F6F4EA] uppercase">Budget-Verbrennung</h3>
                <p className="text-slate-400 leading-relaxed font-medium">
                  Marketing ohne System ist Glücksspiel. Ohne technische und psychologische Optimierung verpuffen Werbeausgaben wirkungslos, statt qualifizierte Anfragen zu generieren.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Positioning Section */}
      <section id="positioning" className="py-20 bg-[#050505] border-b border-[#242832] relative overflow-hidden">
        <div className="absolute inset-0 opacity-15 mix-blend-screen pointer-events-none">
          <img 
            src="/assets/bg-hero.webp" 
            alt="Positioning Background" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center max-w-6xl mx-auto">
            <div className="lg:col-span-5 space-y-6">
              <span className="text-xs font-mono text-[#DEFF9A] tracking-widest uppercase font-bold">Konzept &bull; Unser Ansatz</span>
              <h2 className="text-3xl sm:text-4xl font-sans font-bold leading-tight">
                Geenie ist kein klassischer Webdesigner.
              </h2>
              <p className="text-slate-400 leading-relaxed">
                Wir sind keine typische Marketingagentur, die dich mit Buzzwords überhäuft, und kein Anbieter von kurzlebigen Social-Media-Gimmicks. 
              </p>
              <p className="text-slate-400 leading-relaxed">
                Geenie agiert als dein **strategischer Marketing-Partner**, der das grosse Ganze im Blick behält: Von der strategischen Positionierung über die technische Exzellenz bis hin zur messbaren Lead-Generierung.
              </p>
              
              <div className="space-y-4 pt-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#111318] border border-[#242832] flex items-center justify-center">
                    <Zap className="w-5 h-5 text-[#DEFF9A]" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm">Systematische Skalierung</h4>
                    <p className="text-xs text-slate-500">Kein Glück, sondern replizierbare Prozesse.</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#111318] border border-[#242832] flex items-center justify-center">
                    <ShieldCheck className="w-5 h-5 text-[#1B6BFF]" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm">Premium Branding</h4>
                    <p className="text-xs text-slate-500">Wir machen deine Qualität online sichtbar.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="lg:col-span-7 relative">
              <div className="aspect-square sm:aspect-video rounded-2xl bg-[#111318] border border-[#242832] overflow-hidden relative">
                <div className="absolute inset-0 opacity-20 pointer-events-none">
                  <img src="/assets/geenie-cta-bg.webp" alt="Background" className="w-full h-full object-cover" />
                </div>
                <div className="absolute inset-0 flex items-center justify-center p-8 sm:p-12">
                  <div className="grid grid-cols-2 gap-px bg-[#242832] w-full h-full border border-[#242832]">
                    <div className="bg-[#050505] p-8 flex flex-col justify-between transition-all group">
                      <Layers className="w-8 h-8 text-slate-700 group-hover:text-[#DEFF9A]" />
                      <span className="text-[10px] font-mono uppercase tracking-widest text-slate-500 font-bold">Struktur</span>
                    </div>
                    <div className="bg-[#050505] p-8 flex flex-col justify-between transition-all group">
                      <Target className="w-8 h-8 text-slate-700 group-hover:text-[#FFD400]" />
                      <span className="text-[10px] font-mono uppercase tracking-widest text-slate-500 font-bold">Fokus</span>
                    </div>
                    <div className="bg-[#050505] p-8 flex flex-col justify-between transition-all group">
                      <TrendingUp className="w-8 h-8 text-slate-700 group-hover:text-[#1B6BFF]" />
                      <span className="text-[10px] font-mono uppercase tracking-widest text-slate-500 font-bold">Wachstum</span>
                    </div>
                    <div className="bg-[#050505] p-8 flex flex-col justify-between transition-all group">
                      <Sparkles className="w-8 h-8 text-slate-700 group-hover:text-white" />
                      <span className="text-[10px] font-mono uppercase tracking-widest text-slate-500 font-bold">Klarheit</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Services / Columns Section */}
      <section id="services" className="py-24 bg-[#111318] border-b border-[#242832] relative overflow-hidden">
        <div className="absolute inset-0 opacity-15 mix-blend-screen pointer-events-none">
          <img 
            src="/assets/bg-services.webp" 
            alt="Services Background" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[#242832] border border-[#242832]">
            {/* Spalte 1: Strategie */}
            <div className="bg-[#050505] p-12 flex flex-col h-full transition-all group">
              <div className="mb-12">
                <span className="text-[10px] font-mono text-slate-500 uppercase tracking-[0.3em] font-bold">Phase 01</span>
                <h3 className="text-3xl font-bold mt-4 text-[#F6F4EA] uppercase tracking-tight">System Design</h3>
              </div>
              <div className="space-y-4 flex-grow">
                <div className="flex items-center gap-3 text-slate-400 font-medium">
                  <CheckCircle2 className="w-5 h-5 text-[#DEFF9A]" /> Positionierung
                </div>
                <div className="flex items-center gap-3 text-slate-400 font-medium">
                  <CheckCircle2 className="w-5 h-5 text-[#DEFF9A]" /> Copywriting
                </div>
                <div className="flex items-center gap-3 text-slate-400 font-medium">
                  <CheckCircle2 className="w-5 h-5 text-[#DEFF9A]" /> Visual Identity
                </div>
                <div className="flex items-center gap-3 text-slate-400 font-medium">
                  <CheckCircle2 className="w-5 h-5 text-[#DEFF9A]" /> Psychologie
                </div>
              </div>
            </div>

            {/* Spalte 2: Umsetzung */}
            <div className="bg-[#050505] p-12 flex flex-col h-full transition-all group">
              <div className="mb-12">
                <span className="text-[10px] font-mono text-slate-500 uppercase tracking-[0.3em] font-bold">Phase 02</span>
                <h3 className="text-3xl font-bold mt-4 text-[#F6F4EA] uppercase tracking-tight">System Build</h3>
              </div>
              <div className="space-y-4 flex-grow">
                <div className="flex items-center gap-3 text-slate-400 font-medium">
                  <CheckCircle2 className="w-5 h-5 text-[#DEFF9A]" /> High-End Webdev
                </div>
                <div className="flex items-center gap-3 text-slate-400 font-medium">
                  <CheckCircle2 className="w-5 h-5 text-[#DEFF9A]" /> Funnel-Architektur
                </div>
                <div className="flex items-center gap-3 text-slate-400 font-medium">
                  <CheckCircle2 className="w-5 h-5 text-[#DEFF9A]" /> Automatisierung
                </div>
              </div>
            </div>

            {/* Spalte 3: Wachstum */}
            <div className="bg-[#050505] p-12 flex flex-col h-full transition-all group">
              <div className="mb-12">
                <span className="text-[10px] font-mono text-slate-500 uppercase tracking-[0.3em] font-bold">Phase 03</span>
                <h3 className="text-3xl font-bold mt-4 text-[#F6F4EA] uppercase tracking-tight">System Growth</h3>
              </div>
              <div className="space-y-4 flex-grow">
                <div className="flex items-center gap-3 text-slate-400 font-medium">
                  <CheckCircle2 className="w-5 h-5 text-[#DEFF9A]" /> Performance Ads
                </div>
                <div className="flex items-center gap-3 text-slate-400 font-medium">
                  <CheckCircle2 className="w-5 h-5 text-[#DEFF9A]" /> Lead-Gen
                </div>
                <div className="flex items-center gap-3 text-slate-400 font-medium">
                  <CheckCircle2 className="w-5 h-5 text-[#DEFF9A]" /> Consulting
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Transformation Section */}
      <section id="transformation" className="py-24 bg-[#050505] border-b border-[#242832] relative overflow-hidden">
        <div className="absolute inset-0 opacity-15 mix-blend-screen pointer-events-none">
          <img 
            src="/assets/bg-transformation.webp" 
            alt="Transformation Background" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center max-w-6xl mx-auto">
            <div>
              <span className="text-xs font-mono text-[#DEFF9A] tracking-widest uppercase font-bold">Evolution &bull; Der Weg</span>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mt-4 uppercase leading-tight">Vom Zufall <br />zum System.</h2>
              <p className="text-lg text-slate-400 mt-8 leading-relaxed font-medium">
                Die meisten Unternehmen verlassen sich auf Empfehlungen und Glück. Wir ersetzen Zufall durch eine mathematisch logische Kundenreise.
              </p>
              
              <div className="mt-12 space-y-8">
                <div className="flex gap-6">
                  <div className="w-12 h-12 rounded-full bg-[#111318] border border-[#242832] flex items-center justify-center shrink-0 font-mono text-[#DEFF9A] font-bold">01</div>
                  <div>
                    <h4 className="text-xl font-bold text-[#F6F4EA] uppercase">Status Quo Analyse</h4>
                    <p className="text-slate-500 mt-2">Wir finden die Lecks in deinem aktuellen Prozess.</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="w-12 h-12 rounded-full bg-[#111318] border border-[#242832] flex items-center justify-center shrink-0 font-mono text-[#DEFF9A] font-bold">02</div>
                  <div>
                    <h4 className="text-xl font-bold text-[#F6F4EA] uppercase">System-Architektur</h4>
                    <p className="text-slate-500 mt-2">Wir bauen das Fundament für planbares Wachstum.</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="w-12 h-12 rounded-full bg-[#111318] border border-[#242832] flex items-center justify-center shrink-0 font-mono text-[#DEFF9A] font-bold">03</div>
                  <div>
                    <h4 className="text-xl font-bold text-[#F6F4EA] uppercase">Skalierung</h4>
                    <p className="text-slate-500 mt-2">Wir drehen den Hahn auf und optimieren laufend.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-[#111318] border border-[#242832] p-8 sm:p-12 rounded-2xl relative">
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-[#DEFF9A] opacity-10 blur-3xl"></div>
                <div className="space-y-8 relative z-10">
                  <span className="text-[10px] font-mono text-[#DEFF9A] uppercase tracking-widest">Geenie System</span>
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <CheckCircle2 className="w-5 h-5 text-[#DEFF9A] shrink-0" />
                      <p className="text-sm text-slate-300 leading-relaxed font-medium">Maximale Sichtbarkeit bei der Zielgruppe</p>
                    </div>
                    <div className="flex items-start gap-4">
                      <CheckCircle2 className="w-5 h-5 text-[#DEFF9A] shrink-0" />
                      <p className="text-sm text-slate-300 leading-relaxed font-medium">Automatisierte Qualifizierung von Anfragen</p>
                    </div>
                    <div className="flex items-start gap-4">
                      <CheckCircle2 className="w-5 h-5 text-[#DEFF9A] shrink-0" />
                      <p className="text-sm text-slate-300 leading-relaxed font-medium">Premium-Positionierung, die Preise rechtfertigt</p>
                    </div>
                  </div>
                  <button onClick={openSystemCheck} className="w-full bg-[#DEFF9A] hover:bg-[#cbf47d] text-[#050505] py-4 font-mono font-bold uppercase tracking-widest transition-all">
                    System-Check starten
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Process Section */}
      <section id="process" className="py-24 bg-[#111318] border-b border-[#242832] relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto mb-20">
            <span className="text-xs font-mono text-[#DEFF9A] tracking-[0.2em] uppercase font-bold">Roadmap &bull; In 3 Schritten zum System</span>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mt-4 uppercase leading-tight">Die System- <br />Roadmap.</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[#242832] border border-[#242832]">
            <div className="bg-[#050505] p-12 space-y-6 transition-all group">
              <span className="text-4xl font-bold text-slate-800 group-hover:text-[#DEFF9A] transition-colors font-mono">01</span>
              <h3 className="text-2xl font-bold text-[#F6F4EA] uppercase">Analyse</h3>
              <p className="text-slate-400 leading-relaxed font-medium">Wir analysieren deine Ist-Situation und identifizieren die Bremsen in deinem System.</p>
            </div>
            <div className="bg-[#050505] p-12 space-y-6 transition-all group">
              <span className="text-4xl font-bold text-slate-800 group-hover:text-[#FFD400] transition-colors font-mono">02</span>
              <h3 className="text-2xl font-bold text-[#F6F4EA] uppercase">Konstruktion</h3>
              <p className="text-slate-400 leading-relaxed font-medium">Wir bauen deine digitale Infrastruktur: Webseite, Funnel und Branding.</p>
            </div>
            <div className="bg-[#050505] p-12 space-y-6 transition-all group">
              <span className="text-4xl font-bold text-slate-800 group-hover:text-[#1B6BFF] transition-colors font-mono">03</span>
              <h3 className="text-2xl font-bold text-[#F6F4EA] uppercase">Aktivierung</h3>
              <p className="text-slate-400 leading-relaxed font-medium">Wir starten das Performance-Marketing und optimieren dein System laufend.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Social Proof / Testimonials */}
      <section className="py-24 bg-[#050505] border-b border-[#242832]">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-px bg-[#242832] border border-[#242832]">
            <div className="bg-[#111318] p-12 flex flex-col justify-between transition-all group">
              <div>
                <div className="flex flex-wrap gap-3 mb-8">
                  <span className="text-[10px] font-mono text-[#DEFF9A] border border-[#DEFF9A]/20 px-2 py-1 uppercase font-bold">Ist-Analyse</span>
                  <span className="text-[10px] font-mono text-[#DEFF9A] border border-[#DEFF9A]/20 px-2 py-1 uppercase font-bold">Strategie</span>
                </div>
                <p className="text-[#F6F4EA] font-medium leading-relaxed text-lg italic">
                  &ldquo;Präzise Analyse statt Standardlösungen. Die Zusammenarbeit war ein entscheidender Schritt nach vorn. Absolut professionell und zielgerichtet.&rdquo;
                </p>
              </div>
              <div className="mt-12 pt-8 border-t border-[#242832]">
                <span className="block font-bold text-sm text-[#F6F4EA] uppercase tracking-tight">Michael Schnepf</span>
                <span className="block text-xs text-slate-500 uppercase tracking-widest font-mono mt-1">Forst & Bagger Schnepf</span>
              </div>
            </div>

            <div className="bg-[#111318] p-12 flex flex-col justify-between transition-all group">
              <div>
                <div className="flex flex-wrap gap-3 mb-8">
                  <span className="text-[10px] font-mono text-[#1B6BFF] border border-[#1B6BFF]/20 px-2 py-1 uppercase font-bold">Webseite</span>
                  <span className="text-[10px] font-mono text-[#1B6BFF] border border-[#1B6BFF]/20 px-2 py-1 uppercase font-bold">Qualität</span>
                </div>
                <p className="text-[#F6F4EA] font-medium leading-relaxed text-lg italic">
                  &ldquo;Ein digitaler Auftritt, der nicht nur gut aussieht, sondern echtes Geschäft generiert. Wer Ergebnisse will, ist hier richtig.&rdquo;
                </p>
              </div>
              <div className="mt-12 pt-8 border-t border-[#242832]">
                <span className="block font-bold text-sm text-[#F6F4EA] uppercase tracking-tight">Joël Kunz</span>
                <span className="block text-xs text-slate-500 uppercase tracking-widest font-mono mt-1">Produktionsleiter, Balero</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-[#111318] relative overflow-hidden border-b border-[#242832]">
        <div className="absolute inset-0 opacity-20 mix-blend-screen pointer-events-none">
          <img 
            src="/assets/bg-cta.webp" 
            alt="CTA Background" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container mx-auto px-6 relative z-10 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight mb-8 uppercase leading-[0.9]">
              Bereit für das <br /><span className="text-[#DEFF9A]">nächste Level?</span>
            </h2>
            <p className="text-xl lg:text-2xl font-medium mb-12 max-w-2xl mx-auto text-slate-400">
              Lass uns in 15 Minuten prüfen, wie wir dein Können in ein digitales System übersetzen, das Premium-Kunden anzieht.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button 
                onClick={openSystemCheck}
                className="bg-[#DEFF9A] hover:bg-[#cbf47d] text-[#050505] px-12 py-6 font-mono font-bold flex items-center justify-center gap-3 transition-all active:scale-[0.98] uppercase tracking-wider"
              >
                System-Check starten <ArrowRight className="w-5 h-5" />
              </button>
            </div>
            <p className="mt-12 text-xs font-mono uppercase tracking-[0.3em] text-slate-500 font-bold">
              Begrenzte Kapazitäten &bull; Fokus auf Qualität
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
}
