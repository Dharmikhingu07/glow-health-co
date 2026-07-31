import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { fadeUp, staggerContainer, viewportOnce } from "@/utils/motion";

export function SectionTitle({
  eyebrow,
  title,
  description,
  align = "center",
  as: Heading = "h2",
  className,
}: {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
  as?: "h1" | "h2" | "h3";
  className?: string;
}) {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      className={cn(
        "flex flex-col gap-4",
        align === "center" ? "mx-auto max-w-2xl text-center items-center" : "items-start",
        className,
      )}
    >
      {eyebrow ? (
        <motion.span
          variants={fadeUp}
          className="inline-flex items-center rounded-full bg-primary-soft px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-primary"
        >
          {eyebrow}
        </motion.span>
      ) : null}
      <motion.div variants={fadeUp}>
        <Heading className="text-3xl font-semibold leading-tight sm:text-4xl">{title}</Heading>
      </motion.div>
      {description ? (
        <motion.p variants={fadeUp} className="text-base leading-relaxed text-muted-foreground">
          {description}
        </motion.p>
      ) : null}
    </motion.div>
  );
}
