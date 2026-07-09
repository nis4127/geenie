import React, { useState } from "react";
import { Link, useLocation } from "wouter";
import { 
  Menu, 
  X, 
  ArrowRight,
  ChevronDown
} from "lucide-react";

interface LayoutProps {
  children: React.ReactNode;
  onSystemCheckOpen: () => void;
}

export default function Layout({ children, onSystemCheckOpen }: LayoutProps) {
  const [mobileMenuOpen, setMenuOpen] = useState(false);
  const [location] = useLocation();
  const [impressumOpen, setImpressumOpen] = useState(false);

  const navLinks = [
    { name: "Strategie & Consulting", href: "/" },
    { name: "Kreation & Umsetzung", href: "/kreation" },
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
                src="/assets/sekundaerlogo-geenie-farbig.svg" 
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

          <button 
            onClick={onSystemCheckOpen}
            className="hidden sm:block bg-[#DEFF9A] hover:bg-[#cbf47d] text-[#050505] text-[11px] font-mono font-bold px-6 py-3 transition-all active:scale-[0.98] uppercase tracking-widest"
          >
            System-Check
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
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href}>
                <a onClick={() => setMenuOpen(false)} className={`text-left py-2 border-b border-[#242832] hover:text-[#DEFF9A] ${location === link.href ? 'text-[#DEFF9A]' : ''}`}>
                  {link.name}
                </a>
              </Link>
            ))}
            <button 
              onClick={() => { onSystemCheckOpen(); setMenuOpen(false); }}
              className="mt-4 bg-[#DEFF9A] text-[#050505] py-3 rounded text-center font-mono flex items-center justify-center gap-2"
            >
              15-Minuten System-Check <ArrowRight className="w-4 h-4" />
            </button>
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
                src="/assets/sekundaerlogo-geenie-farbig.svg" 
                alt="Geenie Logo" 
                className="w-auto h-10 object-contain" 
              />
            </div>
            
            <div className="flex flex-wrap justify-center gap-8 text-xs font-mono uppercase tracking-widest text-slate-400">
              <button onClick={() => setImpressumOpen(true)} className="hover:text-[#DEFF9A] transition-colors">Impressum</button>
              <a href="#" className="hover:text-[#DEFF9A] transition-colors">Datenschutz</a>
              <a href="https://linkedin.com" className="hover:text-[#DEFF9A] transition-colors">LinkedIn</a>
              <a href="https://instagram.com" className="hover:text-[#DEFF9A] transition-colors">Instagram</a>
            </div>
            
            <div className="text-[10px] font-mono text-slate-600">
              &copy; 2024 Geenie Media. Alle Rechte vorbehalten.
            </div>
          </div>
        </div>
      </footer>

      {/* Impressum Modal (simplified for reuse) */}
      {impressumOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
          <div className="absolute inset-0 bg-[#050505] bg-opacity-90 backdrop-blur-sm" onClick={() => setImpressumOpen(false)}></div>
          <div className="bg-[#111318] border border-[#242832] w-full max-w-2xl rounded-2xl relative z-10 overflow-hidden animate-in zoom-in-95 duration-200 max-h-[80vh] flex flex-col">
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
                <p>E-Mail: <a href="mailto:geenie.schweiz@gmail.com" className="text-[#1B6BFF] hover:underline">geenie.schweiz@gmail.com</a></p>
              </div>
              <div>
                <h4 className="text-[#DEFF9A] font-mono uppercase tracking-wider mb-2 text-xs">Unternehmens-Identifikationsnummer (UID)</h4>
                <p>CHE-260.224.627</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
