'use client';

import * as React from 'react';

/**
 * Returns true once the page has scrolled past `threshold` pixels.
 * Used by the Header to switch from a transparent hero overlay to a
 * solid, blurred bar once the user starts scrolling.
 */
export function useScrolled(threshold = 8) {
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > threshold);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [threshold]);

  return scrolled;
}
