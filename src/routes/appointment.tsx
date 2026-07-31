import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { toast } from "sonner";
import { z } from "zod";
import { CalendarCheck, CheckCircle2, Clock4, Phone } from "lucide-react";
import { PageTransition } from "@/components/PageTransition";
import { AnimatedSection } from "@/components/AnimatedSection";
import { SectionTitle } from "@/components/SectionTitle";
import { Card } from "@/components/Card";
import { Button } from "@/components/Button";
import { services } from "@/data/services";
import { clinic, doctor } from "@/data/doctor";
import { telHref } from "@/utils/format";

const title = "Book an Appointment — Medira Clinic, Dr. Raj Sharma MBBS";
const description =
  "Request an in-clinic or video consultation with Dr. Raj Sharma, MBBS General Physician. Pick a service, date and time, and describe your symptoms.";

export const Route = createFileRoute("/appointment")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: AppointmentPage,
});

const schema = z.object({
  fullName: z.string().trim().min(2, "Please enter your full name").max(100),
  phone: z
    .string()
    .trim()
    .regex(/^[+\d][\d\s-]{7,17}$/, "Enter a valid phone number"),
  email: z.string().trim().email("Enter a valid email address").max(255),
  gender: z.string().min(1, "Please select a gender"),
  age: z.coerce.number().int().min(0, "Enter a valid age").max(120, "Enter a valid age"),
  service: z.string().min(1, "Please choose a service"),
  date: z.string().min(1, "Please choose a preferred date"),
  time: z.string().min(1, "Please choose a preferred time"),
  symptoms: z.string().trim().min(5, "Tell us briefly what you are experiencing").max(600),
  message: z.string().trim().max(600).optional(),
});

type FieldName = keyof z.infer<typeof schema>;
type Errors = Partial<Record<FieldName, string>>;

function AppointmentPage() {
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
        const key = issue.path[0] as FieldName;
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
      toast.success(
        `Thanks ${parsed.data.fullName.split(" ")[0]} — your request is in. The clinic will confirm your slot by phone.`,
      );
    }, 700);
  };

  return (
    <PageTransition>
      <section className="bg-surface py-16 lg:py-24">
        <div className="container-page">
          <SectionTitle
            as="h1"
            eyebrow="Appointment"
            title="Book your consultation"
            description={`Fill in the form and the clinic will confirm your slot by phone, usually within an hour during working hours. ${doctor.consultationFee}.`}
          />
        </div>
      </section>

      <section className="container-page py-16 lg:py-24">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,0.9fr)]">
          <AnimatedSection as="div">
            <Card className="p-7 sm:p-9" hover={false}>
              <form className="grid gap-5 sm:grid-cols-2" onSubmit={onSubmit} noValidate>
                <Field label="Full name" name="fullName" error={errors.fullName}>
                  <input {...inputCls} id="fullName" name="fullName" autoComplete="name" />
                </Field>
                <Field label="Phone number" name="phone" error={errors.phone}>
                  <input {...inputCls} id="phone" name="phone" type="tel" autoComplete="tel" />
                </Field>
                <Field label="Email" name="email" error={errors.email}>
                  <input {...inputCls} id="email" name="email" type="email" autoComplete="email" />
                </Field>
                <Field label="Gender" name="gender" error={errors.gender}>
                  <select {...inputCls} id="gender" name="gender" defaultValue="">
                    <option value="" disabled>
                      Select gender
                    </option>
                    <option>Female</option>
                    <option>Male</option>
                    <option>Other</option>
                    <option>Prefer not to say</option>
                  </select>
                </Field>
                <Field label="Age" name="age" error={errors.age}>
                  <input {...inputCls} id="age" name="age" type="number" min={0} max={120} />
                </Field>
                <Field label="Service" name="service" error={errors.service}>
                  <select {...inputCls} id="service" name="service" defaultValue="">
                    <option value="" disabled>
                      Select a service
                    </option>
                    {services.map((s) => (
                      <option key={s.slug} value={s.title}>
                        {s.title}
                      </option>
                    ))}
                  </select>
                </Field>
                <Field label="Preferred date" name="date" error={errors.date}>
                  <input {...inputCls} id="date" name="date" type="date" />
                </Field>
                <Field label="Preferred time" name="time" error={errors.time}>
                  <input {...inputCls} id="time" name="time" type="time" />
                </Field>
                <Field
                  label="Symptoms"
                  name="symptoms"
                  error={errors.symptoms}
                  className="sm:col-span-2"
                >
                  <textarea
                    {...inputCls}
                    id="symptoms"
                    name="symptoms"
                    rows={3}
                    placeholder="What are you experiencing, and since when?"
                  />
                </Field>
                <Field
                  label="Additional message (optional)"
                  name="message"
                  error={errors.message}
                  className="sm:col-span-2"
                >
                  <textarea
                    {...inputCls}
                    id="message"
                    name="message"
                    rows={3}
                    placeholder="Existing medication, past reports, accessibility needs…"
                  />
                </Field>
                <div className="sm:col-span-2">
                  <Button type="submit" size="lg" className="w-full sm:w-auto" disabled={submitting}>
                    {submitting ? "Submitting…" : "Request appointment"}
                  </Button>
                  <p className="mt-3 text-xs text-muted-foreground">
                    This is a demonstration form — details are validated locally and not stored.
                  </p>
                </div>
              </form>
            </Card>
          </AnimatedSection>

          <AnimatedSection as="div" className="flex flex-col gap-5">
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

            <Card className="flex flex-col gap-4" hover={false}>
              <h2 className="flex items-center gap-2 text-lg font-semibold">
                <CalendarCheck className="size-5 text-primary" aria-hidden="true" />
                What happens next
              </h2>
              <ul className="flex flex-col gap-3 text-sm text-muted-foreground">
                {[
                  "The clinic calls to confirm your slot.",
                  "You receive an SMS reminder the day before.",
                  "Teleconsultation patients get a secure video link.",
                  "Follow-up within 7 days is free of charge.",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-secondary" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
            </Card>

            <Card className="flex flex-col gap-3" hover={false}>
              <h2 className="text-lg font-semibold">Prefer to call?</h2>
              <a
                href={telHref(clinic.phone)}
                className="flex items-center gap-2 text-sm font-medium text-primary"
              >
                <Phone className="size-4" aria-hidden="true" />
                {clinic.phone}
              </a>
              <p className="text-xs leading-relaxed text-muted-foreground">
                {clinic.emergencyNote}
              </p>
            </Card>
          </AnimatedSection>
        </div>
      </section>
    </PageTransition>
  );
}

const inputCls = {
  className:
    "w-full rounded-2xl border border-border bg-background px-4 py-3 text-sm outline-none transition-colors placeholder:text-muted-foreground focus:border-primary",
};

function Field({
  label,
  name,
  error,
  className,
  children,
}: {
  label: string;
  name: string;
  error?: string | undefined;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div className={`flex flex-col gap-2 ${className ?? ""}`}>
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
