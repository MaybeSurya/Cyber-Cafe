# 🖥️ NET JUNCTION v2.1 — Indian Cyber-Café Nostalgia Experience (2014–2019)

> **"One more hour."**  
> An immersive interactive digital memory space recreating the warmth, mild chaos, tactile objects, and nostalgia of a mid-2010s Indian neighborhood cyber café.

**Created by / Developer / Author:** [MaybeSurya](https://maybesurya.dev) ([MaybeSurya.dev](https://maybesurya.dev))

---

## 🛠️ Tech Stack & Technologies

![Next.js](https://img.shields.io/badge/Next.js_16-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS_v4-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![React](https://img.shields.io/badge/React_19-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![Zustand](https://img.shields.io/badge/Zustand-443e38?style=for-the-badge&logo=react&logoColor=white)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-0055FF?style=for-the-badge&logo=framer&logoColor=white)
![Howler.js](https://img.shields.io/badge/Howler.js-FF6000?style=for-the-badge&logo=soundcharts&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)

| Core Technology | Icon / Badge | Role & Architecture Details |
|---|---|---|
| **Next.js 16 (App Router)** | `nextdotjs` | SSR, SSG static page prerendering (`generateStaticParams`), Turbopack build engine |
| **TypeScript (Strict)** | `typescript` | 100% strict type safety for data models, scene states, audio manifests, and UI components |
| **Tailwind CSS v4** | `tailwind-css` | Token system implementation, physical bevel styles, MDF wood grain, noise & CRT scanlines |
| **React 19** | `react` | Component architecture, custom hooks (`useAudio`, `useInteraction`, `useScene`, `useDiscovery`) |
| **Zustand** | `react` | Global session-persisted state machine for audio channels, fan speed, active window, and discovery progress |
| **Framer Motion** | `framer` | Physical spring motions, entry shutter animations, paper feed sliding, and window drag handlers |
| **Howler.js** | `soundcharts` | Web Audio singleton factory handling ambient room hums, radio music, keyboard clicks, and printer motors |
| **Google Fonts** | `googlefonts` | 3-tiered typography system (`Archivo Narrow`, `Arimo`, `Courier Prime`, `Vollkorn`) |

---

## ✨ Features & Experiences

### 1. 🏬 Authentic Physical Environment
- **MDF Wood Booth Partitions:** Hand-crafted CSS linear gradients reproducing real MDF wood grain and 3D bevel edges.
- **Fluorescent Tube Lighting:** Overhead fluorescent light bar featuring a load-in startup flicker animation.
- **Dynamic 3-Blade Ceiling Fan:** Real-time 4-speed motor control (`0 = Off`, `1 = Slow`, `2 = Medium`, `3 = Fast`) with variable CSS rotation, motor noise levels, and screen reader announcements.
- **Laminated & Sticky Notices:** Taped paper notices featuring rate charts, *"No Smoking - Fine ₹500"*, *"No Pendrives!! Virus warning"*, and *"Computer Classes Admission Open"*.

### 2. 💻 VisionMaster Pro Computer Workstation
- **POST Boot Sequence:** Terminal screen simulating mid-2010s PC boot sequence (Award BIOS, memory check, drive detection).
- **Windows-Style Desktop:** Classic wallpaper, double-clickable desktop shortcuts (Internet Explorer, Winamp, CS 1.6, Exam Results, Print Documents, Recycle Bin).
- **Fictional Web Browser:** Period-appropriate browser interface with simulated web search and a functional **CBSE Board Exam Result Checker** (enter 7-digit roll number to reveal marks card).
- **Winamp-Style Music Player:** Audio player interface with nostalgic 2010s playlist selections.
- **Session Status Panel:** Login screen displaying station status, active session timers, connection speed, and hourly rates.

### 3. 🖨️ Front Counter & Printer Station
- **EPS-9000 Laser Printer:** Interactive print calculator allowing page count and B&W (₹2/pg) vs Colour (₹10/pg) selection with animated emerging thermal receipt paper.
- **AIWA Café FM Radio:** Countertop radio with frequency dial, indicator LED, and audio playback.
- **Counter Register & Billing Log:** Operator terminal featuring active billing ledger logs, cash drawer trigger, and total cash tracker.
- **Toffee Bowl Detail:** Nostalgic candy bowl resting on the main MDF counter.

### 4. 💬 Interactive Operator Character
- Ambient operator speech bubble cycling through authentic Hindi/Hinglish dialogues:
  - *"Pen drive laga do."*
  - *"Server slow hai."*
  - *"Result aa gaya kya?"*
  - *"Print kitne page ka hai?"*
  - *"Bhai, time ho gaya."*

### 5. 🗃️ Memory Archive & Discovery System
- Collection of **12 data-driven nostalgic memories** (Wired Mouse, Membrane Keyboard, ₹2 Printout, LAN Gaming, Result Day, Hourly Rates, etc.).
- Category tab filtering (`Objects`, `Internet`, `Gaming`, `Culture`, `People`, `Places`).
- Deep-link memory detail pages (`/memories/[slug]`) generated at build time via Next.js Static Site Generation (SSG).
- Floating **Discovery Counter** tracking visited objects and unlocked memories.

### 6. 🔊 Audio Architecture & Autoplay Compliance
- **Autoplay Gate:** First user gesture anywhere on the screen seamlessly unlocks the browser `AudioContext`.
- **Audio Mixer Widget:** Persistent bottom-right floating audio controller with master mute toggle and individual volume sliders for Ambience, Radio/Music, and Interaction SFX.

---

## 🕹️ Interactive Usage Guide

| Object / Element | Interaction | Result / Action |
|---|---|---|
| **Computer Monitor** | Click / Double-click | Powers on PC, executes boot sequence, opens `/experience/computer` desktop view |
| **Desktop Shortcuts** | Double-click | Opens browser, Winamp music player, exam result portal, or print slip modal |
| **Ceiling Fan** | Click | Cycles through fan speeds (`Off` → `Slow` → `Medium` → `Fast`), alters sound hum level |
| **Printer** | Click | Opens print job calculator, animates paper feed, generates thermal receipt |
| **Notice Board** | Click / Hover | Zooms notice card for legible reading |
| **Café Radio** | Click Play/Pause | Toggles café background FM music |
| **Operator Speech Bubble** | Click | Cycles to the next operator dialogue |
| **Audio Controller** | Click tune icon | Opens multi-channel audio mixer panel |

---

## 📂 Application Routes

```text
/
├── /                             # Entry Scene (Shutter arrival & welcome CTA)
├── /experience                   # Cyber Café Interior Scene (Booth, Counter, Notices, Fan)
├── /experience/computer          # In-Monitor OS Desktop (Browser, Winamp, Result Checker)
├── /memories                     # Memory Archive Index Grid (Category filters)
├── /memories/[slug]              # Single Memory Detail Page (Dynamic SSG paths)
└── /about                        # Core Design Statement, Emotional North Star & Credits
```

---

## 🚀 Installation & Setup

### Prerequisites
- **Node.js** (v18.17.0 or higher)
- **npm** or **pnpm**

### Step-by-step Execution

1. **Clone the repository:**
   ```bash
   git clone https://github.com/MaybeSurya/Cyber-Cafe.git
   cd Cyber-Cafe
   ```

2. **Navigate to the application folder:**
   ```bash
   cd app
   ```

3. **Install dependencies:**
   ```bash
   npm install
   ```

4. **Run development server:**
   ```bash
   npm run dev
   ```

5. **Open in browser:**
   Navigate to [http://localhost:3000](http://localhost:3000).

---

## 🧪 Verification & Build Commands

```bash
cd app

# Run TypeScript strict typecheck (0 errors)
npm run typecheck

# Run Next.js production build (Prerenders all 20 static pages)
npm run build

# Start production server
npm run start
```

---

## 📜 Author & Disclaimer

- **Developer / Author:** [MaybeSurya](https://maybesurya.dev) ([MaybeSurya.dev](https://maybesurya.dev))
- **Fictional Brand:** **SURYA CYBER SOLUTIONS**
- ⚠️ **Disclaimer:** *SURYA CYBER SOLUTIONS is a completely imaginary, fictional name created solely for artistic and nostalgic purposes. It does not resolve to or represent any real-world brand, business, trademark, or registered company. Any resemblance or match to any real-world entity is purely coincidental.*

© 2026 SURYA CYBER SOLUTIONS — NO SMOKING · NO PENDRIVES.
