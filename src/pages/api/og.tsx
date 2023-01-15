import { ImageResponse } from '@vercel/og';

export const config = {
  runtime: 'experimental-edge'
};

export default function handler() {
  return new ImageResponse(
    (
      <div
        style={{
          display: 'flex',
          fontSize: 128,
          background: '#EDE4DA',
          width: '100%',
          height: '100%'
        }}
      >
        Developer Portfolio | Adrian Zinko
      </div>
    )
  );
}
