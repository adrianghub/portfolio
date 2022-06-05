import { AppProps } from "next/app";
import "../styles/globals.scss";
import Layout from "components/Layout";
import { PostsProvider } from "lib/PostsContext";
import { SearchProvider } from "lib/SearchContext";

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
