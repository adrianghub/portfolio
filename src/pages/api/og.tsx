import { ImageResponse } from '@vercel/og';

export const config = {
  runtime: 'edge'
};

export default function handler() {
  return new ImageResponse(
    (
      <div
        style={{
          display: 'flex',
          background: '#EDE4DA',
          width: '100%',
          height: '100%',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: 64
        }}
      >
        Developer Portfolio | Adrian Zinko
      </div>
    )
  );
}
