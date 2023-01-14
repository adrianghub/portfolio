'use client';

import { useRouter } from 'next/navigation';
import { PostCategory } from 'interfaces';

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
    <div className="border border-gray-300 rounded-lg px-8 lg:pt-8 pb-4 mt-4 mb-4 pt-4">
      <h3 className="text-xl mb-8 font-semibold border-b border-gray-300 pb-4">
        Categories
      </h3>
      <select onChange={handleChange}>
        {!current ? (
          <option value="All">All</option>
        ) : (
          <>
            <option value={current}>{current}</option>
            <option value="All">All</option>
          </>
        )}
        {categories
          .filter((category) => category.name !== current)
          .map((category, idx) => (
            <option key={idx}>{category.name}</option>
          ))}
      </select>
    </div>
  );
};
