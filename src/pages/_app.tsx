import '../../styles/globals.scss';

import { Layout } from 'core/components';
import { AppProps } from 'next/app';
import { PostsProvider } from 'shared/libs/PostsContext';
import { SearchProvider } from 'shared/libs/SearchContext';

const MyApp = ({ Component, pageProps }: AppProps) => (
  <SearchProvider>
    <PostsProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </PostsProvider>
  </SearchProvider>
);

export default MyApp;
