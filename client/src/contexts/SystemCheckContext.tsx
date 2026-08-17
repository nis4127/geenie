import React, { createContext, useContext, useState } from "react";
import { toast } from "sonner";

interface SystemCheckContextType {
  isSystemCheckOpen: boolean;
  openSystemCheck: () => void;
  closeSystemCheck: () => void;
  submitSystemCheck: (formData: any) => Promise<void>;
  isSubmitting: boolean;
}

const SystemCheckContext = createContext<SystemCheckContextType | undefined>(undefined);

export function SystemCheckProvider({ children }: { children: React.ReactNode }) {
  const [isSystemCheckOpen, setIsSystemCheckOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const openSystemCheck = () => setIsSystemCheckOpen(true);
  const closeSystemCheck = () => setIsSystemCheckOpen(false);

  const submitSystemCheck = async (formData: any) => {
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
      closeSystemCheck, 
      submitSystemCheck,
      isSubmitting 
    }}>
      {children}
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
