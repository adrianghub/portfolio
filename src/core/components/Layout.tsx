import { ReactNode } from 'react';
import { Header } from './';

interface LayoutProps {
  children: ReactNode;
}

export const Layout = ({ children }: LayoutProps) => (
  <>
    <Header />
    <main className="container mx-auto px-8">{children}</main>
  </>
);
