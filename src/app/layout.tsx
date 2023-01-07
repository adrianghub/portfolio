import '../../styles/globals.scss';

import { Layout, ScrollArrow } from 'core/components';
import { PostsProvider } from 'shared/libs/PostsContext';
import { SearchProvider } from 'shared/libs/SearchContext';
import QueryProvider from './query-client-provider';

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
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
