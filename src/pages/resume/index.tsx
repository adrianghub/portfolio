import { OneFourthLayout } from 'core/components';
import Link from 'next/link';
import { SeoWrapper } from 'shared/components';

const seoData = {
  title: 'Resume | Adrian Zinko',
  description: 'Curriculum vitae (web & pdf) page [under construction]'
};

const ResumePage = () => {
  return (
    <SeoWrapper {...seoData}>
      <div className="flex justify-center mb-8">
        <Link
          href="/assets/resume.pdf"
          target="_blank"
          rel="norefferer"
          className="animated-link"
        >
          <span className="cursor-pointer font-bold text-xl lg:text-xl">
            resume (pdf)
          </span>
        </Link>
      </div>
      <OneFourthLayout
        childrenLeft={
          <div className="text-center sm:text-left">(under construction)</div>
        }
        childrenRight={null}
      />
    </SeoWrapper>
  );
};

export default ResumePage;
