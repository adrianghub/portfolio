import { ImageResponse } from '@vercel/og';
import Image from 'next/image';

export const config = {
  runtime: 'edge'
};

export default function handler() {
  const src =
    'https://azinko.s3.eu-central-1.amazonaws.com/az-portfolio-design.png';

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
        <Image
          src={src}
          width={640}
          height={320}
          alt={'Portfolio design presented on desktop and mobile screen.'}
        />
      </div>
    )
  );
}
