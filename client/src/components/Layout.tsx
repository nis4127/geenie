import React, { useState } from "react";
import { Link, useLocation } from "wouter";
import { 
  Menu, 
  X, 
  ChevronDown
} from "lucide-react";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const [mobileMenuOpen, setMenuOpen] = useState(false);
  const [location] = useLocation();
  const [impressumOpen, setImpressumOpen] = useState(false);
  const [datenschutzOpen, setDatenschutzOpen] = useState(false);
  const [agbOpen, setAgbOpen] = useState(false);


  const navLinks = [
    { name: "Strategie & Consulting", href: "/" },
    { name: "Kreation & Umsetzung", href: "/kreation" },
    { name: "Print Showroom", href: "/showroom" },
    { name: "Über uns", href: "/ueber-uns" },
    { name: "Kontakt", href: "/projektanfrage" },
  ];

  return (
    <div className="min-h-screen bg-[#050505] text-[#F6F4EA] flex flex-col selection:bg-[#DEFF9A] selection:text-[#050505]">
      {/* Navigation Header */}
      <header className="sticky top-0 z-50 bg-[#050505] border-b border-[#242832] backdrop-blur-md bg-opacity-95">
        <div className="container mx-auto px-6 lg:px-12 py-6 flex items-center justify-between">
          <Link href="/">
            <a className="flex items-center gap-4 cursor-pointer group">
              <img 
                src="/assets/logo-primaer-schwarz-weiss.svg" 
                alt="Geenie Logo" 
                className="w-auto h-12 object-contain" 
              />
            </a>
          </Link>

          <nav className="hidden lg:flex items-center gap-12 text-[13px] font-bold uppercase tracking-widest">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href}>
                <a className={`transition-all hover:text-[#DEFF9A] ${location === link.href ? 'text-[#DEFF9A]' : 'text-slate-500'}`}>
                  {link.name}
                </a>
              </Link>
            ))}
          </nav>


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
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href}>
                <a onClick={() => setMenuOpen(false)} className={`text-left py-2 border-b border-[#242832] hover:text-[#DEFF9A] ${location === link.href ? 'text-[#DEFF9A]' : ''}`}>
                  {link.name}
                </a>
              </Link>
            ))}
          </div>
        </div>
      )}

      <main className="flex-grow">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-[#050505] text-slate-500 py-24 border-t border-[#242832] relative overflow-hidden">
        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-12">
            <div className="flex items-center gap-4">
              <img 
                src="/assets/logo-primaer-schwarz-weiss.svg" 
                alt="Geenie Logo" 
                className="w-auto h-10 object-contain" 
              />
            </div>
            
            <div className="flex flex-wrap justify-center gap-8 text-xs font-mono uppercase tracking-widest text-slate-400">
              <button onClick={() => setImpressumOpen(true)} className="hover:text-[#DEFF9A] transition-colors">Impressum</button>
              <button onClick={() => setDatenschutzOpen(true)} className="hover:text-[#DEFF9A] transition-colors">Datenschutz</button>
              <button onClick={() => setAgbOpen(true)} className="hover:text-[#DEFF9A] transition-colors">AGB</button>
              <a href="https://www.linkedin.com/in/yannis-k-denzler/" target="_blank" rel="noopener noreferrer" className="hover:text-[#DEFF9A] transition-colors">LinkedIn</a>
              <a href="https://instagram.com/geenie.media" target="_blank" rel="noopener noreferrer" className="hover:text-[#DEFF9A] transition-colors">Instagram</a>
              <a href="https://api.whatsapp.com/send/?phone=41799253192&text&type=phone_number&app_absent=0" target="_blank" rel="noopener noreferrer" className="hover:text-[#DEFF9A] transition-colors">WhatsApp</a>
            </div>
            
            <div className="text-[10px] font-mono text-slate-600">
              &copy; 2024 Geenie Media. Alle Rechte vorbehalten.
            </div>
          </div>
        </div>
      </footer>

      {/* Impressum Modal */}
      {impressumOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
          <div className="absolute inset-0 bg-[#050505] bg-opacity-90 backdrop-blur-sm" onClick={() => setImpressumOpen(false)}></div>
          <div className="bg-[#111318] border border-[#242832] w-full max-w-2xl rounded-2xl relative z-10 overflow-hidden animate-in zoom-in-95 duration-200 max-h-[80vh] flex flex-col shadow-2xl">
            <div className="p-8 border-b border-[#242832] flex justify-between items-center">
              <h3 className="text-xl font-bold text-[#F6F4EA]">Impressum</h3>
              <button onClick={() => setImpressumOpen(false)} className="p-2 hover:bg-[#050505] rounded-full text-slate-500 hover:text-[#F6F4EA] transition-all">
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="p-8 overflow-y-auto text-sm text-slate-400 leading-relaxed space-y-6">
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
                <p>E-Mail: <a href="mailto:info@geenie-media.ch" className="text-[#DEFF9A] hover:underline">info@geenie-media.ch</a></p>
              </div>
              <div>
                <h4 className="text-[#DEFF9A] font-mono uppercase tracking-wider mb-2 text-xs">Unternehmens-Identifikationsnummer (UID)</h4>
                <p>CHE-260.224.627</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Datenschutz Modal */}
      {datenschutzOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
          <div className="absolute inset-0 bg-[#050505] bg-opacity-90 backdrop-blur-sm" onClick={() => setDatenschutzOpen(false)}></div>
          <div className="bg-[#111318] border border-[#242832] w-full max-w-2xl rounded-2xl relative z-10 overflow-hidden animate-in zoom-in-95 duration-200 max-h-[80vh] flex flex-col shadow-2xl">
            <div className="p-8 border-b border-[#242832] flex justify-between items-center">
              <h3 className="text-xl font-bold text-[#F6F4EA]">Datenschutzerklärung</h3>
              <button onClick={() => setDatenschutzOpen(false)} className="p-2 hover:bg-[#050505] rounded-full text-slate-500 hover:text-[#F6F4EA] transition-all">
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="p-8 overflow-y-auto text-sm text-slate-400 leading-relaxed space-y-8">
              <div>
                <h4 className="text-[#DEFF9A] font-mono uppercase tracking-wider mb-2 text-xs">1. Einleitung</h4>
                <p>Der Schutz Ihrer persönlichen Daten ist uns ein wichtiges Anliegen. Wir bearbeiten Ihre Daten gemäss den Anforderungen des schweizerischen Datenschutzgesetzes (nDSG). In dieser Datenschutzerklärung informieren wir Sie darüber, welche Daten wir erheben und zu welchem Zweck.</p>
              </div>

              <div>
                <h4 className="text-[#DEFF9A] font-mono uppercase tracking-wider mb-2 text-xs">2. Verantwortliche Stelle</h4>
                <p className="text-[#F6F4EA] font-medium">Geenie Media</p>
                <p>Yannis Denzler</p>
                <p>Pestalozzistrasse 68a</p>
                <p>4132 Muttenz</p>
                <p>Schweiz</p>
                <p className="mt-2">E-Mail: <a href="mailto:info@geenie-media.ch" className="text-[#DEFF9A] hover:underline">info@geenie-media.ch</a></p>
                <p>UID: CHE-260.224.627</p>
              </div>

              <div>
                <h4 className="text-[#DEFF9A] font-mono uppercase tracking-wider mb-2 text-xs">3. Erhebung von Daten</h4>
                <p>Wenn Sie unsere Webseite besuchen, werden automatisch technische Daten (wie IP-Adresse, Datum/Uhrzeit des Zugriffs, Browseranfrage) erhoben. Diese dienen der Systemsicherheit und Stabilität.</p>
              </div>

              <div>
                <h4 className="text-[#DEFF9A] font-mono uppercase tracking-wider mb-2 text-xs">4. Kontaktformulare & E-Mail</h4>
                <p>Wenn Sie uns via E-Mail oder Kontaktformular kontaktieren, werden Ihre Angaben (Name, E-Mail, Nachricht) zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.</p>
              </div>

              <div>
                <h4 className="text-[#DEFF9A] font-mono uppercase tracking-wider mb-2 text-xs">5. Cookies</h4>
                <p>Unsere Webseite nutzt Cookies, um die Funktionalität zu gewährleisten und die Benutzererfahrung zu verbessern. Sie können Ihren Browser so einstellen, dass er Cookies ablehnt oder Sie warnt, bevor ein Cookie gespeichert wird.</p>
              </div>

              <div>
                <h4 className="text-[#DEFF9A] font-mono uppercase tracking-wider mb-2 text-xs">6. Externe Dienste</h4>
                <p><span className="text-[#F6F4EA] font-bold">Vercel:</span> Unsere Website wird über Vercel gehostet. Vercel kann Informationen über Ihre Nutzung der Website (wie IP-Adressen) verarbeiten.</p>
                <p className="mt-2"><span className="text-[#F6F4EA] font-bold">Google-Dienste:</span> Wir nutzen ggf. Analyse-Tools von Google (z.B. Google Analytics). Diese Datenübermittlung erfolgt im Rahmen der gesetzlichen Bestimmungen.</p>
              </div>

              <div>
                <h4 className="text-[#DEFF9A] font-mono uppercase tracking-wider mb-2 text-xs">7. Rechte der betroffenen Person</h4>
                <p>Sie haben jederzeit das Recht auf Auskunft, Berichtigung, Löschung oder Einschränkung der Bearbeitung Ihrer bei uns gespeicherten Daten. Bitte wenden Sie sich hierfür direkt an uns unter: <a href="mailto:info@geenie-media.ch" className="text-[#DEFF9A] hover:underline">info@geenie-media.ch</a>.</p>
              </div>

              <div>
                <h4 className="text-[#DEFF9A] font-mono uppercase tracking-wider mb-2 text-xs">8. Änderungen</h4>
                <p>Wir können diese Datenschutzerklärung jederzeit ohne Vorankündigung anpassen. Es gilt die jeweils aktuelle, auf unserer Webseite publizierte Fassung.</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* AGB Modal */}
      {agbOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
          <div className="absolute inset-0 bg-[#050505] bg-opacity-90 backdrop-blur-sm" onClick={() => setAgbOpen(false)}></div>
          <div className="bg-[#111318] border border-[#242832] w-full max-w-2xl rounded-2xl relative z-10 overflow-hidden animate-in zoom-in-95 duration-200 max-h-[80vh] flex flex-col shadow-2xl">
            <div className="p-8 border-b border-[#242832] flex justify-between items-center">
              <h3 className="text-xl font-bold text-[#F6F4EA]">Allgemeine Geschäftsbedingungen</h3>
              <button onClick={() => setAgbOpen(false)} className="p-2 hover:bg-[#050505] rounded-full text-slate-500 hover:text-[#F6F4EA] transition-all">
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="p-8 overflow-y-auto text-sm text-slate-400 leading-relaxed space-y-8">
              <div>
                <h4 className="text-[#DEFF9A] font-mono uppercase tracking-wider mb-2 text-xs">1. Geltungsbereich</h4>
                <p>Diese AGB gelten für alle Dienstleistungen und Lieferungen von Geenie Media (Yannis Denzler). Mit der Auftragserteilung erkennt der Kunde diese AGB vollumfänglich an.</p>
              </div>

              <div>
                <h4 className="text-[#DEFF9A] font-mono uppercase tracking-wider mb-2 text-xs">2. Vertragsabschluss</h4>
                <p>Ein Vertrag kommt durch die schriftliche Annahme eines Angebots durch den Kunden zustande. Alle Preise verstehen sich in Schweizer Franken (CHF), exklusive Mehrwertsteuer, sofern nicht anders ausgewiesen.</p>
              </div>

              <div>
                <h4 className="text-[#DEFF9A] font-mono uppercase tracking-wider mb-2 text-xs">3. Dienstleistungen & Webdesign</h4>
                <p><span className="text-[#F6F4EA] font-bold">Mitwirkung:</span> Der Kunde stellt alle notwendigen Inhalte rechtzeitig zur Verfügung. Verzögerungen durch den Kunden können die Projektzeitpläne verschieben.</p>
                <p className="mt-4"><span className="text-[#F6F4EA] font-bold">Abnahme:</span> Nach Fertigstellung der vereinbarten Leistungen erfolgt eine Abnahme durch den Kunden. Erfolgt innerhalb von 5 Arbeitstagen keine Rückmeldung, gelten die Leistungen als abgenommen.</p>
              </div>

              <div>
                <h4 className="text-[#DEFF9A] font-mono uppercase tracking-wider mb-2 text-xs">4. Printprodukte & Warenlieferung</h4>
                <p><span className="text-[#F6F4EA] font-bold">Druckdaten:</span> Der Kunde ist für die inhaltliche Richtigkeit und die Druckfähigkeit seiner Daten verantwortlich. Geenie Media prüft Daten nur auf offensichtliche Mängel, übernimmt aber keine Garantie für das Druckergebnis bei fehlerhaften Kundendaten.</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
