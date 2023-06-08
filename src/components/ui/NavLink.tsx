import { ReactNode } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

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
  const pathname = usePathname();
  const isSelected = pathname === to;
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
    <Link
      href={to}
      className={`animated-link ${
        isSelected || activeCategory
          ? 'active mr-8 last:sm:mr-0'
          : 'mr-8 last:sm:mr-0'
      } ${classes}`}
    >
      {children || text}
    </Link>
  );
};
