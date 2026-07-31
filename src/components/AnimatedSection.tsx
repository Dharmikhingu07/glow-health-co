import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { staggerContainer, viewportOnce } from "@/utils/motion";

/** Wraps a block so its children animate in when scrolled into view. */
export function AnimatedSection({
  children,
  className,
  id,
  as = "section",
}: {
  children: ReactNode;
  className?: string;
  id?: string;
  as?: "section" | "div";
}) {
  const Comp = as === "section" ? motion.section : motion.div;
  return (
    <Comp
      id={id}
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      className={cn(className)}
    >
      {children}
    </Comp>
  );
}
