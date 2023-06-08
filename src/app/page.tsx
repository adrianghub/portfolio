import { PageHeading } from '@/components/PageHeading';
import { SocialMediaRow, NewsletterForm } from '@/components/ui';
import { OPEN_GRAPH_IMAGES } from '@/constants';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Developer Portfolio | Adrian Zinko',
  description: 'Portfolio with blog section. Download resume provided in pdf format from the resume subpage.',
  openGraph: {
    ...OPEN_GRAPH_IMAGES,
  },
};

const IndexPage = () => {
  return (
    <div className="grid place-items-center min-h-[calc(100vh-245px)]">
      <PageHeading />

      <div className="my-8">
        <SocialMediaRow />
      </div>

      <NewsletterForm />
    </div>
  );
};

export default IndexPage;
