import { ReactNode } from 'react';

interface OneFourthLayoutProps {
  title?: string;
  headingClasses?: string;
  childrenLeft: ReactNode;
  childrenRight: ReactNode;
}

export const OneFourthLayout = ({
  title,
  headingClasses,
  childrenLeft,
  childrenRight
}: OneFourthLayoutProps) => (
  <>
    {title && (
      <h1
        className={`text-center text-3xl sm:text-5xl lg:text-7xl font-semibold my-12 ${
          headingClasses ? headingClasses : ''
        }`}
      >
        {title}
      </h1>
    )}
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 md:mt-4">
      <div className="lg:col-span-8 col-span-1 lg:mb-8">{childrenLeft}</div>
      <div className="col-span-1 lg:col-span-4 relative lg:sticky lg:top-8 lg:h-[95vh]">
        {childrenRight}
      </div>
    </div>
  </>
);
