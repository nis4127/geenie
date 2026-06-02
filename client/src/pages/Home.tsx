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
import { toast } from "sonner";

export default function Home() {
  const [systemCheckOpen, setSystemCheckOpen] = useState(false);
  const [impressumOpen, setImpressumOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<"0-to-1" | "framing" | "hacking">("0-to-1");
  const [mobileMenuOpen, setMenuOpen] = useState(false);
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
      // Formspree Integration
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
    setMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-[#050505] text-[#F6F4EA] flex flex-col font-sans selection:bg-[#DEFF9A] selection:text-[#050505]">
      
      {/* 1. Navigation Header */}
      <header className="sticky top-0 z-50 bg-[#050505] border-b border-[#242832] backdrop-blur-md bg-opacity-90">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img 
              src="/manus-storage/BildspracheIcon_farbig_ddcb4b1f.png" 
              alt="Geenie Icon" 
              className="w-8 h-8 object-contain"
            />
            <div>
              <span className="font-sans font-bold text-lg tracking-wider block">GEENIE</span>
              <span className="text-[9px] tracking-widest text-[#DEFF9A] uppercase font-mono block">Growth Operator</span>
            </div>
          </div>

          <nav className="hidden lg:flex items-center gap-8 text-sm font-medium">
            <button onClick={() => scrollToSection("problem")} className="text-slate-400 hover:text-[#DEFF9A] transition-colors">Das Problem</button>
            <button onClick={() => scrollToSection("positioning")} className="text-slate-400 hover:text-[#DEFF9A] transition-colors">Unser Ansatz</button>
            <button onClick={() => scrollToSection("services")} className="text-slate-400 hover:text-[#DEFF9A] transition-colors">Kernsäulen</button>
            <button onClick={() => scrollToSection("transformation")} className="text-slate-400 hover:text-[#DEFF9A] transition-colors">Transformation</button>
            <button onClick={() => scrollToSection("process")} className="text-slate-400 hover:text-[#DEFF9A] transition-colors">Prozess</button>
            <button onClick={() => scrollToSection("social-proof")} className="text-slate-400 hover:text-[#DEFF9A] transition-colors">Social Proof</button>
          </nav>

          <button 
            onClick={() => setSystemCheckOpen(true)}
            className="hidden sm:block bg-[#DEFF9A] hover:bg-[#cbf47d] text-[#050505] text-xs font-mono font-bold px-4 py-2 rounded transition-all active:scale-[0.98]"
          >
            15-Minuten System-Check
          </button>

          {/* Mobile Menu Trigger */}
          <button 
            onClick={() => setMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-[#F6F4EA] hover:text-[#DEFF9A]"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 top-[65px] z-40 bg-[#050505] text-[#F6F4EA] flex flex-col p-6 lg:hidden border-t border-[#242832] animate-in fade-in slide-in-from-top duration-200">
          <div className="flex flex-col gap-6 text-lg font-medium">
            <button onClick={() => scrollToSection("problem")} className="text-left py-2 border-b border-[#242832] hover:text-[#DEFF9A]">Das Problem</button>
            <button onClick={() => scrollToSection("positioning")} className="text-left py-2 border-b border-[#242832] hover:text-[#DEFF9A]">Unser Ansatz</button>
            <button onClick={() => scrollToSection("services")} className="text-left py-2 border-b border-[#242832] hover:text-[#DEFF9A]">Kernsäulen</button>
            <button onClick={() => scrollToSection("transformation")} className="text-left py-2 border-b border-[#242832] hover:text-[#DEFF9A]">Transformation</button>
            <button onClick={() => scrollToSection("process")} className="text-left py-2 border-b border-[#242832] hover:text-[#DEFF9A]">Prozess</button>
            <button onClick={() => scrollToSection("social-proof")} className="text-left py-2 border-b border-[#242832] hover:text-[#DEFF9A]">Social Proof</button>
            <button 
              onClick={() => { setSystemCheckOpen(true); setMenuOpen(false); }}
              className="mt-4 bg-[#DEFF9A] text-[#050505] py-3 rounded text-center font-mono flex items-center justify-center gap-2"
            >
              15-Minuten System-Check <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {/* 1. Hero Section */}
      <section className="relative py-24 lg:py-32 overflow-hidden border-b border-[#242832]">
        <div className="absolute inset-0 opacity-30 mix-blend-screen pointer-events-none">
          <img 
            src="https://d2xsxph8kpxj0f.cloudfront.net/310519663702552407/BQZ3mZXWwzZe6WnFsghK6k/geenie_hero_banner-W7Q57SVFRcR3DLuuHkG9NQ.webp" 
            alt="Abstract Background" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-[radial-gradient(#242832_1px,transparent_1px)] [background-size:24px_24px] opacity-25 pointer-events-none"></div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#111318] border border-[#DEFF9A] border-opacity-20 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-[#DEFF9A] animate-pulse"></span>
              <span className="text-[10px] font-mono tracking-widest text-[#DEFF9A] uppercase">Offline stark. Online dominant.</span>
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
                15-Minuten System-Check <ArrowRight className="w-4 h-4" />
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
      <section id="problem" className="py-20 bg-[#111318] border-b border-[#242832]">
        <div className="container mx-auto px-6">
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
      <section id="positioning" className="py-20 bg-[#050505] border-b border-[#242832]">
        <div className="container mx-auto px-6">
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
                Geenie agiert als dein **Fractional CMO**, dein strategischer System-Architekt und Growth-Operator. Wir bauen ein nachhaltiges System, das deine echte Qualität online sichtbar und messbar macht.
              </p>
              <div className="pt-4">
                <button 
                  onClick={() => setSystemCheckOpen(true)}
                  className="bg-[#FFD400] hover:bg-yellow-400 text-[#050505] px-6 py-3 rounded font-mono font-bold flex items-center gap-2 transition-all active:scale-[0.98]"
                >
                  Wie wir arbeiten <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="bg-[#111318] p-8 rounded-lg border border-[#242832] relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 opacity-5 pointer-events-none">
                  <img src="/manus-storage/BildspracheIcon_weissschwarz_DarkMode_46b2a613.png" alt="Geenie Icon" />
                </div>
                
                <h3 className="text-lg font-mono text-[#DEFF9A] tracking-widest uppercase mb-6">Der Geenie-Unterschied</h3>
                
                <div className="space-y-6">
                  <div className="flex gap-4 items-start">
                    <div className="w-8 h-8 rounded bg-[#242832] border border-[#DEFF9A] border-opacity-20 flex items-center justify-center text-[#DEFF9A] shrink-0">
                      <Layers className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="font-bold text-[#F6F4EA]">Systemische Architektur</h4>
                      <p className="text-sm text-slate-400 mt-1">Wir gestalten keine isolierten Webseiten. Wir bauen integrierte, digitale Kundengewinnungssysteme.</p>
                    </div>
                  </div>

                  <div className="flex gap-4 items-start border-t border-[#242832] pt-6">
                    <div className="w-8 h-8 rounded bg-[#242832] border border-[#1B6BFF] border-opacity-20 flex items-center justify-center text-[#1B6BFF] shrink-0">
                      <Zap className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="font-bold text-[#F6F4EA]">Souveräner No-Bullshit-Ansatz</h4>
                      <p className="text-sm text-slate-400 mt-1">Keine komplizierten Marketing-Floskeln oder leere Versprechungen. Wir sprechen Klartext und liefern messbare Ergebnisse.</p>
                    </div>
                  </div>

                  <div className="flex gap-4 items-start border-t border-[#242832] pt-6">
                    <div className="w-8 h-8 rounded bg-[#242832] border border-[#FFD400] border-opacity-20 flex items-center justify-center text-[#FFD400] shrink-0">
                      <ShieldCheck className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="font-bold text-[#F6F4EA]">100% Unabhängigkeit</h4>
                      <p className="text-sm text-slate-400 mt-1">Wir drängen dich nicht in administrative Abhängigkeiten. Wir befähigen dich, deine Systeme selbst zu verstehen und zu kontrollieren.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Leistungs-Section (Kernsäulen) */}
      <section id="services" className="py-20 bg-[#111318] border-b border-[#242832]">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="text-xs font-mono text-[#1B6BFF] tracking-widest uppercase font-bold">Portfolio &bull; Die Kernsäulen</span>
            <h2 className="text-3xl sm:text-4xl font-sans font-bold mt-2">Unser operatives Leistungsspektrum</h2>
            <p className="text-slate-400 mt-2">Drei Säulen, ein Ziel: Dein unaufhaltsames digitales Wachstum.</p>
          </div>

          {/* Interactive Säulen-Selektor */}
          <div className="max-w-5xl mx-auto">
            <div className="flex border-b border-[#242832] mb-8 overflow-x-auto">
              <button 
                onClick={() => setActiveTab("0-to-1")}
                className={`flex-1 py-4 px-6 text-center font-mono text-sm font-bold border-b-2 whitespace-nowrap transition-all ${activeTab === "0-to-1" ? "border-[#DEFF9A] text-[#DEFF9A]" : "border-transparent text-slate-500 hover:text-slate-300"}`}
              >
                0-auf-1 Setups
              </button>
              <button 
                onClick={() => setActiveTab("framing")}
                className={`flex-1 py-4 px-6 text-center font-mono text-sm font-bold border-b-2 whitespace-nowrap transition-all ${activeTab === "framing" ? "border-[#FFD400] text-[#FFD400]" : "border-transparent text-slate-500 hover:text-slate-300"}`}
              >
                Experten-Framing
              </button>
              <button 
                onClick={() => setActiveTab("hacking")}
                className={`flex-1 py-4 px-6 text-center font-mono text-sm font-bold border-b-2 whitespace-nowrap transition-all ${activeTab === "hacking" ? "border-[#1B6BFF] text-[#1B6BFF]" : "border-transparent text-slate-500 hover:text-slate-300"}`}
              >
                System-Hacking
              </button>
            </div>

            {/* Tab Content */}
            <div className="bg-[#050505] p-8 rounded-lg border border-[#242832] min-h-[300px] flex flex-col justify-between">
              {activeTab === "0-to-1" && (
                <div className="space-y-6 animate-in fade-in duration-300">
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-mono bg-[#DEFF9A] bg-opacity-10 text-[#DEFF9A] px-2.5 py-1 rounded">RADIKALE GESCHWINDIGKEIT</span>
                    <h3 className="text-2xl font-bold text-[#F6F4EA]">Schneller Aufbau digitaler Fundamente</h3>
                  </div>
                  <p className="text-slate-400 leading-relaxed">
                    Wir fackeln nicht lange. Innerhalb kürzester Zeit bauen wir dein digitales Fundament auf – ohne wochenlange Abstimmungsschleifen. Deine neue High-End-Plattform geht direkt live, zieht Kunden an und etabliert deine Marke im Markt.
                  </p>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm text-slate-300 font-mono">
                    <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#DEFF9A]" /> High-Performance Landingpages</li>
                    <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#DEFF9A]" /> Integriertes Lead-Tracking</li>
                    <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#DEFF9A]" /> Mobile-First Funnel-Systeme</li>
                    <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#DEFF9A]" /> Blitzschnelles Hosting (CH-Standards)</li>
                  </ul>
                </div>
              )}

              {activeTab === "framing" && (
                <div className="space-y-6 animate-in fade-in duration-300">
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-mono bg-[#FFD400] bg-opacity-10 text-[#FFD400] px-2.5 py-1 rounded">PREMIUM-POSITIONIERUNG</span>
                    <h3 className="text-2xl font-bold text-[#F6F4EA]">Framing, das Premiumpreise legitimiert</h3>
                  </div>
                  <p className="text-slate-400 leading-relaxed">
                    Deine Arbeit ist exzellent – deine visuelle Wahrnehmung muss es auch sein. Wir rücken dein Unternehmen in das richtige Licht. Durch messerscharfes Copywriting und kompromissloses Design erzeugen wir sofortige Autorität, die deine Preise im Markt unangreifbar macht.
                  </p>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm text-slate-300 font-mono">
                    <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#FFD400]" /> Psychologisches Copywriting</li>
                    <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#FFD400]" /> Corporate Design-Systeme</li>
                    <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#FFD400]" /> Digitale Autoritäts-Kampagnen</li>
                    <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#FFD400]" /> Visual Assets auf Enterprise-Niveau</li>
                  </ul>
                </div>
              )}

              {activeTab === "hacking" && (
                <div className="space-y-6 animate-in fade-in duration-300">
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-mono bg-[#1B6BFF] bg-opacity-10 text-[#1B6BFF] px-2.5 py-1 rounded">AUTOMATISIERUNG</span>
                    <h3 className="text-2xl font-bold text-[#F6F4EA]">Workflows verschlanken &amp; automatisieren</h3>
                  </div>
                  <p className="text-slate-400 leading-relaxed">
                    Wir hassen administrative Reibung. Wir analysieren deine Prozesse und automatisieren zeitfressende Workflows. Von der Lead-Erfassung über das CRM bis hin zur Rechnungsstellung – wir bauen Systeme, die für dich arbeiten, nicht umgekehrt.
                  </p>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm text-slate-300 font-mono">
                    <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#1B6BFF]" /> CRM &amp; Lead-Management-Setups</li>
                    <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#1B6BFF]" /> Automatisierte Rechnungs-Workflows</li>
                    <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#1B6BFF]" /> Schnittstellen-Optimierung (API)</li>
                    <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#1B6BFF]" /> Kundengewinnung auf Autopilot</li>
                  </ul>
                </div>
              )}

              <div className="pt-8 border-t border-[#242832] mt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
                <span className="text-xs text-slate-500 font-mono">BEREIT FÜR DIE TRANSFORMATION?</span>
                <button 
                  onClick={() => setSystemCheckOpen(true)}
                  className="w-full sm:w-auto bg-[#DEFF9A] hover:bg-[#cbf47d] text-[#050505] px-6 py-2.5 rounded font-mono text-xs font-bold transition-all active:scale-[0.98]"
                >
                  System-Check für diese Säule starten
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Transformation-/Case-Study-Section */}
      <section id="transformation" className="py-20 bg-[#050505] border-b border-[#242832]">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="text-xs font-mono text-[#1B6BFF] tracking-widest uppercase font-bold">Performance &bull; Transformation</span>
            <h2 className="text-3xl sm:text-4xl font-sans font-bold mt-2">Vorher &bull; Nachher im Vergleich</h2>
            <p className="text-slate-400 mt-2">Echte Resultate unserer Partner nach dem Geenie-System-Setup.</p>
          </div>

          <div className="max-w-5xl mx-auto bg-[#111318] rounded-lg border border-[#242832] overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2 divide-y lg:divide-y-0 lg:divide-x divide-[#242832]">
              {/* Vorher */}
              <div className="p-8 space-y-6 bg-red-950 bg-opacity-5">
                <div className="flex items-center gap-2 text-[#FF4D4F] font-mono text-xs font-bold">
                  <span className="w-2 h-2 rounded-full bg-[#FF4D4F]"></span> IST-ZUSTAND (VOR GEENIE)
                </div>
                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-[#F6F4EA]">Typischer KMU-Auftritt</h3>
                  <p className="text-sm text-slate-400">
                    Ein exzellenter Fachbetrieb mit hervorragenden Referenzen offline, aber die Webseite stammt aus vergangenen Jahren und ist digital unsichtbar.
                  </p>
                  <div className="space-y-2 border-t border-[#242832] pt-4 font-mono text-xs text-slate-400">
                    <div className="flex justify-between"><span>Web-Ladezeit:</span> <span className="text-[#FF4D4F]">5.4s (Sehr langsam)</span></div>
                    <div className="flex justify-between"><span>Mobile Usability:</span> <span className="text-[#FF4D4F]">Mangelhaft</span></div>
                    <div className="flex justify-between"><span>Anfragen über Webseite:</span> <span className="text-[#FF4D4F]">Unter 1 pro Monat</span></div>
                    <div className="flex justify-between"><span>Wahrnehmung:</span> <span className="text-[#FF4D4F]">Über den Preis vergleichbar</span></div>
                  </div>
                </div>
              </div>

              {/* Nachher */}
              <div className="p-8 space-y-6 bg-emerald-950 bg-opacity-5">
                <div className="flex items-center gap-2 text-[#DEFF9A] font-mono text-xs font-bold">
                  <span className="w-2 h-2 rounded-full bg-[#DEFF9A] animate-pulse"></span> SOLL-ZUSTAND (MIT GEENIE)
                </div>
                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-[#F6F4EA]">Digitales Geenie-Ökosystem</h3>
                  <p className="text-sm text-slate-400">
                    Komplettes Re-Branding, High-Performance-Plattform und automatisiertes Lead-Management. Premium-Positionierung erfolgreich etabliert.
                  </p>
                  <div className="space-y-2 border-t border-[#242832] pt-4 font-mono text-xs text-slate-300">
                    <div className="flex justify-between"><span>Web-Ladezeit:</span> <span className="text-[#DEFF9A]">0.8s (Ultra-schnell)</span></div>
                    <div className="flex justify-between"><span>Mobile Usability:</span> <span className="text-[#DEFF9A]">Exzellent (100% Score)</span></div>
                    <div className="flex justify-between"><span>Anfragen über Webseite:</span> <span className="text-[#DEFF9A]">Regelmässige qualifizierte Leads</span></div>
                    <div className="flex justify-between"><span>Wahrnehmung:</span> <span className="text-[#DEFF9A]">Unangefochtener Premium-Anbieter</span></div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-[#050505] p-6 border-t border-[#242832] flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-[#FFD400]" />
                <span className="text-sm font-bold text-[#F6F4EA]">Transformation: Nachhaltiger Anstieg der digitalen Anfragen.</span>
              </div>
              <button 
                onClick={() => setSystemCheckOpen(true)}
                className="w-full sm:w-auto bg-[#DEFF9A] hover:bg-[#cbf47d] text-[#050505] px-6 py-2 rounded font-mono text-xs font-bold transition-all"
              >
                Eigene Transformation starten
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Prozess-Section */}
      <section id="process" className="py-20 bg-[#111318] border-b border-[#242832]">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="text-xs font-mono text-[#1B6BFF] tracking-widest uppercase font-bold">Fahrplan &bull; Der Ablauf</span>
            <h2 className="text-3xl sm:text-4xl font-sans font-bold mt-2">Dein Weg zur digitalen Dominanz</h2>
            <p className="text-slate-400 mt-2">Drei einfache Schritte. Keine Reibung, maximale Geschwindigkeit.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto relative">
            <div className="bg-[#050505] p-8 rounded-lg border border-[#242832] relative overflow-hidden group hover:border-[#DEFF9A] transition-all">
              <span className="absolute top-4 right-4 text-4xl font-mono font-bold text-[#DEFF9A] text-opacity-10 group-hover:text-opacity-20 transition-all">01</span>
              <h3 className="text-lg font-bold text-[#F6F4EA] mt-4">1. System-Check</h3>
              <p className="text-sm text-slate-400 mt-2 leading-relaxed">
                In einem 15-minütigen Gespräch analysieren wir deine aktuelle Online-Wahrnehmung und decken ungenutzte Potenziale auf.
              </p>
            </div>

            <div className="bg-[#050505] p-8 rounded-lg border border-[#242832] relative overflow-hidden group hover:border-[#FFD400] transition-all">
              <span className="absolute top-4 right-4 text-4xl font-mono font-bold text-[#FFD400] text-opacity-10 group-hover:text-opacity-20 transition-all">02</span>
              <h3 className="text-lg font-bold text-[#F6F4EA] mt-4">2. Setup &amp; Framing</h3>
              <p className="text-sm text-slate-400 mt-2 leading-relaxed">
                Wir konzipieren und bauen dein digitales Ökosystem. Blitzschnell, psychologisch optimiert und visuell absolut überlegen.
              </p>
            </div>

            <div className="bg-[#050505] p-8 rounded-lg border border-[#242832] relative overflow-hidden group hover:border-[#1B6BFF] transition-all">
              <span className="absolute top-4 right-4 text-4xl font-mono font-bold text-[#1B6BFF] text-opacity-10 group-hover:text-opacity-20 transition-all">03</span>
              <h3 className="text-lg font-bold text-[#F6F4EA] mt-4">3. Dominanz &amp; Skalierung</h3>
              <p className="text-sm text-slate-400 mt-2 leading-relaxed">
                Dein System geht live. Wir automatisieren deine Workflows, eliminieren Reibungsverluste und skalieren deine Premium-Anfragen.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Vertrauens-Section (Social Proof - Exakt angepasst) */}
      <section id="social-proof" className="py-20 bg-[#050505] border-b border-[#242832]">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="text-xs font-mono text-[#1B6BFF] tracking-widest uppercase font-bold">Ergebnisse &bull; Social Proof</span>
            <h2 className="text-3xl sm:text-4xl font-sans font-bold mt-2">Beweise statt Versprechungen</h2>
            <p className="text-slate-400 mt-2">Warum führende Unternehmen und Macher auf das Geenie-System vertrauen.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Testimonial 1: Confiserie Jonasch */}
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

            {/* Testimonial 2: Forst & Bagger Schnepf */}
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

            {/* Testimonial 3: Balero */}
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

      {/* 8. CTA-Section */}
      <section className="py-24 bg-[#111318] relative overflow-hidden border-b border-[#242832]">
        <div className="absolute inset-0 opacity-20 mix-blend-screen pointer-events-none">
          <img 
            src="https://d2xsxph8kpxj0f.cloudfront.net/310519663702552407/BQZ3mZXWwzZe6WnFsghK6k/geenie_brand_values-W8R67SVFRcR3DLuuHkG9NQ.webp" 
            alt="Brand Values Background" 
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="container mx-auto px-6 relative z-10 text-center max-w-3xl">
          <span className="text-xs font-mono text-[#DEFF9A] tracking-widest uppercase font-bold">DEIN SYSTEM-UPGRADE</span>
          <h2 className="text-3xl sm:text-5xl font-sans font-bold mt-4 mb-6 leading-tight">
            Bereit für digitale Dominanz?
          </h2>
          <p className="text-base sm:text-lg text-slate-400 mb-8 leading-relaxed">
            Sichere dir jetzt deinen kostenlosen, 15-minütigen System-Check. Wir analysieren deine aktuelle Positionierung und zeigen dir den direkten Weg zu mehr Premium-Kunden.
          </p>
          <button 
            onClick={() => setSystemCheckOpen(true)}
            className="bg-[#DEFF9A] hover:bg-[#cbf47d] text-[#050505] px-8 py-4 rounded font-mono font-bold text-sm inline-flex items-center gap-2 transition-all active:scale-[0.98]"
          >
            Kostenlosen System-Check starten <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>

      {/* 9. Footer-System */}
      <footer className="bg-[#050505] text-slate-500 py-16 border-t border-[#242832] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 mix-blend-screen pointer-events-none">
          <img 
            src="https://d2xsxph8kpxj0f.cloudfront.net/310519663702552407/BQZ3mZXWwzZe6WnFsghK6k/geenie_abstract_footer-fx7AgbG36FeUoSmeDyscw3.webp" 
            alt="Abstract Footer Background" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 border-b border-[#242832] pb-12 mb-12">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <img 
                  src="/manus-storage/BildspracheIcon_weissschwarz_DarkMode_46b2a613.png" 
                  alt="Geenie Icon" 
                  className="w-8 h-8 object-contain"
                />
                <div>
                  <span className="font-sans font-bold text-base tracking-wider text-[#F6F4EA] block">GEENIE</span>
                  <span className="text-[10px] tracking-widest text-[#DEFF9A] uppercase font-mono block">Growth Operator</span>
                </div>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                Wir übersetzen rohe Leidenschaft in digitale Dominanz. Ohne Marketing-Gelaber, konsequent umgesetzt.
              </p>
            </div>

            <div>
              <h4 className="text-xs font-mono text-[#DEFF9A] uppercase tracking-wider mb-4">Navigation</h4>
              <ul className="space-y-2 text-xs">
                <li><button onClick={() => scrollToSection("problem")} className="hover:text-[#DEFF9A] transition-colors">Das Problem</button></li>
                <li><button onClick={() => scrollToSection("positioning")} className="hover:text-[#DEFF9A] transition-colors">Unser Ansatz</button></li>
                <li><button onClick={() => scrollToSection("services")} className="hover:text-[#DEFF9A] transition-colors">Kernsäulen</button></li>
                <li><button onClick={() => scrollToSection("transformation")} className="hover:text-[#DEFF9A] transition-colors">Vorher / Nachher</button></li>
              </ul>
            </div>

            <div>
              <h4 className="text-xs font-mono text-[#DEFF9A] uppercase tracking-wider mb-4">Kontakt</h4>
              <ul className="space-y-2 text-xs">
                <li className="text-slate-400">Geenie Media</li>
                <li className="text-slate-400">Basel, Schweiz</li>
                <li><a href="mailto:geenie.schweiz@gmail.com" className="hover:text-[#DEFF9A] transition-colors">geenie.schweiz@gmail.com</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-xs font-mono text-[#DEFF9A] uppercase tracking-wider mb-4">Rechtliches</h4>
              <ul className="space-y-2 text-xs">
                <li><button onClick={() => setImpressumOpen(true)} className="hover:text-[#DEFF9A] transition-colors">Impressum & Datenschutz</button></li>
                <li className="text-slate-400 font-mono text-[10px]">VERSION: 2.0.0 (CH)</li>
              </ul>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
            <p>&copy; 2026 Geenie Media. Alle Rechte vorbehalten. Konsequent umgesetzt in der Schweiz.</p>
            <div className="flex gap-6">
              <a href="mailto:geenie.schweiz@gmail.com" className="hover:text-[#DEFF9A] transition-colors">Feedback &amp; Support</a>
            </div>
          </div>
        </div>
      </footer>

      {/* Interactive System Check Modal */}
      {systemCheckOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-80 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-[#111318] border border-[#242832] rounded-lg p-6 sm:p-8 max-w-md w-full relative">
            <button 
              onClick={() => setSystemCheckOpen(false)}
              className="absolute top-4 right-4 text-slate-400 hover:text-[#F6F4EA]"
            >
              <XCircle className="w-6 h-6" />
            </button>

            <div className="text-center mb-6">
              <span className="text-[10px] font-mono text-[#DEFF9A] uppercase tracking-widest">Growth-Analyse</span>
              <h3 className="text-2xl font-bold text-[#F6F4EA] mt-1">15-Minuten System-Check</h3>
              <p className="text-xs text-slate-400 mt-2">Lass uns gemeinsam prüfen, wie wir deine Offline-Stärke in digitale Dominanz verwandeln.</p>
            </div>

            <form onSubmit={handleSystemCheckSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-mono text-slate-400 uppercase mb-1">Dein Name *</label>
                <input 
                  type="text" 
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-[#050505] border border-[#242832] rounded px-3 py-2 text-sm text-[#F6F4EA] focus:outline-none focus:border-[#DEFF9A]"
                  placeholder="z.B. Beat Muster"
                />
              </div>

              <div>
                <label className="block text-xs font-mono text-slate-400 uppercase mb-1">E-Mail-Adresse *</label>
                <input 
                  type="email" 
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-[#050505] border border-[#242832] rounded px-3 py-2 text-sm text-[#F6F4EA] focus:outline-none focus:border-[#DEFF9A]"
                  placeholder="beat@muster-gmbh.ch"
                />
              </div>

              <div>
                <label className="block text-xs font-mono text-slate-400 uppercase mb-1">Unternehmen *</label>
                <input 
                  type="text" 
                  required
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  className="w-full bg-[#050505] border border-[#242832] rounded px-3 py-2 text-sm text-[#F6F4EA] focus:outline-none focus:border-[#DEFF9A]"
                  placeholder="Muster Holzbau AG"
                />
              </div>

              <div>
                <label className="block text-xs font-mono text-slate-400 uppercase mb-1">Telefonnummer (optional)</label>
                <input 
                  type="tel" 
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full bg-[#050505] border border-[#242832] rounded px-3 py-2 text-sm text-[#F6F4EA] focus:outline-none focus:border-[#DEFF9A]"
                  placeholder="+41 79 123 45 67"
                />
              </div>

              <button 
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#DEFF9A] hover:bg-[#cbf47d] text-[#050505] font-mono font-bold py-3 rounded text-sm transition-all active:scale-[0.98] mt-2 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <span className="w-4 h-4 border-2 border-[#050505] border-t-transparent rounded-full animate-spin"></span>
                    Wird gesendet...
                  </>
                ) : (
                  "Analyse anfordern"
                )}
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Interactive Impressum Modal */}
      {impressumOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-80 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-[#111318] border border-[#242832] rounded-lg p-6 sm:p-10 max-w-2xl w-full relative max-h-[85vh] overflow-y-auto">
            <button 
              onClick={() => setImpressumOpen(false)}
              className="absolute top-4 right-4 text-slate-400 hover:text-[#F6F4EA] transition-colors"
            >
              <XCircle className="w-6 h-6" />
            </button>

            <h3 className="text-3xl font-bold text-[#F6F4EA] mb-8 font-sans">Impressum</h3>
            
            <div className="space-y-6 text-sm text-slate-400 leading-relaxed">
              <div>
                <h4 className="text-[#DEFF9A] font-mono uppercase tracking-wider mb-2 text-xs">Kontaktadresse & Betreiber</h4>
                <p className="text-[#F6F4EA] font-medium">Geenie Media</p>
                <p>Yannis Denzler</p>
                <p>Pestalozzistrasse 68a</p>
                <p>4132 Muttenz</p>
                <p>Schweiz</p>
              </div>

              <div>
                <h4 className="text-[#DEFF9A] font-mono uppercase tracking-wider mb-2 text-xs">Kontakt</h4>
                <p>E-Mail: <a href="mailto:geenie.schweiz@gmail.com" className="text-[#1B6BFF] hover:underline">geenie.schweiz@gmail.com</a></p>
              </div>

              <div>
                <h4 className="text-[#DEFF9A] font-mono uppercase tracking-wider mb-2 text-xs">Unternehmens-Identifikationsnummer (UID)</h4>
                <p>CHE-260.224.627</p>
              </div>

              <div className="pt-6 border-t border-[#242832]">
                <h4 className="text-[#F6F4EA] font-bold mb-2">Haftungsausschluss</h4>
                <p>Der Autor übernimmt keinerlei Gewähr hinsichtlich der inhaltlichen Richtigkeit, Genauigkeit, Aktualität, Zuverlässigkeit und Vollständigkeit der Informationen. Haftungsansprüche gegen den Autor wegen Schäden materieller oder immaterieller Art, welche aus dem Zugriff oder der Nutzung bzw. Nichtnutzung der veröffentlichten Informationen, durch Missbrauch der Verbindung oder durch technische Störungen entstanden sind, werden ausgeschlossen. Alle Angebote sind unverbindlich. Der Autor behält es sich ausdrücklich vor, Teile der Seiten oder das gesamte Angebot ohne gesonderte Ankündigung zu verändern, zu ergänzen, zu löschen oder die Veröffentlichung zeitweise oder endgültig einzustellen.</p>
              </div>

              <div>
                <h4 className="text-[#F6F4EA] font-bold mb-2">Haftung für Links</h4>
                <p>Verweise und Links auf Webseiten Dritter liegen ausserhalb unseres Verantwortungsbereichs. Es wird jegliche Verantwortung für solche Webseiten abgelehnt. Der Zugriff und die Nutzung solcher Webseiten erfolgen auf eigene Gefahr des Nutzers oder der Nutzerin.</p>
              </div>

              <div>
                <h4 className="text-[#F6F4EA] font-bold mb-2">Urheberrechte</h4>
                <p>Die Urheber- und alle anderen Rechte an Inhalten, Bildern, Fotos oder anderen Dateien auf der Website gehören ausschliesslich Geenie Media oder den speziell genannten Rechtsinhabern. Für die Reproduktion jeglicher Elemente ist die schriftliche Zustimmung der Urheberrechtsträger im Voraus einzuholen.</p>
              </div>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
