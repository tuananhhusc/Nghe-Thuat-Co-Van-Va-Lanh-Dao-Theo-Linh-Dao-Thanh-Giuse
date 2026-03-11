"use client";

import { motion } from "framer-motion";

interface ScrollRevealProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  width?: "w-fit" | "w-full";
}

export default function ScrollReveal({ children, delay = 0, className = "", width = "w-full" }: ScrollRevealProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -30px 0px" }}
      transition={{ duration: 0.6, delay: delay, ease: "easeOut" }}
      className={`${width} ${className}`}
    >
      {children}
    </motion.div>
  );
}
