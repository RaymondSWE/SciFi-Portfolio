import React from 'react';
import { InfiniteMovingCards } from '../ui/infiniteMovingCards';
import { blogData } from '@/data/Blog';
import SectionHeader from '../ui/SectionHeader';
import { PencilSquareIcon } from '@heroicons/react/24/solid';
import { useAllBlogData } from '@/hooks/useAllBlogData';

const Blog = () => {
  const { blogs, loading, error } = useAllBlogData();

  return (
    <div>
      <SectionHeader
        title="My Developer Diary"
        subtitle="My Exploration into Technology and Developments"
        Icon={<PencilSquareIcon />}
      />
      <div className="flex justify-center items-center w-full h-full z-40">
        <InfiniteMovingCards items={blogs} speed="normal" />
      </div>
    </div>
  );
};

export default Blog;
