import AboutWidget from "./AboutWidget";
import Categories from "./Categories";
import PostWidget from "./PostWidget";

interface SidebarProps {
  slug: string;
  categoriesSlugs: string[];
}

const Sidebar = ({ slug, categoriesSlugs }: SidebarProps) => (
  <div className="shadow-lg rounded-lg px-8 pt-8 pb-4">
    <AboutWidget />
    <PostWidget slug={slug} categoriesSlugs={categoriesSlugs} />
    <Categories />
  </div>
);

export default Sidebar;
