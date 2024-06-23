import React from "react";
import { InfiniteMovingCards } from "../ui/infiniteMovingCards";
import { blogData } from "@/data/Blog";

const Blog = () => {
  return (
    <div className="flex justify-center items-center w-full h-full z-40">
      <InfiniteMovingCards items={blogData} speed="slow" />
    </div>
  );
};

export default Blog;
