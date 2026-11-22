Make a short vertical promo video (an Instagram-style reel) of my wedding invitation website, in the style of the reference video `igexport-DWWpanSk9AI.mp4`.

## What exists

- **Project:** Next.js 15.5 app in `C:\Users\hrayg\OneDrive\Desktop\Sem07\wedding`. It's live at https://ruchika-weds-bibek.vercel.app, but the local version may be newer (it has new couple photos), so record from a local production build (`npm run build`, then `npx next start -p 3100`).
- **Routes:** `/` is English and `/m` is Maithili. `?opened=true` skips the opening doors. `#<id>` jumps to a section.
- **Page order (section ids):**
  1. `#entry`: palace doors with an "open" button (`#openBtn`). The doors take about 2.1s to open.
  2. Hero: "Ruchika Das weds Bibek Karna" plus parents' names.
  3. `#story`: "Meet the Couple" with the main portrait photo.
  4. `#date`: the wedding date card. The first time it scrolls into view, it zooms to the centre, petals fall, and it shrinks back (3.2s, plays only once per page load).
  5. `#timeline`: four event cards (Haldi, Mehendi, Kumran, Marriage Ceremony).
  6. `#countdown`
  7. `#guest`: a note from the couple, with the second couple photo.
  8. Footer.
- **Assets:**
  - Song: `public/assets/maithili-aaju-mithila.mp3` ("Aaju Mithila Nagariya").
  - Couple photos: `public/assets/couple-portrait.jpg` and `public/assets/couple-greenery.jpg`.
  - Ornaments, motifs, and the link-preview image: in `public/assets/luxury/`.
- **Tools on this PC:**
  - Python with Pillow, Node 22, and system Chrome at `C:/Program Files/Google/Chrome/Application/chrome.exe`.
  - No ffmpeg on PATH. Ask me before installing anything.
  - For browser recording, install `playwright-core` in your scratchpad and launch it with `executablePath` set to that Chrome. Playwright's `recordVideo` can capture the site.

## How to work

1. **Study the reference first, cheaply.** Nobody has looked at `igexport-DWWpanSk9AI.mp4` yet (it's in the project root, about 4 MB).
   - Get ffmpeg working first. If it isn't available, ask me before installing it.
   - Pull frames into 2–3 contact sheets (9–12 frames tiled per image), not single frames.
   - Report back on:
     - length, aspect ratio and pacing;
     - which kinds of shots it uses (screen scroll, zooms, phone mockup, text cards);
     - caption style, transitions and music use.
   - Then stop, and show me a shot list for our video with rough timings before recording anything.
2. **Record clean footage** of the site at phone size (390×844 viewport, 2× or 3× device scale, so the export is sharp at 1080×1920):
   - the doors opening;
   - a smooth scroll through the hero, couple photo and date reveal;
   - the timeline cards;
   - the countdown and guest note.
   - Use slow, steady scrolling. Wait for fonts and images to load. Hide the floating dock or the music pill if they get in the way.
3. **Edit** with ffmpeg:
   - cuts, gentle zooms, captions in a font that matches the site (Cinzel or Cormorant Garamond, gold and maroon `#702C35`);
   - the song underneath, faded in and out.
   - End on the site link and the date: 30 November 2026, Biratnagar.
4. **Check your own output** using a contact sheet of the finished video, not individual frames, then send me the file path.

## Constraints

- **Length:** 20–30 seconds, unless the reference suggests otherwise. Export 1080×1920 MP4 (H.264 + AAC).
- **Names:** always bride first: "Ruchika & Bibek".
- **Don't change the website's code.** If something on the site looks wrong in the footage, tell me instead.
- **Where files go:** keep working files in your scratchpad. Put only the final video in `video/` in the project. `*.mp4` is already gitignored and kept out of Vercel uploads.
- **Ask me** whether I want an English version, a Maithili version, or both, before recording.
