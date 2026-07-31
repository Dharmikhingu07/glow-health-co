import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { scaleIn } from "@/utils/motion";

export function Card({
  children,
  className,
  hover = true,
  animate = true,
}: {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  animate?: boolean;
}) {
  const classes = cn(
    "rounded-3xl border border-border/70 bg-card p-7 shadow-soft transition-shadow",
    hover && "hover:shadow-lift",
    className,
  );

  if (!animate) return <div className={classes}>{children}</div>;

  return (
    <motion.div
      variants={scaleIn}
      {...(hover ? { whileHover: { y: -6, scale: 1.015 } } : {})}
      transition={{ type: "spring", stiffness: 260, damping: 22 }}
      className={classes}
    >
      {children}
    </motion.div>
  );
}
