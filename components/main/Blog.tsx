import React from 'react';
import { InfiniteMovingCards } from '../ui/infiniteMovingCards';
import { blogData } from '@/data/Blog';
import SectionHeader from '../ui/SectionHeader';
import { PencilSquareIcon } from '@heroicons/react/24/solid';

const Blog = () => {
  return (
    <div>
      <SectionHeader
        title="My Developer Diary"
        subtitle="My Exploration into Technology and Developments"
        Icon={<PencilSquareIcon />}
      />
      <div className="flex justify-center items-center w-full h-full z-40">
        <InfiniteMovingCards items={blogData} speed="fast" />
      </div>
    </div>
  );
};

export default Blog;
