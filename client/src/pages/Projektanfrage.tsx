import React, { useState } from "react";
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

export default function Projektanfrage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
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
      // Formspree Integration (using same endpoint as existing form for now, or separate if provided)
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
    );
  }

  return (
    <div className="py-20 lg:py-32 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10 mix-blend-screen pointer-events-none">
        <img 
          src="/assets/bg-transformation.png" 
          alt="Background" 
          className="w-full h-full object-cover"
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start max-w-6xl mx-auto">
          {/* Info Side */}
          <div className="space-y-8 lg:sticky lg:top-32">
            <div>
              <span className="text-xs font-mono text-[#DEFF9A] tracking-widest uppercase font-bold">Projektanfrage</span>
              <h1 className="text-4xl sm:text-5xl font-sans font-bold mt-4 leading-tight">
                Lassen Sie uns etwas <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFD400] via-[#DEFF9A] to-[#1B6BFF]">
                  Grossartiges schaffen.
                </span>
              </h1>
              <p className="text-slate-400 mt-6 text-lg leading-relaxed">
                Egal ob Sie eine neue Website benötigen, Ihr Branding auffrischen wollen oder Printmedien brauchen – wir sind Ihr Partner für die Umsetzung.
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
          <div className="bg-[#111318] border border-[#242832] rounded-3xl p-8 sm:p-10 shadow-2xl relative">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-mono uppercase tracking-widest text-slate-500">Name *</label>
                  <input 
                    type="text" 
                    required
                    placeholder="Max Mustermann"
                    className="w-full bg-[#050505] border border-[#242832] rounded-xl px-5 py-4 text-sm focus:outline-none focus:border-[#DEFF9A] transition-all"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-mono uppercase tracking-widest text-slate-500">Firma</label>
                  <input 
                    type="text" 
                    placeholder="Firma GmbH"
                    className="w-full bg-[#050505] border border-[#242832] rounded-xl px-5 py-4 text-sm focus:outline-none focus:border-[#DEFF9A] transition-all"
                    value={formData.company}
                    onChange={(e) => setFormData({...formData, company: e.target.value})}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-mono uppercase tracking-widest text-slate-500">E-Mail *</label>
                  <input 
                    type="email" 
                    required
                    placeholder="max@beispiel.ch"
                    className="w-full bg-[#050505] border border-[#242832] rounded-xl px-5 py-4 text-sm focus:outline-none focus:border-[#DEFF9A] transition-all"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-mono uppercase tracking-widest text-slate-500">Telefon</label>
                  <input 
                    type="tel" 
                    placeholder="+41 79 123 45 67"
                    className="w-full bg-[#050505] border border-[#242832] rounded-xl px-5 py-4 text-sm focus:outline-none focus:border-[#DEFF9A] transition-all"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-mono uppercase tracking-widest text-slate-500">Art des Projekts</label>
                <select 
                  className="w-full bg-[#050505] border border-[#242832] rounded-xl px-5 py-4 text-sm focus:outline-none focus:border-[#DEFF9A] transition-all appearance-none"
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

              <div className="space-y-2">
                <label className="text-xs font-mono uppercase tracking-widest text-slate-500">Budget (optional)</label>
                <input 
                  type="text" 
                  placeholder="z.B. 2.000 - 5.000 CHF"
                  className="w-full bg-[#050505] border border-[#242832] rounded-xl px-5 py-4 text-sm focus:outline-none focus:border-[#DEFF9A] transition-all"
                  value={formData.budget}
                  onChange={(e) => setFormData({...formData, budget: e.target.value})}
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-mono uppercase tracking-widest text-slate-500">Ihre Nachricht *</label>
                <textarea 
                  required
                  rows={4}
                  placeholder="Beschreiben Sie kurz Ihr Vorhaben..."
                  className="w-full bg-[#050505] border border-[#242832] rounded-xl px-5 py-4 text-sm focus:outline-none focus:border-[#DEFF9A] transition-all resize-none"
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                ></textarea>
              </div>

              <button 
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#DEFF9A] hover:bg-[#cbf47d] text-[#050505] py-5 rounded-xl font-mono font-bold flex items-center justify-center gap-3 transition-all active:scale-[0.98] disabled:opacity-50"
              >
                {isSubmitting ? "Wird gesendet..." : "Projektanfrage senden"} <Send className="w-4 h-4" />
              </button>

              <p className="text-[10px] text-center text-slate-600">
                Durch das Absenden akzeptieren Sie unsere Datenschutzbestimmungen.
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
