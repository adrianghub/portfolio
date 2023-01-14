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
          className="font-bold text-xl lg:text-xl animated-link"
        >
          resume (pdf)
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
