'use client';

import { useRouter } from 'next/navigation';
import { PostCategory } from '@/interfaces';

export const Categories = ({
  categories,
  current
}: {
  categories: PostCategory[];
  current?: string;
}) => {
  const router = useRouter();

  function handleChange(evt: React.ChangeEvent<HTMLSelectElement>) {
    const { value } = evt.target;

    if (value === 'All') {
      return router.push('/blog');
    }

    categories.forEach((category) => {
      if (category.name === value) {
        return router.push(`/blog/category/${category.slug}`);
      }
    });
  }

  return (
    <>
      <h3 className="mb-8 pb-2 prose prose-xl border-b border-gray-300 ">
        Categories
      </h3>
      <select
        onChange={handleChange}
        className="w-full py-2.5 px-4 prose  rounded-lg border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 hover:ring hover:ring-gray-300 focus:ring focus:ring-gray-300 bg-gray-100 text-gray-700 focus:outline-none peer cursor-pointer transition duration-200"
      >
        {!current ? (
          <option value="All">All (blog page)</option>
        ) : (
          <>
            <option value={current}>{current}</option>
            <option value="All">All (blog page)</option>
          </>
        )}
        {categories
          .filter((category) => category.name !== current)
          .map((category, idx) => (
            <option key={idx}>{category.name}</option>
          ))}
      </select>
    </>
  );
};
