# Airbnb Listing Page — Pixel-Perfect Clone & Production Architecture

> A production-grade, pixel-perfect reproduction of the Airbnb listing page reference ([airbnb-clone-umber-two.vercel.app](https://airbnb-clone-umber-two.vercel.app)), engineered with Next.js 16.4 App Router, TypeScript, modern CSS, and AI-assisted development protocols.

---

## 🌟 Executive Summary

This project reproduces the Airbnb vacation rental listing experience with exact fidelity across visual design, typography, SVG paths, responsive layouts, motion, and keyboard accessibility. It satisfies all core view requirements, provides enterprise-scale system architecture documentation, and centralizes all AI agent specifications, rules, and prompt logs in a single dedicated [../agent/](file:///c:/Users/asus/Desktop/extra-bnb/agent/) folder.

### Reference Benchmark
- **Single Source of Truth**: [https://airbnb-clone-umber-two.vercel.app](https://airbnb-clone-umber-two.vercel.app)
- **Target Experience**: Seamless transition between listing overview, interactive photo exploration, and full-resolution lightbox viewer.

---

## 🚀 Key Views & Interactive Features

### 1. Listing Page (`src/components/landing/`)
- **Sticky Navigation**: Appears dynamically when scrolling past the hero photo grid. Displays anchor links (*Photos*, *Amenities*, *Reviews*, *Location*), active section underlines, real-time pricing (`₹28,499 for 5 nights`), laurel rating (`4.95 · 19 reviews`), and a pill-shaped Reserve button (`border-radius: 24px;`).
- **Hero Photo Grid**: 1 large + 4 small photo grid with hover darkening overlays (`rgba(0,0,0,0.06)`), zoom transitions, and a "Show all 5 photos" button that deep-links directly into the Photo Tour.
- **Gray Automatic Translation Banner**: Faithful `"Some info has been automatically translated. Show original"` banner with divider in `PhotosSection.tsx`.
- **Amenities Section**: 2-column layout matching the reference (Kitchen, Wifi, Workspace, Free parking, Pool, Hot tub, Pets allowed, Security cameras, Carbon monoxide alarm, Smoke alarm). Includes custom SVGs and a "Show all 32 amenities" categorized modal.
- **Reviews Section**: Laurel score badge (`4.95`), "Guest favourite" banner, 7-category rating breakdown bars, slidable filter tags with exact numeric badges (`Comfort 6`, `Accuracy 5`, `Hot tub 5`, `Condition 4`, `Hospitality 8`, etc., `border-radius: 12px;`), and 6 authentic user reviews (Amit, Aheesh, Samiksha, Vedant, Vaibhav S, Mohd).
- **Location & Host Section**: Stylized map with custom CSS grid and gradients, "Meet your host" (Mirashya Homes) verified badge, co-hosts, and "Things to know" house rules.
- **Booking Sidebar**: Sticky reservation card with date picker trigger, guest counter, pricing calculation, terms, and pill-shaped Reserve button (`border-radius: 24px;`).

### 2. Photo Tour Modal (`src/components/photo-tour/PhotoTourModal.tsx`)
- Full-screen modal overlay covering the landing page.
- Top sticky navigation bar with back button, share button, and heart/save button. Action buttons styled as circular 36px elements (`aspect-ratio: 1/1; border-radius: 50%`) with mathematical SVG centering (`viewBox="0 0 32 32"`).
- 9-category cover photo grid with smooth scroll anchors to each section.
- 50/50 split layout with sticky section titles on the left and responsive photo grids on the right.

### 3. Lightbox / Image Carousel Modal (`src/components/photo-tour/ImageCarouselModal.tsx`)
- High-resolution single-photo viewer for all 43 listing photographs.
- Header displaying current category name, photo counter (`x / 43`), breadcrumbs, and close button.
- Floating left/right navigation arrows with disabled opacity states at boundaries (`index === 0` and `index === 42`).
- **Keyboard Navigation**:
  - `ArrowLeft` / `ArrowRight`: Previous / Next photo.
  - `Escape`: Close lightbox and return to photo tour or landing page.

---

## 🛠️ Technology Stack

- **Framework**: [Next.js 16.4](https://nextjs.org/) (App Router with Turbopack)
- **Language**: TypeScript 5 (Strict type checking)
- **Styling**: Vanilla CSS Modules + Tailwind CSS v4 design tokens
- **Icons**: Handcrafted custom SVGs matching Airbnb's internal icon set
- **Fonts**: Airbnb Cereal VF variable typography (`AirbnbCerealVF.woff2`)

---

## ⚡ Quick Start & Verification

### Running the Development Server
```bash
# Navigate to the Next.js app directory
cd airbnb_clone

# Start the dev server on port 3000
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### Verifying Production Build
```bash
cd airbnb_clone
npm run build
```
*Expected Result*: Build completes with **0 errors**, statically optimizing all routes and components.

---

## 🤖 AI-Native Development Protocols

All AI agent information is consolidated into the dedicated [agent/](file:///c:/Users/asus/Desktop/extra-bnb/agent/) folder:
- **Persistent State**: Documented in [agent/AGENT_STATE.md](file:///c:/Users/asus/Desktop/extra-bnb/agent/AGENT_STATE.md).
- **Prompt Sequence**: Chronologically logged in [agent/AI_DEVELOPMENT_LOG.md](file:///c:/Users/asus/Desktop/extra-bnb/agent/AI_DEVELOPMENT_LOG.md).
- **Subagent Roles**: Defined in [agent/AGENTS.md](file:///c:/Users/asus/Desktop/extra-bnb/agent/AGENTS.md).
- **Code Standards**: Outlined in [agent/CODE_QUALITY.md](file:///c:/Users/asus/Desktop/extra-bnb/agent/CODE_QUALITY.md).
