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
        className={`text-center text-5xl sm:text-7xl font-semibold my-8 ${
          headingClasses ? headingClasses : ''
        }`}
      >
        {title}
      </h1>
    )}
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
      <div className="lg:col-span-8 col-span-1 lg:mb-8">{childrenLeft}</div>
      <div className="col-span-1 lg:col-span-4 relative lg:sticky top-2 lg:h-screen">
        {childrenRight}
      </div>
    </div>
  </>
);
