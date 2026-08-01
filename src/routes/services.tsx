import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { PageTransition } from "@/components/PageTransition";
import { AnimatedSection } from "@/components/AnimatedSection";
import { SectionTitle } from "@/components/SectionTitle";
import { ServiceCard } from "@/components/ServiceCard";
import { FaqAccordion } from "@/components/FaqAccordion";
import { Card } from "@/components/Card";
import { ButtonLink } from "@/components/Button";
import { services } from "@/data/services";
import { visitSteps, pricing, faqs } from "@/data/content";
import { fadeUp } from "@/utils/motion";

const title = "Services — General Physician Care at Medira Clinic, Surat";
const description =
  "Twelve primary care services including general consultation, fever and infection treatment, diabetes and blood pressure management, preventive checkups and teleconsultation.";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <PageTransition>
      <section className="bg-surface py-16 lg:py-24">
        <div className="container-page">
          <SectionTitle
            as="h1"
            eyebrow="Services"
            title="Everything a General Physician should handle"
            description="Twelve focused services covering acute illness, chronic disease control and preventive health — all delivered by the same doctor."
          />
        </div>
      </section>

      <section className="container-page py-16 lg:py-24">
        <AnimatedSection as="div" className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div key={service.slug} id={service.slug} className="scroll-mt-28">
              <ServiceCard service={service} detailed />
            </div>
          ))}
        </AnimatedSection>
      </section>

      <section className="bg-surface py-16 lg:py-24">
        <div className="container-page">
          <SectionTitle
            eyebrow="How it works"
            title="What a visit looks like"
            description="Four simple steps from booking to follow-up — no queues, no guesswork."
          />
          <AnimatedSection as="div" className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {visitSteps.map((step, index) => (
              <motion.div key={step.title} variants={fadeUp}>
                <Card className="flex h-full flex-col gap-3">
                  <span className="flex size-11 items-center justify-center rounded-2xl bg-primary-soft font-display text-base font-semibold text-primary">
                    {index + 1}
                  </span>
                  <h3 className="text-base font-semibold">{step.title}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {step.description}
                  </p>
                </Card>
              </motion.div>
            ))}
          </AnimatedSection>
        </div>
      </section>

      <section className="container-page py-16 lg:py-24">
        <SectionTitle
          eyebrow="Fees"
          title="Transparent, published pricing"
          description="No consultation surprises. Investigations are billed by the partner lab at their own rates."
        />
        <AnimatedSection as="div" className="mx-auto mt-12 max-w-3xl">
          <motion.ul variants={fadeUp} className="flex flex-col gap-3">
            {pricing.map((row) => (
              <li
                key={row.item}
                className="flex flex-wrap items-center justify-between gap-x-6 gap-y-2 rounded-3xl border border-border/70 bg-card p-5 shadow-soft sm:p-6"
              >
                <div className="min-w-0">
                  <p className="text-sm font-semibold sm:text-base">{row.item}</p>
                  <p className="mt-1 text-xs text-muted-foreground sm:text-sm">{row.note}</p>
                </div>
                <span className="font-display text-lg font-semibold text-primary">{row.price}</span>
              </li>
            ))}
          </motion.ul>
        </AnimatedSection>
      </section>

      <section className="bg-surface py-16 lg:py-24">
        <div className="container-page">
          <SectionTitle
            eyebrow="FAQ"
            title="Questions about our services"
            description="The things patients ask most often before their first visit."
          />
          <div className="mx-auto mt-12 max-w-3xl">
            <FaqAccordion items={faqs} />
          </div>
        </div>
      </section>

      <section className="container-page py-16 lg:py-24">
        <div className="flex flex-col items-center gap-4 text-center">
          <p className="max-w-xl text-sm leading-relaxed text-muted-foreground">
            Not sure which service you need? Book a general consultation and we will direct you
            from there — including a specialist referral if that is the right answer.
          </p>
          <ButtonLink to="/appointment" size="lg">
            Book a consultation
          </ButtonLink>
        </div>
      </section>
    </PageTransition>
  );
}
