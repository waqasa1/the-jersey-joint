# The Jersey Joint — Next.js App: AI Agent Design Document

> **Production-grade. Zero hallucinations. Build exactly this.**
> This document is the single source of truth. Every decision is explicit. If it is not written here, do not invent it.

---

## 1. Project Overview

**Business:** The Jersey Joint — custom basketball uniforms (AU)
**Core product:** 100% custom sublimated basketball uniforms. One product. Done right.
**Extended range:** Bags, polos, hoodies, shooting shirts (upsell only — no separate product pages)
**Business model:** B2B/B2C hybrid. Customers request a design → approve → order → approve tech sheet → invoiced separately → manufactured → delivered.
**Website jobs (in priority order):**
1. Convince new customers to choose us over competitors
2. Let customers request a uniform design
3. Let customers place an order
4. Provide all pricing and product details
5. Tell the Jersey Joint story
6. Showcase previous work
7. Answer all customer questions (FAQ)

---

## 2. Brand Identity

### 2.1 Colours

```css
:root {
  /* Backgrounds */
  --bg-primary:    #111111;   /* Near-black — main page background */
  --bg-secondary:  #1A1A1A;   /* Cards, section alternates */
  --bg-tertiary:   #222222;   /* Input fields, subtle borders */
  --bg-overlay:    #0D0D0D;   /* Overlays, hero darkening */

  /* Brand */
  --gold:          #F5C400;   /* Primary accent — crown colour from logo */
  --gold-light:    #FFD740;   /* Hover states */
  --gold-dark:     #C9A000;   /* Pressed states */

  /* Text */
  --text-primary:  #FFFFFF;   /* Headings, key copy */
  --text-secondary:#CCCCCC;   /* Body copy */
  --text-muted:    #777777;   /* Labels, captions, placeholders */

  /* UI */
  --border:        #2A2A2A;   /* Subtle dividers */
  --border-gold:   rgba(245, 196, 0, 0.3); /* Highlighted borders */
  --success:       #22C55E;
  --error:         #EF4444;
}
```

**Do NOT use:** Purple, teal, pink, gradients between unrelated colours, white backgrounds anywhere on the page, blue links.

### 2.2 Typography

```
Display / Hero headings: "Barlow Condensed" — weight 700, italic
Section headings:        "Barlow Condensed" — weight 600
Body copy:               "DM Sans" — weight 400/500
Labels / UI:             "DM Sans" — weight 600, uppercase, letter-spacing: 0.08em
Numbers / Stats:         "Barlow Condensed" — weight 800, italic
```

**Google Fonts import (add to `<head>`):**
```html
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link href="https://fonts.googleapis.com/css2?family=Barlow+Condensed:ital,wght@0,600;0,700;0,800;1,600;1,700;1,800&family=DM+Sans:wght@400;500;600&display=swap" rel="stylesheet" />
```

**Type scale:**
```
--text-xs:    0.75rem   / 12px
--text-sm:    0.875rem  / 14px
--text-base:  1rem      / 16px
--text-lg:    1.125rem  / 18px
--text-xl:    1.25rem   / 20px
--text-2xl:   1.5rem    / 24px
--text-3xl:   1.875rem  / 30px
--text-4xl:   2.25rem   / 36px  (section headings)
--text-5xl:   3rem      / 48px  (hero sub-headings)
--text-6xl:   3.75rem   / 60px  (hero heading desktop)
--text-7xl:   4.5rem    / 72px  (hero heading large screens)
```

### 2.3 Logo Usage

- **Primary logo:** `THE JERSEY JOINT` wordmark — white "JERSEY" + gold "JOINT" + gold crown icon (image 5)
- Logo file: `/public/images/logo.png` — provided by client
- **Minimum width:** 160px (never smaller)
- **On dark bg:** Use full colour logo as provided (white + gold)
- **Favicon:** Gold crown only on black square
- **Do NOT:** Recreate the logo in code. Always use the image asset.

### 2.4 Visual Language

- **Texture:** Subtle noise/grain overlay at 3–5% opacity on hero sections — matches the dark brushstroke aesthetic in the crown image (image 4)
- **Dividers:** Gold horizontal rule `1px solid var(--gold)` at section breaks — used sparingly (max 2 per page)
- **Photography style:** Full-bleed jersey close-ups, action shots, team photos — high contrast, no white-card product photography
- **Corners:** Slightly sharp — `border-radius: 4px` for cards, `6px` for buttons. Not fully rounded.
- **Shadows:** `box-shadow: 0 4px 24px rgba(0,0,0,0.6)` — dark, deep, not colourful
- **Gold glow (use sparingly, hero CTA only):** `box-shadow: 0 0 20px rgba(245,196,0,0.4)`

---

## 3. Tech Stack

### 3.1 Framework

```
Next.js 14 (App Router)
TypeScript (strict mode)
Tailwind CSS v3 (configured with custom theme — see section 8)
```


**Do NOT add:** Redux, GraphQL, Prisma, any database (not needed — forms submit to email/webhook), any UI component library (build all components from scratch per this spec).

### 3.3 Email / Form Submission

Forms submit to **Resend** (or fallback: a `/api/contact` Next.js API route that emails via nodemailer to a configured SMTP).
- Do NOT use Formspree, Netlify Forms, or any third-party form service.
- Use environment variable `RESEND_API_KEY` or `SMTP_*` variables.
- On success: show inline success state — never redirect.
- On error: show inline error with retry.

---

## 4. File Structure

```
jersey-joint/
├── app/
│   ├── layout.tsx              # Root layout — fonts, metadata, nav, footer
│   ├── page.tsx                # Homepage — all sections
│   ├── request-design/
│   │   └── page.tsx            # Design request form page
│   ├── order/
│   │   └── page.tsx            # Order form page
│   ├── api/
│   │   ├── request-design/
│   │   │   └── route.ts        # POST handler for design requests
│   │   └── order/
│   │       └── route.ts        # POST handler for orders
│   └── globals.css             # CSS variables + base styles
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx
│   │   └── Footer.tsx
│   ├── sections/
│   │   ├── Hero.tsx
│   │   ├── HowItWorks.tsx
│   │   ├── Gallery.tsx
│   │   ├── Products.tsx
│   │   ├── Pricing.tsx
│   │   ├── OurStory.tsx
│   │   ├── FAQ.tsx
│   │   └── FinalCTA.tsx
│   └── ui/
│       ├── Button.tsx
│       ├── Badge.tsx
│       ├── SectionHeading.tsx
│       ├── GoldDivider.tsx
│       └── GrainOverlay.tsx
├── lib/
│   ├── validations.ts          # Zod schemas for all forms
│   └── cn.ts                   # clsx + tailwind-merge helper
├── public/
│   ├── images/
│   │   ├── logo.png
│   │   ├── logo-crown.png      # Crown icon only (favicon source)
│   │   ├── gallery/            # Jersey gallery images (client-provided)
│   │   │   ├── thunder-jersey.jpg
│   │   │   ├── magic-bag.jpg
│   │   │   ├── magic-team.jpg
│   │   │   └── [8 more...]
│   │   └── products/           # Extended range product images
│   └── favicon.ico
├── tailwind.config.ts
├── next.config.ts
└── tsconfig.json
```

---

## 5. Performance Requirements

### 5.1 Target Scores (Lighthouse)

```
Performance:    95+
Accessibility:  98+
Best Practices: 100
SEO:            100
```

### 5.2 Images — Critical

```typescript
// next.config.ts
const nextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60 * 60 * 24 * 365, // 1 year
  },
};
```

- **All images:** Use `next/image` — NEVER `<img>` tags
- **Hero image:** `priority={true}` — no lazy loading
- **Gallery images:** `loading="lazy"`, define explicit `width` and `height`
- **Logo:** `priority={true}`, explicit dimensions
- **Placeholder:** `placeholder="blur"` with `blurDataURL` for all gallery images

### 5.3 Fonts

- Use `next/font/google` — NOT a `<link>` tag in `_document`
- `display: 'swap'`
- Preload only the weights actually used

```typescript
// app/layout.tsx
import { Barlow_Condensed, DM_Sans } from 'next/font/google';

const barlowCondensed = Barlow_Condensed({
  subsets: ['latin'],
  weight: ['600', '700', '800'],
  style: ['normal', 'italic'],
  display: 'swap',
  variable: '--font-barlow',
});

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  display: 'swap',
  variable: '--font-dm-sans',
});
```

### 5.4 Core Web Vitals

- **LCP target:** < 2.0s — hero image must be optimised, prioritised
- **CLS target:** 0 — all images have explicit dimensions, no layout shift from fonts
- **INP target:** < 100ms — no blocking JS on initial load
- **Bundle:** No unused Framer Motion features. Tree-shake aggressively.
- **No client components** unless interaction is required. Mark with `'use client'` only where needed.

### 5.5 Caching Headers (next.config.ts)

```typescript
async headers() {
  return [
    {
      source: '/images/(.*)',
      headers: [{ key: 'Cache-Control', value: 'public, max-age=31536000, immutable' }],
    },
    {
      source: '/_next/static/(.*)',
      headers: [{ key: 'Cache-Control', value: 'public, max-age=31536000, immutable' }],
    },
  ];
},
```

---

## 6. SEO Requirements

### 6.1 Metadata — Root Layout

```typescript
// app/layout.tsx
export const metadata: Metadata = {
  metadataBase: new URL('https://thejerseyjoint.com.au'),
  title: {
    default: 'The Jersey Joint | Custom Basketball Uniforms Australia',
    template: '%s | The Jersey Joint',
  },
  description: 'Australia\'s premier custom basketball uniform maker. Fully sublimated, 100% custom design, fast turnaround. Request your design today.',
  keywords: [
    'custom basketball uniforms australia',
    'basketball jersey design',
    'sublimated basketball uniforms',
    'custom basketball kit australia',
    'basketball uniform maker',
    'jersey joint',
  ],
  openGraph: {
    type: 'website',
    locale: 'en_AU',
    url: 'https://thejerseyjoint.com.au',
    siteName: 'The Jersey Joint',
    images: [{
      url: '/images/og-image.jpg', // 1200x630, hero jersey shot
      width: 1200,
      height: 630,
      alt: 'The Jersey Joint — Custom Basketball Uniforms',
    }],
  },
  twitter: {
    card: 'summary_large_image',
    images: ['/images/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large' },
  },
  alternates: {
    canonical: 'https://thejerseyjoint.com.au',
  },
};
```

### 6.2 Per-Page Metadata

```typescript
// app/request-design/page.tsx
export const metadata: Metadata = {
  title: 'Request a Custom Design',
  description: 'Start your custom basketball uniform design with The Jersey Joint. Tell us your vision — we\'ll bring it to life. Free design consultation.',
  alternates: { canonical: 'https://thejerseyjoint.com.au/request-design' },
};

// app/order/page.tsx
export const metadata: Metadata = {
  title: 'Place Your Order',
  description: 'Ready to order? Submit your uniform order with The Jersey Joint. Minimum quantities, full sublimation, Australian delivery.',
  alternates: { canonical: 'https://thejerseyjoint.com.au/order' },
};
```

### 6.3 Structured Data (JSON-LD)

Add to `app/layout.tsx`:

```typescript
// LocalBusiness schema
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'The Jersey Joint',
  description: 'Custom basketball uniform manufacturer in Australia',
  url: 'https://thejerseyjoint.com.au',
  logo: 'https://thejerseyjoint.com.au/images/logo.png',
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'customer service',
    availableLanguage: 'English',
  },
  areaServed: 'AU',
  priceRange: '$$',
};

// In layout: <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
```

### 6.4 Technical SEO Checklist

- `sitemap.xml` — generate via `app/sitemap.ts` (Next.js built-in)
- `robots.txt` — generate via `app/robots.ts`
- All headings in correct H1 → H6 hierarchy (ONE H1 per page)
- All images have descriptive `alt` text (no empty alt on content images)
- All internal links use `next/link`
- No `noindex` tags on any public pages
- Canonical tags on all pages
- Page is fully crawlable without JavaScript (SSR/SSG everything)

```typescript
// app/sitemap.ts
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: 'https://thejerseyjoint.com.au', lastModified: new Date(), changeFrequency: 'monthly', priority: 1 },
    { url: 'https://thejerseyjoint.com.au/request-design', lastModified: new Date(), changeFrequency: 'yearly', priority: 0.8 },
    { url: 'https://thejerseyjoint.com.au/order', lastModified: new Date(), changeFrequency: 'yearly', priority: 0.8 },
  ];
}
```

---

## 7. Tailwind Configuration

```typescript
// tailwind.config.ts
import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        gold: {
          DEFAULT: '#F5C400',
          light: '#FFD740',
          dark: '#C9A000',
        },
        dark: {
          primary: '#111111',
          secondary: '#1A1A1A',
          tertiary: '#222222',
          overlay: '#0D0D0D',
        },
      },
      fontFamily: {
        barlow: ['var(--font-barlow)', 'sans-serif'],
        sans: ['var(--font-dm-sans)', 'sans-serif'],
      },
      animation: {
        'fade-up': 'fadeUp 0.6s ease forwards',
        'fade-in': 'fadeIn 0.4s ease forwards',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
};

export default config;
```

---

## 8. Page Architecture

### Single-Page Homepage Route: `app/page.tsx`

The homepage is a single long-scroll page. All sections are server components where possible.

```
Section order (top to bottom):
1.  <Navbar />           — sticky, transparent → solid on scroll
2.  <Hero />             — full viewport, jersey imagery, primary CTA
3.  <HowItWorks />       — 5-step process
4.  <Gallery />          — previous work showcase
5.  <Products />         — uniforms + extended range
6.  <Pricing />          — transparent pricing table
7.  <OurStory />         — brand origin story
8.  <FAQ />              — accordion, all customer questions
9.  <FinalCTA />         — strong conversion close
10. <Footer />           — links, contact, socials
```

---

## 9. Component Specifications

### 9.1 Navbar

**Behaviour:**
- Position: `fixed`, `top-0`, `w-full`, `z-50`
- Initial state: `background: transparent`, no border
- On scroll > 80px: `background: rgba(17,17,17,0.95)`, `backdrop-filter: blur(12px)`, `border-bottom: 1px solid #2A2A2A`
- Transition: `transition: all 0.3s ease`

**Layout:**
```
[Logo (left)] ........... [Nav links (centre)] ... [CTA Button (right)]
```

**Nav links:** `Home` | `Our Work` | `Products` | `Pricing` | `Our Story` | `FAQ`
All are anchor links (`#section-id`) on the homepage. Uses smooth scroll.

**CTA Button:** "REQUEST A DESIGN" → `/request-design`
Style: gold background, black text, font-barlow bold

**Mobile (< 768px):**
- Hamburger icon (three lines, gold colour)
- Full-screen slide-down menu on dark background
- Same links stacked vertically, large touch targets (min 48px)
- CTA button full width at bottom of menu

### 9.2 Hero Section

**ID:** `#hero`

**Layout:** Full viewport height (`100vh`), image background with dark overlay.

**Background:**
- Large jersey close-up photograph (the Thunder jersey, image 1 is perfect)
- Dark overlay: `linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, rgba(17,17,17,0.95) 100%)`
- Subtle grain texture overlay (see GrainOverlay component)

**Content (centred, max-width 800px):**
```
[Small gold label] "AUSTRALIA'S #1 CUSTOM BASKETBALL UNIFORMS"

[H1 — Barlow Condensed Bold Italic, 72px desktop / 48px mobile]
"YOUR TEAM.
YOUR DESIGN.
YOUR JERSEY."

[Body copy — DM Sans, 18px, #CCCCCC, max-width 560px]
"Fully custom sublimated basketball uniforms built around your vision.
 We design it, you approve it, we make it happen."

[Two CTA buttons side by side]
[PRIMARY]  "REQUEST A DESIGN"  →  /request-design
           Gold bg (#F5C400), black text, font-barlow 700, uppercase
           padding: 16px 32px, gold glow on hover

[SECONDARY] "VIEW OUR WORK"  →  #gallery
           Transparent bg, white border, white text
           Same sizing, no glow
```

**Scroll indicator:** Animated chevron-down icon at bottom centre, bouncing, fades out on scroll.

**Animation (Framer Motion):**
- Label: fade in, 0.3s delay
- H1: fade up, stagger each line 0.1s
- Body copy: fade up, 0.5s delay
- Buttons: fade up, 0.7s delay

### 9.3 How It Works Section

**ID:** `#how-it-works`
**Background:** `var(--bg-secondary)` (`#1A1A1A`)

**Heading:** "HOW IT WORKS" — Barlow Condensed 700 italic, gold, 14px uppercase label above
**Subheading:** "From first contact to court-ready — here's our simple process."

**Steps (horizontal on desktop, vertical on mobile):**

```
Step 1: REQUEST A DESIGN
Icon: pencil/design icon
"Tell us your vision — colours, style, logo. We'll mock it up for you."

Step 2: APPROVE YOUR DESIGN
Icon: checkmark
"Review your custom design. We refine until it's perfect."

Step 3: PLACE YOUR ORDER
Icon: clipboard
"Happy with the design? Lock it in and place your order."

Step 4: APPROVE TECH SHEET
Icon: document
"Sign off on the final production-ready tech sheet."

Step 5: MANUFACTURE & DELIVERY
Icon: truck
"We manufacture your uniforms and deliver to your door."
```

**Visual:** Numbered steps (1–5), large gold numbers (Barlow Condensed 800 italic, 80px, low opacity `0.15` behind step card), connector line between steps (gold, `1px`).

### 9.4 Gallery Section

**ID:** `#gallery`
**Background:** `var(--bg-primary)` (`#111111`)

**Heading:** "OUR WORK" — standard section heading
**Subheading:** "Custom uniforms we've brought to life."

**Layout:** CSS Grid masonry-style
- Desktop: 4 columns, varying heights
- Tablet: 2 columns
- Mobile: 1 column (or 2 if images allow)

**Images to use (from provided assets):**
- Thunder jersey close-up (image 1)
- Magic basketball bag (image 2)
- Magic team photo with uniforms (image 3)
- [Remaining 9 client images — slot in same grid]

**Each gallery item:**
- `next/image` with `object-cover`
- On hover: slight scale up (`scale: 1.02`), dark overlay appears with no text (clean)
- `border-radius: 4px`
- Aspect ratio defined per image to prevent CLS

**Note:** No lightbox required. Keep it simple.

### 9.5 Products Section

**ID:** `#products`
**Background:** `var(--bg-secondary)`

**Heading:** "WHAT WE MAKE"
**Subheading:** "Basketball uniforms are our core. But we kit out your whole team."

**Layout:** Feature card for main product + grid for extended range

**Main Product Card (full width or 60% left):**
```
BASKETBALL UNIFORMS
- 100% custom sublimation — any colour, any design
- Full set: jersey + shorts
- Player name, number, team logo included
- Reversible option available
- Moisture-wicking performance fabric
- Minimum order: [X] sets
[CTA: REQUEST A DESIGN →]
```

**Extended Range Grid (4 columns desktop, 2 mobile):**
```
[Bags]          Custom sports bags — matching your uniform
[Polos]         Team polos for coaches & staff
[Hoodies]       Custom hoodies — same sublimation quality
[Shooting Shirts] Warm-up shooting shirts
```
Each card: icon + product name + one-line description. No pricing in these cards — pricing is in the next section.

**Note:** Keep extended range secondary — these are "while you're at it" products, not the hero.

### 9.6 Pricing Section

**ID:** `#pricing`
**Background:** `var(--bg-primary)`

**Heading:** "PRICING"
**Subheading:** "Transparent pricing. No surprises."

**IMPORTANT — PLACEHOLDER NOTE TO CLIENT:**
> The agent must render the pricing table with clearly marked `[PLACEHOLDER]` values.
> The client must fill in exact pricing before launch. Do NOT invent pricing.

**Pricing table structure:**
```
| Item                          | Price         |
|-------------------------------|---------------|
| Full Uniform Set (Jersey + Shorts) | From $[XX] per set |
| Jersey Only                   | From $[XX]    |
| Shorts Only                   | From $[XX]    |
| Reversible Upgrade            | +$[XX] per set |
| Player Name + Number          | Included       |
| Team Logo (supplied by you)   | Included       |
| Custom Logo Design (we design) | +$[XX]        |
| Minimum Order                 | [X] sets       |
| Bags                          | From $[XX]     |
| Polos                         | From $[XX]     |
| Hoodies                       | From $[XX]     |
```

**Design:** Dark card, gold accent on header row, white text.
**Below table:** "All prices in AUD. GST [included/excluded — client to confirm]. Delivery calculated at order."

**Important note below pricing:**
```
"Design is FREE when you place an order.
 Invoicing is handled separately — we'll send you an invoice once your order is confirmed."
```

### 9.7 Our Story Section

**ID:** `#our-story`
**Background:** `var(--bg-secondary)`

**Layout:** Two-column desktop (text left, image right)
Image: Team photo (image 3) or jersey close-up

**Heading:** "THE JERSEY JOINT STORY"

**PLACEHOLDER — CLIENT MUST PROVIDE COPY:**
> The following is placeholder structure. Client provides actual story text.

```
[Gold label] "HOW IT STARTED"

[H2] "Born from a love of the game."

[Body paragraph 1 — 60–80 words]
[PLACEHOLDER: How Jersey Joint started — the founder's story, the gap in the market, the passion for the game.]

[Body paragraph 2 — 60–80 words]
[PLACEHOLDER: The mission — quality uniforms, simple process, teams that look good and feel good.]

[Stat row]
[XX]+ Teams kitted  |  [XX]+ Uniforms made  |  [X] Years in the game
```

**Stats:** Large Barlow Condensed 800 italic gold numbers, DM Sans label below.

### 9.8 FAQ Section

**ID:** `#faq`
**Background:** `var(--bg-primary)`

**Heading:** "FREQUENTLY ASKED QUESTIONS"
**Subheading:** "Everything you need to know."

**Accordion implementation:**
- Client component (`'use client'`)
- Single open at a time
- Smooth height animation (Framer Motion `AnimatePresence` + `motion.div`)
- Gold `+` / `−` icon on right

**FAQ items:**

```
Q: How does the design process work?
A: We start with a quick chat or design request — you tell us your colours, style and ideas. 
   We create a custom mockup for you to review. Once you're happy, you approve the design 
   and we move to the order stage.

Q: Is the design free?
A: Yes. Design is free when you place an order with us. 

Q: What's the minimum order quantity?
A: [PLACEHOLDER — client to confirm minimum order]

Q: How long does it take?
A: [PLACEHOLDER — client to confirm turnaround time]

Q: Can I supply my own logo?
A: Absolutely. Send us your logo files (preferably vector/PDF) and we'll incorporate them 
   into your design.

Q: Do you design logos as well?
A: Yes, we can design a team logo for an additional fee. Ask us when submitting your 
   design request.

Q: What fabric do you use?
A: [PLACEHOLDER — client to provide fabric details]

Q: Can I get reversible uniforms?
A: Yes, reversible uniforms are available for an additional cost per set.

Q: How does payment work?
A: We invoice separately once your order is confirmed and your tech sheet is approved. 
   We do not take payment through the website.

Q: Do you deliver Australia-wide?
A: Yes, we deliver to all states. Delivery costs are calculated at order.

Q: Can I order individual jerseys or is there a minimum?
A: [PLACEHOLDER — client to confirm]

Q: What file format do I need for my logo?
A: Vector files (AI, EPS, PDF) are preferred. High-resolution PNG is also accepted.
```

### 9.9 Final CTA Section

**ID:** `#contact`
**Background:** Full-bleed dark with subtle jersey image background + heavy overlay

**Content (centred):**
```
[H2 — large, bold italic]
"READY TO LOOK LIKE CHAMPIONS?"

[Body]
"Let's build your uniform. Request a free design — no commitment."

[Single large CTA]
"REQUEST YOUR DESIGN NOW"  →  /request-design
Gold bg, black text, large, gold glow
```

### 9.10 Footer

**Background:** `#0D0D0D`
**Border-top:** `1px solid #2A2A2A`

**Layout:**
```
[Logo (left)]          [Links (centre)]         [Social + contact (right)]
                        Home
                        Our Work
                        Products
                        Pricing
                        Our Story
                        FAQ
                        Request a Design
                        Place an Order
```

**Bottom bar:** `© 2024 The Jersey Joint. All rights reserved.`

**Social icons:** Instagram, Facebook — link to actual accounts (client to provide URLs)

---

## 10. Page: `/request-design`

### Layout

Full page, not a modal. Dark background. Max-width form `640px` centred.

**Heading:** "REQUEST A DESIGN"
**Subheading:** "Tell us about your vision. We'll create a custom mockup for free."

### Form Fields (react-hook-form + Zod validation)

```typescript
const designRequestSchema = z.object({
  // Contact
  name:          z.string().min(2, 'Please enter your name'),
  email:         z.string().email('Please enter a valid email'),
  phone:         z.string().optional(),
  organisation:  z.string().optional(), // Club/Team name
  
  // Design brief
  primaryColour: z.string().min(1, 'Please specify a primary colour'),
  secondaryColours: z.string().optional(),
  uniformStyle:  z.enum(['traditional', 'modern', 'retro', 'undecided']),
  hasLogo:       z.enum(['yes-will-send', 'yes-need-design', 'no']),
  designNotes:   z.string().max(1000, 'Max 1000 characters').optional(),
  
  // Order intent
  quantity:      z.enum(['1-5', '6-10', '11-20', '21-50', '50+']),
  timeline:      z.enum(['asap', '4-6-weeks', '6-8-weeks', 'flexible']),
  
  // Extended range interest (checkboxes)
  additionalItems: z.array(z.enum(['bags', 'polos', 'hoodies', 'shooting-shirts'])).optional(),
});
```

**Field order in form:**
1. Full Name *
2. Email Address *
3. Phone Number (optional)
4. Club / Team Name (optional)
5. Primary Colour *
6. Secondary Colours (optional)
7. Uniform Style preference (radio: Traditional / Modern / Retro / Not sure yet)
8. Do you have a logo? (radio: Yes — I'll send it / Yes — I need one designed / No logo)
9. Design Notes / Inspiration (textarea, optional, 1000 char limit with counter)
10. Approximate Quantity *
11. Timeline *
12. Interested in any additional items? (checkboxes: Bags / Polos / Hoodies / Shooting Shirts)

**Submit button:** "SUBMIT REQUEST" — full width, gold

**After submission:**
- Replace form with success state: crown icon + "Your request has been received! We'll be in touch within 24 hours." + link back to homepage
- Do NOT redirect
- If API error: show error banner above form, keep form data intact

### API Route: `app/api/request-design/route.ts`

```typescript
// POST handler
// Validates body against designRequestSchema
// Sends email to Jersey Joint email address with all form data
// Returns { success: true } or { error: string }
// Rate limit: basic — check for repeated submissions from same IP
```

---

## 11. Page: `/order`

### Layout

Same treatment as `/request-design`. Max-width `640px` centred.

**Heading:** "PLACE YOUR ORDER"
**Subheading:** "You've got your approved design. Let's make it official."

**Note at top (gold info box):**
"Haven't got an approved design yet? [Request a design first →]"

### Form Fields

```typescript
const orderSchema = z.object({
  // Contact
  name:           z.string().min(2),
  email:          z.string().email(),
  phone:          z.string().min(8, 'Phone is required for orders'),
  organisation:   z.string().optional(),
  
  // Order details
  designRef:      z.string().optional(), // Their design reference / approval number
  quantity:       z.number().int().min(1, 'Enter quantity'),
  players:        z.array(z.object({
    name:    z.string(),
    number:  z.string(),
    size:    z.enum(['6XSS', 'XSS', 'SS', 'S', 'M', 'L', 'XL', '2XL', '3XL']),
  })).optional(), // Optional at this stage — can be sent later
  
  deliveryAddress: z.string().min(10, 'Please enter full delivery address'),
  deliveryState:  z.enum(['NSW', 'VIC', 'QLD', 'SA', 'WA', 'TAS', 'NT', 'ACT']),
  
  additionalItems: z.array(z.enum(['bags', 'polos', 'hoodies', 'shooting-shirts'])).optional(),
  additionalNotes: z.string().max(500).optional(),
  
  // Agreement
  agreeTechSheet:  z.literal(true, { errorMap: () => ({ message: 'You must agree to approve the tech sheet before manufacture' }) }),
});
```

**Field order:**
1. Full Name *
2. Email *
3. Phone Number *
4. Club / Team Name (optional)
5. Design Reference (optional — e.g. "Magic Basketball — approved April 2024")
6. Total Quantity *
7. Player List (optional at this stage) — note: "You can send player names, numbers and sizes via email after submission"
8. Delivery Address *
9. State *
10. Any additional items?
11. Additional Notes (optional)
12. Checkbox: "I understand I will need to approve a final tech sheet before manufacture begins" *

**Submit:** "PLACE ORDER" — gold, full width

---

## 12. UI Component Specs

### Button Component

```typescript
// components/ui/Button.tsx
// Props: variant ('primary' | 'secondary' | 'ghost'), size ('sm' | 'md' | 'lg'), href?, onClick?, loading?, disabled?

// primary: gold bg, black text, font-barlow bold uppercase
//   hover: gold-light bg, gold glow shadow
//   active: gold-dark bg

// secondary: transparent bg, white border + text
//   hover: white bg at 10% opacity

// ghost: no border, white text
//   hover: white text at 80% opacity

// All buttons: border-radius 4px, transition 0.2s
// Loading state: spinner icon replaces text, pointer-events none
```

### SectionHeading Component

```typescript
// components/ui/SectionHeading.tsx
// Props: label (small gold uppercase text above), title, subtitle?, align ('left' | 'center')

// label: font-dm-sans 600, uppercase, letter-spacing 0.1em, color gold, font-size 13px
// title: font-barlow 700 italic, 42px desktop / 32px mobile, color white
// subtitle: font-dm-sans 400, 18px, color #CCCCCC, max-width 600px
// spacing: label mb-3, title mb-4, subtitle mb-0
```

### GrainOverlay Component

```typescript
// components/ui/GrainOverlay.tsx
// Renders an absolutely positioned SVG filter noise texture over its parent
// opacity: 0.04 (very subtle)
// pointer-events: none
// z-index: 1

// SVG filter: feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3"
```

---

## 13. Accessibility

- All interactive elements keyboard-navigable
- Focus rings: `outline: 2px solid #F5C400; outline-offset: 3px`
- All images have descriptive `alt` attributes — no `alt=""` on content images
- Form fields: explicit `<label>` for every input, linked via `htmlFor`
- Error messages: `aria-describedby` on invalid fields
- FAQ accordion: `aria-expanded`, `aria-controls`, proper `role="button"`
- Colour contrast: all text meets WCAG AA (gold `#F5C400` on black passes for large text)
- Skip to main content link (visually hidden, shown on focus)

---

## 14. Animation Guidelines

**Philosophy:** Purposeful motion only. Nothing decorative.

**Scroll animations (Framer Motion):**
```typescript
// Standard fade-up on scroll — use for section headings and content blocks
const fadeUpVariant = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};
// Trigger: whileInView, viewport={{ once: true, margin: "-80px" }}
```

**Stagger children:**
```typescript
const containerVariant = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};
```

**Navbar scroll transition:** CSS transition only (no Framer Motion needed)

**FAQ accordion:** `AnimatePresence` + height animation:
```typescript
<motion.div
  initial={{ height: 0, opacity: 0 }}
  animate={{ height: 'auto', opacity: 1 }}
  exit={{ height: 0, opacity: 0 }}
  transition={{ duration: 0.25, ease: 'easeOut' }}
/>
```

**DO NOT animate:** Gallery images on load (causes CLS), pricing table (just appears), footer.

**Respect prefers-reduced-motion:**
```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```

---

## 15. Environment Variables

```bash
# .env.local (never commit)
RESEND_API_KEY=                  # Email service API key
EMAIL_TO=                        # Jersey Joint receiving email address
EMAIL_FROM=                      # noreply@thejerseyjoint.com.au
NEXT_PUBLIC_SITE_URL=            # https://thejerseyjoint.com.au

# Optional
NEXT_PUBLIC_GA_ID=               # Google Analytics 4 measurement ID
```

---

## 16. Deployment

**Target platform:** Vercel (recommended — zero config Next.js)

**Pre-launch checklist:**
- [ ] All `[PLACEHOLDER]` values filled in by client (pricing, turnaround times, MOQs, story copy)
- [ ] All 12 product/gallery images added to `/public/images/gallery/`
- [ ] Logo files added to `/public/images/`
- [ ] OG image created (`/public/images/og-image.jpg`, 1200×630)
- [ ] Favicon set (gold crown on black, square)
- [ ] Environment variables set in Vercel dashboard
- [ ] Custom domain configured (`thejerseyjoint.com.au`)
- [ ] Email receiving address tested — submit test form
- [ ] `robots.txt` not blocking production
- [ ] Analytics verified (GA4 or Vercel Analytics)
- [ ] Lighthouse run on production — all targets met
- [ ] Test on iPhone Safari and Android Chrome
- [ ] All FAQ answers confirmed by client
- [ ] Social media links updated in Footer

---

## 17. What NOT to Build

> The agent must NOT build any of the following. They are not part of this project.

- ❌ E-commerce / cart / checkout / payment gateway
- ❌ Product category pages
- ❌ Individual product detail pages
- ❌ User accounts / login / dashboard
- ❌ CMS or admin panel
- ❌ Live chat widget
- ❌ Blog or news section
- ❌ Size guide calculator
- ❌ 3D jersey configurator
- ❌ Any database (no Prisma, no Supabase, no MongoDB)
- ❌ Authentication
- ❌ Multi-language / i18n
- ❌ Any feature not described in this document

---

## 18. Placeholder Content Summary

> Items marked `[PLACEHOLDER]` must be filled by the client before launch:

| Item | Location | Notes |
|------|----------|-------|
| All pricing | Pricing section | AUD, inc/excl GST |
| Minimum order quantity | Pricing + FAQ | Sets minimum |
| Turnaround time | FAQ | Weeks from approval |
| Fabric details | FAQ | Material spec |
| Our Story copy | Story section | ~150 words |
| Business stats | Story section | Teams, uniforms made, years |
| Social media URLs | Footer | Instagram, Facebook |
| Receiving email | `.env.local` | Where forms go |
| GA4 Measurement ID | `.env.local` | Analytics |
| Individual jersey MOQ | FAQ | Can order singles? |

---

*End of document. Build exactly this. No additions. No omissions. No hallucinations.*


Additional informational:

# The Verdict: Black vs. White Background

For The Jersey Joint, a Black background (#111111) is the superior choice.

- **Aesthetic:** It aligns with the "pro-sports" and "premium streetwear" vibe seen in your gallery images.
- **Contrast:** The gold crown icon and your primary brand color (#F5C400) pop significantly better against dark tones than white.
- **Cinematic Feel:** It mirrors the high-end editorial photography style you prefer.

---

# 🛠️ Refined Design Document: The Jersey Joint

## Agent Instruction

Build exactly this. No hallucinations.

Use the following specs to generate the Next.js application.

---

# 1. Project Essence

## Business
Custom basketball uniforms (AU market).

## Model
B2B/B2C hybrid.

Request Design → Approve → Order → Invoice (Manual) → Deliver.

## Architecture
Single-page long-scroll for the home route, plus two dedicated form pages:

- `/request-design`
- `/order`

---

# 2. Brand Identity & Visuals

## Primary Color
`--gold: #F5C400`

(from crown logo)

## Backgrounds
- Deep near-black (`#111111`)
- Secondary charcoal (`#1A1A1A`)

## Typography

### Headings
**Barlow Condensed** (700/800, Italic)

For that aggressive, athletic feel.

### Body
**DM Sans** (400/500)

For high legibility.

## Texture
A subtle 4% opacity grain overlay to match the brushstroke aesthetic of the logo background.

---

# 3. Core Component Map

| Section | Purpose | Visual Notes |
|---|---|---|
| Hero | Conversion | High-contrast jersey close-up with "Request Design" CTA. |
| How It Works | Trust | 5-step process: Design → Approve → Order → Tech Sheet → Delivery. |
| Gallery | Proof | Masonry grid featuring team shots and gear. |
| Extended Range | Upsell | Simple grid for Bags, Polos, and Hoodies. |
| Pricing | Transparency | Clean dark table with [PLACEHOLDER] values for AUD pricing. |
| FAQ | Friction Removal | Accordion for MOQ, turnaround times, and shipping. |

---

# 4. Technical Constraints (Agent Guardrails)

## Stack
- Next.js 14 (App Router)
- Tailwind CSS
- Framer Motion (for subtle fade-ups)
- Resend (for form handling)

## No Database
Forms should submit via API routes to email.

## No Checkout
The "Order" page is a detailed data-collection form, not a payment gateway.

## Performance
Image optimization via `next/image` is mandatory for the high-res jersey shots.

---

# 5. Interaction Flow

## Entry
User lands on a dark, high-impact hero section.

## Validation
User scrolls through:
- "Our Work" (Gallery)
- "How It Works"

## Action
User clicks:
- "Request a Design"

## Conversion
User fills out the design brief:
- Colors
- Style
- Logo status
