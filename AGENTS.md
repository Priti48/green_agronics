# 🧠 Green Agronics - AGENTS.md

## 1. PRE-TASK PROTOCOL

Before starting ANY task, I MUST:
- Read AGENTS.md completely
- Understand current context and progress
- Check existing components and structure
- Avoid duplication
- Decide correct layer (component / module / service / store)

DO NOT start coding without this.

---

## 2. PROJECT OVERVIEW

- **Project**: Green Agronics
- **Type**: Scalable eCommerce frontend
- **Tech**: Next.js 16 (App Router), TypeScript, SCSS
- **Current**: Frontend only (no backend)
- **Future**: APIs, auth, cart, admin

---

## 3. ARCHITECTURE

```
src/
├── app/              (routing only - pages)
├── components/
│   ├── ui/          (Button, Container, Heading, Section)
│   ├── layout/      (Navbar, Footer)
│   ├── sections/    (Hero, ProductGrid, Testimonials, ExportProcess)
│   └── forms/       (RFQForm)
├── lib/              (utilities: seo.ts, form.ts, whatsapp.ts)
├── data/             (temporary static data: products.ts, markets.ts)
├── styles/           (globals.scss, variables.scss, mixins.scss)
```

**Rules**:
- No business logic in `app/`
- No API calls in components
- Always use services layer when APIs are added

---

## 4. API RULES (FUTURE)

- Use native fetch ONLY
- Do NOT use axios
- All API calls must be inside `/services`
- Components must never call APIs directly

---

## 5. PERFORMANCE RULES

- Use Server Components by default
- Use "use client" only when needed
- Use next/image for images
- Use dynamic imports for heavy components
- Optimize for performance and SEO

**Current Optimizations**:
- `ProductGrid` loaded dynamically in `page.tsx`
- Images use `next/image` with `priority` for hero
- SSR enabled for main components

---

## 6. SEO RULES

- Use Metadata API via `buildMetadata()` from `@/lib/seo`
- Include title + description for every page
- Use semantic HTML
- Proper heading structure
- Clean URLs

**Existing Pages**:
- `/` (Home)
- `/products` (Product listing)
- `/products/[slug]` (Product detail)
- `/shop` (Shop)
- `/markets` (Markets)
- `/markets/[country]` (Country page)
- `/export` (Export)
- `/certifications` (Certifications)
- `/contact` (Contact)
- `/blog` (Blog)

---

## 7. STATE MANAGEMENT

- Use Zustand for cart and UI state (when needed)
- Avoid unnecessary global state

---

## 8. COMPONENT RULES

- Build reusable components
- Keep components small
- Separate UI and logic
- Use TypeScript strictly

---

## 9. CURRENT CONTEXT

### Recently Completed
- Major enterprise upgrade: premium SEO-optimized export business website
- Lenis smooth-scroll provider (`src/components/providers/LenisProvider.tsx`)
- Navbar: export-focused links, WhatsApp + Enquiry CTA
- Hero: GSAP cinematic reveal, export headings, WhatsApp CTA, scroll indicator
- StatsCounter: GSAP animated counters (12k+, 50+, 4.8★, 6+, 100%)
- WhyTrustUs: 8 export trust point cards
- ExportCountries: 50+ country flags grid with region stats
- ProductsShowcase: IP-based dynamic currency pricing (INR/USD/AED/GBP/EUR)
- PrivateLabel: packaging options + 4-step process timeline
- GoogleReviews: premium carousel with 6 verified reviews
- IndustriesServed: 6 industry cards
- Chatbot: floating FAQ bot with WhatsApp fallback (`src/components/ui/Chatbot/`)
- StickyCTA: desktop sidebar + mobile action bar (`src/components/ui/StickyCTA/`)
- /api/enquiry: Nodemailer route with input sanitization
- Footer: full 4-column dark footer
- layout.tsx: Lenis, JSON-LD schemas, GA4, GTM
- page.tsx: 15-section export-focused homepage
- robots.txt created, sitemap upgraded
- Build: ✅ passes with zero errors

### Current Focus
- All enterprise sections complete, build verified

### Next Steps
- Set environment variables in Vercel: SMTP_HOST, SMTP_USER, SMTP_PASS, ENQUIRY_TO_EMAIL, NEXT_PUBLIC_GA_MEASUREMENT_ID, NEXT_PUBLIC_GTM_ID
- Deploy to Vercel

---

## 10. PROGRESS TRACKER

- [x] Analyze project structure
- [x] Document architecture in AGENTS.md
- [x] Enterprise upgrade — all 18 tasks complete
- [x] Build verification ✅

---

## 11. COMPONENT MAP

### Providers
- `src/components/providers/LenisProvider.tsx` - Lenis smooth-scroll wrapper

### UI Components
- `src/components/ui/Button/` - Button with variants
- `src/components/ui/Container/` - Layout container
- `src/components/ui/Heading/` - Heading with levels
- `src/components/ui/Section/` - Section wrapper
- `src/components/ui/Chatbot/` - Floating FAQ chatbot with WhatsApp fallback
- `src/components/ui/StickyCTA/` - Desktop sidebar + mobile bottom action bar

### Layout Components
- `src/components/layout/Navbar/` - Sticky navbar with export links + Enquiry CTA
- `src/components/layout/Footer/` - 4-column dark footer with certifications

### Home Components
- `src/components/home/Hero.tsx` - Export-focused hero with GSAP animations

### Section Components
- `src/components/sections/StatsCounter/` - GSAP animated counters
- `src/components/sections/WhyTrustUs/` - 8 export trust point cards
- `src/components/sections/ExportCountries/` - 50+ country flags grid
- `src/components/sections/ProductsShowcase/` - Products with IP-based currency pricing
- `src/components/sections/PrivateLabel/` - OEM/private label info + process timeline
- `src/components/sections/GoogleReviews/` - Premium review carousel
- `src/components/sections/IndustriesServed/` - 6 industry cards
- `src/components/sections/ProductCategories/` - 3 category cards + B2B strip
- `src/components/sections/AboutSection/` - 2-col about + certifications
- `src/components/sections/FeaturedProducts/` - 4 product cards with star rating
- `src/components/sections/ProductRange/` - Dark green 6-category grid
- `src/components/sections/WholesaleSection/` - B2B wholesale + stats
- `src/components/sections/Testimonials/` - Rating bar + 3 review cards
- `src/components/sections/TrustBar/` - 4 cert logos + stats

### API Routes
- `src/app/api/enquiry/route.ts` - Nodemailer enquiry form handler

### Lib Utilities
- `src/lib/seo.ts` - buildMetadata + 6 JSON-LD schema builders
- `src/lib/currency.ts` - IP-based currency detection + price conversion
- `src/lib/analytics.ts` - GA4 event tracking

### Form Components
- `src/components/forms/RFQForm/` - Request for Quote form

### Pages
- `src/app/page.tsx` - Home
- `src/app/products/page.tsx` - Products listing
- `src/app/products/[slug]/page.tsx` - Product detail
- `src/app/shop/page.tsx` - Shop
- `src/app/markets/page.tsx` - Markets
- `src/app/markets/[country]/page.tsx` - Country markets
- `src/app/export/page.tsx` - Export
- `src/app/certifications/page.tsx` - Certifications
- `src/app/contact/page.tsx` - Contact
- `src/app/blog/page.tsx` - Blog
- `src/app/sitemap.ts` - Sitemap

---

## 12. POST-TASK UPDATE

After completing ANY task, I MUST update:
- CURRENT CONTEXT (section 9)
- PROGRESS TRACKER (section 10)
- COMPONENT MAP if new components added (section 11)

---

## 13. CONTINUITY RULE

- Always reuse existing code
- Maintain naming consistency
- Do not duplicate logic
- Follow existing patterns

---

## 14. FAILURE CONDITIONS

DO NOT proceed if:
- I did not read AGENTS.md
- I am duplicating code
- I am breaking architecture
- I am placing API logic in UI

**Instead**: Re-evaluate and fix

---

## 15. TASK EXECUTION FLOW

1. Read AGENTS.md
2. Understand context
3. Check existing code
4. Map to architecture
5. Implement
6. Update AGENTS.md

Skipping steps is NOT allowed.

---

## FINAL INSTRUCTIONS

I must:
- Always follow AGENTS.md
- Always keep it updated
- Always ensure consistency, scalability, and performance