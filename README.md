# Sohail Shaik – Portfolio

Rebuilt personal site with Next.js 16 (App Router), Tailwind CSS, and Framer Motion. It delivers a single-page flow (Hero → About → Present → Skills → Experience → Projects → Footer) with glassmorphic cards, animated skills, and structured content pulled from `lib/content.ts`.

## Quick Start

```bash
npm install
npm run dev
```

- `npm run lint` – ESLint with the Next.js config  
- `npm run build -- --webpack` – production build (webpack flag avoids Turbopack port issues in some sandboxes)  
- `npm start` – serve the built app

## Content & Links

- Edit copy in `lib/content.ts`
- Update social/CV/demo URLs in `lib/links.ts`
- Hero avatar lives at `public/sohail.jpeg`

Deploy-ready on Vercel or any Next.js host.
