# Ruchika weds Bibek: wedding invitation

A Next.js invitation, first rebuilt from https://bibek-weds-ruchika.vercel.app and then changed:

- Bride's name first everywhere (Ruchika Das weds Bibek Karna).
- No scratch card: the first time the date card comes into view, it zooms to the centre, petals fall, and it shrinks back (about 3 seconds).
- Timeline: Haldi, Mehendi, Kumran, Marriage Ceremony. The wedding starts at 5:00 PM (countdown uses Nepal time).
- Larger English / मैथिली switch.

## Run

```bash
npm install
npm run dev        # http://localhost:3000
npm run build && npm start   # production
```

## Pages

- `/`: English invitation
- `/m`: Maithili invitation
- `/?opened=true`: skip the palace doors
- `/?opened=true&section=timeline`: open straight to a section (`story`, `date`, `timeline`, `countdown`, `guest`)

## Editing

- Text, dates, venues, map and calendar links: `src/components/sites/bibek-weds-ruchika/content.ts`
- Sections: `src/components/sites/bibek-weds-ruchika/*.tsx` (the date card and its animation are in `DateReveal.tsx`)
- Styles: `src/app/globals.css`
- Images and song: `public/assets/`

Research notes and source screenshots are in `docs/research/bibek-weds-ruchika/`.
