import { BlogContext } from "@/context";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useContext } from "react";

const Header = () => {
  const { searchQuery, setSearchQuery } = useContext(BlogContext);
  const path = usePathname();
  const isDetailsPage = path.includes("blog-details");
  return (
    <header className="bg-blue-500 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/">
          <div className="text-lg font-bold">My Blog</div>
        </Link>
        {!isDetailsPage && (
          <input
            type="search"
            placeholder="Search..."
            className="px-2 py-1 rounded w-1/2 text-black"
            onChange={(e) => setSearchQuery(e.target.value)}
            value={searchQuery}
          />
        )}

        <div className="flex space-x-4">
          <button className="bg-blue-700 px-4 py-2 rounded">Login</button>
          <button className="bg-blue-700 px-4 py-2 rounded">About</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
