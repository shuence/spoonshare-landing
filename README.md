# SpoonShare landing page

A production-ready marketing site for SpoonShare, the food-rescue network that
moves surplus food from kitchens to nearby NGOs and volunteers.

## Stack

- Next.js 15 (App Router) and React 19
- TypeScript
- Custom CSS with design tokens and light/dark themes
- IntersectionObserver reveals with reduced-motion support
- Phosphor icons

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Production build

```bash
npm run build
npm start
```

## Structure

```
app/
  layout.tsx          fonts, metadata, theme bootstrap
  page.tsx            landing page
  privacy/page.tsx    privacy policy
  terms/page.tsx      terms of service
  robots.ts           robots.txt
  sitemap.ts          sitemap.xml
  globals.css         design system and all layout styles
components/
  nav.tsx             sticky nav and mobile menu
  theme-toggle.tsx    light/dark switch, stored in localStorage
  reveal.tsx          reduced-motion-aware scroll reveal
  phone.tsx           app screenshot frame
  site-footer.tsx     partner CTA and footer
public/images/        photography, app screenshots, logo
```

## Content sources

- Product and impact figures: SpoonShare README, pitch deck, and portfolio data
  (1,000+ kg redistributed, 1,500+ downloads, 4.9 rating, Google Solution
  Challenge Top 3, World Governments Summit Best M-Gov Award 2026).
- Food insecurity figures: FAO, The State of Food Security and Nutrition in the
  World, 2024.
- App screenshots and event photography: SpoonShare pitch deck assets.
- Produce and volunteer photography: Unsplash (free to use under the Unsplash
  licence).

## Notes

- The download button points to the SpoonShare listing on Google Play
  (`com.spoonshare.app`).
- Partner and contact buttons open an email to contact@spoonshare.org.
- No analytics, cookies, or form backend are included.
- The site defaults to the light theme. The toggle stores the visitor's choice
  locally, and `?theme=light` or `?theme=dark` can force a theme.
