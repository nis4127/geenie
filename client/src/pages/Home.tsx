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

            <h1 className="font-sans font-bold text-4xl sm:text-5xl lg:text-7xl tracking-tight leading-none mb-6">
              Dein Unternehmen ist besser, als dein <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFD400] via-[#DEFF9A] to-[#1B6BFF]">
                digitaler Auftritt zeigt.
              </span>
            </h1>

            <p className="text-base sm:text-lg lg:text-xl text-[#94A3B8] leading-relaxed max-w-2xl mb-8">
              Handwerker, Solopreneure und KMUs liefern täglich echte Spitzenqualität. Doch online herrscht oft Unsichtbarkeit oder Preisdruck. Geenie beendet diesen Zustand systematisch.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center w-full sm:w-auto">
              <button 
                onClick={() => setSystemCheckOpen(true)}
                className="bg-[#DEFF9A] hover:bg-[#cbf47d] text-[#050505] px-8 py-4 rounded font-mono font-bold flex items-center justify-center gap-2 transition-all active:scale-[0.98]"
              >
                Kostenloses Erstgespräch <ArrowRight className="w-4 h-4" />
              </button>
              <button 
                onClick={() => scrollToSection("problem")}
                className="bg-transparent hover:bg-[#111318] text-[#F6F4EA] border border-[#242832] px-8 py-4 rounded font-mono font-bold flex items-center justify-center transition-all"
              >
                Das Problem analysieren
              </button>
            </div>

            <div className="grid grid-cols-3 gap-6 mt-16 pt-8 border-t border-[#242832] border-opacity-50 w-full max-w-lg">
              <div className="text-center">
                <span className="block text-xl sm:text-2xl font-bold text-[#FFD400]">0%</span>
                <span className="text-[10px] text-slate-500 font-mono uppercase tracking-wider">Marketing-Gelaber</span>
              </div>
              <div className="text-center border-x border-[#242832] border-opacity-50 px-2">
                <span className="block text-xl sm:text-2xl font-bold text-[#DEFF9A]">100%</span>
                <span className="text-[10px] text-slate-500 font-mono uppercase tracking-wider">Umsetzungsfokus</span>
              </div>
              <div className="text-center">
                <span className="block text-xl sm:text-2xl font-bold text-[#1B6BFF]">100%</span>
                <span className="text-[10px] text-slate-500 font-mono uppercase tracking-wider">Volle Kontrolle</span>
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
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="text-xs font-mono text-[#1B6BFF] tracking-widest uppercase font-bold">Analyse &bull; Status Quo</span>
            <h2 className="text-3xl sm:text-4xl font-sans font-bold mt-2">Warum hervorragende Qualität online oft verliert</h2>
            <p className="text-slate-400 mt-2">Die typischen Fehler, die KMUs und Macher täglich teuer bezahlen.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-[#050505] p-8 rounded-lg border border-[#242832] hover:border-[#FF4D4F] transition-all group">
              <div className="flex items-start gap-4">
                <XCircle className="w-6 h-6 text-[#FF4D4F] shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-bold text-[#F6F4EA] group-hover:text-[#FF4D4F] transition-colors">Digitale Unsichtbarkeit</h3>
                  <p className="text-sm text-slate-400 mt-2 leading-relaxed">
                    Du lieferst grossartige Arbeit ab, aber deine Webseite ist veraltet, lädt langsam oder funktioniert auf Smartphones nicht. Potenzielle Premium-Kunden springen ab, bevor sie dich überhaupt kennenlernen.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-[#050505] p-8 rounded-lg border border-[#242832] hover:border-[#FF4D4F] transition-all group">
              <div className="flex items-start gap-4">
                <XCircle className="w-6 h-6 text-[#FF4D4F] shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-bold text-[#F6F4EA] group-hover:text-[#FF4D4F] transition-colors">Gefangen im Preisdruck</h3>
                  <p className="text-sm text-slate-400 mt-2 leading-relaxed">
                    Weil deine Online-Präsenz austauschbar und generisch wirkt, wirst du nur über den Preis verglichen. Du musst Rabatte geben, obwohl deine handwerkliche oder fachliche Qualität Premium-Preise rechtfertigt.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-[#050505] p-8 rounded-lg border border-[#242832] hover:border-[#FF4D4F] transition-all group">
              <div className="flex items-start gap-4">
                <XCircle className="w-6 h-6 text-[#FF4D4F] shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-bold text-[#F6F4EA] group-hover:text-[#FF4D4F] transition-colors">Verlorenes Kundenvertrauen</h3>
                  <p className="text-sm text-slate-400 mt-2 leading-relaxed">
                    Schlechtes Design erzeugt unbewusst Misstrauen. Wenn deine Webseite unprofessionell aussieht, schliessen Kunden automatisch darauf, dass auch deine operative Arbeit unsauber isst.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-[#050505] p-8 rounded-lg border border-[#242832] hover:border-[#FF4D4F] transition-all group">
              <div className="flex items-start gap-4">
                <XCircle className="w-6 h-6 text-[#FF4D4F] shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-bold text-[#F6F4EA] group-hover:text-[#FF4D4F] transition-colors">Verschwendetes Potenzial</h3>
                  <p className="text-sm text-slate-400 mt-2 leading-relaxed">
                    Du schaltest teure Werbung oder machst Social Media, aber die Leads bleiben aus. Ohne ein psychologisch und technisch optimiertes System verpufft dein Marketing-Budget wirkungslos.
                  </p>
                </div>
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
                <div className="absolute inset-0 opacity-10 pointer-events-none">
                  <img src="/assets/geenie-cta-bg.png" alt="Background" className="w-full h-full object-cover" />
                </div>
                <div className="absolute inset-0 flex items-center justify-center p-8 sm:p-12">
                  <div className="grid grid-cols-2 gap-4 w-full h-full">
                    <div className="bg-[#050505] border border-[#242832] rounded-xl p-6 flex flex-col justify-between hover:border-[#DEFF9A] transition-all group">
                      <Layers className="w-8 h-8 text-slate-700 group-hover:text-[#DEFF9A]" />
                      <span className="text-xs font-mono uppercase tracking-widest text-slate-500">Struktur</span>
                    </div>
                    <div className="bg-[#050505] border border-[#242832] rounded-xl p-6 flex flex-col justify-between hover:border-[#FFD400] transition-all group">
                      <Target className="w-8 h-8 text-slate-700 group-hover:text-[#FFD400]" />
                      <span className="text-xs font-mono uppercase tracking-widest text-slate-500">Fokus</span>
                    </div>
                    <div className="bg-[#050505] border border-[#242832] rounded-xl p-6 flex flex-col justify-between hover:border-[#1B6BFF] transition-all group">
                      <TrendingUp className="w-8 h-8 text-slate-700 group-hover:text-[#1B6BFF]" />
                      <span className="text-xs font-mono uppercase tracking-widest text-slate-500">Wachstum</span>
                    </div>
                    <div className="bg-[#050505] border border-[#242832] rounded-xl p-6 flex flex-col justify-between hover:border-white transition-all group">
                      <Sparkles className="w-8 h-8 text-slate-700 group-hover:text-white" />
                      <span className="text-xs font-mono uppercase tracking-widest text-slate-500">Klarheit</span>
                    </div>
                  </div>
                </div>
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-[#DEFF9A] opacity-10 blur-3xl rounded-full"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-[#1B6BFF] opacity-10 blur-3xl rounded-full"></div>
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
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="text-xs font-mono text-[#FFD400] tracking-widest uppercase font-bold">Leistungen &bull; Kernsäulen</span>
            <h2 className="text-3xl sm:text-4xl font-sans font-bold mt-2">Das Geenie Media Betriebssystem</h2>
            <p className="text-slate-400 mt-2">Drei Säulen für deine digitale Dominanz.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Column 1 */}
            <div className="flex flex-col">
              <div className="h-1 bg-gradient-to-r from-[#FFD400] to-transparent mb-6"></div>
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <FileText className="w-5 h-5 text-[#FFD400]" />
                Brand Framing
              </h3>
              <p className="text-sm text-slate-400 leading-relaxed mb-6">
                Wir entwickeln deine unverwechselbare Positionierung. Wer bist du? Was macht dich einzigartig? Warum sollte ein Premium-Kunde bei dir kaufen und nicht beim Wettbewerber?
              </p>
              <ul className="space-y-3 mt-auto">
                <li className="flex items-center gap-2 text-xs text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-[#DEFF9A]" /> Copywriting & Storytelling
                </li>
                <li className="flex items-center gap-2 text-xs text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-[#DEFF9A]" /> Visual Identity & Design
                </li>
                <li className="flex items-center gap-2 text-xs text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-[#DEFF9A]" /> Zielgruppen-Psychologie
                </li>
              </ul>
            </div>

            {/* Column 2 */}
            <div className="flex flex-col">
              <div className="h-1 bg-gradient-to-r from-[#DEFF9A] to-transparent mb-6"></div>
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <Workflow className="w-5 h-5 text-[#DEFF9A]" />
                Growth Hacking
              </h3>
              <p className="text-sm text-slate-400 leading-relaxed mb-6">
                Wir bauen deine digitale Infrastruktur. Schnell, sicher und auf Conversion optimiert. Deine Webseite wird zum automatisierten Vertriebskanal, der 24/7 für dich arbeitet.
              </p>
              <ul className="space-y-3 mt-auto">
                <li className="flex items-center gap-2 text-xs text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-[#DEFF9A]" /> High-End Webentwicklung
                </li>
                <li className="flex items-center gap-2 text-xs text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-[#DEFF9A]" /> Funnel-Optimierung
                </li>
                <li className="flex items-center gap-2 text-xs text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-[#DEFF9A]" /> CRM & Automatisierung
                </li>
              </ul>
            </div>

            {/* Column 3 */}
            <div className="flex flex-col">
              <div className="h-1 bg-gradient-to-r from-[#1B6BFF] to-transparent mb-6"></div>
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-[#1B6BFF]" />
                0-to-1 Operation
              </h3>
              <p className="text-sm text-slate-400 leading-relaxed mb-6">
                Wir skalieren dein Business. Durch gezieltes Marketing und Performance-Ads bringen wir die richtigen Menschen in dein System. Wir begleiten dich vom Status Quo bis zum Marktführer.
              </p>
              <ul className="space-y-3 mt-auto">
                <li className="flex items-center gap-2 text-xs text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-[#DEFF9A]" /> Performance Marketing
                </li>
                <li className="flex items-center gap-2 text-xs text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-[#DEFF9A]" /> Lead-Qualifizierung
                </li>
                <li className="flex items-center gap-2 text-xs text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-[#DEFF9A]" /> Strategisches Consulting
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
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="text-xs font-mono text-[#DEFF9A] tracking-widest uppercase font-bold">Vorher / Nachher &bull; Transformation</span>
            <h2 className="text-3xl sm:text-4xl font-sans font-bold mt-2">Die Geenie Evolution</h2>
            <p className="text-slate-400 mt-2">Was sich für dich und dein Business konkret verändert.</p>
          </div>

          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-red-500/10 border border-red-500/20 flex items-center justify-center shrink-0 mt-1">
                  <X className="w-4 h-4 text-red-500" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-500 line-through">Passive Akquise</h4>
                  <p className="text-sm text-slate-600">Warten auf Empfehlungen und Zufallsanfragen.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-red-500/10 border border-red-500/20 flex items-center justify-center shrink-0 mt-1">
                  <X className="w-4 h-4 text-red-500" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-500 line-through">Preis-Vergleiche</h4>
                  <p className="text-sm text-slate-600">Kunden fragen nur nach dem billigsten Angebot.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-red-500/10 border border-red-500/20 flex items-center justify-center shrink-0 mt-1">
                  <X className="w-4 h-4 text-red-500" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-500 line-through">Technische Last</h4>
                  <p className="text-sm text-slate-600">Die Webseite macht Probleme, statt Lösungen.</p>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-[#DEFF9A]/10 border border-[#DEFF9A]/20 flex items-center justify-center shrink-0 mt-1">
                  <CheckCircle2 className="w-4 h-4 text-[#DEFF9A]" />
                </div>
                <div>
                  <h4 className="font-bold text-[#F6F4EA]">Aktive Lead-Maschine</h4>
                  <p className="text-sm text-slate-400">Ein System, das planbar neue Kunden generiert.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-[#DEFF9A]/10 border border-[#DEFF9A]/20 flex items-center justify-center shrink-0 mt-1">
                  <CheckCircle2 className="w-4 h-4 text-[#DEFF9A]" />
                </div>
                <div>
                  <h4 className="font-bold text-[#F6F4EA]">Autoritäts-Status</h4>
                  <p className="text-sm text-slate-400">Du wirst als Experte wahrgenommen und gebucht.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-[#DEFF9A]/10 border border-[#DEFF9A]/20 flex items-center justify-center shrink-0 mt-1">
                  <CheckCircle2 className="w-4 h-4 text-[#DEFF9A]" />
                </div>
                <div>
                  <h4 className="font-bold text-[#F6F4EA]">Full-Service Freiheit</h4>
                  <p className="text-sm text-slate-400">Wir kümmern uns um die Technik, du um dein Business.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Process Section */}
      <section id="process" className="py-24 bg-[#111318] border-b border-[#242832] relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="text-xs font-mono text-[#1B6BFF] tracking-widest uppercase font-bold">Fahrplan &bull; Der Weg</span>
            <h2 className="text-3xl sm:text-4xl font-sans font-bold mt-2">In 4 Schritten zur Marktführerschaft</h2>
            <p className="text-slate-400 mt-2">Keine komplexen Umwege, sondern direkter Fokus auf Ergebnisse.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <div className="relative p-8 bg-[#050505] border border-[#242832] rounded-xl">
              <span className="absolute top-4 right-6 text-5xl font-bold text-[#242832] opacity-50 font-mono">01</span>
              <div className="w-12 h-12 bg-[#DEFF9A] text-[#050505] rounded-lg flex items-center justify-center font-bold mb-6">
                <Users className="w-6 h-6" />
              </div>
              <h4 className="text-lg font-bold mb-2">Discovery</h4>
              <p className="text-xs text-slate-400 leading-relaxed">Wir analysieren dein Business, deine Ziele und den Wettbewerb.</p>
            </div>

            <div className="relative p-8 bg-[#050505] border border-[#242832] rounded-xl">
              <span className="absolute top-4 right-6 text-5xl font-bold text-[#242832] opacity-50 font-mono">02</span>
              <div className="w-12 h-12 bg-[#DEFF9A] text-[#050505] rounded-lg flex items-center justify-center font-bold mb-6">
                <Target className="w-6 h-6" />
              </div>
              <h4 className="text-lg font-bold mb-2">Strategy</h4>
              <p className="text-xs text-slate-400 leading-relaxed">Wir entwickeln dein Brand-Framing und den Growth-Plan.</p>
            </div>

            <div className="relative p-8 bg-[#050505] border border-[#242832] rounded-xl">
              <span className="absolute top-4 right-6 text-5xl font-bold text-[#242832] opacity-50 font-mono">03</span>
              <div className="w-12 h-12 bg-[#DEFF9A] text-[#050505] rounded-lg flex items-center justify-center font-bold mb-6">
                <Zap className="w-6 h-6" />
              </div>
              <h4 className="text-lg font-bold mb-2">Build</h4>
              <p className="text-xs text-slate-400 leading-relaxed">Wir bauen deine High-Conversion Plattform und Infrastruktur.</p>
            </div>

            <div className="relative p-8 bg-[#050505] border border-[#242832] rounded-xl">
              <span className="absolute top-4 right-6 text-5xl font-bold text-[#242832] opacity-50 font-mono">04</span>
              <div className="w-12 h-12 bg-[#DEFF9A] text-[#050505] rounded-lg flex items-center justify-center font-bold mb-6">
                <TrendingUp className="w-6 h-6" />
              </div>
              <h4 className="text-lg font-bold mb-2">Scale</h4>
              <p className="text-xs text-slate-400 leading-relaxed">Wir starten das Performance-Marketing und optimieren laufend.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Social Proof Section */}
      <section id="social-proof" className="py-20 bg-[#050505] border-b border-[#242832]">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="text-xs font-mono text-[#DEFF9A] tracking-widest uppercase font-bold">Referenzen &bull; Social Proof</span>
            <h2 className="text-3xl sm:text-4xl font-sans font-bold mt-2">Was unsere Partner sagen</h2>
            <p className="text-slate-400 mt-2">Echte Ergebnisse von echten Unternehmen.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-[#111318] p-8 rounded-lg border border-[#242832] relative flex flex-col justify-between group hover:border-[#DEFF9A] transition-all">
              <div>
                <div className="flex flex-wrap gap-1.5 mb-4">
                  <span className="text-[9px] font-mono bg-[#DEFF9A] bg-opacity-10 text-[#DEFF9A] px-2 py-0.5 rounded">IST-ANALYSE</span>
                  <span className="text-[9px] font-mono bg-[#DEFF9A] bg-opacity-10 text-[#DEFF9A] px-2 py-0.5 rounded">MARKETINGSTRATEGIE</span>
                  <span className="text-[9px] font-mono bg-[#DEFF9A] bg-opacity-10 text-[#DEFF9A] px-2 py-0.5 rounded">VERKAUFSKONZEPT</span>
                </div>
                <p className="text-slate-300 italic leading-relaxed text-sm">
                  &ldquo;Die Zusammenarbeit mit Geenie Media war für die Confiserie Jonasch ein entscheidender Schritt nach vorn. Anstatt uns mit Standardlösungen abzuspeisen, wurde unsere Ist-Situation präzise analysiert. Darauf basierend hat Geenie Media eine massgeschneiderte Marketingstrategie und ein fundiertes Verkaufskonzept für uns entwickelt. Besonders wertvoll waren die klaren, konkreten Handlungsanweisungen, die wir direkt in unseren Arbeitsalltag integrieren konnten. Ein absolut professioneller und zielgerichteter Partner!&rdquo;
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-[#242832] flex items-center justify-between">
                <div>
                  <span className="block font-bold text-sm text-[#F6F4EA]">Gian Jonasch</span>
                  <span className="block text-xs text-slate-500">Confiserie Jonasch</span>
                </div>
                <span className="text-xs font-mono text-[#DEFF9A] bg-[#DEFF9A] bg-opacity-10 px-2 py-0.5 rounded">CH</span>
              </div>
            </div>
            <div className="bg-[#111318] p-8 rounded-lg border border-[#242832] relative flex flex-col justify-between group hover:border-[#FFD400] transition-all">
              <div>
                <div className="flex flex-wrap gap-1.5 mb-4">
                  <span className="text-[9px] font-mono bg-[#FFD400] bg-opacity-10 text-[#FFD400] px-2 py-0.5 rounded">DIGITALE PRÄSENZ</span>
                  <span className="text-[9px] font-mono bg-[#FFD400] bg-opacity-10 text-[#FFD400] px-2 py-0.5 rounded">ONLINEANFRAGEN</span>
                </div>
                <p className="text-slate-300 italic leading-relaxed text-sm">
                  &ldquo;Als Unternehmen im Forst- und Baggerbetrieb lag unser Fokus immer auf der Arbeit draussen – online waren wir praktisch unsichtbar. Geenie Media hat uns dabei geholfen, unsere digitale Präsenz professionell auszubauen. Das Ergebnis hat mich absolut überzeugt: Wir bekommen nun endlich erste, direkte Onlineanfragen und neue Aufträge ganz unkompliziert über unsere eigene Homepage. Schnelle Umsetzung, ehrliche Beratung und messbare Ergebnisse.&rdquo;
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-[#242832] flex items-center justify-between">
                <div>
                  <span className="block font-bold text-sm text-[#F6F4EA]">Michael Schnepf</span>
                  <span className="block text-xs text-slate-500">Forst &amp; Bagger Schnepf</span>
                </div>
                <span className="text-xs font-mono text-[#FFD400] bg-[#FFD400] bg-opacity-10 px-2 py-0.5 rounded">CH</span>
              </div>
            </div>
            <div className="bg-[#111318] p-8 rounded-lg border border-[#242832] relative flex flex-col justify-between group hover:border-[#1B6BFF] transition-all">
              <div>
                <div className="flex flex-wrap gap-1.5 mb-4">
                  <span className="text-[9px] font-mono bg-[#1B6BFF] bg-opacity-10 text-[#1B6BFF] px-2 py-0.5 rounded">NEUE HOMEPAGE</span>
                  <span className="text-[9px] font-mono bg-[#1B6BFF] bg-opacity-10 text-[#1B6BFF] px-2 py-0.5 rounded">QUALIFIZIERTE LEADS</span>
                </div>
                <p className="text-slate-300 italic leading-relaxed text-sm">
                  &ldquo;Wir brauchten für Balero dringend einen frischen digitalen Auftritt, der nicht nur gut aussieht, sondern auch funktioniert. Geenie Media hat uns eine komplett neue Homepage und eine starke digitale Präsenz aufgebaut. Für mich in der Produktion ist das Resultat Gold wert: Die neue Seite bringt uns direkt und zuverlässig qualifizierte Kontakte für neue Aufträge ein. Wer eine Agentur sucht, die echtes Geschäft generiert, ist hier genau richtig.&rdquo;
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-[#242832] flex items-center justify-between">
                <div>
                  <span className="block font-bold text-sm text-[#F6F4EA]">Joël Kunz</span>
                  <span className="block text-xs text-slate-500">Produktionsleiter, Balero</span>
                </div>
                <span className="text-xs font-mono text-[#1B6BFF] bg-[#1B6BFF] bg-opacity-10 px-2 py-0.5 rounded">CH</span>
              </div>
            </div>
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
                Bist du bereit für das <br />nächste Level?
              </h2>
              <p className="text-lg font-medium mb-10 max-w-xl mx-auto opacity-80">
                Lass uns in 15 Minuten prüfen, wo dein grösstes Potenzial liegt. Kostenlos, unverbindlich und garantiert ohne Verkaufs-Pitch.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button 
                  onClick={() => setSystemCheckOpen(true)}
                  className="bg-[#050505] text-[#DEFF9A] hover:bg-[#111318] px-10 py-5 rounded-xl font-mono font-bold flex items-center justify-center gap-3 transition-all active:scale-[0.98] shadow-xl"
                >
                  Kostenloses Erstgespräch <ArrowRight className="w-5 h-5" />
                </button>
              </div>
              <p className="mt-8 text-xs font-mono uppercase tracking-widest opacity-60">
                Nur 2 Plätze pro Monat für Neukunden verfügbar.
              </p>
            </div>
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
