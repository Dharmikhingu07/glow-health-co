import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { toast } from "sonner";
import { z } from "zod";
import { MapPin, Phone, Mail, Clock4, MessageCircle } from "lucide-react";
import { PageTransition } from "@/components/PageTransition";
import { AnimatedSection } from "@/components/AnimatedSection";
import { SectionTitle } from "@/components/SectionTitle";
import { Card } from "@/components/Card";
import { Button } from "@/components/Button";
import { clinic, doctor } from "@/data/doctor";
import { telHref } from "@/utils/format";

const title = "Contact Medira Clinic — Address, Phone & Clinic Hours";
const description =
  "Reach Medira Clinic in Adajan, Surat. Phone, email, WhatsApp, clinic timings and a message form for non-urgent questions.";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: ContactPage,
});

const schema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(100),
  email: z.string().trim().email("Enter a valid email address").max(255),
  subject: z.string().trim().min(3, "Please add a subject").max(120),
  message: z.string().trim().min(10, "Please add a little more detail").max(1000),
});

type Errors = Partial<Record<keyof z.infer<typeof schema>, string>>;

function ContactPage() {
  const [errors, setErrors] = useState<Errors>({});
  const [submitting, setSubmitting] = useState(false);

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form));
    const parsed = schema.safeParse(data);

    if (!parsed.success) {
      const next: Errors = {};
      for (const issue of parsed.error.issues) {
        const key = issue.path[0] as keyof Errors;
        if (!next[key]) next[key] = issue.message;
      }
      setErrors(next);
      toast.error("Please fix the highlighted fields.");
      return;
    }

    setErrors({});
    setSubmitting(true);
    window.setTimeout(() => {
      setSubmitting(false);
      form.reset();
      toast.success("Message sent — the clinic will reply within one working day.");
    }, 600);
  };

  return (
    <PageTransition>
      <section className="bg-surface py-16 lg:py-24">
        <div className="container-page">
          <SectionTitle
            as="h1"
            eyebrow="Contact"
            title="We are easy to reach"
            description="Call, message on WhatsApp, or send a note below. For anything urgent, please phone the clinic directly."
          />
        </div>
      </section>

      <section className="container-page py-16 lg:py-24">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)]">
          <AnimatedSection as="div" className="flex flex-col gap-5">
            <Card className="flex flex-col gap-5" hover={false}>
              <h2 className="text-lg font-semibold">Clinic details</h2>
              <address className="flex flex-col gap-4 not-italic text-sm text-muted-foreground">
                <p className="flex gap-3">
                  <MapPin className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" />
                  <span>
                    {clinic.addressLine1}
                    <br />
                    {clinic.addressLine2}
                  </span>
                </p>
                <a href={telHref(clinic.phone)} className="flex gap-3 hover:text-primary">
                  <Phone className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" />
                  {clinic.phone} · {clinic.altPhone}
                </a>
                <a href={`mailto:${clinic.email}`} className="flex gap-3 break-all hover:text-primary">
                  <Mail className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" />
                  {clinic.email}
                </a>
                <p className="flex gap-3">
                  <MessageCircle className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" />
                  WhatsApp {clinic.whatsapp}
                </p>
              </address>
              <div className="rounded-2xl bg-surface p-4 text-xs leading-relaxed text-muted-foreground">
                {clinic.emergencyNote}
              </div>
            </Card>

            <Card className="flex flex-col gap-4" hover={false}>
              <h2 className="flex items-center gap-2 text-lg font-semibold">
                <Clock4 className="size-5 text-primary" aria-hidden="true" />
                Clinic hours
              </h2>
              <dl className="flex flex-col gap-3 text-sm">
                {doctor.workingHours.map((slot) => (
                  <div key={slot.day} className="grid gap-0.5">
                    <dt className="font-medium">{slot.day}</dt>
                    <dd className="text-muted-foreground">{slot.hours}</dd>
                  </div>
                ))}
              </dl>
            </Card>

            <div className="overflow-hidden rounded-3xl border border-border/70 shadow-soft">
              <iframe
                title={`Map showing ${clinic.name} in ${clinic.addressLine2}`}
                src="https://www.google.com/maps?q=Adajan,+Surat,+Gujarat+395009&output=embed"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-64 w-full border-0"
              />
            </div>

          </AnimatedSection>

          <AnimatedSection as="div">
            <Card className="flex flex-col gap-6 p-7 sm:p-9" hover={false}>
              <div>
                <h2 className="text-xl font-semibold">Send a message</h2>
                <p className="mt-2 text-sm text-muted-foreground">
                  For non-urgent questions about services, reports or billing.
                </p>
              </div>
              <form className="flex flex-col gap-5" onSubmit={onSubmit} noValidate>
                <Field label="Full name" name="name" error={errors.name}>
                  <input {...inputProps} id="name" name="name" autoComplete="name" />
                </Field>
                <Field label="Email" name="email" error={errors.email}>
                  <input {...inputProps} id="email" name="email" type="email" autoComplete="email" />
                </Field>
                <Field label="Subject" name="subject" error={errors.subject}>
                  <input {...inputProps} id="subject" name="subject" />
                </Field>
                <Field label="Message" name="message" error={errors.message}>
                  <textarea {...inputProps} id="message" name="message" rows={5} />
                </Field>
                <Button type="submit" size="lg" disabled={submitting}>
                  {submitting ? "Sending…" : "Send message"}
                </Button>
              </form>
            </Card>
          </AnimatedSection>
        </div>
      </section>
    </PageTransition>
  );
}

const inputProps = {
  className:
    "w-full rounded-2xl border border-border bg-background px-4 py-3 text-sm outline-none transition-colors placeholder:text-muted-foreground focus:border-primary",
};

function Field({
  label,
  name,
  error,
  children,
}: {
  label: string;
  name: string;
  error?: string | undefined;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={name} className="text-sm font-medium">
        {label}
      </label>
      {children}
      {error ? (
        <p role="alert" className="text-xs text-destructive">
          {error}
        </p>
      ) : null}
    </div>
  );
}
