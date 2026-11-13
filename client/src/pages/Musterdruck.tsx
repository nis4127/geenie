import React, { useMemo, useState } from "react";
import { upload } from "@vercel/blob/client";
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  Check,
  CheckCircle2,
  FileUp,
  FolderOpen,
  Layers3,
  Mail,
  Minus,
  Plus,
  Ruler,
  Send,
  ShieldCheck,
  Sparkles,
  UserRound,
  X,
} from "lucide-react";
import Layout from "../components/Layout";

const steps = ["Bindung", "Format", "Papier", "Druckdaten", "Adresse"] as const;

const bindings = [
  { id: "Klammerheftung / Drahtheftung", icon: BookOpen, text: "Imagebroschüren, Magazine & Vereins-Bulletins · 8–48 Seiten" },
  { id: "Ringösenheftung", icon: FolderOpen, text: "Dokumentationen & Berichte zum Abheften in Ordnern" },
  { id: "Klebebindung / Softcover", icon: Layers3, text: "Umfangreiche Kataloge & Jahresberichte ab 48 Seiten" },
  { id: "Spiralbindung / Wire-O", icon: Ruler, text: "Handbücher & Kataloge, die flach aufgeschlagen liegen bleiben" },
] as const;

const formats = ["DIN A4", "DIN A5", "DIN lang", "Quadratisch · 210 × 210 mm"] as const;
const papers = [
  { id: "Seidenmatt gestrichen", text: "Ruhige Farben, angenehme Haptik und eine hochwertige, zurückhaltende Oberfläche." },
  { id: "Glänzend gestrichen", text: "Kräftige Farben und brillante Bilder mit glatter Oberfläche." },
  { id: "Naturpapier / Offenes Papier", text: "Unaufgeregt, warm und besonders gut beschreibbar." },
  { id: "Empfehlung von Geenie Media", text: "Wir wählen den passenden Papiercharakter für Inhalt und Einsatzzweck." },
] as const;
const editions = ["100 Stk.", "250 Stk.", "500 Stk.", "1'000 Stk.", "2'500+ Stk.", "Individuelle Auflage"] as const;

type FormData = {
  binding: string;
  format: string;
  orientation: "Hochformat" | "Querformat";
  pages: string;
  paper: string;
  dataOption: "pdf" | "sample";
  editions: string[];
  customEdition: string;
  company: string;
  name: string;
  street: string;
  city: string;
  email: string;
  phone: string;
  notes: string;
};

const initialForm: FormData = {
  binding: "",
  format: "",
  orientation: "Hochformat",
  pages: "",
  paper: "",
  dataOption: "pdf",
  editions: [],
  customEdition: "",
  company: "",
  name: "",
  street: "",
  city: "",
  email: "",
  phone: "",
  notes: "",
};

function FieldLabel({ children, required = false }: { children: React.ReactNode; required?: boolean }) {
  return <span className="mb-2 block text-[10px] font-mono font-bold uppercase tracking-[0.18em] text-slate-400">{children}{required ? " *" : ""}</span>;
}

function ChoiceCard({ active, onClick, children, className = "" }: { active: boolean; onClick: () => void; children: React.ReactNode; className?: string }) {
  return (
    <button type="button" aria-pressed={active} onClick={onClick} className={`relative flex min-h-20 w-full touch-manipulation items-start gap-3 border p-4 text-left transition-all duration-200 active:scale-[0.99] hover:border-[#FFD400] ${active ? "border-[#FFD400] bg-[#FFD400]/10" : "border-[#242832] bg-[#111318]"} ${className}`}>
      {active && <Check className="absolute right-3 top-3 h-4 w-4 text-[#FFD400]" />}
      {children}
    </button>
  );
}

function MusterdruckThankYou() {
  return (
    <Layout>
      <main className="min-h-[72vh] bg-[#050505] px-6 py-24 lg:py-36">
        <div className="mx-auto max-w-2xl border border-[#242832] bg-[#111318] p-8 text-center sm:p-14">
          <div className="mx-auto mb-7 flex h-16 w-16 items-center justify-center rounded-full bg-[#FFD400] text-[#050505]"><CheckCircle2 className="h-8 w-8" /></div>
          <span className="font-mono text-[10px] font-bold uppercase tracking-[0.22em] text-[#FFD400]">Musteranfrage erhalten</span>
          <h1 className="mt-4 text-4xl font-bold uppercase leading-none sm:text-6xl">Ihr Muster ist<br /><span className="text-[#FFD400]">auf dem Weg.</span></h1>
          <p className="mx-auto mt-7 max-w-xl text-base leading-relaxed text-slate-400">Vielen Dank. Wir prüfen Ihre Angaben und melden uns mit dem nächsten Schritt sowie der unverbindlichen Staffel-Offerte.</p>
          <a href="/" className="mt-9 inline-flex min-h-12 items-center gap-3 bg-[#FFD400] px-6 py-4 font-mono text-xs font-bold uppercase tracking-widest text-[#050505] transition-transform hover:-translate-y-1">Zur Startseite <ArrowRight className="h-4 w-4" /></a>
        </div>
      </main>
    </Layout>
  );
}

export default function Musterdruck({ thankYou = false }: { thankYou?: boolean }) {
  const [step, setStep] = useState(0);
  const [form, setForm] = useState<FormData>(initialForm);
  const [pdf, setPdf] = useState<File | null>(null);
  const [pdfPath, setPdfPath] = useState("");
  const [isUploading, setIsUploading] = useState(false);
  const [honeypot, setHoneypot] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");

  const progress = ((step + 1) / steps.length) * 100;
  const update = <K extends keyof FormData>(key: K, value: FormData[K]) => setForm((current) => ({ ...current, [key]: value }));
  const toggleEdition = (edition: string) => update("editions", form.editions.includes(edition) ? form.editions.filter((item) => item !== edition) : [...form.editions, edition]);

  const canContinue = useMemo(() => {
    if (step === 0) return Boolean(form.binding);
    if (step === 1) return Boolean(form.format && form.orientation);
    if (step === 2) return Boolean(form.pages && form.paper);
    if (step === 3) return Boolean(form.dataOption && form.editions.length > 0 && (!form.editions.includes("Individuelle Auflage") || form.customEdition.trim()) && (form.dataOption === "sample" || pdfPath));
    return Boolean(form.company && form.name && form.street && form.city && form.email && form.phone);
  }, [form, pdf, step]);

  if (thankYou) return <MusterdruckThankYou />;

  const next = () => {
    setError("");
    window.requestAnimationFrame(() => window.scrollTo({ top: document.querySelector("#musterdruck-configurator")?.getBoundingClientRect().top ? window.scrollY + (document.querySelector("#musterdruck-configurator") as HTMLElement).getBoundingClientRect().top - 24 : 0, behavior: "smooth" }));
    if (!canContinue) {
      setError(step === 3 ? "Bitte wählen Sie Druckdaten-Option und mindestens eine gewünschte Auflage aus." : "Bitte vervollständigen Sie die Auswahl, bevor Sie fortfahren.");
      return;
    }
    setStep((current) => Math.min(4, current + 1));
  };

  const submit = async (event: React.FormEvent) => {
    event.preventDefault();
    if (!canContinue) { setError("Bitte vervollständigen Sie alle Pflichtfelder."); return; }
    setIsSubmitting(true);
    setError("");
    const payload = new FormData();
    Object.entries(form).forEach(([key, value]) => payload.append(key, Array.isArray(value) ? value.join(", ") : String(value)));
    payload.append("website", honeypot);
    if (pdfPath) payload.append("pdfPath", pdfPath);
    try {
      const response = await fetch("/api/musterdruck", { method: "POST", body: payload, headers: { Accept: "application/json" } });
      if (!response.ok) throw new Error("submit-failed");
      window.location.assign("/danke-musterdruck/");
    } catch {
      setError("Die Anfrage konnte gerade nicht übermittelt werden. Bitte versuchen Sie es nochmals oder schreiben Sie an info@geenie-media.ch.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Layout>
      <main className="bg-[#050505] text-[#F6F4EA]">
        <section className="relative overflow-hidden border-b border-[#242832] px-6 pb-16 pt-20 lg:pb-24 lg:pt-32">
          <div className="pointer-events-none absolute -right-32 top-0 h-[520px] w-[520px] rounded-full bg-[#FFD400]/10 blur-3xl" />
          <div className="relative mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1fr_0.55fr] lg:items-end">
            <div>
              <span className="font-mono text-[10px] font-bold uppercase tracking-[0.22em] text-[#FFD400]">GEENIE MEDIA / MUSTERDRUCK</span>
              <h1 className="mt-5 max-w-4xl text-5xl font-bold uppercase leading-[0.86] tracking-tight sm:text-7xl lg:text-[6.5rem]">Erst fühlen,<br />dann <span className="text-[#FFD400]">bestellen:</span><br />Ihr kostenloser<br />Broschüren-Musterdruck.</h1>
              <p className="mt-8 max-w-2xl text-base leading-relaxed text-slate-400 sm:text-lg">Konfigurieren Sie Ihre Broschüre oder Ihr Vereins-Bulletin in 60 Sekunden. Wir produzieren Ihr persönliches Musterexemplar und senden es Ihnen kostenlos per Post zu – inklusive unverbindlicher Offerte für Ihre Wunschauflagen.</p>
            </div>
            <div className="border-l border-[#FFD400]/50 pl-6 lg:mb-2">
              <p className="font-mono text-xs uppercase tracking-[0.16em] text-[#FFD400]">5 Schritte</p>
              <p className="mt-3 text-sm leading-relaxed text-slate-400">Von der Bindung bis zur Lieferadresse. Ohne Preisangaben, ohne Verpflichtung, mit persönlicher Prüfung Ihrer Druckdaten.</p>
            </div>
          </div>
        </section>

        <section id="musterdruck-configurator" className="px-6 py-12 lg:py-20">
          <div className="mx-auto max-w-6xl">
            <div className="mb-8 flex flex-col gap-5 border-b border-[#242832] pb-6 sm:flex-row sm:items-end sm:justify-between">
              <div><span className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-[#FFD400]">Konfigurator</span><p className="mt-2 text-sm text-slate-400">Schritt {step + 1} von 5 · {steps[step]}</p></div>
              <div className="flex gap-2">{steps.map((name, index) => <div key={name} className={`h-1.5 w-12 sm:w-20 ${index <= step ? "bg-[#FFD400]" : "bg-[#242832]"}`} title={name} />)}</div>
            </div>

            <form onSubmit={submit} noValidate>
              <div className="grid gap-8 lg:grid-cols-[0.9fr_1.7fr]">
                <aside className="hidden border border-[#242832] bg-[#111318] p-7 lg:block">
                  <p className="font-mono text-[10px] font-bold uppercase tracking-[0.18em] text-[#FFD400]">Ihr Ablauf</p>
                  <div className="mt-7 space-y-5">{steps.map((name, index) => <div key={name} className={`flex items-center gap-3 text-sm ${index === step ? "text-[#F6F4EA]" : index < step ? "text-[#FFD400]" : "text-slate-600"}`}><span className={`flex h-7 w-7 items-center justify-center rounded-full border font-mono text-[10px] ${index <= step ? "border-[#FFD400]" : "border-[#242832]"}`}>{index < step ? <Check className="h-3 w-3" /> : index + 1}</span>{name}</div>)}</div>
                  <div className="mt-12 border-t border-[#242832] pt-6 text-xs leading-relaxed text-slate-500"><ShieldCheck className="mb-3 h-5 w-5 text-[#FFD400]" />Ihre Angaben werden nur für die Musteranfrage und die unverbindliche Offerte verwendet.</div>
                </aside>

                <div className="min-w-0 border border-[#242832] bg-[#111318] p-6 transition-opacity duration-200 sm:p-10">
                  {step === 0 && <div><StepHeading eyebrow="01 / Bindung & Einsatzzweck" title="Wie soll Ihr Muster gebunden sein?" text="Wählen Sie die Verarbeitung, die zu Ihrem Inhalt und späteren Einsatz passt." /><div className="grid gap-3 sm:grid-cols-2">{bindings.map(({ id, icon: Icon, text }) => <ChoiceCard key={id} active={form.binding === id} onClick={() => update("binding", id)}><Icon className="mt-0.5 h-5 w-5 shrink-0 text-[#FFD400]" /><span><strong className="block pr-4 text-sm text-[#F6F4EA]">{id}</strong><small className="mt-2 block leading-relaxed text-slate-500">{text}</small></span></ChoiceCard>)}</div></div>}

                  {step === 1 && <div><StepHeading eyebrow="02 / Format & Ausrichtung" title="Welches Format hat Ihr Muster?" text="Format und Ausrichtung bestimmen die Wirkung und den späteren Lesefluss." /><div className="grid gap-3 sm:grid-cols-2">{formats.map((format) => <ChoiceCard key={format} active={form.format === format} onClick={() => update("format", format)}><Ruler className="h-5 w-5 text-[#FFD400]" /><span className="text-sm font-bold">{format}</span></ChoiceCard>)}</div><div className="mt-8"><FieldLabel required>Ausrichtung</FieldLabel><div className="grid gap-3 sm:grid-cols-2">{(["Hochformat", "Querformat"] as const).map((orientation) => <ChoiceCard key={orientation} active={form.orientation === orientation} onClick={() => update("orientation", orientation)}><span className={`block h-5 w-4 border border-[#FFD400] ${orientation === "Querformat" ? "w-6" : ""}`} /><span className="text-sm font-bold">{orientation}</span></ChoiceCard>)}</div></div></div>}

                  {step === 2 && <div><StepHeading eyebrow="03 / Umfang & Papier-Haptik" title="Wie soll sich Ihr Inhalt anfühlen?" text="Eine grobe Einschätzung genügt. Wir prüfen die Kombination persönlich." /><div className="max-w-md"><FieldLabel required>Geschätzter Seitenumfang</FieldLabel><select value={form.pages} onChange={(event) => update("pages", event.target.value)} className="w-full border border-[#242832] bg-[#050505] px-4 py-4 text-sm text-[#F6F4EA] outline-none focus:border-[#FFD400]"><option value="">Bitte auswählen</option>{["8", "12", "16", "24", "32", "48+"].map((pages) => <option key={pages} value={`${pages} Seiten`}>{pages} Seiten</option>)}</select></div><div className="mt-8 grid gap-3 sm:grid-cols-2">{papers.map(({ id, text }) => <ChoiceCard key={id} active={form.paper === id} onClick={() => update("paper", id)}><Sparkles className="mt-0.5 h-5 w-5 shrink-0 text-[#FFD400]" /><span><strong className="block pr-4 text-sm text-[#F6F4EA]">{id}</strong><small className="mt-2 block leading-relaxed text-slate-500">{text}</small></span></ChoiceCard>)}</div></div>}

                  {step === 3 && <div className="animate-in fade-in slide-in-from-right-2 duration-200"><StepHeading eyebrow="04 / Druckdaten & Auflagen-Interesse" title="Was dürfen wir für Sie vorbereiten?" text="Wählen Sie eine Datenoption und sagen Sie uns, für welche Auflagen Sie eine unverbindliche Offerte wünschen." /><div className="space-y-3"><ChoiceCard active={form.dataOption === "pdf"} onClick={() => update("dataOption", "pdf")}><FileUp className="h-5 w-5 text-[#FFD400]" /><span><strong className="block text-sm">Eigene PDF-Datei hochladen</strong><small className="mt-1 block text-slate-500">PDF bis maximal 50 MB. Der Upload läuft direkt in den geschützten Speicher und wird nicht als E-Mail-Anhang versendet.</small></span></ChoiceCard>{form.dataOption === "pdf" && <div className="border border-dashed border-[#FFD400]/50 bg-[#050505] p-5"><label className="flex cursor-pointer items-center gap-3 text-sm text-slate-300"><FileUp className="h-5 w-5 text-[#FFD400]" /><span>{isUploading ? "PDF wird sicher hochgeladen …" : pdf ? pdf.name : "PDF auswählen"}<small className="mt-1 block text-xs text-slate-600">Maximal 50 MB · PDF</small></span><input type="file" accept="application/pdf,.pdf" className="sr-only" disabled={isUploading} onChange={async (event) => { const file = event.target.files?.[0] ?? null; setError(""); if (!file) return; if (file.type !== "application/pdf" || file.size > 50 * 1024 * 1024) { setPdf(null); setPdfPath(""); setError("Bitte wählen Sie eine PDF-Datei mit maximal 50 MB."); return; } setPdf(file); setPdfPath(""); setIsUploading(true); try { const blob = await upload(file.name, file, { access: "private", handleUploadUrl: "/api/musterdruck-upload" }); setPdfPath(blob.pathname); } catch { setPdf(null); setError("Der PDF-Upload konnte nicht abgeschlossen werden. Bitte versuchen Sie es erneut."); } finally { setIsUploading(false); } }} /></label></div>}<ChoiceCard active={form.dataOption === "sample"} onClick={() => { update("dataOption", "sample"); setPdf(null); setPdfPath(""); }}><Sparkles className="h-5 w-5 text-[#FFD400]" /><span><strong className="block text-sm">Noch keine fertige Druckdatei vorhanden</strong><small className="mt-1 block text-slate-500">Neutrales Format- &amp; Papiermuster anfordern</small></span></ChoiceCard></div><div className="mt-8"><FieldLabel required>Gewünschte Angebots-Auflagen</FieldLabel><div className="flex flex-wrap gap-2">{editions.map((edition) => <button type="button" key={edition} aria-pressed={form.editions.includes(edition)} onClick={() => toggleEdition(edition)} className={`min-h-12 touch-manipulation border px-4 py-3 font-mono text-xs transition-colors active:scale-[0.98] ${form.editions.includes(edition) ? "border-[#FFD400] bg-[#FFD400]/10 text-[#FFD400]" : "border-[#242832] text-slate-400 hover:border-[#FFD400]"}`}>{form.editions.includes(edition) && <Check className="mr-1 inline h-3 w-3" />}{edition}</button>)}</div>{form.editions.includes("Individuelle Auflage") && <div className="mt-5 max-w-sm"><FieldLabel required>Individuelle Auflage</FieldLabel><input inputMode="numeric" pattern="[0-9]*" required value={form.customEdition} onChange={(event) => update("customEdition", event.target.value)} placeholder="z. B. 750 Exemplare" className="w-full border border-[#242832] bg-[#050505] px-4 py-4 text-sm text-[#F6F4EA] outline-none focus:border-[#FFD400]" /></div>}</div></div>}

                  {step === 4 && <div><StepHeading eyebrow="05 / Lieferadresse & Abschluss" title="Wohin dürfen wir Ihr Muster senden?" text="Zum Abschluss benötigen wir Ihre Kontaktdaten für Versand, Druckdaten-Check und die unverbindliche Staffel-Offerte." /><div className="grid gap-5 sm:grid-cols-2">{[["company", "Firma / Verein", false], ["name", "Vorname & Nachname", true], ["street", "Strasse / Nr.", true], ["city", "PLZ / Ort", true], ["email", "E-Mail-Adresse", true], ["phone", "Telefonnummer", true]].map(([key, label, required]) => <label key={key as string}><FieldLabel required={Boolean(required)}>{label as string}</FieldLabel><input type={key === "email" ? "email" : key === "phone" ? "tel" : "text"} required={Boolean(required)} value={form[key as keyof FormData] as string} onChange={(event) => update(key as keyof FormData, event.target.value as never)} className="w-full border border-[#242832] bg-[#050505] px-4 py-4 text-sm text-[#F6F4EA] outline-none transition-colors focus:border-[#FFD400]" /></label>)}</div><input tabIndex={-1} aria-hidden="true" autoComplete="off" value={honeypot} onChange={(event) => setHoneypot(event.target.value)} className="absolute left-[-9999px] h-px w-px opacity-0" name="website" /><div className="mt-8 border-t border-[#242832] pt-6"><label className="mb-6 block"><FieldLabel>Spezialwünsche &amp; Bemerkungen</FieldLabel><textarea rows={4} name="notes" value={form.notes} onChange={(event) => update("notes" as keyof FormData, event.target.value as never)} placeholder="Optional: besondere Wünsche, Veredelungen oder Hinweise …" className="w-full resize-y border border-[#242832] bg-[#050505] px-4 py-4 text-sm text-[#F6F4EA] outline-none focus:border-[#FFD400]" /></label><button type="submit" disabled={isSubmitting} className="flex min-h-14 w-full items-center justify-center gap-3 bg-[#FFD400] px-6 py-5 font-mono text-xs font-bold uppercase tracking-widest text-[#050505] transition-transform hover:-translate-y-1 disabled:cursor-wait disabled:opacity-60">{isSubmitting ? "Wird gesendet …" : "Kostenlosen Musterdruck & Offerte anfordern"} <Send className="h-4 w-4" /></button><p className="mt-4 text-center text-xs text-slate-500">Unverbindlich &amp; 100 % kostenfrei. Versand erfolgt innerhalb weniger Werktage per A-Post.</p><p className="mt-3 text-center text-[11px] leading-relaxed text-slate-600">Mit dem Absenden stimmen Sie der Bearbeitung Ihrer Angaben gemäss <a href="/datenschutz" className="text-[#FFD400] underline underline-offset-2">Datenschutzerklärung</a> zu.</p></div></div>}

                  {error && <p role="alert" className="mt-6 border border-red-400/40 bg-red-400/5 p-4 text-sm text-red-200">{error}</p>}
                  <div className="mt-10 flex flex-col-reverse gap-3 border-t border-[#242832] pt-6 sm:flex-row sm:justify-between">{step > 0 ? <button type="button" onClick={() => { setError(""); setStep((current) => current - 1); }} className="inline-flex min-h-12 items-center justify-center gap-2 border border-[#242832] px-5 font-mono text-xs uppercase tracking-widest text-slate-400 hover:border-[#FFD400] hover:text-[#FFD400]"><ArrowLeft className="h-4 w-4" /> Zurück</button> : <span />}{step < 4 && <button type="button" onClick={next} className="inline-flex min-h-12 items-center justify-center gap-2 bg-[#FFD400] px-6 font-mono text-xs font-bold uppercase tracking-widest text-[#050505] hover:-translate-y-0.5">Weiter <ArrowRight className="h-4 w-4" /></button>}</div>
                </div>
              </div>
            </form>
          </div>
        </section>
      </main>
    </Layout>
  );
}

function StepHeading({ eyebrow, title, text }: { eyebrow: string; title: string; text: string }) {
  return <div className="mb-8"><p className="font-mono text-[10px] font-bold uppercase tracking-[0.18em] text-[#FFD400]">{eyebrow}</p><h2 className="mt-3 text-3xl font-bold uppercase leading-none sm:text-5xl">{title}</h2><p className="mt-4 max-w-2xl text-sm leading-relaxed text-slate-500">{text}</p></div>;
}
