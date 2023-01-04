'use client';

import { NextSeo } from 'next-seo';

interface SeoWrapperProps {
  title: string;
  description: string;
  children: React.ReactNode;
}

export const SeoWrapper = ({
  title,
  description,
  children
}: SeoWrapperProps) => (
  <>
    <NextSeo title={title} description={description} />
    {children}
  </>
);
