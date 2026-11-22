# Bibek weds Ruchika: clone brief

Source: https://bibek-weds-ruchika.vercel.app (Next.js, plain CSS, Google Fonts). Captured 2026-11-11.

## Route map

| Source | Local | Owner |
|---|---|---|
| `/` (English) | `/` | `src/app/page.tsx` |
| `/m` (Maithili) | `/m` | `src/app/m/page.tsx` |
| `?opened=true` | same | skips the palace doors (`Entry.tsx`, `Invitation.tsx`) |
| `?section=<id>` or `#<id>` | same | jumps to `story`, `date`, `timeline`, `countdown`, `guest` |

The language switch calls `history.pushState` between `/` and `/m` without reloading, as the source does.

## Files

- `src/components/sites/bibek-weds-ruchika/content.ts`: event data (map and calendar links) plus the English and Maithili text, copied from the source bundle.
- One component per section: `Entry`, `Hero`, `CoupleStory`, `ScratchDate`, `Timeline`, `Countdown`, `GuestNote`, `Footer`.
- Floating UI: `LanguageToggle`, `MusicPlayer`, `Petals` (+ `showerPetals()`), `FloatingDock`.
- `RevealObserver` adds `in-view` to `.reveal-section` (threshold 0.02, rootMargin `200px 0px 100px 0px`).
- `src/app/globals.css`: the source stylesheet, formatted.
- `public/assets/**`: every image and audio file the source loads, at the same paths.

## Behaviour (trigger → result)

- **Click "Open invitation"** → doors swing open (CSS, about 2.1s), body scroll unlocks, song starts, entry layer is removed after 2100ms.
- **Music pill click** → play or pause. The track jumps back to 0 at 92s and loops when it ends.
- **Pointer drag on the gold foil** → 56px eraser brush, sparkles and gold flakes, progress sampled every 50ms. Unlocks at 60% cleared (petal shower and flash). "Instant reveal" unlocks immediately.
- **Scroll past 180px** (once opened) → bottom dock shows: Venues (smooth scroll to timeline), Calendar (Google Calendar for the wedding), Bless (petal shower).
- **Countdown** → ticks every second toward `2026-11-30T18:00:00+05:30`.
- **Time-driven** → door shimmer, gold shimmer sweep, equalizer bars, petal fall (all CSS keyframes in the stylesheet).

## Assets

All 29 files downloaded from `/assets/...` and checked as real JPEG/PNG/MP3. Files the page never shows (`timeline-*.jpg`, `pattern-maroon.jpg`, `og-image.jpg`) are kept because the source data references them.

## Screenshots

`screenshots/` holds source captures: `{en|m}-{desktop 1440x900|mobile 390x844}-{01-entry|02-doors-mid|03-hero|04-full|05-date-revealed}.png`.
