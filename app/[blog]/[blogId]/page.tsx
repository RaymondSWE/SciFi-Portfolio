"use client";
import { useRouter } from 'next/navigation';
import React from 'react';
import { TracingBeam } from '@/components/ui/TracingBeam';
import { usePostData } from './usePostData';
import Loader from '@/components/ui/Loader';

interface BlogPageProps {
  params: {
    blogId: number;
  };
}

const BlogPage: React.FC<BlogPageProps> = ({ params }) => {
  const { blogId } = params;
  const router = useRouter();
  const { post, loading, error } = usePostData(blogId);

  if (loading) {
    return <Loader/>;
  }

  if (error || !post) {
    return <div>Error: {error}</div>;
  }

  return (
    <TracingBeam>
      <div className="flex flex-col items-center justify-center py-10 px-5">
        <div className="mt-12 w-full flex flex-col items-center justify-center overflow-hidden rounded-md">
          <h1 className="text-3xl md:text-5xl lg:text-7xl font-bold text-center Welcome-text relative z-20 mb-6">
            {post.title}
          </h1>
          <div className="w-[40rem] h-10 relative">
            {/* Gradients */}
            <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
            <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
            <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
            <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />
            {/* Radial Gradient to prevent sharp edges */}
            <div className="absolute inset-0 w-full h-full [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
          </div>
        </div>
        <article className="relative bg-[#1a1a2e]/60 backdrop-blur-md rounded-lg shadow-lg p-6 text-white max-w-4xl mx-auto">
          <div className="relative z-10 text-base leading-7">
            <div className="flex justify-between mb-4 text-sm text-gray-400">
              <span>{post.date}</span>
              <span>{post.author}</span>
            </div>
            {post.paragraphOne && <p className="mb-4">{post.paragraphOne}</p>}
            {post.subtitle && (
            <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold Welcome-text relative mb-2">
              {post.subtitle}
            </h2>
          )}
            {post.paragraphTwo && <p className="mb-4">{post.paragraphTwo}</p>}
            {post.paragraphThree && <p className="mb-4">{post.paragraphThree}</p>}
            <div dangerouslySetInnerHTML={{ __html: post.contentHtml }} />
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent opacity-30 rounded-lg blur"></div>
        </article>
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
