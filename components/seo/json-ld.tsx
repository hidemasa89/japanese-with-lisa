/**
 * Renders a <script type="application/ld+json"> tag. This is the pattern
 * Next.js's own docs recommend for structured data — there's no special
 * built-in metadata API for JSON-LD, since its shape varies per schema.org
 * type. `data` is pre-serialized JSON, not user-controlled HTML, so this
 * is safe from the kind of injection dangerouslySetInnerHTML usually risks.
 */
export function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      // eslint-disable-next-line react/no-danger -- JSON-LD requires a raw <script> body.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
