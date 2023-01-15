import '../../styles/globals.scss';

import { Inconsolata } from '@next/font/google';
import { Layout, ScrollArrow } from 'core/components';
import { PostsProvider } from 'shared/libs/PostsContext';
import { SearchProvider } from 'shared/libs/SearchContext';
import QueryProvider from './query-client-provider';

export const revalidate = 60;
export const runtime = 'experimental-edge';

const inconsolata = Inconsolata();

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inconsolata.className}>
      <QueryProvider>
        <SearchProvider>
          <PostsProvider>
            <body className="bg-whitechocolate-300 h-screen max-w-7xl mx-auto">
              <Layout>{children}</Layout>
              <ScrollArrow />
            </body>
          </PostsProvider>
        </SearchProvider>
      </QueryProvider>
    </html>
  );
}
