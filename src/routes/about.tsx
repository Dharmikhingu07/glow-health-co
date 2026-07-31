import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { PageTransition } from "@/components/PageTransition";
import { AnimatedSection } from "@/components/AnimatedSection";
import { SectionTitle } from "@/components/SectionTitle";
import { Card } from "@/components/Card";
import { ButtonLink } from "@/components/Button";
import { clinic, doctor } from "@/data/doctor";
import { milestones, values } from "@/data/content";
import { fadeUp } from "@/utils/motion";

const title = "About Medira Clinic — Unhurried Primary Care in Bandra West";
const description =
  "Medira Clinic is a single-doctor primary care practice in Mumbai built around longer consultations, conservative treatment and clear explanations.";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <PageTransition>
      <section className="bg-surface py-16 lg:py-24">
        <div className="container-page">
          <SectionTitle
            as="h1"
            align="left"
            eyebrow="About the clinic"
            title="A neighbourhood clinic built around listening"
            description={`${clinic.name} opened in Bandra West in 2019 with a deliberately small daily patient list. Fewer appointments means each one can run long enough to reach the actual problem — not just the symptom in front of us.`}
          />
        </div>
      </section>

      <section className="container-page py-20 lg:py-24">
        <div className="grid gap-14 lg:grid-cols-2 lg:items-start">
          <AnimatedSection as="div" className="flex flex-col gap-5">
            <motion.h2 variants={fadeUp} className="text-2xl font-semibold sm:text-3xl">
              Our story
            </motion.h2>
            <motion.p variants={fadeUp} className="leading-relaxed text-muted-foreground">
              {doctor.biographyExtended}
            </motion.p>
            <motion.p variants={fadeUp} className="leading-relaxed text-muted-foreground">
              The clinic today handles everything a family needs from a General Physician: acute
              illness, chronic disease control, annual checkups, elderly medication reviews and
              teleconsultation for anyone who cannot travel.
            </motion.p>
            <motion.ul variants={fadeUp} className="mt-2 flex flex-col gap-3">
              {doctor.highlights.map((h) => (
                <li key={h} className="flex items-start gap-3 text-sm text-muted-foreground">
                  <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-secondary" aria-hidden="true" />
                  {h}
                </li>
              ))}
            </motion.ul>
            <motion.div variants={fadeUp} className="pt-2">
              <ButtonLink to="/doctors" variant="outline">
                Read the doctor's full profile
              </ButtonLink>
            </motion.div>
          </AnimatedSection>

          <AnimatedSection as="div" className="grid gap-5 sm:grid-cols-2">
            {values.map((value) => (
              <Card key={value.title} className="flex flex-col gap-3">
                <h3 className="text-base font-semibold">{value.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{value.description}</p>
              </Card>
            ))}
          </AnimatedSection>
        </div>
      </section>

      <section className="bg-surface py-20 lg:py-24">
        <div className="container-page">
          <SectionTitle
            eyebrow="Milestones"
            title="Twelve years of primary care"
            description="A short timeline of the work behind the clinic."
          />
          <AnimatedSection as="div" className="mx-auto mt-12 max-w-3xl flex flex-col gap-4">
            {milestones.map((m) => (
              <motion.div
                key={m.year}
                variants={fadeUp}
                className="grid grid-cols-[auto_minmax(0,1fr)] items-start gap-5 rounded-3xl border border-border/70 bg-card p-6 shadow-soft"
              >
                <span className="rounded-2xl bg-primary-soft px-3 py-1.5 font-display text-sm font-semibold text-primary">
                  {m.year}
                </span>
                <p className="text-sm leading-relaxed text-muted-foreground">{m.text}</p>
              </motion.div>
            ))}
          </AnimatedSection>
        </div>
      </section>
    </PageTransition>
  );
}
