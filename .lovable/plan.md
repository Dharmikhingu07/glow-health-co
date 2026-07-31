## Goal
A premium, minimal healthcare website for Dr. Raj Sharma, MBBS General Physician — 6 pages, animated, responsive, accessible, SEO-ready.

## One stack note
This project runs on TanStack Router (file-based routing), not React Router — React Router isn't supported here. Everything else (Tailwind, Framer Motion, Lucide) is exactly as requested, and routing behaves identically (typed links, code splitting, per-page SEO metadata).

## Design system
- Tokens in `src/styles.css`: primary `#2563EB`, secondary/teal `#14B8A6`, background `#F8FAFC`, cards white, heading text `#1E293B`, body `#64748B`, radius 20–24px, soft layered shadows.
- Fonts loaded via `<link>` in the root route: Poppins (headings), Inter (body).
- Generous whitespace, mobile → tablet → desktop breakpoints.

## Pages
1. **Home** — navbar, hero (fade + slide-up, floating doctor illustration, two CTAs), count-up stats (patients / years / consultations), services grid, Why Choose Us, doctor preview, testimonials carousel, appointment CTA band, FAQ accordion, footer.
2. **About** — clinic story, values, credentials, facility highlights.
3. **Services** — all 12 services as cards with icons and detail copy.
4. **Doctors** — full profile: AI-generated portrait, MBBS, registration no., experience, languages, biography, working hours, consultation fee, contact + social links.
5. **Contact** — clinic address, phone, email, hours, map placeholder, short contact form.
6. **Appointment** — form with Full Name, Phone, Email, Gender, Age, Service, Preferred Date, Preferred Time, Symptoms, Message.

## Components (reusable)
Button, Card, SectionTitle, DoctorCard, ServiceCard, TestimonialCard, FAQAccordion, Navbar (sticky, blur on scroll), Footer, CountUp, AnimatedSection.

## Data files
`src/data/` holds services, testimonials, faqs, stats, doctor, clinic/contact info. No content hardcoded in components.

## Animations (Framer Motion)
Hero fade/slide-up, floating illustration loop, scroll-triggered section fade-ins, staggered card grids, hover lift + scale, count-up stats, navbar blur transition, page transition wrapper. All respect `prefers-reduced-motion`.

## Forms
Appointment and contact forms validate client-side with Zod (required fields, email/phone format, age range, length caps) and show a success toast. No backend yet — submissions are validated and confirmed locally; wiring them to a database and email notifications can be a follow-up.

## Technical details
- Folder layout: `src/components/`, `src/routes/` (pages), `src/assets/`, `src/hooks/`, `src/utils/`, `src/data/`.
- Home page replaces the placeholder at `/`.
- Per-route `head()` with unique title, description, og/twitter tags; JSON-LD `Physician`/`MedicalClinic` schema on Home and Doctors.
- Semantic HTML, single H1 per page, alt text everywhere, keyboard-accessible accordion/carousel/forms, visible focus rings.
- Doctor portrait and hero illustration generated as assets; images lazy-loaded with width/height set; routes code-split by default.
