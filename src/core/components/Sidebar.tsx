import { PostWidget } from 'modules/blog/components';
import { ReactNode } from 'react';
import { AboutWidget } from '../../shared/components/AboutWidget';

interface SidebarProps {
  children: ReactNode;
  postWidget?: boolean;
}

export const Sidebar = ({ children, postWidget }: Partial<SidebarProps>) => (
  <div className="border border-gray-300 rounded-lg px-8 lg:pt-8 pb-4 mt-4 mb-8 lg:mb-8">
    <AboutWidget />
    {postWidget && <PostWidget />}
    {children}
  </div>
);
