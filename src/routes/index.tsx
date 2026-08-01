import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight, CalendarCheck, Phone, ShieldCheck, Star } from "lucide-react";
import heroDoctor from "@/assets/hero-doctor.jpg";
import { PageTransition } from "@/components/PageTransition";
import { AnimatedSection } from "@/components/AnimatedSection";
import { SectionTitle } from "@/components/SectionTitle";
import { ButtonAnchor, ButtonLink } from "@/components/Button";
import { Card } from "@/components/Card";
import { CountUp } from "@/components/CountUp";
import { ServiceCard } from "@/components/ServiceCard";
import { DoctorCard } from "@/components/DoctorCard";
import { TestimonialCarousel } from "@/components/TestimonialCarousel";
import { FaqAccordion } from "@/components/FaqAccordion";
import { services } from "@/data/services";
import { faqs, reasons, stats, testimonials } from "@/data/content";
import { clinic, doctor } from "@/data/doctor";
import { telHref } from "@/utils/format";
import { fadeUp, floating, staggerContainer, viewportOnce } from "@/utils/motion";

const title = "Medira Clinic — Dr. Rohan Kasariya, MBBS General Physician in Surat";
const description =
  "Book an unhurried consultation with Dr. Rohan Kasariya, MBBS General Physician. Fever and infection care, diabetes and blood pressure management, checkups and teleconsultation in Adajan.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "MedicalClinic",
          name: clinic.name,
          description,
          telephone: clinic.phone,
          email: clinic.email,
          address: {
            "@type": "PostalAddress",
            streetAddress: clinic.addressLine1,
            addressLocality: "Surat",
            postalCode: "395009",
            addressCountry: "IN",
          },
          medicalSpecialty: "PrimaryCare",
          employee: {
            "@type": "Physician",
            name: doctor.name,
            medicalSpecialty: "PrimaryCare",
          },
        }),
      },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <PageTransition>
      <Hero />
      <Stats />
      <ServicesPreview />
      <WhyChooseUs />
      <DoctorPreview />
      <Testimonials />
      <AppointmentCta />
      <Faq />
    </PageTransition>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden bg-surface">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 -top-40 size-[34rem] rounded-full bg-primary/10 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-48 -left-32 size-[28rem] rounded-full bg-secondary/10 blur-3xl"
      />
      <div className="container-page relative grid items-center gap-14 py-16 lg:grid-cols-2 lg:py-24">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-start gap-6"
        >
          <motion.span
            variants={fadeUp}
            className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-xs font-semibold text-muted-foreground shadow-soft"
          >
            <ShieldCheck className="size-4 text-secondary" aria-hidden="true" />
            MBBS · {doctor.experience} in primary care
          </motion.span>

          <motion.h1
            variants={fadeUp}
            className="text-4xl font-semibold leading-[1.1] sm:text-5xl lg:text-6xl"
          >
            Everyday medicine,
            <span className="block text-primary">delivered with care</span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="max-w-xl text-lg leading-relaxed text-muted-foreground"
          >
            {doctor.name} is a General Physician in Adajan treating fever and infections,
            diabetes, blood pressure and long-term health — with consultations long enough to
            actually understand what is going on.
          </motion.p>

          <motion.div variants={fadeUp} className="flex flex-wrap gap-3">
            <ButtonLink to="/appointment" size="lg">
              Book an appointment
              <ArrowRight className="size-4" aria-hidden="true" />
            </ButtonLink>
            <ButtonAnchor href={telHref(clinic.phone)} variant="outline" size="lg">
              <Phone className="size-4" aria-hidden="true" />
              {clinic.phone}
            </ButtonAnchor>
          </motion.div>

          <motion.div
            variants={fadeUp}
            className="flex flex-wrap items-center gap-x-6 gap-y-3 pt-2 text-sm text-muted-foreground"
          >
            <span className="flex items-center gap-2">
              <Star className="size-4 fill-secondary text-secondary" aria-hidden="true" />
              4.9 average patient rating
            </span>
            <span className="flex items-center gap-2">
              <CalendarCheck className="size-4 text-secondary" aria-hidden="true" />
              Same-day slots available
            </span>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto w-full max-w-md"
        >
          <motion.div animate={floating.animate} className="relative">
            <img
              src={heroDoctor}
              alt={`${doctor.name}, MBBS General Physician, welcoming patients at ${clinic.name}`}
              width={1024}
              height={1152}
              fetchPriority="high"
              className="w-full rounded-[2.5rem] object-cover shadow-lift"
            />
            <div className="absolute -bottom-6 -left-4 rounded-3xl border border-border/70 bg-card p-5 shadow-lift sm:-left-10">
              <p className="font-display text-2xl font-semibold text-primary">1,500+</p>
              <p className="text-xs text-muted-foreground">patients cared for</p>
            </div>
            <div className="absolute -right-2 top-8 rounded-3xl border border-border/70 bg-card p-5 shadow-lift sm:-right-8">
              <p className="font-display text-2xl font-semibold text-secondary">98%</p>
              <p className="text-xs text-muted-foreground">would recommend</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

function Stats() {
  return (
    <AnimatedSection className="container-page -mt-8 lg:-mt-12">
      <div className="grid gap-4 rounded-[2rem] border border-border/70 bg-card p-6 shadow-lift sm:grid-cols-2 lg:grid-cols-4 lg:p-8">
        {stats.map((stat) => (
          <motion.div key={stat.label} variants={fadeUp} className="px-2 py-4 text-center">
            <p className="font-display text-3xl font-semibold text-primary sm:text-4xl">
              <CountUp value={stat.value} suffix={stat.suffix} />
            </p>
            <p className="mt-2 text-sm text-muted-foreground">{stat.label}</p>
          </motion.div>
        ))}
      </div>
    </AnimatedSection>
  );
}

function ServicesPreview() {
  return (
    <section className="container-page py-20 lg:py-28">
      <SectionTitle
        eyebrow="What we treat"
        title="Complete primary care under one roof"
        description="From a sudden fever to lifelong diabetes control, most of what you need from a doctor happens right here."
      />
      <AnimatedSection
        as="div"
        className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
      >
        {services.slice(0, 6).map((service) => (
          <ServiceCard key={service.slug} service={service} />
        ))}
      </AnimatedSection>
      <div className="mt-10 flex justify-center">
        <ButtonLink to="/services" variant="outline">
          View all 12 services
          <ArrowRight className="size-4" aria-hidden="true" />
        </ButtonLink>
      </div>
    </section>
  );
}

function WhyChooseUs() {
  return (
    <section className="bg-surface py-20 lg:py-28">
      <div className="container-page grid gap-14 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-center">
        <SectionTitle
          align="left"
          eyebrow="Why choose us"
          title="Care that respects your time and intelligence"
          description="Medira Clinic runs on a simple promise: fewer patients per day, longer consultations, and treatment you can trust to be necessary."
        />
        <AnimatedSection as="div" className="grid gap-5 sm:grid-cols-2">
          {reasons.map((reason) => {
            const Icon = reason.icon;
            return (
              <Card key={reason.title} className="flex flex-col gap-3">
                <span className="flex size-11 items-center justify-center rounded-2xl bg-secondary-soft text-secondary">
                  <Icon className="size-5" aria-hidden="true" />
                </span>
                <h3 className="text-base font-semibold">{reason.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {reason.description}
                </p>
              </Card>
            );
          })}
        </AnimatedSection>
      </div>
    </section>
  );
}

function DoctorPreview() {
  return (
    <section className="container-page py-20 lg:py-28">
      <SectionTitle
        eyebrow="Meet your doctor"
        title={`${doctor.name}, ${doctor.qualification}`}
        description="One doctor, every visit — so your history is known and your care stays consistent."
      />
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        variants={staggerContainer}
        className="mt-12"
      >
        <DoctorCard compact />
      </motion.div>
    </section>
  );
}

function Testimonials() {
  return (
    <section className="bg-surface py-20 lg:py-28">
      <div className="container-page">
        <SectionTitle
          eyebrow="Patient stories"
          title="Trusted by families across Surat"
          description="Real experiences from patients who have made Medira Clinic their first call."
        />
        <div className="mt-12">
          <TestimonialCarousel items={testimonials} />
        </div>
      </div>
    </section>
  );
}

function AppointmentCta() {
  return (
    <AnimatedSection className="container-page py-20 lg:py-24">
      <motion.div
        variants={fadeUp}
        className="relative overflow-hidden rounded-[2.5rem] bg-primary px-8 py-14 text-primary-foreground shadow-glow lg:px-16"
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-20 -top-24 size-80 rounded-full bg-secondary/30 blur-3xl"
        />
        <div className="relative flex flex-col items-start gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-xl">
            <h2 className="text-3xl font-semibold text-primary-foreground sm:text-4xl">
              Feeling unwell? Get seen today.
            </h2>
            <p className="mt-4 text-base leading-relaxed text-primary-foreground/85">
              Same-day in-clinic slots and evening teleconsultations. Booking takes under a minute
              and you will get a confirmation right away.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <ButtonLink
              to="/appointment"
              size="lg"
              className="bg-card text-primary shadow-soft hover:bg-card/90"
            >
              Book appointment
            </ButtonLink>
            <Link
              to="/contact"
              className="inline-flex h-14 items-center rounded-full border border-primary-foreground/40 px-8 text-base font-medium text-primary-foreground transition-colors hover:bg-primary-foreground/10"
            >
              Contact the clinic
            </Link>
          </div>
        </div>
      </motion.div>
    </AnimatedSection>
  );
}

function Faq() {
  return (
    <section className="container-page pb-8 lg:pb-16">
      <SectionTitle
        eyebrow="FAQ"
        title="Questions patients ask us most"
        description="Everything about fees, timings, teleconsultation and what to expect on your first visit."
      />
      <div className="mx-auto mt-12 max-w-3xl">
        <FaqAccordion items={faqs} />
      </div>
    </section>
  );
}
