import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

interface PostData {
  id: number;
  title: string;
  author: string;
  date: string;
  contentHtml: string;
}

export const usePostData = (blogId: number) => {
  const [post, setPost] = useState<PostData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`/api/posts/${blogId}`);
        if (response.ok) {
          const postData: PostData = await response.json();
          setPost(postData);
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

  return { post, loading, error };
};
