import { Link } from '@/i18n/navigation';
import { cn } from '@/lib/utils';

export function Logo({ className }: { className?: string }) {
  return (
    <Link
      href="/"
      className={cn(
        'group inline-flex items-center gap-2 font-display text-lg font-semibold tracking-tight text-foreground',
        className
      )}
    >
      <span
        aria-hidden
        className="flex size-8 items-center justify-center rounded-full bg-gradient-to-br from-sakura to-beni text-sm font-bold text-white shadow-sm shadow-primary/30 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6"
      >
        L
      </span>
      <span>
        Lisa<span className="text-primary">.</span>
      </span>
    </Link>
  );
}
