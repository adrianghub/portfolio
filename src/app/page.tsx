import { NewsletterForm, SocialMediaRow } from '@/shared/components';
import { PageHeading } from '@/core/components/PageHeading';

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
