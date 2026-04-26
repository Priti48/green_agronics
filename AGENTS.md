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
- (Initial analysis complete)
- Created AGENTS.md as single source of truth

### Current Focus
- Project setup complete, ready for feature development

### Next Steps
- Run lint/typecheck to verify codebase health
- Continue with feature implementation as needed

---

## 10. PROGRESS TRACKER

- [x] Analyze project structure
- [x] Document architecture in AGENTS.md
- [ ] Run lint verification
- [ ] Run typecheck verification

---

## 11. COMPONENT MAP

### UI Components
- `src/components/ui/Button/` - Button with variants
- `src/components/ui/Container/` - Layout container
- `src/components/ui/Heading/` - Heading with levels
- `src/components/ui/Section/` - Section wrapper

### Layout Components
- `src/components/layout/Navbar/` - Navigation bar
- `src/components/layout/Footer/` - Footer

### Section Components
- `src/components/sections/Hero/` - Hero section with CTA
- `src/components/sections/ProductGrid/` - Product grid display
- `src/components/sections/Testimonials/` - Testimonials
- `src/components/sections/ExportProcess/` - Export process

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