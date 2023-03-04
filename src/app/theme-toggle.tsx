'use client';

import { useTheme } from 'next-themes';
import { useMounted } from '@/shared/hooks/useMounted';
import { BsFillMoonStarsFill, BsFillSunFill } from 'react-icons/bs';

export const ThemeToggle = () => {
  const mounted = useMounted();
  const { setTheme, resolvedTheme } = useTheme();

  if (!mounted) {
    return null;
  }

  const isLight = resolvedTheme === `light`;

  const toggleTheme = () => setTheme(isLight ? `dark` : `light`);

  return (
    <button onClick={toggleTheme}>
      {isLight ? (
        <BsFillMoonStarsFill size={'1.25rem'} />
      ) : (
        <BsFillSunFill size={'1.25rem'} />
      )}
    </button>
  );
};
