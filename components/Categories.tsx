import { useEffect, useState } from 'react';
import { getCategories } from 'services';
import { PostCategory } from 'interfaces';
import { NavLink } from './NavLink';
import { useRouter } from 'next/router';

export const Categories = () => {
  const [categories, setCategories] = useState<
    { name: string; slug: string }[] | undefined
  >();
  const [activeCategory, setActiveCategory] = useState(false);
  const { asPath } = useRouter();

  useEffect(() => {
    void getCategories().then((cat: PostCategory[]) => setCategories(cat));
  }, []);

  useEffect(() => {
    categories?.map((category) => {
      if (asPath.split('/')[2] === category.slug) {
        setActiveCategory(true);
      }
    });
  }, []);

  return (
    <div className="pt-4 pb-8 flex flex-wrap justify-center text-center">
      {categories?.map((category, idx) => (
        <NavLink
          key={idx}
          to={`/category/${category.slug}`}
          additionalClasses="mt-4"
          text={category.name}
          activeCategory={activeCategory}
        />
      ))}
    </div>
  );
};
