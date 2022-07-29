import { ReactNode } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

interface ActiveLinkProps {
  to: string;
  text?: string;
  children?: ReactNode;
  additionalClasses?: string;
  additionalSelectedClasses?: string;
  activeCategory?: boolean;
}

export const NavLink = ({
  to,
  text,
  children,
  additionalClasses,
  additionalSelectedClasses,
  activeCategory
}: ActiveLinkProps) => {
  const { asPath } = useRouter();
  const isSelected = asPath === to;
  const selectedClasses = `${
    additionalSelectedClasses ? additionalSelectedClasses : ''
  }`;
  const classes =
    isSelected && additionalClasses
      ? `${selectedClasses} ${additionalClasses}`
      : isSelected
      ? selectedClasses
      : additionalClasses
      ? additionalClasses
      : '';

  return (
    <Link href={to} passHref>
      <a
        className={`animated-link ${
          isSelected || activeCategory ? 'active mr-8' : 'mr-8'
        } ${classes}`}
      >
        {children || text}
      </a>
    </Link>
  );
};
