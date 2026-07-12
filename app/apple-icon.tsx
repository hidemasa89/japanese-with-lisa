import { ImageResponse } from 'next/og';

export const size = { width: 180, height: 180 };
export const contentType = 'image/png';

export default function AppleIcon() {
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
            fontSize: 96,
            fontWeight: 700,
            color: '#ffffff',
            fontFamily: 'sans-serif',
          }}
        >
          L
        </span>
      </div>
    ),
    { ...size }
  );
}
