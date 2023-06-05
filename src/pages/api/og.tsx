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
          width: '100%',
          height: '100%',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={
            'https://azinko.s3.eu-central-1.amazonaws.com/az-portfolio-design.png'
          }
          alt='Portfolio design presented on desktop and mobile screen.'
        />
      </div>
    )
  );
}
