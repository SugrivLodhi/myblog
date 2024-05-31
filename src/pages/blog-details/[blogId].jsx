import BlogPostCard from "@/component/BlogPostCard";
import { blogPosts } from "@/constant";
import Head from "next/head";
import { useParams, usePathname, useSearchParams } from "next/navigation";
import React from "react";

const BlogDetailsPage = () => {
  const blog = useParams();

  const data = blogPosts.find((v) => v.id === parseInt(blog?.blogId));
  return (
    <>
      <Head>
        <title>{data?.title}</title>
        <meta name="description" content={data?.content.slice(0, 160)} />
      </Head>

      <BlogPostCard
        title={data?.title}
        date={data?.date}
        author={data?.author}
        content={data?.content}
        isShowDetail
      />
    </>
  );
};

export default BlogDetailsPage;
