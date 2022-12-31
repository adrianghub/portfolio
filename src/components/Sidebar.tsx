import { ReactNode } from 'react';
import { AboutWidget } from './AboutWidget';

interface SidebarProps {
  slug: string;
  categoriesSlugs: string[];
  children: ReactNode;
}

export const Sidebar = ({ children }: Partial<SidebarProps>) => (
  <div className="shadow-lg rounded-lg px-8 pt-8 pb-4">
    <AboutWidget />
    {children}
  </div>
);
