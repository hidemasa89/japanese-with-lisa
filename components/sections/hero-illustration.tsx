'use client';

import { motion, useReducedMotion } from 'motion/react';

/**
 * Signature illustration for the hero: a stylized video-call between Lisa
 * and a student, mid-conversation, with sakura petals drifting past. Built
 * from plain SVG shapes rather than a photo — it doubles as the visual
 * shorthand for the site's whole pitch (online, 1-on-1, conversation-first)
 * without needing a stock photo of a fictional teacher.
 */
export function HeroIllustration({
  bubbleJa,
  bubbleEn,
  liveLabel,
}: {
  bubbleJa: string;
  bubbleEn: string;
  liveLabel: string;
}) {
  const shouldReduceMotion = useReducedMotion();
  const petalTransition = (delay: number) =>
    shouldReduceMotion
      ? { duration: 0 }
      : { duration: 6, delay, repeat: Infinity, ease: 'easeInOut' as const };

  return (
    <div className="relative mx-auto aspect-[4/5] w-full max-w-md sm:max-w-lg">
      {/* Ambient drifting sakura petals */}
      {[
        { x: '4%', y: '10%', size: 22, delay: 0 },
        { x: '86%', y: '6%', size: 16, delay: 1.2 },
        { x: '90%', y: '58%', size: 20, delay: 0.6 },
        { x: '2%', y: '68%', size: 14, delay: 1.8 },
      ].map((petal, i) => (
        <motion.svg
          key={i}
          viewBox="0 0 24 24"
          width={petal.size}
          height={petal.size}
          aria-hidden="true"
          className="absolute text-sakura/70"
          style={{ left: petal.x, top: petal.y }}
          animate={
            shouldReduceMotion
              ? undefined
              : { y: [0, -14, 0], rotate: [0, 12, -8, 0] }
          }
          transition={petalTransition(petal.delay)}
        >
          <path
            fill="currentColor"
            d="M12 2c2.2 2 3.6 4.6 3.2 6.8-.2 1-1 1.7-2 1.9 1 .3 1.8 1.1 2 2.1.4 2.2-1 4.8-3.2 6.8-2.2-2-3.6-4.6-3.2-6.8.2-1 1-1.8 2-2.1-1-.2-1.8-.9-2-1.9C8.4 6.6 9.8 4 12 2Z"
          />
        </motion.svg>
      ))}

      {/* Device frame */}
      <div className="relative flex h-full flex-col justify-between rounded-[2.5rem] border border-border/70 bg-card p-5 shadow-xl shadow-primary/10 sm:p-7">
        <div className="flex items-center justify-between">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-destructive/10 px-3 py-1 text-xs font-semibold text-destructive">
            <span className="size-1.5 animate-pulse rounded-full bg-destructive" />
            {liveLabel}
          </span>
          <div className="flex gap-1.5">
            <span className="size-2 rounded-full bg-border" />
            <span className="size-2 rounded-full bg-border" />
            <span className="size-2 rounded-full bg-border" />
          </div>
        </div>

        {/* "Video tiles" */}
        <div className="relative flex flex-1 items-center justify-center gap-4 py-6">
          <div className="flex flex-1 flex-col items-center gap-3 rounded-3xl bg-gradient-to-br from-sakura to-beni p-6 text-white">
            <span className="flex size-14 items-center justify-center rounded-full bg-white/25 font-display text-xl font-bold">
              L
            </span>
            <span className="text-xs font-semibold opacity-90">Lisa</span>
          </div>
          <div className="flex flex-1 flex-col items-center gap-3 rounded-3xl bg-secondary p-6">
            <span
              aria-hidden="true"
              className="flex size-14 items-center justify-center rounded-full bg-background text-xl"
            >
              🌸
            </span>
            <span className="text-xs font-semibold text-muted-foreground">You</span>
          </div>
        </div>

        {/* Speech bubbles */}
        <div className="flex flex-col gap-2">
          <motion.div
            initial={{ opacity: 0, x: -12 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="w-fit max-w-[80%] rounded-2xl rounded-bl-sm bg-secondary px-4 py-2 text-sm font-semibold text-foreground"
          >
            {bubbleJa}
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 12 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            className="ml-auto w-fit max-w-[80%] rounded-2xl rounded-br-sm bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground"
          >
            {bubbleEn}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
