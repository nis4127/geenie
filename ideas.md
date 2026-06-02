# Strategisches Design- & UX-Konzept für die Geenie Media Homepage

Dieses Dokument definiert das gestalterische und psychologische Fundament der neuen Homepage für **Geenie Media**. Der Fokus liegt auf der Gewinnung von Erstgesprächen (&bdquo;15-Minuten System-Check&ldquo;) bei einer Zielgruppe aus Handwerkern, Solopreneuren, KMUs und Gründern. Alle Texte folgen der Schweizer Rechtschreibung (CH) ohne &bdquo;ß&ldquo;.

---

<response>
<text>
## Ansatz: "Tactical Dark Workspace" (Premium-SaaS & Elite-Operations-Center)

### Design Movement
**Dark Workspace, Premium-Tech & Tactical Minimalism**. Dieser Ansatz inszeniert Geenie Media nicht als verspielte Werbeagentur, sondern als hocheffizientes, technologisches Operations-Center. Durch ein tiefdunkles Interface mit präzisen, leuchtenden Akzenten wird sofortige digitale Autorität und Professionalität vermittelt.

### Core Principles
- **Offline stark, online dominant**: Direkte Ansprache des Kontrasts zwischen der hervorragenden Offline-Qualität des Kunden und seiner bisher schwachen digitalen Präsenz.
- **Souveräne Reduktion (No-Bullshit)**: Keine dekorativen Spielereien, sondern Fokus auf klare Fakten, strukturierte Systeme und messbare Resultate.
- **Maximale Conversion-Führung**: Jedes Element leitet den Nutzer psychologisch und visuell zum primären CTA, dem &bdquo;15-Minuten System-Check&ldquo;.
- **Mobile-First Exzellenz**: Extrem optimierte Touch-Zonen, perfekte Lesbarkeit auf Smartphones und blitzschnelle Ladezeiten.

### Color Philosophy
- **Hintergrund**: Operator Black (`#050505`) und Graphite System (`#111318`) für maximale Tiefe und eine edle, fokussierte Arbeitsumgebung.
- **Akzente**: Geenie Gold (`#FFD400`) für Heritage-Momente und System Lime (`#DEFF9A`) für operative Hinweise, CTAs und Status-Anzeigen.
- **Interaktion**: Deep Interface Blue (`#1B6BFF`) für aktive Zustände und interaktive Elemente.
- **Emotionaler Intent**: Absolute Souveränität, technologische Überlegenheit, kompromisslose Präzision und unerschütterliches Vertrauen.

### Layout Paradigm
Ein **modulares, asymmetrisches Raster-Layout** mit klaren, dünnen Trennlinien (`border-[#242832]`). Die Sektionen sind wie die Module eines High-End-Dashboards aufgebaut. Whitespace wird aktiv als Gestaltungselement genutzt, um den Inhalten Raum zum Atmen zu geben und den Blick des Nutzers gezielt zu lenken.

### Signature Elements
- **Dashboard-Zonen**: Datenvisualisierungen und System-Anzeigen, die die Effektivität des Geenie-Ansatzes &bdquo;Show, don't tell&ldquo;-artig beweisen.
- **Interaktive Problem-Kacheln**: Taktile Karten, die typische Pain Points der Zielgruppe (Preisdruck, Unsichtbarkeit) visualisieren.
- **Der 3-Säulen-Selektor**: Ein interaktiver Bereich für die Kernleistungen (0-auf-1 Setups, Experten-Framing, System-Hacking).

### Interaction Philosophy
Snappy, physisch intuitive Interaktionen. Buttons reagieren mit einer taktilen Skalierung (`active:scale-[0.98]`) und einem sanften Aufglühen des Rahmens. Scroll-Entrances sind hochgradig optimiert und nutzen GPU-beschleunigte CSS-Transitions für ein butterweiches Erlebnis auf Smartphones.

### Animation
- **Subtile Linien-Entrances**: Trennlinien zeichnen sich beim Scrollen sanft von links nach rechts oder oben nach unten.
- **Glow-Hover-Effekte**: Karten und CTAs erhalten beim Hovern einen extrem feinen, glühenden Rand in System Lime oder Geenie Gold.

### Typography System
- **Überschriften (Display/Headline)**: *Space Grotesk* (Bold/ExtraBold, 700/800) für einen markanten, geometrisch-technischen Charakter.
- **Fliesstext (Body)**: *Inter* (Regular/Medium, 400/500) für kompromisslose Lesbarkeit und ein ruhiges Schriftbild.
- **Metadaten (Mono/Data)**: *JetBrains Mono* für Systemlabels, Kennzahlen und strukturierte Parameter.
</text>
<probability>0.05</probability>
</response>

---

## Verpflichtung auf den gewählten Ansatz

Wir verpflichten uns vollständig auf den **Tactical Dark Workspace**-Ansatz. 

### Wichtige Namenskonvention
In allen Texten wird ausschliesslich von **Geenie** oder **Geenie Media** gesprochen. Besondere Rechtsformen (wie &bdquo;AG&ldquo; oder &bdquo;GmbH&ldquo;) werden im Fliesstext und den Headlines konsequent weggelassen, um einen modernen, nahbaren und gleichzeitig hochprofessionellen Markenauftritt zu gewährleisten.

### Strategischer Fahrplan für die Vorschau
Wir erstellen im ersten Schritt eine **interaktive High-End-Vorschau** der wichtigsten ersten Bereiche der Homepage direkt in `client/src/pages/Home.tsx`:
1. **Hero Section**: Dominante Headline (&bdquo;Offline stark. Online dominant.&ldquo;), klare Positionierung als Growth-Operator und der primäre CTA zum &bdquo;15-Minuten System-Check&ldquo;.
2. **Problem-Section (Der Kontrast)**: Visuelle Gegenüberstellung von IST (analoge Exzellenz, digitale Unsichtbarkeit) und SOLL (digitale Dominanz).
3. **Positionierungs-Section (Fractional CMO)**: Warum Geenie anders ist als klassische Werbeagenturen.
