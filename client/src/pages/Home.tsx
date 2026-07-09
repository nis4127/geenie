import React, { useState } from "react";
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
import { toast } from "sonner";
import Layout from "../components/Layout";

export default function Home() {
  const [systemCheckOpen, setSystemCheckOpen] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", company: "", phone: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSystemCheckSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.company) {
      toast.error("Bitte fülle alle Pflichtfelder aus.");
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("https://formspree.io/f/mlgvqkba", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          company: formData.company,
          phone: formData.phone || "Nicht angegeben",
          message: "Anfrage für den kostenlosen 15-Minuten System-Check."
        })
      });

      if (response.ok) {
        toast.success("Anfrage erfolgreich gesendet! Wir melden uns in Kürze.");
        setSystemCheckOpen(false);
        setFormData({ name: "", email: "", company: "", phone: "" });
      } else {
        toast.error("Fehler beim Senden. Bitte versuche es später noch einmal.");
      }
    } catch (error) {
      console.error("Formular-Fehler:", error);
      toast.error("Verbindungsfehler. Bitte überprüfe deine Internetverbindung.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Layout onSystemCheckOpen={() => setSystemCheckOpen(true)}>
      {/* 1. Hero Section */}
      <section className="relative py-24 lg:py-32 overflow-hidden border-b border-[#242832]">
        <div className="absolute inset-0 opacity-40 mix-blend-screen pointer-events-none">
          <img 
            src="/assets/bg-hero.png" 
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
                onClick={() => setSystemCheckOpen(true)}
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
            src="/assets/bg-problem.png" 
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
                <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest">Fehler 01</span>
                <h3 className="text-2xl font-bold text-[#F6F4EA] uppercase">Digitale Unsichtbarkeit</h3>
                <p className="text-slate-400 leading-relaxed font-medium">
                  Deine Arbeit ist exzellent, aber deine Webseite ist ein Relikt. Langsame Ladezeiten und fehlende mobile Optimierung lassen Premium-Kunden abspringen, bevor der erste Kontakt entsteht.
                </p>
              </div>
            </div>

            <div className="bg-[#050505] p-12 transition-all group">
              <div className="space-y-6">
                <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest">Fehler 02</span>
                <h3 className="text-2xl font-bold text-[#F6F4EA] uppercase">Die Vergleichbarkeits-Falle</h3>
                <p className="text-slate-400 leading-relaxed font-medium">
                  Ohne klare Positionierung wirst du über den Preis verglichen. Du verkaufst dich unter Wert, weil dein digitaler Auftritt deine fachliche Autorität nicht widerspiegelt.
                </p>
              </div>
            </div>

            <div className="bg-[#050505] p-12 transition-all group">
              <div className="space-y-6">
                <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest">Fehler 03</span>
                <h3 className="text-2xl font-bold text-[#F6F4EA] uppercase">Vertrauens-Vakuum</h3>
                <p className="text-slate-400 leading-relaxed font-medium">
                  Schlechtes Design signalisiert unbewusst operative Schwäche. Wer digital nicht präzise auftritt, dem traut man auch bei der eigentlichen Dienstleistung keine Perfektion zu.
                </p>
              </div>
            </div>

            <div className="bg-[#050505] p-12 transition-all group">
              <div className="space-y-6">
                <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest">Fehler 04</span>
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
            src="/assets/bg-hero.png" 
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
                Geenie agiert als dein **Fractional CMO**, der das grosse Ganze im Blick behält: Von der strategischen Positionierung über die technische Exzellenz bis hin zur messbaren Lead-Generierung.
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
                  <img src="/assets/geenie-cta-bg.png" alt="Background" className="w-full h-full object-cover" />
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
            src="/assets/bg-services.png" 
            alt="Services Background" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto mb-20">
            <span className="text-xs font-mono text-[#FFD400] tracking-[0.2em] uppercase font-bold">Leistungen &bull; Kernsäulen</span>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mt-4 uppercase leading-tight">Das Geenie <br />Betriebssystem.</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[#242832] border border-[#242832]">
            {/* Column 1 */}
            <div className="bg-[#050505] p-12 flex flex-col transition-all group">
              <div className="mb-8">
                <FileText className="w-8 h-8 text-[#FFD400]" />
              </div>
              <h3 className="text-2xl font-bold mb-6 uppercase tracking-tight">
                Brand Framing
              </h3>
              <p className="text-slate-400 leading-relaxed font-medium mb-8">
                Wir entwickeln deine unverwechselbare Positionierung. Wer bist du? Was macht dich einzigartig? Warum sollte ein Premium-Kunde bei dir kaufen?
              </p>
              <ul className="space-y-4 mt-auto">
                <li className="flex items-center gap-3 text-sm text-[#F6F4EA] font-bold uppercase tracking-tight">
                  <CheckCircle2 className="w-5 h-5 text-[#DEFF9A]" /> Copywriting
                </li>
                <li className="flex items-center gap-3 text-sm text-[#F6F4EA] font-bold uppercase tracking-tight">
                  <CheckCircle2 className="w-5 h-5 text-[#DEFF9A]" /> Visual Identity
                </li>
                <li className="flex items-center gap-3 text-sm text-[#F6F4EA] font-bold uppercase tracking-tight">
                  <CheckCircle2 className="w-5 h-5 text-[#DEFF9A]" /> Psychologie
                </li>
              </ul>
            </div>

            {/* Column 2 */}
            <div className="bg-[#050505] p-12 flex flex-col transition-all group">
              <div className="mb-8">
                <Workflow className="w-8 h-8 text-[#DEFF9A]" />
              </div>
              <h3 className="text-2xl font-bold mb-6 uppercase tracking-tight">
                System Build
              </h3>
              <p className="text-slate-400 leading-relaxed font-medium mb-8">
                Wir bauen deine digitale Infrastruktur. Schnell, sicher und auf Conversion optimiert. Deine Webseite wird zum automatisierten Vertriebskanal.
              </p>
              <ul className="space-y-4 mt-auto">
                <li className="flex items-center gap-3 text-sm text-[#F6F4EA] font-bold uppercase tracking-tight">
                  <CheckCircle2 className="w-5 h-5 text-[#DEFF9A]" /> High-End Webdev
                </li>
                <li className="flex items-center gap-3 text-sm text-[#F6F4EA] font-bold uppercase tracking-tight">
                  <CheckCircle2 className="w-5 h-5 text-[#DEFF9A]" /> Funnel-Architektur
                </li>
                <li className="flex items-center gap-3 text-sm text-[#F6F4EA] font-bold uppercase tracking-tight">
                  <CheckCircle2 className="w-5 h-5 text-[#DEFF9A]" /> Automatisierung
                </li>
              </ul>
            </div>

            {/* Column 3 */}
            <div className="bg-[#050505] p-12 flex flex-col transition-all group">
              <div className="mb-8">
                <TrendingUp className="w-8 h-8 text-[#1B6BFF]" />
              </div>
              <h3 className="text-2xl font-bold mb-6 uppercase tracking-tight">
                Scale Operation
              </h3>
              <p className="text-slate-400 leading-relaxed font-medium mb-8">
                Wir skalieren dein Business. Durch gezieltes Marketing und Performance-Ads bringen wir die richtigen Menschen in dein System.
              </p>
              <ul className="space-y-4 mt-auto">
                <li className="flex items-center gap-3 text-sm text-[#F6F4EA] font-bold uppercase tracking-tight">
                  <CheckCircle2 className="w-5 h-5 text-[#DEFF9A]" /> Performance Ads
                </li>
                <li className="flex items-center gap-3 text-sm text-[#F6F4EA] font-bold uppercase tracking-tight">
                  <CheckCircle2 className="w-5 h-5 text-[#DEFF9A]" /> Lead-Gen
                </li>
                <li className="flex items-center gap-3 text-sm text-[#F6F4EA] font-bold uppercase tracking-tight">
                  <CheckCircle2 className="w-5 h-5 text-[#DEFF9A]" /> Consulting
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Transformation Section */}
      <section id="transformation" className="py-24 bg-[#050505] border-b border-[#242832] relative overflow-hidden">
        <div className="absolute inset-0 opacity-15 mix-blend-screen pointer-events-none">
          <img 
            src="/assets/bg-transformation.png" 
            alt="Transformation Background" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto mb-20">
            <span className="text-xs font-mono text-[#DEFF9A] tracking-[0.2em] uppercase font-bold">Evolution &bull; Transformation</span>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mt-4 uppercase leading-tight">Vom Zufall <br />zum System.</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[#242832] border border-[#242832] max-w-6xl mx-auto">
            <div className="bg-[#050505] p-12 flex flex-col gap-12 transition-all group">
              <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest">Status Quo</span>
              <div className="space-y-8">
                <div className="flex items-center gap-4">
                  <X className="w-5 h-5 text-red-500 shrink-0" />
                  <span className="text-[#F6F4EA] font-bold uppercase tracking-tight line-through opacity-50">Passive Akquise</span>
                </div>
                <div className="flex items-center gap-4">
                  <X className="w-5 h-5 text-red-500 shrink-0" />
                  <span className="text-[#F6F4EA] font-bold uppercase tracking-tight line-through opacity-50">Preis-Vergleiche</span>
                </div>
                <div className="flex items-center gap-4">
                  <X className="w-5 h-5 text-red-500 shrink-0" />
                  <span className="text-[#F6F4EA] font-bold uppercase tracking-tight line-through opacity-50">Technische Last</span>
                </div>
              </div>
            </div>

            <div className="bg-[#111318] p-12 flex flex-col gap-12 transition-all group">
              <span className="text-[10px] font-mono text-[#DEFF9A] uppercase tracking-widest">Geenie System</span>
              <div className="space-y-8">
                <div className="flex items-center gap-4">
                  <CheckCircle2 className="w-5 h-5 text-[#DEFF9A] shrink-0" />
                  <span className="text-[#F6F4EA] font-bold uppercase tracking-tight">Aktive Lead-Maschine</span>
                </div>
                <div className="flex items-center gap-4">
                  <CheckCircle2 className="w-5 h-5 text-[#DEFF9A] shrink-0" />
                  <span className="text-[#F6F4EA] font-bold uppercase tracking-tight">Autoritäts-Status</span>
                </div>
                <div className="flex items-center gap-4">
                  <CheckCircle2 className="w-5 h-5 text-[#DEFF9A] shrink-0" />
                  <span className="text-[#F6F4EA] font-bold uppercase tracking-tight">Full-Service Freiheit</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Process Section */}
      <section id="process" className="py-24 bg-[#111318] border-b border-[#242832] relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto mb-20">
            <span className="text-xs font-mono text-[#DEFF9A] tracking-[0.2em] uppercase font-bold">Ablauf &bull; Roadmap</span>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mt-4 uppercase leading-tight">Die System- <br />Roadmap.</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-[#242832] border border-[#242832]">
            <div className="relative p-12 bg-[#050505] flex flex-col transition-all group">
              <span className="text-5xl font-bold text-[#242832] font-mono mb-8">01</span>
              <h4 className="text-2xl font-bold mb-4 uppercase tracking-tight">Audit</h4>
              <p className="text-slate-400 leading-relaxed font-medium">Wir analysieren deine Ist-Situation und identifizieren die Bremsen in deinem System.</p>
            </div>

            <div className="relative p-12 bg-[#050505] flex flex-col transition-all group">
              <span className="text-5xl font-bold text-[#242832] font-mono mb-8">02</span>
              <h4 className="text-2xl font-bold mb-4 uppercase tracking-tight">Strategy</h4>
              <p className="text-slate-400 leading-relaxed font-medium">Wir definieren deine Positionierung und entwickeln das Branding-Konzept.</p>
            </div>

            <div className="relative p-12 bg-[#050505] flex flex-col transition-all group">
              <span className="text-5xl font-bold text-[#242832] font-mono mb-8">03</span>
              <h4 className="text-2xl font-bold mb-4 uppercase tracking-tight">Build</h4>
              <p className="text-slate-400 leading-relaxed font-medium">Wir bauen deine High-Conversion Plattform und die notwendige Infrastruktur.</p>
            </div>

            <div className="relative p-12 bg-[#050505] flex flex-col transition-all group">
              <span className="text-5xl font-bold text-[#242832] font-mono mb-8">04</span>
              <h4 className="text-2xl font-bold mb-4 uppercase tracking-tight">Scale</h4>
              <p className="text-slate-400 leading-relaxed font-medium">Wir starten das Performance-Marketing und optimieren dein System laufend.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Social Proof Section */}
      <section id="social-proof" className="py-24 bg-[#050505] border-b border-[#242832]">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-4xl mx-auto mb-20">
            <span className="text-xs font-mono text-[#DEFF9A] tracking-[0.2em] uppercase font-bold">Referenzen &bull; Social Proof</span>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mt-4 uppercase leading-tight">Was unsere <br />Partner sagen.</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[#242832] border border-[#242832]">
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
                <span className="block font-bold text-sm text-[#F6F4EA] uppercase tracking-tight">Gian Jonasch</span>
                <span className="block text-xs text-slate-500 uppercase tracking-widest font-mono mt-1">Confiserie Jonasch</span>
              </div>
            </div>

            <div className="bg-[#111318] p-12 flex flex-col justify-between transition-all group">
              <div>
                <div className="flex flex-wrap gap-3 mb-8">
                  <span className="text-[10px] font-mono text-[#FFD400] border border-[#FFD400]/20 px-2 py-1 uppercase font-bold">Präsenz</span>
                  <span className="text-[10px] font-mono text-[#FFD400] border border-[#FFD400]/20 px-2 py-1 uppercase font-bold">Leads</span>
                </div>
                <p className="text-[#F6F4EA] font-medium leading-relaxed text-lg italic">
                  &ldquo;Endlich Online-Anfragen, die funktionieren. Schnelle Umsetzung, ehrliche Beratung und messbare Ergebnisse. Absolut überzeugt.&rdquo;
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
            src="/assets/bg-cta.png" 
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
                onClick={() => setSystemCheckOpen(true)}
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

      {/* System-Check Modal */}
      {systemCheckOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
          <div className="absolute inset-0 bg-[#050505] bg-opacity-90 backdrop-blur-sm" onClick={() => setSystemCheckOpen(false)}></div>
          <div className="bg-[#111318] border border-[#242832] w-full max-w-lg rounded-2xl relative z-10 overflow-hidden animate-in zoom-in-95 duration-200 shadow-2xl">
            <div className="p-8">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-[#F6F4EA]">System-Check buchen</h3>
                  <p className="text-sm text-slate-400 mt-1">Wähle deinen Termin für die 15-minütige Analyse.</p>
                </div>
                <button onClick={() => setSystemCheckOpen(false)} className="p-2 hover:bg-[#050505] rounded-full text-slate-500 hover:text-[#F6F4EA] transition-all">
                  <X className="w-5 h-5" />
                </button>
              </div>

              <form onSubmit={handleSystemCheckSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-mono uppercase tracking-widest text-slate-500 mb-2">Name *</label>
                  <input 
                    type="text" 
                    required
                    className="w-full bg-[#050505] border border-[#242832] rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#DEFF9A] transition-colors"
                    placeholder="Dein voller Name"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                  />
                </div>
                <div>
                  <label className="block text-xs font-mono uppercase tracking-widest text-slate-500 mb-2">E-Mail Adresse *</label>
                  <input 
                    type="email" 
                    required
                    className="w-full bg-[#050505] border border-[#242832] rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#DEFF9A] transition-colors"
                    placeholder="deine@email.de"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                  />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-widest text-slate-500 mb-2">Unternehmen *</label>
                    <input 
                      type="text" 
                      required
                      className="w-full bg-[#050505] border border-[#242832] rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#DEFF9A] transition-colors"
                      placeholder="Firma GmbH"
                      value={formData.company}
                      onChange={(e) => setFormData({...formData, company: e.target.value})}
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-widest text-slate-500 mb-2">Telefon (optional)</label>
                    <input 
                      type="tel" 
                      className="w-full bg-[#050505] border border-[#242832] rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#DEFF9A] transition-colors"
                      placeholder="+49 123 456789"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    />
                  </div>
                </div>

                <button 
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#DEFF9A] hover:bg-[#cbf47d] text-[#050505] py-4 rounded-xl font-mono font-bold mt-4 flex items-center justify-center gap-2 transition-all disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <>Sende Anfrage...</>
                  ) : (
                    <>Anfrage senden <ArrowRight className="w-4 h-4" /></>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
    </Layout>
  );
}
