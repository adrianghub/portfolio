import { useState, useEffect } from "react";
import { AppProps } from "next/app";
import "../styles/globals.scss";
import Layout from "components/Layout";
import { SearchProvider } from "lib/SearchContext";

const MyApp = ({ Component, pageProps }: AppProps) => (
  <SearchProvider>
    <Layout>
      <Component {...pageProps} />
    </Layout>
  </SearchProvider>
);

export default MyApp;
