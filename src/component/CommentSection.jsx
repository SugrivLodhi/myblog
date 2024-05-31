import { BlogContext } from "@/context";
import { useParams } from "next/navigation";
import { useContext, useState } from "react";

const CommentsSection = () => {
  const blogs = useParams();
  const { blogList } = useContext(BlogContext);
  const allComment = blogList.filter((v) => v.id == blogs?.blogId);
  const [comment, setComment] = useState("");
  const { setBlogList } = useContext(BlogContext);
  const handleCommentSubmit = () => {
    if (comment.trim()) {
      setBlogList((blog) => {
        return blog.map((v) => {
          if (v.id == blogs?.blogId) {
            return {
              ...v,
              comment: [...v.comment, comment],
            };
          } else {
            return v;
          }
        });
      });
      setComment("");
    }
  };

  return (
    <div className="px-6 py-4">
      <h3 className="font-bold text-lg">Comments</h3>
      <div className="mt-4">
        <input
          type="text"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          className="border p-2 w-full"
          placeholder="Write a comment..."
        />
        <button
          onClick={handleCommentSubmit}
          className="bg-blue-500 text-white px-4 py-2 mt-2"
        >
          Post Comment
        </button>
      </div>
      <div className="mt-4">
        {allComment?.[0]?.comment?.map((com, index) => (
          <div key={index} className="border-b border-gray-200 py-2">
            {com}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CommentsSection;
