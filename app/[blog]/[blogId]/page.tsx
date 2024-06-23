"use client";
import { useRouter } from 'next/navigation';
import React, { useEffect } from 'react';
import { blogData } from '@/data/Blog';
import { TracingBeam } from '@/components/ui/TracingBeam';

interface BlogPageProps {
  params: {
    blogId: number;
  };
}

const BlogPage: React.FC<BlogPageProps> = ({ params }) => {
  const { blogId } = params;
  const postId = Number(blogId);
  const router = useRouter();

  
  const post = blogData.find(post => post.id === postId);

  useEffect(() => {
    if (!post) {
      router.push('/404');
    }
  }, [post, router]);

  if (!post) {
    return null; 
  }

  return (
    <TracingBeam>
    <div className="flex flex-col items-center justify-center py-10 px-5">
      <div className="mt-12 w-full flex flex-col items-center justify-center overflow-hidden rounded-md">
        <h1 className=" md:text-3xl text-3xl lg:text-7xl font-bold text-center Welcome-text relative z-20">
          {post.title}
        </h1>
        <div className="w-[40rem] h-20 relative">
          {/* Gradients */}
          <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
          <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
          <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
          <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />
          {/* Radial Gradient to prevent sharp edges */}
          <div className="absolute inset-0 w-full h-full [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
        </div>
      </div>
      <div className="relative bg-[#1a1a2e]/60 backdrop-blur-md rounded-lg shadow-lg p-6 text-white max-w-4xl mx-auto">
        <div className="relative z-10 text-base leading-7">
          <div className="flex justify-between mb-4 text-sm text-gray-400">
            <span>{post.date}</span>
            <span>{post.author}</span>
          </div>
          <div>
            {post.description}
          </div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent opacity-30 rounded-lg blur"></div>
      </div>
      <button
        onClick={() => router.push('/')}
        className="mt-8 px-6 py-2 text-base rounded-3xl transition-colors button-3d-primary z-20 text-white"
      >
        Back to Home
      </button>
    </div>
    </TracingBeam>
  );
};

export default BlogPage;
