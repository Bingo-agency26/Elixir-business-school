import { motion } from 'motion/react';
import { cn } from '../lib/utils';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
  light?: boolean;
}

export default function SectionHeading({ title, subtitle, align = 'center', light = false }: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={cn(
        "mb-16",
        align === 'center' ? "text-center mx-auto" : "text-left"
      )}
    >
      {subtitle && (
        <span className={cn(
          "inline-block text-[10px] uppercase tracking-[0.4em] font-black mb-4",
          light ? "text-brand-text/60" : "text-brand-accent-dark"
        )}>
          {subtitle}
        </span>
      )}
      <h2 className={cn(
        "text-4xl md:text-5xl font-bold leading-tight tracking-tight",
        light ? "text-brand-text" : "text-brand-text"
      )}>
        {title}
      </h2>
    </motion.div>
  );
}
