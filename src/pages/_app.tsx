import '../../styles/globals.scss';

import { Layout } from 'core/components';
import { AppProps } from 'next/app';
import { PostsProvider } from 'shared/libs/PostsContext';
import { SearchProvider } from 'shared/libs/SearchContext';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

const MyApp = ({ Component, pageProps }: AppProps) => (
  <QueryClientProvider client={queryClient}>
    <SearchProvider>
      <PostsProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </PostsProvider>
    </SearchProvider>
  </QueryClientProvider>
);

export default MyApp;
