/**
 * Stands in for Lisa's real profile photo. To swap in an actual photo
 * later, replace the contents of this component with:
 *
 *   <Image src="/images/lisa-portrait.jpg" alt="Lisa" fill className="object-cover" />
 *
 * inside the same rounded, aspect-square wrapper so surrounding layout
 * doesn't need to change.
 */
export function AvatarPlaceholder() {
  return (
    <div
      role="img"
      aria-label="Lisa"
      className="relative mx-auto aspect-square w-full max-w-sm overflow-hidden rounded-[2.5rem] border border-border/70 bg-gradient-to-br from-sakura to-beni shadow-xl shadow-primary/15"
    >
      <div aria-hidden="true" className="absolute inset-0 flex items-center justify-center">
        <span className="font-display text-[9rem] font-bold text-white/90 select-none">L</span>
      </div>
      <div
        aria-hidden="true"
        className="absolute -bottom-6 -left-6 size-28 rounded-full bg-white/10 blur-2xl"
      />
      <div aria-hidden="true" className="absolute top-6 right-6 text-4xl opacity-80 select-none">
        🌸
      </div>
    </div>
  );
}
