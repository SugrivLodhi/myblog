import React, { useState } from "react";
import CommentsSection from "./CommentSection";
import { useRouter } from "next/router";
const BlogPostCard = ({ title, date, author,id, content, isShowDetail, comment }) => {
  const navigate  = useRouter()
  const handleShowMore = (blogId)=> {
     navigate.push(`/blog-details/${blogId}`)
  }  
  return (
    <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden my-4">
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-700 text-base">{author}</p>
        <p className="text-gray-600 text-sm">{date}</p>
        <p className="text-gray-700 text-base mt-2">
          {isShowDetail ? content : `${content.substring(0, 100)}...`}
        </p>
        {!isShowDetail && (
          <button
            onClick={() => handleShowMore(id)}
            className="text-blue-500 hover:text-blue-700 mt-2"
          >
             Show More
          </button>
        )}
      </div>
      {isShowDetail && <CommentsSection  blogId={id}  allComment={comment}/>}
    </div>
  );
};

export default BlogPostCard;
