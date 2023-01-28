import { ReactNode } from 'react';
import { ContactWidget } from 'shared/components';
import { AboutWidget } from '../../shared/components/AboutWidget';

interface SidebarProps {
  children: ReactNode;
  aboutWidget?: boolean;
}

export const Sidebar = ({ children, aboutWidget }: Partial<SidebarProps>) => (
  <div className="border border-gray-300 rounded-lg p-8 mb-8 lg:mb-0">
    {children}
    {aboutWidget ? <AboutWidget /> : <ContactWidget />}
  </div>
);
