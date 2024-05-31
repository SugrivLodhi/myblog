import React, { createContext, useEffect, useState } from "react";
import { blogPosts } from "@/constant";

export const BlogContext = createContext(null);

// Create a provider component
export const BlogProvider = ({ children }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [blogList, setBlogList] = useState(blogPosts);

  useEffect(() => {
    if (searchQuery?.length > 0) {
      const filteredBlogs = blogPosts.filter((blog) =>
        blog.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setBlogList(filteredBlogs);
    } else {
      setBlogList(blogPosts);
    }
  }, [searchQuery]);
  return (
    <BlogContext.Provider
      value={{ searchQuery, setSearchQuery, blogList, setBlogList }}
    >
      {children}
    </BlogContext.Provider>
  );
};
