import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Mail, Phone, Clock4, CheckCircle2 } from "lucide-react";
import { PageTransition } from "@/components/PageTransition";
import { AnimatedSection } from "@/components/AnimatedSection";
import { SectionTitle } from "@/components/SectionTitle";
import { Card } from "@/components/Card";
import { ButtonLink } from "@/components/Button";
import { TestimonialCarousel } from "@/components/TestimonialCarousel";
import doctorPortrait from "@/assets/doctor-portrait.jpg";
import { clinic, doctor } from "@/data/doctor";
import { expertiseAreas, testimonials } from "@/data/content";
import { telHref } from "@/utils/format";
import { fadeUp } from "@/utils/motion";

const title = `${doctor.name}, MBBS General Physician — Profile & Timings`;
const description =
  "Profile of Dr. Rohan Kasariya, MBBS General Physician with 2+ years of experience: registration details, languages, biography, working hours and consultation fees.";

export const Route = createFileRoute("/doctors")({
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
          "@type": "Physician",
          name: doctor.name,
          medicalSpecialty: "PrimaryCare",
          description: doctor.biography,
          telephone: doctor.phone,
          email: doctor.email,
          worksFor: { "@type": "MedicalClinic", name: clinic.name },
          address: {
            "@type": "PostalAddress",
            streetAddress: clinic.addressLine1,
            addressLocality: "Surat",
            postalCode: "395009",
            addressCountry: "IN",
          },
        }),
      },
    ],
  }),
  component: DoctorsPage,
});

function DoctorsPage() {
  return (
    <PageTransition>
      <section className="bg-surface py-16 lg:py-24">
        <div className="container-page grid items-center gap-12 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)]">
          <motion.img
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            src={doctorPortrait}
            alt={`Portrait of ${doctor.name}, ${doctor.qualification} ${doctor.specialty}`}
            width={1024}
            height={1280}
            className="mx-auto w-full max-w-sm rounded-[2.5rem] object-cover shadow-lift"
          />
          <AnimatedSection as="div" className="flex flex-col gap-5">
            <motion.span
              variants={fadeUp}
              className="inline-flex w-fit items-center rounded-full bg-primary-soft px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-primary"
            >
              Meet the doctor
            </motion.span>
            <motion.h1 variants={fadeUp} className="text-4xl font-semibold sm:text-5xl">
              {doctor.name}
            </motion.h1>
            <motion.p variants={fadeUp} className="text-lg font-medium text-primary">
              {doctor.qualification} · {doctor.specialty}
            </motion.p>
            <motion.p variants={fadeUp} className="leading-relaxed text-muted-foreground">
              {doctor.biography}
            </motion.p>
            <motion.p variants={fadeUp} className="leading-relaxed text-muted-foreground">
              {doctor.biographyExtended}
            </motion.p>
            <motion.div variants={fadeUp} className="flex flex-wrap gap-3 pt-2">
              <ButtonLink to="/appointment" size="lg">
                Book with {doctor.name.split(" ")[1]}
              </ButtonLink>
              <a
                href={telHref(doctor.phone)}
                className="inline-flex h-14 items-center gap-2 rounded-full border border-border bg-card px-8 text-base font-medium shadow-soft transition-all hover:-translate-y-0.5 hover:text-primary"
              >
                <Phone className="size-4" aria-hidden="true" />
                {doctor.phone}
              </a>
            </motion.div>
          </AnimatedSection>
        </div>
      </section>

      <section className="container-page py-16 lg:py-24">
        <AnimatedSection as="div" className="grid gap-6 lg:grid-cols-3">
          <Card className="flex flex-col gap-4">
            <h2 className="text-lg font-semibold">Credentials</h2>
            <dl className="flex flex-col gap-3 text-sm">
              <Row label="Qualification" value={`${doctor.qualification}, General Medicine`} />
              <Row label="Registration" value={doctor.registrationNumber} />
              <Row label="Experience" value={doctor.experience} />
              <Row label="Languages" value={doctor.languages.join(", ")} />
            </dl>
            <ul className="mt-2 flex flex-col gap-2 border-t border-border/70 pt-4">
              {doctor.highlights.map((h) => (
                <li key={h} className="flex items-start gap-2 text-sm text-muted-foreground">
                  <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-secondary" aria-hidden="true" />
                  {h}
                </li>
              ))}
            </ul>
          </Card>

          <Card className="flex flex-col gap-4">
            <h2 className="flex items-center gap-2 text-lg font-semibold">
              <Clock4 className="size-5 text-primary" aria-hidden="true" />
              Working hours
            </h2>
            <dl className="flex flex-col gap-3 text-sm">
              {doctor.workingHours.map((slot) => (
                <Row key={slot.day} label={slot.day} value={slot.hours} />
              ))}
            </dl>
            <div className="mt-2 rounded-2xl bg-surface p-4 text-sm text-muted-foreground">
              <p className="font-medium text-foreground">{doctor.consultationFee}</p>
              <p className="mt-1">{doctor.teleconsultationFee}</p>
              <p className="mt-1">Follow-up within 7 days is free of charge.</p>
            </div>
          </Card>

          <Card className="flex flex-col gap-4">
            <h2 className="text-lg font-semibold">Contact</h2>
            <a
              href={telHref(doctor.phone)}
              className="flex items-center gap-3 text-sm text-muted-foreground transition-colors hover:text-primary"
            >
              <Phone className="size-4 shrink-0 text-primary" aria-hidden="true" />
              {doctor.phone}
            </a>
            <a
              href={`mailto:${doctor.email}`}
              className="flex items-center gap-3 break-all text-sm text-muted-foreground transition-colors hover:text-primary"
            >
              <Mail className="size-4 shrink-0 text-primary" aria-hidden="true" />
              {doctor.email}
            </a>
            <div className="mt-2 border-t border-border/70 pt-4">
              <p className="text-sm font-medium">Follow</p>
              <ul className="mt-3 flex flex-wrap gap-2">
                {doctor.socials.map((s) => (
                  <li key={s.label}>
                    <a
                      href={s.href}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="inline-flex rounded-full border border-border px-4 py-2 text-xs font-medium text-muted-foreground transition-colors hover:border-primary/40 hover:text-primary"
                    >
                      {s.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </Card>
        </AnimatedSection>
      </section>

      <section className="bg-surface py-16 lg:py-24">
        <div className="container-page">
          <SectionTitle
            eyebrow="Areas of focus"
            title="Conditions treated most often"
            description="The everyday medicine that makes up a General Physician's practice."
          />
          <AnimatedSection as="div" className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {expertiseAreas.map((area) => (
              <motion.p
                key={area}
                variants={fadeUp}
                className="flex items-start gap-3 rounded-2xl border border-border/70 bg-card p-4 text-sm leading-relaxed text-muted-foreground shadow-soft"
              >
                <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-secondary" aria-hidden="true" />
                {area}
              </motion.p>
            ))}
          </AnimatedSection>
        </div>
      </section>

      <section className="container-page py-16 lg:py-24">
        <SectionTitle
          eyebrow="Patient stories"
          title={`In their words, about ${doctor.name}`}
          description="Reviews shared by patients after their consultations."
        />
        <div className="mt-12">
          <TestimonialCarousel items={testimonials} />
        </div>
        <div className="mt-12 flex flex-col items-center gap-4 text-center">
          <ButtonLink to="/appointment" size="lg">
            Book with {doctor.name.split(" ")[1]}
          </ButtonLink>
        </div>
      </section>
    </PageTransition>

  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="grid gap-0.5">
      <dt className="text-xs uppercase tracking-[0.1em] text-muted-foreground">{label}</dt>
      <dd className="text-sm text-foreground">{value}</dd>
    </div>
  );
}
