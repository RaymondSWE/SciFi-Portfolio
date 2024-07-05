import { useState, useEffect } from 'react';

interface BlogData {
  id: number;
  title: string;
  subtitle?: string;
  author: string;
  date: string;
}

export const useAllBlogData = () => {
  const [blogs, setBlogs] = useState<BlogData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/blog');
        if (response.ok) {
          const blogsData: BlogData[] = await response.json();
          setBlogs(blogsData);
        } else {
          setError('Failed to load blog data');
        }
      } catch (error) {
        setError('Failed to load blog data');
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return { blogs, loading, error };
};
