import React from 'react'
import { InfiniteMovingCards } from '../ui/infiniteMovingCards';

const blogPosts = [
    {
      id: 1,
      quote: 'My First Post',
      name: 'John Doe',
      title: 'June 21, 2024',
    },
    {
      id: 2,
      quote: 'Another Post',
      name: 'Jane Smith',
      title: 'June 22, 2024',
    },
    {
      id: 3,
      quote: 'Interesting Post',
      name: 'Alice Johnson',
      title: 'June 23, 2024',
    },
  ];

const Blog = () => {
  return (
    <div className='flex justify-center items-center w-full h-full'>
        <InfiniteMovingCards items={blogPosts} speed='slow'/>
    </div>
  )
}

export default Blog