import { useEffect, useState } from "react";
import { loadAnalyticsScript } from "../lib/analytics";

type ConsentState = "unknown" | "granted" | "denied";
const CONSENT_KEY = "geenie_analytics_consent";

function readConsent(): ConsentState {
  if (typeof window === "undefined") return "unknown";

  const stored = window.localStorage.getItem(CONSENT_KEY);
  return stored === "granted" || stored === "denied" ? stored : "unknown";
}

export default function CookieConsent() {
  const [consent, setConsent] = useState<ConsentState>("unknown");

  useEffect(() => {
    const current = readConsent();
    setConsent(current);

    if (current === "granted") {
      void loadAnalyticsScript();
    }
  }, []);

  function choose(nextConsent: Exclude<ConsentState, "unknown">) {
    window.localStorage.setItem(CONSENT_KEY, nextConsent);
    setConsent(nextConsent);

    if (nextConsent === "granted") {
      void loadAnalyticsScript();
    }
  }

  if (consent !== "unknown") return null;

  return (
    <aside
      aria-label="Cookie-Einstellungen"
      className="fixed inset-x-4 bottom-4 z-[120] mx-auto max-w-3xl border border-[#3a414d] bg-[#111318] p-5 text-[#F6F4EA] shadow-2xl sm:inset-x-6 sm:p-6"
    >
      <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between sm:gap-8">
        <div className="max-w-2xl space-y-2">
          <p className="text-xs font-mono font-bold uppercase tracking-[0.18em] text-[#DEFF9A]">
            Datenschutz & Cookies
          </p>
          <p className="text-sm leading-relaxed text-slate-300">
            Wir verwenden nur technisch notwendige Funktionen. Mit Ihrer Zustimmung
            dürfen wir zusätzlich anonyme Nutzungsdaten messen, um CTAs und Inhalte
            der Website zu verbessern.
          </p>
          <a
            href="/datenschutz"
            className="inline-block text-xs font-mono text-slate-400 underline underline-offset-4 transition-colors hover:text-[#DEFF9A]"
          >
            Datenschutzerklärung ansehen
          </a>
        </div>

        <div className="flex shrink-0 flex-col gap-3 sm:min-w-[210px]">
          <button
            type="button"
            onClick={() => choose("granted")}
            className="bg-[#DEFF9A] px-5 py-3 text-xs font-mono font-bold uppercase tracking-widest text-[#050505] transition-colors hover:bg-[#cbf47d] active:scale-[0.98]"
          >
            Analyse erlauben
          </button>
          <button
            type="button"
            onClick={() => choose("denied")}
            className="border border-[#3a414d] px-5 py-3 text-xs font-mono font-bold uppercase tracking-widest text-slate-300 transition-colors hover:border-[#DEFF9A] hover:text-[#DEFF9A] active:scale-[0.98]"
          >
            Nur notwendige Cookies
          </button>
        </div>
      </div>
    </aside>
  );
}
