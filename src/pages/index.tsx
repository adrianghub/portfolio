import { Loader, SeoWrapper, Input } from 'components';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { useState } from 'react';

const seoData = {
  title: 'Home | Adrian Zinko',
  description: 'Portfolio website'
};

const IndexPage = () => {
  const { isFallback } = useRouter();

  if (isFallback) {
    return <Loader />;
  }

  const [error, setError] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [name, setName] = useState('');
  const [message, setmMessage] = useState('');
  const presets = [1, 3, 5];

  return (
    <SeoWrapper {...seoData}>
      <div className="grid place-items-center min-h-[calc(100vh-245px)]">
        <div>
          <h2 className="text-2xl">
            I run on soy latte. You can buy me one if you wish ;)
          </h2>
          {presets.map((preset) => (
            <button key={preset} onClick={() => setQuantity(preset)}>
              {preset}
            </button>
          ))}

          <Input
            additionalClasses="p-4 my-4"
            placeholder="Value"
            name="value"
          />
        </div>

        <p className="text-xl">
          Didn't convince you? Check out the
          <span className="mx-2 font-bold">
            <Link className="animated-link" href="/blog" passHref>
              Blog
            </Link>
          </span>
          or
          <span className="mx-2 font-bold">
            <Link
              className="animated-link"
              target="_blank"
              rel="norefferer"
              href="/resume"
            >
              Resume
            </Link>
          </span>
          instead.
        </p>
      </div>
    </SeoWrapper>
  );
};

export default IndexPage;
