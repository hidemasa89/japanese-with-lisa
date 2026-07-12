/**
 * Plain visual-tree builder shared by opengraph-image.tsx and
 * twitter-image.tsx. Deliberately NOT itself a Next.js metadata-file
 * convention — those files' special exports (`runtime`, `size`,
 * `contentType`, `alt`, the default function) must each be declared
 * directly in the convention file for Next's build-time static analysis
 * to pick them up; re-exporting them from a shared file silently falls
 * back to defaults instead (confirmed via a real `next dev` warning).
 * Sharing just the JSX content, not the exports, avoids that.
 */
export function buildOgImageContent({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        padding: '80px',
        background: 'linear-gradient(135deg, #FFFCFB 0%, #FDF2F7 60%, #FCE7F3 100%)',
        fontFamily: 'sans-serif',
      }}
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: 88,
          height: 88,
          borderRadius: 9999,
          background: 'linear-gradient(135deg, #EC4899 0%, #DB2777 100%)',
          color: 'white',
          fontSize: 44,
          fontWeight: 700,
        }}
      >
        L
      </div>
      <div
        style={{
          marginTop: 40,
          fontSize: 68,
          fontWeight: 700,
          color: '#2B2430',
          display: 'flex',
        }}
      >
        {title}
      </div>
      <div
        style={{
          marginTop: 20,
          fontSize: 32,
          fontWeight: 500,
          color: '#DB2777',
          display: 'flex',
        }}
      >
        {subtitle}
      </div>
    </div>
  );
}
