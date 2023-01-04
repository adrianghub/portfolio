import '../../styles/globals.scss';

import { Layout } from 'core/components';
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
            <body className="bg-whitechocolate-300 h-screen w-full">
              <Layout>{children}</Layout>
            </body>
          </PostsProvider>
        </SearchProvider>
      </QueryProvider>
    </html>
  );
}
