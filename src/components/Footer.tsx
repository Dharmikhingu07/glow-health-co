import { Link } from "@tanstack/react-router";
import { HeartPulse, MapPin, Phone, Mail, Clock4 } from "lucide-react";
import { clinic, doctor } from "@/data/doctor";
import { services } from "@/data/services";
import { telHref } from "@/utils/format";

export function Footer() {
  return (
    <footer className="mt-24 border-t border-border/70 bg-surface">
      <div className="container-page grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-4">
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-2.5">
            <span className="flex size-10 items-center justify-center rounded-2xl bg-primary text-primary-foreground">
              <HeartPulse className="size-5" aria-hidden="true" />
            </span>
            <span className="font-display text-lg font-semibold">{clinic.name}</span>
          </div>
          <p className="text-sm leading-relaxed text-muted-foreground">
            {clinic.tagline}. Primary care led by {doctor.name}, {doctor.qualification},{" "}
            {doctor.specialty}.
          </p>
          <p className="rounded-2xl bg-card p-4 text-xs leading-relaxed text-muted-foreground shadow-soft">
            {clinic.emergencyNote}
          </p>
        </div>

        <nav aria-label="Footer" className="flex flex-col gap-3">
          <h2 className="text-sm font-semibold uppercase tracking-[0.12em]">Explore</h2>
          {[
            { to: "/", label: "Home" },
            { to: "/about", label: "About the clinic" },
            { to: "/services", label: "Services" },
            { to: "/doctors", label: "Meet the doctor" },
            { to: "/contact", label: "Contact" },
            { to: "/appointment", label: "Book an appointment" },
          ].map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="text-sm text-muted-foreground transition-colors hover:text-primary"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="flex flex-col gap-3">
          <h2 className="text-sm font-semibold uppercase tracking-[0.12em]">Popular services</h2>
          {services.slice(0, 6).map((s) => (
            <Link
              key={s.slug}
              to="/services"
              hash={s.slug}
              className="text-sm text-muted-foreground transition-colors hover:text-primary"
            >
              {s.title}
            </Link>
          ))}
        </div>

        <address className="flex flex-col gap-4 not-italic">
          <h2 className="text-sm font-semibold uppercase tracking-[0.12em]">Visit us</h2>
          <p className="flex gap-3 text-sm text-muted-foreground">
            <MapPin className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" />
            <span>
              {clinic.addressLine1}
              <br />
              {clinic.addressLine2}
            </span>
          </p>
          <a
            href={telHref(clinic.phone)}
            className="flex items-center gap-3 text-sm text-muted-foreground transition-colors hover:text-primary"
          >
            <Phone className="size-4 shrink-0 text-primary" aria-hidden="true" />
            {clinic.phone}
          </a>
          <a
            href={`mailto:${clinic.email}`}
            className="flex items-center gap-3 text-sm text-muted-foreground transition-colors hover:text-primary"
          >
            <Mail className="size-4 shrink-0 text-primary" aria-hidden="true" />
            {clinic.email}
          </a>
          <p className="flex gap-3 text-sm text-muted-foreground">
            <Clock4 className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" />
            <span>Mon–Fri 9AM–1PM, 5PM–8:30PM · Sat 9AM–2PM</span>
          </p>
        </address>
      </div>

      <div className="border-t border-border/70">
        <div className="container-page flex flex-col gap-2 py-6 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {clinic.name}. All content is placeholder demonstration
            data.
          </p>
          <p>{doctor.registrationNumber}</p>
        </div>
      </div>
    </footer>
  );
}
