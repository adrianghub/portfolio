import '@/styles/resets.scss';
import '@/styles/globals.scss';

import { Inconsolata } from '@next/font/google';
import { Layout, ScrollArrow } from '@/core/components';
import { PostsProvider } from '@/shared/libs/PostsContext';
import { SearchProvider } from '@/shared/libs/SearchContext';
import QueryProvider from './query-client-provider';
import { ThemeProvider } from './theme-provider';

export const revalidate = 60;

const inconsolata = Inconsolata();

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inconsolata.className} suppressHydrationWarning>
      <head />
      <QueryProvider>
        <SearchProvider>
          <PostsProvider>
            <body className="bg-primary h-screen max-w-7xl mx-auto">
              <ThemeProvider attribute="class" enableSystem>
                <Layout>{children}</Layout>
                <ScrollArrow />

                <div id="modal-search"></div>
              </ThemeProvider>
            </body>
          </PostsProvider>
        </SearchProvider>
      </QueryProvider>
    </html>
  );
}
