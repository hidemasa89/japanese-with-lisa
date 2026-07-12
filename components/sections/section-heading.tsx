import { cn } from '@/lib/utils';
import { Reveal } from '@/components/motion/reveal';

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'center',
  className,
}: SectionHeadingProps) {
  return (
    <Reveal className={cn('max-w-2xl', align === 'center' && 'mx-auto text-center', className)}>
      {eyebrow && (
        <span className="inline-flex items-center rounded-full bg-secondary px-4 py-1.5 text-xs font-bold tracking-wide text-primary uppercase">
          {eyebrow}
        </span>
      )}
      <h2 className="mt-4 font-display text-3xl font-semibold text-balance text-foreground sm:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-base leading-relaxed text-pretty text-muted-foreground">
          {description}
        </p>
      )}
    </Reveal>
  );
}
