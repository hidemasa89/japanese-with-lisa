import { Instagram, Youtube } from 'lucide-react';
import { useTranslations } from 'next-intl';

import { Link } from '@/i18n/navigation';
import { mainNav } from '@/constants/navigation';
import { siteConfig } from '@/constants/site';
import { Separator } from '@/components/ui/separator';
import { Logo } from '@/components/layout/logo';
import { LanguageSwitcher } from '@/components/layout/language-switcher';

const socialLinks = [
  { key: 'instagram', href: siteConfig.social.instagram, Icon: Instagram },
  { key: 'youtube', href: siteConfig.social.youtube, Icon: Youtube },
] as const;

export function Footer() {
  const t = useTranslations('Nav');
  const footer = useTranslations('Footer');
  const year = new Date().getFullYear();
  const hasSocialLinks = socialLinks.some((link) => link.href);

  return (
    <footer className="border-t border-border/70 bg-secondary/40">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-10 md:flex-row md:justify-between">
          <div className="max-w-sm">
            <Logo />
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              {footer('tagline')}
            </p>
            {hasSocialLinks && (
              <div className="mt-5 flex items-center gap-3">
                {socialLinks.map(
                  ({ key, href, Icon }) =>
                    href && (
                      <a
                        key={key}
                        href={href}
                        target="_blank"
                        rel="noreferrer noopener"
                        aria-label={key}
                        className="flex size-10 items-center justify-center rounded-full border border-border/70 text-muted-foreground transition-colors hover:border-primary hover:text-primary"
                      >
                        <Icon className="size-4" />
                      </a>
                    )
                )}
              </div>
            )}
          </div>

          <nav aria-label="Footer" className="grid grid-cols-2 gap-x-8 gap-y-2 sm:flex sm:gap-10">
            {mainNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
              >
                {t(item.labelKey)}
              </Link>
            ))}
          </nav>
        </div>

        <Separator className="my-8" />

        <div className="flex flex-col-reverse items-center gap-4 sm:flex-row sm:justify-between">
          <p className="text-xs text-muted-foreground">
            © {year} {siteConfig.brand}. {footer('rights')}
          </p>

          <div className="flex items-center gap-6">
            <Link
              href="/privacy"
              className="text-xs font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              {footer('privacyPolicy')}
            </Link>
            <Link
              href="/terms"
              className="text-xs font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              {footer('termsOfService')}
            </Link>
            <LanguageSwitcher />
          </div>
        </div>
      </div>
    </footer>
  );
}
