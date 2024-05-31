import Layout from "@/component/Layout";
import { BlogProvider } from "@/context";

import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <BlogProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </BlogProvider>
  );
}
