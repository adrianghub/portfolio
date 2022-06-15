import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { getCategories } from 'services';
import { PostCategory } from 'interfaces';

export const Categories = () => {
  const [categories, setCategories] = useState<
    { name: string; slug: string }[] | undefined
  >();
  const [selectedCategory, setSelectedCategory] = useState<string>('');
  const router = useRouter();

  useEffect(() => {
    void getCategories().then((cat: PostCategory[]) => setCategories(cat));
  }, []);

  useEffect(() => {
    if (selectedCategory && selectedCategory !== 'All') {
      void router.push(`/category/${selectedCategory}`);
    }

    if (selectedCategory === 'All') {
      void router.push('/');
    }
  }, [selectedCategory]);

  return (
    <div className="pt-4 pb-8">
      <h3 className="text-xl mb-8 font-semibold border-b border-gray-300 pb-4">
        Categories
      </h3>
      <select
        className="form-select form-select-lg appearance-none w-full px-4 py-3 focus:outline-none mt-4 md:mt-0 search-input rounded-lg bg-gray-100 text-gray-700"
        onChange={(e) => setSelectedCategory(e.target.value)}
        defaultValue={'All'}
      >
        <option disabled>All</option>
        {categories?.map((category) => (
          <option key={category.slug} className="block pb-3 mb-3">
            {category.name}
          </option>
        ))}
      </select>
    </div>
  );
};