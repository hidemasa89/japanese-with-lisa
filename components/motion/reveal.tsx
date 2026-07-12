'use client';

import * as React from 'react';
import { motion, useReducedMotion, type Variants } from 'motion/react';

type RevealProps = {
  children: React.ReactNode;
  className?: string;
  /** Stagger delay in seconds — pass an index * 0.08 from a list, for example. */
  delay?: number;
  /** Vertical distance (px) the element travels in from. */
  distance?: number;
};

/**
 * Fades and slides content in once it scrolls into view. Centralized here
 * so every section animates consistently, and respects
 * `prefers-reduced-motion` in one place rather than in every section.
 */
export function Reveal({ children, className, delay = 0, distance = 24 }: RevealProps) {
  const shouldReduceMotion = useReducedMotion();

  const variants: Variants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : distance },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: shouldReduceMotion ? 0.01 : 0.6, delay, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-80px' }}
      variants={variants}
    >
      {children}
    </motion.div>
  );
}
