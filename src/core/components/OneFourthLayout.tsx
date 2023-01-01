import { ReactNode } from 'react';

interface OneFourthLayoutProps {
  childrenLeft: ReactNode;
  childrenRight: ReactNode;
}

export const OneFourthLayout = ({
  childrenLeft,
  childrenRight
}: OneFourthLayoutProps) => (
  <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
    <div className="lg:col-span-8 col-span-1">{childrenLeft}</div>
    <div className="col-span-1 lg:col-span-4 relative lg:sticky top-2 h-screen">
      {childrenRight}
    </div>
  </div>
);
