import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const contentType = 'image/png';

// Background fills the full canvas edge-to-edge so this icon tolerates
// both `any` and `maskable` PWA icon purposes without a separate asset.
export function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'linear-gradient(135deg, #EC4899 0%, #DB2777 100%)',
        }}
      >
        <span
          style={{
            fontSize: 104,
            fontWeight: 700,
            color: '#ffffff',
            fontFamily: 'sans-serif',
          }}
        >
          L
        </span>
      </div>
    ),
    { width: 192, height: 192 }
  );
}
