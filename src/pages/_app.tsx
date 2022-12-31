import { AppProps } from 'next/app';
import { Layout } from 'components';
import { PostsProvider } from 'libs/PostsContext';
import { SearchProvider } from 'libs/SearchContext';
import '../../styles/globals.scss';

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
