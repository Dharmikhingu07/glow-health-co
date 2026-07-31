import { Card } from "./Card";
import { ButtonLink } from "./Button";
import { Languages, BadgeCheck, Clock4 } from "lucide-react";
import { doctor } from "@/data/doctor";
import doctorPortrait from "@/assets/doctor-portrait.jpg";

export function DoctorCard({ compact = false }: { compact?: boolean }) {
  return (
    <Card className="grid gap-8 p-6 sm:p-8 md:grid-cols-[minmax(0,260px)_minmax(0,1fr)]" hover={false}>
      <img
        src={doctorPortrait}
        alt={`Portrait of ${doctor.name}, ${doctor.qualification} ${doctor.specialty}`}
        width={1024}
        height={1280}
        loading="lazy"
        className="h-full max-h-80 w-full rounded-3xl object-cover object-top"
      />
      <div className="flex min-w-0 flex-col gap-4">
        <div>
          <h3 className="text-2xl font-semibold">{doctor.name}</h3>
          <p className="mt-1 text-sm font-medium text-primary">
            {doctor.qualification} · {doctor.specialty}
          </p>
        </div>
        <p className="text-sm leading-relaxed text-muted-foreground">{doctor.biography}</p>
        <ul className="grid gap-3 text-sm text-muted-foreground sm:grid-cols-2">
          <li className="flex items-center gap-2">
            <BadgeCheck className="size-4 shrink-0 text-secondary" aria-hidden="true" />
            {doctor.registrationNumber}
          </li>
          <li className="flex items-center gap-2">
            <Clock4 className="size-4 shrink-0 text-secondary" aria-hidden="true" />
            {doctor.experience} experience
          </li>
          <li className="flex items-center gap-2">
            <Languages className="size-4 shrink-0 text-secondary" aria-hidden="true" />
            {doctor.languages.join(", ")}
          </li>
          <li className="flex items-center gap-2">
            <BadgeCheck className="size-4 shrink-0 text-secondary" aria-hidden="true" />
            {doctor.consultationFee}
          </li>
        </ul>
        {compact ? (
          <div className="mt-2 flex flex-wrap gap-3">
            <ButtonLink to="/doctors" variant="outline" size="sm">
              View full profile
            </ButtonLink>
            <ButtonLink to="/appointment" size="sm">
              Book appointment
            </ButtonLink>
          </div>
        ) : null}
      </div>
    </Card>
  );
}
