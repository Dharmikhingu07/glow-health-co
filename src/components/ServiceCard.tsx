import { Card } from "./Card";
import type { Service } from "@/data/services";

export function ServiceCard({ service, detailed = false }: { service: Service; detailed?: boolean }) {
  const Icon = service.icon;
  return (
    <Card className="flex h-full flex-col gap-4">
      <span className="flex size-12 items-center justify-center rounded-2xl bg-primary-soft text-primary">
        <Icon className="size-6" aria-hidden="true" />
      </span>
      <h3 className="text-lg font-semibold">{service.title}</h3>
      <p className="text-sm leading-relaxed text-muted-foreground">{service.description}</p>
      {detailed ? (
        <p className="mt-auto border-t border-border/70 pt-4 text-sm leading-relaxed text-muted-foreground">
          {service.details}
        </p>
      ) : null}
    </Card>
  );
}
