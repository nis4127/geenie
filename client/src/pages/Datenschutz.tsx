import React from "react";
import Layout from "../components/Layout";

export default function Datenschutz() {
  return (
    <Layout>
      <div className="py-24 lg:py-32 bg-[#050505]">
        <div className="container mx-auto px-6 lg:px-12 max-w-4xl">
          <span className="text-xs font-mono text-[#DEFF9A] tracking-[0.2em] uppercase font-bold">Rechtliches</span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mt-4 uppercase leading-tight mb-12">Datenschutz.</h1>
          
          <div className="space-y-12 text-slate-400 leading-relaxed font-medium">
            <section>
              <h2 className="text-xl font-bold text-[#F6F4EA] uppercase tracking-tight mb-4">1. Einleitung</h2>
              <p>Der Schutz Ihrer persönlichen Daten ist uns ein wichtiges Anliegen. Wir bearbeiten Ihre Daten gemäss den Anforderungen des schweizerischen Datenschutzgesetzes (nDSG). In dieser Datenschutzerklärung informieren wir Sie darüber, welche Daten wir erheben und zu welchem Zweck.</p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#F6F4EA] uppercase tracking-tight mb-4">2. Verantwortliche Stelle</h2>
              <p>Verantwortlich für die Datenbearbeitung auf dieser Website ist:</p>
              <div className="mt-4 p-6 bg-[#111318] border border-[#242832]">
                <p className="text-[#F6F4EA] font-bold">Geenie Media</p>
                <p>Yannis Denzler</p>
                <p>Pestalozzistrasse 68a</p>
                <p>4132 Muttenz</p>
                <p>Schweiz</p>
                <p className="mt-2">E-Mail: <a href="mailto:info@geenie-media.ch" className="text-[#DEFF9A] hover:underline">info@geenie-media.ch</a></p>
                <p>UID: CHE-260.224.627</p>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#F6F4EA] uppercase tracking-tight mb-4">3. Erhebung von Daten</h2>
              <p>Wenn Sie unsere Webseite besuchen, werden automatisch technische Daten (wie IP-Adresse, Datum/Uhrzeit des Zugriffs, Browseranfrage) erhoben. Diese dienen der Systemsicherheit und Stabilität.</p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#F6F4EA] uppercase tracking-tight mb-4">4. Kontaktformulare & E-Mail</h2>
              <p>Wenn Sie uns via E-Mail (info@geenie-media.ch) oder Kontaktformular kontaktieren, werden Ihre Angaben (Name, E-Mail, Nachricht) zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.</p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#F6F4EA] uppercase tracking-tight mb-4">5. Cookies</h2>
              <p>Unsere Webseite nutzt Cookies, um die Funktionalität zu gewährleisten und die Benutzererfahrung zu verbessern. Sie können Ihren Browser so einstellen, dass er Cookies ablehnt oder Sie warnt, bevor ein Cookie gespeichert wird.</p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#F6F4EA] uppercase tracking-tight mb-4">6. Externe Dienste</h2>
              <ul className="list-disc pl-5 space-y-4">
                <li><span className="text-[#F6F4EA] font-bold">Vercel:</span> Unsere Website wird über Vercel gehostet. Vercel kann Informationen über Ihre Nutzung der Website (wie IP-Adressen) verarbeiten.</li>
                <li><span className="text-[#F6F4EA] font-bold">Google-Dienste:</span> Wir nutzen ggf. Analyse-Tools von Google (z.B. Google Analytics). Diese Datenübermittlung erfolgt im Rahmen der gesetzlichen Bestimmungen.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#F6F4EA] uppercase tracking-tight mb-4">7. Rechte der betroffenen Person</h2>
              <p>Sie haben jederzeit das Recht auf Auskunft, Berichtigung, Löschung oder Einschränkung der Bearbeitung Ihrer bei uns gespeicherten Daten. Bitte wenden Sie sich hierfür direkt an uns unter: <a href="mailto:info@geenie-media.ch" className="text-[#DEFF9A] hover:underline">info@geenie-media.ch</a>.</p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#F6F4EA] uppercase tracking-tight mb-4">8. Änderungen</h2>
              <p>Wir können diese Datenschutzerklärung jederzeit ohne Vorankündigung anpassen. Es gilt die jeweils aktuelle, auf unserer Webseite publizierte Fassung.</p>
            </section>
          </div>
        </div>
      </div>
    </Layout>
  );
}
