import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

interface BlogData {
  id: number;
  title: string;
  subtitle?: string;
  author: string;
  date: string;
  contentHtml: string;
  paragraphOne?: string;
  paragraphTwo?: string;
  paragraphThree?: string;
  paragraphFour?: string;
  paragraphFive?: string;

}

export const useBlogData = (blogId: number) => {
  const [blog, setBlog] = useState<BlogData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`/api/blog/${blogId}`);
        if (response.ok) {
          const blogData: BlogData = await response.json();
          setBlog(blogData);
        } else {
          router.push('/404');
        }
      } catch (error) {
        setError('Failed to load post.');
        router.push('/404');
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [blogId, router]);

  return { blog, loading, error };
};
