import { createFileRoute } from "@tanstack/react-router";
import { PageTransition } from "@/components/PageTransition";
import { AnimatedSection } from "@/components/AnimatedSection";
import { SectionTitle } from "@/components/SectionTitle";
import { ServiceCard } from "@/components/ServiceCard";
import { ButtonLink } from "@/components/Button";
import { services } from "@/data/services";

const title = "Services — General Physician Care at Medira Clinic, Mumbai";
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

        <div className="mt-14 flex flex-col items-center gap-4 text-center">
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
