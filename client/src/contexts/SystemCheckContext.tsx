import React, { createContext, useContext, useState } from "react";
import { toast } from "sonner";
import { X, ArrowRight } from "lucide-react";

interface SystemCheckContextType {
  isSystemCheckOpen: boolean;
  openSystemCheck: () => void;
  closeSystemCheck: () => void;
}

const SystemCheckContext = createContext<SystemCheckContextType | undefined>(undefined);

export function SystemCheckProvider({ children }: { children: React.ReactNode }) {
  const [isSystemCheckOpen, setIsSystemCheckOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", company: "", phone: "" });

  const openSystemCheck = () => setIsSystemCheckOpen(true);
  const closeSystemCheck = () => setIsSystemCheckOpen(false);

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
          message: "Anfrage für den kostenlosen 15-Minuten System-Check."
        })
      });

      if (response.ok) {
        toast.success("Anfrage erfolgreich gesendet! Wir melden uns in Kürze.");
        setIsSystemCheckOpen(false);
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

  return (
    <SystemCheckContext.Provider value={{ 
      isSystemCheckOpen, 
      openSystemCheck, 
      closeSystemCheck
    }}>
      {children}
      
      {/* Global System-Check Modal */}
      {isSystemCheckOpen && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 sm:p-6">
          <div className="absolute inset-0 bg-[#050505] bg-opacity-90 backdrop-blur-sm" onClick={closeSystemCheck}></div>
          <div className="bg-[#111318] border border-[#242832] w-full max-w-lg rounded-2xl relative z-[10000] overflow-hidden animate-in zoom-in-95 duration-200 shadow-2xl">
            <div className="p-8">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-[#F6F4EA]">System-Check buchen</h3>
                  <p className="text-sm text-slate-400 mt-1">Wähle deinen Termin für die 15-minütige Analyse.</p>
                </div>
                <button onClick={closeSystemCheck} className="p-2 hover:bg-[#050505] rounded-full text-slate-500 hover:text-[#F6F4EA] transition-all">
                  <X className="w-5 h-5" />
                </button>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-mono uppercase tracking-widest text-slate-500 mb-2">Name *</label>
                  <input 
                    type="text" 
                    required
                    className="w-full bg-[#050505] border border-[#242832] rounded-lg px-4 py-3 text-sm text-[#F6F4EA] focus:outline-none focus:border-[#DEFF9A] transition-colors"
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
                    className="w-full bg-[#050505] border border-[#242832] rounded-lg px-4 py-3 text-sm text-[#F6F4EA] focus:outline-none focus:border-[#DEFF9A] transition-colors"
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
                      className="w-full bg-[#050505] border border-[#242832] rounded-lg px-4 py-3 text-sm text-[#F6F4EA] focus:outline-none focus:border-[#DEFF9A] transition-colors"
                      placeholder="Firma GmbH"
                      value={formData.company}
                      onChange={(e) => setFormData({...formData, company: e.target.value})}
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-widest text-slate-500 mb-2">Telefon (optional)</label>
                    <input 
                      type="tel" 
                      className="w-full bg-[#050505] border border-[#242832] rounded-lg px-4 py-3 text-sm text-[#F6F4EA] focus:outline-none focus:border-[#DEFF9A] transition-colors"
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
    </SystemCheckContext.Provider>
  );
}

export function useSystemCheck() {
  const context = useContext(SystemCheckContext);
  if (!context) {
    throw new Error("useSystemCheck must be used within a SystemCheckProvider");
  }
  return context;
}
