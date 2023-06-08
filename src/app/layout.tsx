import '@/styles/resets.scss';
import '@/styles/globals.scss';

import { Inconsolata } from 'next/font/google';
import { ScrollArrow } from '@/components';
import { ThemeProvider } from './theme-provider';
import { Providers } from './providers';
import { Layout } from '@/components/Layout';

export const revalidate = 60;

const inconsolata = Inconsolata({ subsets: ['latin'] });

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inconsolata.className} suppressHydrationWarning>
      <head />
      <Providers>
        <body
          suppressHydrationWarning={true}
          className="bg-primary h-screen max-w-7xl mx-auto"
        >
          <ThemeProvider attribute="class" enableSystem>
            <Layout>{children}</Layout>
            <ScrollArrow />

            <div id="modal-search"></div>
          </ThemeProvider>
        </body>
      </Providers>
    </html>
  );
}
