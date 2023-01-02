import Link from 'next/link';
import { useRouter } from 'next/router';
import { Loader, SeoWrapper, SocialMediaRow } from 'shared/components';

const seoData = {
  title: 'Home | Adrian Zinko',
  description: 'Portfolio website'
};

const IndexPage = () => {
  const { isFallback } = useRouter();

  if (isFallback) {
    return <Loader />;
  }

  // const [error, setError] = useState(null);
  // const [quantity, setQuantity] = useState(1);
  // const [name, setName] = useState('');
  // const [message, setmMessage] = useState('');
  // const presets = [1, 3, 5];

  return (
    <SeoWrapper {...seoData}>
      <div className="grid place-items-center min-h-[calc(100vh-245px)]">
        <div>
          <h2 className="text-lg md:text-2xl mb-8">
            I run on soy latte. You can{' '}
            <Link href="/buymeacoffee" className="animated-link">
              buy
            </Link>{' '}
            me one if you wish ;)
          </h2>

          <SocialMediaRow />

          {/* {presets.map((preset) => (
            <button key={preset} onClick={() => setQuantity(preset)}>
              {preset}
            </button>
          ))}

          <Input
            additionalClasses="p-4 my-4"
            placeholder="Value"
            name="value"
          /> */}
        </div>
      </div>
    </SeoWrapper>
  );
};

export default IndexPage;
