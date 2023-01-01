/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { OneFourthLayout, Sidebar } from 'core/components';
import Link from 'next/link';
import { SeoWrapper } from 'shared/components';

const seoData = {
  title: 'Blog | Adrian Zinko',
  description: 'Tech blog website'
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
        childrenLeft={<div>(under construction)</div>}
        childrenRight={<Sidebar />}
      />
    </SeoWrapper>
  );
};

export default ResumePage;
