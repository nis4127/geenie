import React, { useRef, useState } from "react";
import { 
  ArrowRight, 
  CheckCircle2, 
  X,
  Send,
  Upload,
  Clock,
  MessageSquare,
  Sparkles
} from "lucide-react";
import { toast } from "sonner";
import Layout from "../components/Layout";
import { useSystemCheck } from "../contexts/SystemCheckContext";
import {
  getOrAssignVariant,
  trackProjectRequestStart,
  trackProjectRequestSubmit,
} from "../lib/ctaExperiment";

const PROJECT_REQUEST_EXPERIMENT = {
  id: "home_cta_01",
  page: "home",
  ctaId: "home_hero_project_request",
} as const;

export default function Projektanfrage() {
  const { openSystemCheck } = useSystemCheck();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const hasTrackedFormStart = useRef(false);

  const handleFormStart = () => {
    if (hasTrackedFormStart.current) return;

    hasTrackedFormStart.current = true;
    const variant = getOrAssignVariant(PROJECT_REQUEST_EXPERIMENT.id);
    trackProjectRequestStart(PROJECT_REQUEST_EXPERIMENT, variant);
  };
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    projectType: "Website",
    budget: "",
    message: ""
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("https://formspree.io/f/mlgvqkba", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify({
          ...formData,
          _subject: `Neue Projektanfrage: ${formData.projectType} von ${formData.name}`
        })
      });

      if (response.ok) {
        const variant = getOrAssignVariant(PROJECT_REQUEST_EXPERIMENT.id);
        trackProjectRequestSubmit(PROJECT_REQUEST_EXPERIMENT, variant);
        setSubmitted(true);
        toast.success("Anfrage erfolgreich gesendet!");
      } else {
        toast.error("Fehler beim Senden. Bitte versuchen Sie es später erneut.");
      }
    } catch (error) {
      toast.error("Verbindungsfehler. Bitte überprüfen Sie Ihre Internetverbindung.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <Layout>
        <div className="min-h-[70vh] flex items-center justify-center container mx-auto px-6 py-20">
        <div className="max-w-2xl w-full bg-[#111318] border border-[#242832] rounded-3xl p-10 sm:p-16 text-center animate-in zoom-in-95 duration-300">
          <div className="w-20 h-20 bg-[#DEFF9A] rounded-full flex items-center justify-center mx-auto mb-8">
            <CheckCircle2 className="w-10 h-10 text-[#050505]" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-sans font-bold mb-6 text-[#F6F4EA]">Anfrage erhalten!</h2>
          <p className="text-[#94A3B8] text-lg mb-10">
            Vielen Dank für Ihr Vertrauen. Wir haben Ihre Projektanfrage erhalten und werden uns innerhalb der nächsten 24-48 Stunden bei Ihnen melden.
          </p>
          <button 
            onClick={() => window.location.href = "/"}
            className="bg-[#DEFF9A] text-[#050505] hover:bg-[#cbf47d] px-8 py-4 rounded-xl font-mono font-bold transition-all active:scale-[0.98]"
          >
            Zurück zur Startseite
          </button>
        </div>
      </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="py-20 lg:py-32 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10 mix-blend-screen pointer-events-none">
        <img 
          src="/assets/bg-transformation.webp" 
          alt="Background" 
          className="w-full h-full object-cover"
          loading="lazy"
          decoding="async"
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start max-w-6xl mx-auto">
          {/* Info Side */}
          <div className="space-y-8 lg:sticky lg:top-32">
            <div>
              <span className="text-xs font-mono text-[#DEFF9A] tracking-widest uppercase font-bold">Projektanfrage</span>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mt-4 leading-[0.9] uppercase">
                Bereit für <br />
                <span className="text-[#DEFF9A]">Präzision?</span>
              </h1>
              <p className="text-slate-400 mt-8 text-xl leading-relaxed font-medium">
                Kein Marketing-Gelaber. Wir bauen Systeme, die funktionieren. Erzähl uns von deinem Projekt und wir prüfen die Machbarkeit.
              </p>
            </div>

            <div className="space-y-6 pt-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#111318] border border-[#242832] flex items-center justify-center shrink-0">
                  <Clock className="w-6 h-6 text-[#DEFF9A]" />
                </div>
                <div>
                  <h4 className="font-bold text-[#F6F4EA]">Schnelle Rückmeldung</h4>
                  <p className="text-sm text-slate-500">Wir antworten garantiert innerhalb von 48 Stunden.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#111318] border border-[#242832] flex items-center justify-center shrink-0">
                  <MessageSquare className="w-6 h-6 text-[#1B6BFF]" />
                </div>
                <div>
                  <h4 className="font-bold text-[#F6F4EA]">Persönliche Beratung</h4>
                  <p className="text-sm text-slate-500">Jedes Projekt beginnt mit einem klaren Verständnis Ihrer Ziele.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#111318] border border-[#242832] flex items-center justify-center shrink-0">
                  <Sparkles className="w-6 h-6 text-[#FFD400]" />
                </div>
                <div>
                  <h4 className="font-bold text-[#F6F4EA]">Höchste Qualität</h4>
                  <p className="text-sm text-slate-500">Wir liefern Ergebnisse, die nicht nur gut aussehen, sondern funktionieren.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form Side */}
          <div className="bg-[#111318] border border-[#242832] p-10 sm:p-12 relative">
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <label className="text-[10px] font-mono uppercase tracking-[0.2em] text-slate-500 font-bold">Name *</label>
                  <input
                    onFocus={handleFormStart}
                    type="text"
                    required
                    placeholder="Max Mustermann"
                    className="w-full bg-[#050505] border border-[#242832] px-6 py-4 text-sm focus:outline-none focus:border-[#DEFF9A] transition-all font-medium"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                  />
                </div>
                <div className="space-y-3">
                  <label className="text-[10px] font-mono uppercase tracking-[0.2em] text-slate-500 font-bold">Firma</label>
                  <input 
                    type="text" 
                    placeholder="Firma GmbH"
                    className="w-full bg-[#050505] border border-[#242832] px-6 py-4 text-sm focus:outline-none focus:border-[#DEFF9A] transition-all font-medium"
                    value={formData.company}
                    onChange={(e) => setFormData({...formData, company: e.target.value})}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <label className="text-[10px] font-mono uppercase tracking-[0.2em] text-slate-500 font-bold">E-Mail *</label>
                  <input 
                    type="email" 
                    required
                    placeholder="max@beispiel.ch"
                    className="w-full bg-[#050505] border border-[#242832] px-6 py-4 text-sm focus:outline-none focus:border-[#DEFF9A] transition-all font-medium"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                  />
                </div>
                <div className="space-y-3">
                  <label className="text-[10px] font-mono uppercase tracking-[0.2em] text-slate-500 font-bold">Telefon</label>
                  <input 
                    type="tel" 
                    placeholder="+41 79 123 45 67"
                    className="w-full bg-[#050505] border border-[#242832] px-6 py-4 text-sm focus:outline-none focus:border-[#DEFF9A] transition-all font-medium"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  />
                </div>
              </div>

              <div className="space-y-3">
                <label className="text-[10px] font-mono uppercase tracking-[0.2em] text-slate-500 font-bold">Art des Projekts</label>
                <select 
                  className="w-full bg-[#050505] border border-[#242832] px-6 py-4 text-sm focus:outline-none focus:border-[#DEFF9A] transition-all appearance-none font-medium"
                  value={formData.projectType}
                  onChange={(e) => setFormData({...formData, projectType: e.target.value})}
                >
                  <option>Website / Landingpage</option>
                  <option>Branding / Corporate Design</option>
                  <option>Printmedien (Flyer, Broschüren)</option>
                  <option>Social Media Assets</option>
                  <option>Sonstiges</option>
                </select>
              </div>

              <div className="space-y-3">
                <label className="text-[10px] font-mono uppercase tracking-[0.2em] text-slate-500 font-bold">Budget (optional)</label>
                <input 
                  type="text" 
                  placeholder="z.B. 2.000 - 5.000 CHF"
                  className="w-full bg-[#050505] border border-[#242832] px-6 py-4 text-sm focus:outline-none focus:border-[#DEFF9A] transition-all font-medium"
                  value={formData.budget}
                  onChange={(e) => setFormData({...formData, budget: e.target.value})}
                />
              </div>

              <div className="space-y-3">
                <label className="text-[10px] font-mono uppercase tracking-[0.2em] text-slate-500 font-bold">Nachricht *</label>
                <textarea 
                  required
                  rows={4}
                  placeholder="Beschreibe kurz dein Vorhaben..."
                  className="w-full bg-[#050505] border border-[#242832] px-6 py-4 text-sm focus:outline-none focus:border-[#DEFF9A] transition-all resize-none font-medium"
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                ></textarea>
              </div>

              <button 
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#DEFF9A] hover:bg-[#cbf47d] text-[#050505] py-6 font-mono font-bold flex items-center justify-center gap-3 transition-all active:scale-[0.98] disabled:opacity-50 uppercase tracking-widest"
              >
                {isSubmitting ? "Wird gesendet..." : "Anfrage senden"} <Send className="w-4 h-4" />
              </button>

              <p className="text-[10px] text-center text-slate-600">
                Durch das Absenden akzeptieren Sie unsere Datenschutzbestimmungen.
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
    </Layout>
  );
}
