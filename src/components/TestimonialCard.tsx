import { Star, Quote } from "lucide-react";
import type { Testimonial } from "@/data/content";

export function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <figure className="flex h-full flex-col gap-6 rounded-3xl border border-border/70 bg-card p-8 shadow-soft">
      <Quote className="size-8 text-primary/25" aria-hidden="true" />
      <blockquote className="text-base leading-relaxed text-foreground/90">
        “{testimonial.quote}”
      </blockquote>
      <figcaption className="mt-auto flex items-center justify-between gap-4 border-t border-border/70 pt-5">
        <div className="min-w-0">
          <p className="truncate font-semibold">{testimonial.name}</p>
          <p className="truncate text-sm text-muted-foreground">{testimonial.role}</p>
        </div>
        <div
          className="flex shrink-0 gap-0.5"
          aria-label={`${testimonial.rating} out of 5 stars`}
        >
          {Array.from({ length: testimonial.rating }).map((_, i) => (
            <Star key={i} className="size-4 fill-secondary text-secondary" aria-hidden="true" />
          ))}
        </div>
      </figcaption>
    </figure>
  );
}
