# Mountain Retreat Guest Guide — Full Rebuild

## Philosophy

This is a digital pamphlet, not a web app. Guests pull it up on their phone when
they arrive and need to quickly find one piece of information. The entire content
is ~500 words of text. It should load instantly, work offline, and feel like
reading a beautifully designed card you'd find on the nightstand.

## Architecture

### What we're removing
- **MUI** (@mui/material, @mui/icons-material, @emotion/react, @emotion/styled) — 137KB gzipped for card layouts and lists we don't need
- **react-router-dom** — no routing needed for a single-page experience
- All dead components (NavigationBar, SectionDesktop, SectionMobile, MobileMenu, MobileMenuItem, ImageWithDialog, TopicCard, MessageWithPicture, DividerWithText, QuickReference, More, AppLayout)

### What we're adding
- **framer-motion** (~33KB gzipped) — smooth accordion open/close, scroll-triggered reveals, spring physics
- **Pure CSS** via CSS modules — lightweight, no runtime cost

### What stays
- React 19, Vite 6, TypeScript 5.7, vite-plugin-pwa
- All images (moose, bear, buffalo, wood-ball, coaster, dumpsters, garage-dumpster, posted-sign, TheLiftWinterPark)

### Result
Bundle should drop from ~137KB gzipped JS to ~50-60KB gzipped JS.

## Visual Design

### Color palette (kept, it's good)
- Slate: `#2B4C5B`
- Sage: `#6B8F71`
- Amber: `#C17B4A`
- Background: `#F7F5F2`
- Text: `#1C2B33`
- Muted: `#5C5C5C`
- Border: `#E5E0DA`

### Typography
- Font: system stack (Inter-like)
- Hero title: 2rem bold, white on image
- Section headers: 1.1rem semibold, slate
- Body: 0.95rem, muted color, 1.6 line-height
- All left-aligned, no centered text

### Spacing
- Max content width: 480px (true mobile-first)
- Section padding: 20px horizontal
- Between sections: 8px (tight, feels like one continuous surface)

## Layout (top to bottom)

### 1. Hero (full-bleed)
- Moose image, full width, 55vh height
- Gradient overlay bottom half (transparent → dark slate)
- "Welcome to our Mountain Retreat" in white, bold
- Subtle one-line tagline: "Your guide to a great stay in Winter Park"
- Scroll indicator (animated chevron)

### 2. Accordion sections
Each section is a collapsible card. Tap header to expand/collapse.

Visual: white background, subtle bottom border between sections. When expanded,
content slides in with a spring animation. Only one section open at a time
(opening one closes the previous).

Section order (by guest priority):
1. **The Essentials** — wifi password, parking, storage locker, contact
2. **Check Out** — interactive checklist (checkboxes, not a stepper)
3. **Getting Around** — The Lift transit info + app download links
4. **House Rules** — shoes, noise, smoking, trash in hallways
5. **Kitchen** — dishwasher instructions
6. **Fireplace** — thermostat instructions
7. **Entertainment** — games, TV/cable
8. **Trash & Recycling** — dumpster locations with photos

Each section header has:
- A small icon (inline SVG or emoji, no icon library)
- Section title
- Chevron indicator (rotates on open)

### 3. Footer
- Small, muted text: "We hope you enjoy your stay"
- Contact info repeated

## Component Structure

```
App.tsx
├── Hero.tsx
├── Section.tsx (reusable accordion)
│   ├── Essentials (inline content)
│   ├── CheckOutList.tsx (interactive checkboxes)
│   ├── Transit.tsx (Lift info + app links)
│   ├── HouseRules (inline content)
│   ├── Kitchen (inline content)
│   ├── Fireplace (inline content)
│   ├── Entertainment (inline content)
│   └── TrashInfo.tsx (photos + bullet points)
└── Footer.tsx
```

## Key Interaction: Check Out Checklist

Replace the stepper with simple checkboxes. Each item has:
- A checkbox
- The task name
- Brief description (shown always, not hidden behind "next")

Guests can check items in any order. A small progress bar at the top shows
completion. State persists in localStorage so they can come back to it.

When all items are checked, a subtle congratulations message appears.

## Key Interaction: Section Accordion

- Tap to expand with spring animation (framer-motion)
- Opening one section auto-closes the previous
- Expanded section scrolls into view smoothly
- URL hash updates on open (e.g., #check-out) so links can deep-link

## Floating TOC Button

- Fixed position, bottom-right corner
- Small circular button with a list icon
- Tap opens a bottom sheet with all section names
- Tap a name to scroll there + open that section
- Semi-transparent backdrop

## File Structure (after rebuild)

```
src/
  App.tsx              — hero + sections + footer
  App.module.css       — all app styles
  sections/
    Section.tsx        — reusable accordion wrapper
    Section.module.css
    CheckOutList.tsx   — interactive checklist
    TrashInfo.tsx      — photos + bullets
    Transit.tsx        — Lift transit card
  components/
    Hero.tsx
    Hero.module.css
    Footer.tsx
    TableOfContents.tsx
  images/              — (unchanged)
  index.tsx            — just renders <App />
  index.css            — global resets
  constants.ts         — section data
```

## Implementation Order

1. Install framer-motion, uninstall MUI + router + emotion
2. Create global CSS reset + CSS custom properties for theme
3. Build Hero component
4. Build Section accordion component
5. Build all section content (inline in constants or small components)
6. Build CheckOutList with localStorage persistence
7. Build Transit card
8. Build TrashInfo with images
9. Build TableOfContents floating button + bottom sheet
10. Build Footer
11. Wire everything in App.tsx
12. Delete all old components, pages, navigation
13. Build and verify
