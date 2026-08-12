# NET JUNCTION v2.1 — Indian Cyber-Café Nostalgia Experience (2014–2019)

> **"One more hour."**  
> An immersive interactive digital memory space recreating the warmth, mild chaos, tactile objects, and nostalgia of a mid-2010s Indian neighborhood cyber café.

**Created by / Developer / Author:** [MaybeSurya](https://maybesurya.dev) ([MaybeSurya.dev](https://maybesurya.dev))

---

## 🖥️ About the Project

**NET JUNCTION** is an interactive web experience designed to evoke the social memory of stepping inside a neighborhood cyber café in India between **2014 and 2019**. 

Rather than relying on generic cyberpunk, neon gradients, or heavy CRT glitch aesthetics, this project grounds itself in **authentic physical reality**:
- 🪵 **MDF Wood Partitions & Laminates** with realistic grain textures and hard shadows.
- 💡 **Fluorescent Tube Lighting** with a subtle startup flicker.
- 🌀 **Ceiling Fan** with 4 real-time speed settings and sound hum.
- 🖥️ **VisionMaster Pro CRT/LCD Workstation** featuring a POST boot sequence, Windows-inspired desktop, Winamp-style music player, and a fictional CBSE Board Result Checker.
- 🖨️ **EPS-9000 Printer & Billing Log** with animated thermal paper receipts and print job fee calculators.
- 💬 **Bilingual Operator Dialogues** (*"Pen drive laga do"*, *"Server slow hai"*, *"Result aa gaya kya?"*).
- 📜 **Laminated & Handwritten Notices** (*"No Smoking - Fine ₹500"*, *"No Pendrives!! Virus warning"*, *"Computer Classes Admission Open"*).
- 🗃️ **Memory Archive** featuring 12 data-driven nostalgic artifacts, culture cards, and stories.

---

## 🛠️ Technology Stack

| Layer | Technology | Purpose |
|---|---|---|
| **Framework** | [Next.js 16 (App Router)](https://nextjs.org/) | SSR, SSG static generation, streaming, `next/font` |
| **Language** | [TypeScript (Strict Mode)](https://www.typescriptlang.org/) | Strict type safety across components and data schemas |
| **Styling** | [Tailwind CSS v4](https://tailwindcss.com/) + CSS Modules | Custom design token system, physical bevels, noise & scanline overlays |
| **State Management** | [Zustand](https://github.com/pmndrs/zustand) | Session-persisted global store for scene, audio, interaction & discovery |
| **Animations** | [Framer Motion](https://www.framer.com/motion/) | Physical spring transitions, sliding paper feeds, typewriter boot sequences |
| **Audio Engine** | [Howler.js](https://howlerjs.com/) | Layered ambient hums, music channels, interaction SFX, browser autoplay gate |
| **Typography** | `Archivo Narrow`, `Arimo`, `Courier Prime`, `Vollkorn` | 3-layer design system matching commercial signage, OS text & paper notices |

---

## 📂 Project Structure

```text
Cyber-Cafe/
├── app/                              # Next.js 16 Application Root
│   ├── src/
│   │   ├── app/                      # App Router Pages & Routes
│   │   │   ├── layout.tsx            # Root layout (Fonts, SEO, Material Symbols)
│   │   │   ├── page.tsx              # Route: / (Entry shutter arrival)
│   │   │   ├── experience/           # Route: /experience (Café interior scene)
│   │   │   │   └── computer/         # Route: /experience/computer (In-monitor desktop)
│   │   │   ├── memories/             # Route: /memories (Archive grid)
│   │   │   │   └── [slug]/           # Route: /memories/[slug] (Memory detail view)
│   │   │   └── about/                # Route: /about (Product vision & credits)
│   │   │
│   │   ├── components/
│   │   │   ├── environment/          # CyberCafeScene, CafeWall, CafeFloor, FluorescentLight, MdfPartition, AmbientLayer
│   │   │   ├── hardware/             # Monitor, Keyboard, Mouse, Printer, CeilingFan, CafeRadio, PcStation
│   │   │   ├── computer/             # CafeDesktop, CafeBrowser, SystemWindow, SystemDialog, DesktopIcon, CafeTaskbar, StatusPanel, BootSequence, Receipt
│   │   │   ├── notices/              # NoticeBoard, Notice, RateChart, StickyNote
│   │   │   ├── counter/              # Register, BillingLog, PrintPanel
│   │   │   ├── furniture/            # PcBooth, CafeCounter
│   │   │   ├── archive/              # MemoryGrid, MemoryCard, MemoryDetail
│   │   │   ├── audio/                # AudioController mixer
│   │   │   ├── interactions/         # Hotspot, InteractionPrompt, DiscoveryCounter
│   │   │   └── ui/                   # CafeButton, CafeInput, LoadingState, ErrorState
│   │   │
│   │   ├── data/                     # Data schemas: memories, notices, objects, stories, audio tracks
│   │   ├── hooks/                    # useAudio, useInteraction, useScene, useDiscovery, useReducedMotion
│   │   ├── store/                    # cafeStore.ts (Zustand)
│   │   ├── lib/                      # utils.ts, audio.ts, analytics.ts, accessibility.ts, constants.ts
│   │   └── styles/                   # tokens.css, textures.css, typography.css
│   │
│   ├── package.json
│   └── next.config.ts
│
├── MASTER_PROJECT_BIBLE.md           # Product Vision & Complete Specification
└── README.md
```

---

## 🚦 Application Routes

| Route | View | Description |
|---|---|---|
| `/` | `EntryScene` | Arrival shutter scene introducing SAIDEEP CYBER SOLUTIONS |
| `/experience` | `CyberCafeScene` | Main interactive café interior — booth, counter, notices & fan |
| `/experience/computer` | `CafeDesktop` | Full-screen monitor view with OS desktop, browser & Winamp player |
| `/memories` | `MemoryGrid` | Archive index with category filtering (Objects, Internet, Gaming, Culture, People, Places) |
| `/memories/[slug]` | `MemoryDetail` | Deep-link memory detail page (SSG static paths generated) |
| `/about` | `AboutPage` | Product philosophy, core design rules & emotional North Star |

---

## 🚀 Quick Start Guide

### Prerequisites
- [Node.js](https://nodejs.org/) (v18.17.0 or higher recommended)
- `npm` or `pnpm`

### Installation & Local Development

1. **Clone the repository:**
   ```bash
   git clone https://github.com/MaybeSurya/Cyber-Cafe.git
   cd Cyber-Cafe
   ```

2. **Navigate to the Next.js application directory:**
   ```bash
   cd app
   ```

3. **Install dependencies:**
   ```bash
   npm install
   ```

4. **Start the development server:**
   ```bash
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🧪 Verification & Production Build

To run typechecking and verify the production build locally:

```bash
cd app

# Run TypeScript strict typecheck
npm run typecheck

# Run production build (Static Site Generation / SSG)
npm run build

# Preview production build locally
npm run start
```

---

## ♿ Accessibility & Motion Features

- **Keyboard Navigation:** Every hotspot, button, and notice is reachable via `Tab` and activated using `Enter` or `Space`.
- **Reduced Motion Support:** Fully respects `prefers-reduced-motion: reduce` by disabling fan rotations, entry shutter movement, and scene transitions via `useReducedMotion()`.
- **Screen Reader Friendly:** Decorative scene objects are marked `aria-hidden="true"`, while interactive objects provide descriptive ARIA labels and live region announcements.

---

## 📜 Author & Disclaimer

- **Developer / Author:** [MaybeSurya](https://maybesurya.dev) ([MaybeSurya.dev](https://maybesurya.dev))
- **Fictional Brand:** **SURYA CYBER SOLUTIONS**
- ⚠️ **Disclaimer:** *SURYA CYBER SOLUTIONS is a completely imaginary, fictional name created solely for artistic and nostalgic purposes. It does not resolve to or represent any real-world brand, business, trademark, or registered company. Any resemblance or match to any real-world entity is purely coincidental.*

© 2026 SURYA CYBER SOLUTIONS — NO SMOKING · NO PENDRIVES.

