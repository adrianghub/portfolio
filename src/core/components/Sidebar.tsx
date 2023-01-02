import { PostWidget } from 'modules/blog/components';
import { ReactNode } from 'react';
import { AboutWidget } from '../../shared/components/AboutWidget';

interface SidebarProps {
  children: ReactNode;
  postWidget?: boolean;
}

export const Sidebar = ({ children, postWidget }: Partial<SidebarProps>) => (
  <div className="border border-gray-300 rounded-lg px-8 pt-8 pb-4">
    <AboutWidget />
    {postWidget && <PostWidget />}
    {children}
  </div>
);
