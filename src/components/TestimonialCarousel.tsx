import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { TestimonialCard } from "./TestimonialCard";
import type { Testimonial } from "@/data/content";

export function TestimonialCarousel({ items }: { items: Testimonial[] }) {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  const go = (next: number) => {
    setDirection(next > index ? 1 : -1);
    setIndex((next + items.length) % items.length);
  };

  const current = items[index]!;

  return (
    <div className="mx-auto max-w-3xl">
      <div className="relative min-h-[19rem]" aria-live="polite">
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={index}
            initial={{ opacity: 0, x: direction * 40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: direction * -40 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          >
            <TestimonialCard testimonial={current} />
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="mt-6 flex items-center justify-center gap-4">
        <button
          type="button"
          onClick={() => go(index - 1)}
          aria-label="Previous testimonial"
          className="flex size-11 items-center justify-center rounded-full border border-border bg-card text-foreground shadow-soft transition-all hover:-translate-y-0.5 hover:text-primary"
        >
          <ChevronLeft className="size-5" aria-hidden="true" />
        </button>
        <div className="flex gap-2">
          {items.map((item, i) => (
            <button
              key={item.name}
              type="button"
              onClick={() => go(i)}
              aria-label={`Show testimonial from ${item.name}`}
              aria-current={i === index}
              className={`h-2.5 rounded-full transition-all ${
                i === index ? "w-7 bg-primary" : "w-2.5 bg-border hover:bg-primary/40"
              }`}
            />
          ))}
        </div>
        <button
          type="button"
          onClick={() => go(index + 1)}
          aria-label="Next testimonial"
          className="flex size-11 items-center justify-center rounded-full border border-border bg-card text-foreground shadow-soft transition-all hover:-translate-y-0.5 hover:text-primary"
        >
          <ChevronRight className="size-5" aria-hidden="true" />
        </button>
      </div>
    </div>
  );
}
