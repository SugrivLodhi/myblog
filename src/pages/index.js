import { Inter } from "next/font/google";
import BlogPostPage from "@/component/Pages/BlogPostPage";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Blog Listing</title>
        <meta name="description" content="All blog are listed bellow" />
      </Head>
      <BlogPostPage />
    </>
  );
}
