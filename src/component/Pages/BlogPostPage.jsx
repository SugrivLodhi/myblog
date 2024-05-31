import React, { useContext, useState } from "react";
import BlogPostCard from "../BlogPostCard"; // Make sure to import your BlogPostCard component
import { blogPosts } from "@/constant";
import { BlogContext } from "@/context";
const BlogPostPage = () => {
  const { blogList } = useContext(BlogContext);
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 3;

  // Calculate the range of posts to display based on the current page
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = blogList.slice(indexOfFirstPost, indexOfLastPost);

  // Function to handle page changes
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const totalPages = Math.ceil(blogList.length / postsPerPage);

  return (
    <div className="container mx-auto px-4">
      <div className="flex items-center justify-center flex-col">
        {currentPosts.map((post, index) => (
          <BlogPostCard
            key={index}
            id={post.id}
            title={post.title}
            date={post.date}
            author={post.author}
            content={post.content}
            comment={post.comment}
          />
        ))}
        {blogList.length > 0 ? (
          <div className="pagination flex mt-4">
            <button
              onClick={() => paginate(currentPage - 1)}
              className={`px-4 py-2 mx-1 rounded-sm ${
                currentPage === 1
                  ? "bg-gray-300 text-gray-600 cursor-not-allowed"
                  : "bg-gray-200"
              }`}
              disabled={currentPage === 1}
            >
              Prev
            </button>
            {Array.from({ length: totalPages }, (_, index) => (
              <button
                key={index + 1}
                onClick={() => paginate(index + 1)}
                className={`px-4 py-2 mx-1 ${
                  currentPage === index + 1
                    ? "bg-blue-500 text-white"
                    : "bg-gray-200"
                }`}
              >
                {index + 1}
              </button>
            ))}
            <button
              onClick={() => paginate(currentPage + 1)}
              className={`px-4 py-2 mx-1 rounded-sm  ${
                currentPage === totalPages
                  ? "bg-gray-300 text-gray-600 cursor-not-allowed"
                  : "bg-gray-200"
              }`}
              disabled={currentPage === totalPages}
            >
              Next
            </button>
          </div>
        ) : (
          <h1>Not Blog Found</h1>
        )}
      </div>
    </div>
  );
};

export default BlogPostPage;
