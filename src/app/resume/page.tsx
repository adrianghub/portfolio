import { OneFourthLayout } from 'core/components';
import Link from 'next/link';

const ResumePage = () => {
  return (
    <>
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
    </>
  );
};

export default ResumePage;
