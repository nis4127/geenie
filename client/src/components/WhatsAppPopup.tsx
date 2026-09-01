import { useEffect, useState } from "react";
import { MessageCircle, X } from "lucide-react";
import { trackAnalytics } from "../lib/analytics";

const WHATSAPP_URL =
  "https://api.whatsapp.com/send/?phone=41799253192&text&type=phone_number&app_absent=0";
const SHOW_DELAY_MS = 3000;
const DISMISSED_KEY = "geenie_whatsapp_popup_dismissed";

export default function WhatsAppPopup() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (window.sessionStorage.getItem(DISMISSED_KEY) === "1") return;

    const timer = window.setTimeout(() => setIsVisible(true), SHOW_DELAY_MS);
    return () => window.clearTimeout(timer);
  }, []);

  function dismiss() {
    window.sessionStorage.setItem(DISMISSED_KEY, "1");
    setIsVisible(false);
  }

  if (!isVisible) return null;

  return (
    <aside
      aria-label="WhatsApp-Kontakt"
      className="fixed bottom-5 right-5 z-[110] w-[min(360px,calc(100vw-2.5rem))] animate-in slide-in-from-right-4 fade-in duration-300 motion-reduce:animate-none sm:bottom-6 sm:right-6"
    >
      <div className="relative border border-[#3a414d] bg-[#111318] p-4 pr-12 text-[#F6F4EA] shadow-2xl shadow-black/30">
        <button
          type="button"
          onClick={dismiss}
          aria-label="WhatsApp-Hinweis schliessen"
          className="absolute right-3 top-3 rounded-full p-1.5 text-slate-500 transition-colors hover:bg-[#242832] hover:text-[#F6F4EA] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#DEFF9A]"
        >
          <X className="h-4 w-4" aria-hidden="true" />
        </button>

        <div className="flex items-start gap-3">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#25D366] text-[#050505]">
            <MessageCircle className="h-5 w-5" aria-hidden="true" />
          </div>
          <div className="min-w-0">
            <p className="text-[10px] font-mono font-bold uppercase tracking-[0.16em] text-[#DEFF9A]">
              Direkt erreichbar
            </p>
            <p className="mt-1 text-sm leading-relaxed text-slate-300">
              Kurze Frage zu Ihrem Projekt? Schreiben Sie uns direkt auf WhatsApp.
            </p>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() =>
                trackAnalytics("contact_click", {
                  page: window.location.pathname,
                  channel: "whatsapp",
                  source_cta: "whatsapp_popup",
                })
              }
              className="mt-3 inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-widest text-[#DEFF9A] underline decoration-[#DEFF9A]/40 underline-offset-4 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#DEFF9A]"
            >
              WhatsApp öffnen
            </a>
          </div>
        </div>
      </div>
    </aside>
  );
}
