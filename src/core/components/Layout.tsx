import { ReactNode } from 'react';
import { Header } from './';

interface LayoutProps {
  children: ReactNode;
}

export const Layout = ({ children }: LayoutProps) => (
  <>
    <Header />
    {/* <div className="border-b w-full border-violet-500"></div> */}

    <main className="container mx-auto px-20 mb-8">{children}</main>
  </>
);
