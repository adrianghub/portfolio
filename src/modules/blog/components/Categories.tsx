'use client';

import { useEffect, useState } from 'react';
import { getCategories } from 'shared/services';
import { PostCategory } from 'interfaces';
import { usePathname } from 'next/navigation';
import { NavLink } from 'shared/components';

export const Categories = () => {
  const [categories, setCategories] = useState<
    { name: string; slug: string }[] | undefined
  >();
  const [activeCategory, setActiveCategory] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    void getCategories().then((cat: PostCategory[]) => setCategories(cat));
  }, []);

  useEffect(() => {
    categories?.map((category) => {
      if (pathname?.split('/')[3] === category.slug) {
        setActiveCategory(true);
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="mx-4 py-4 flex flex-wrap justify-center text-center">
      <NavLink
        to="/blog"
        additionalClasses="mt-4"
        text={'All'}
        activeCategory={activeCategory}
      />
      {categories?.map((category, idx) => (
        <NavLink
          key={idx}
          to={`/blog/category/${category.slug}`}
          additionalClasses="mt-4"
          text={category.name}
          activeCategory={activeCategory}
        />
      ))}
    </div>
  );
};
