import { AboutWidget } from './AboutWidget';
import { PostWidget } from './PostWidget';

interface SidebarProps {
  slug: string;
  categoriesSlugs: string[];
}

export const Sidebar = ({ slug, categoriesSlugs }: Partial<SidebarProps>) => (
  <div className="shadow-lg rounded-lg px-8 pt-8 pb-4">
    <AboutWidget />
    <PostWidget slug={slug} categoriesSlugs={categoriesSlugs} />
  </div>
);
