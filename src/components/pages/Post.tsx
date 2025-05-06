import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { BlogPost } from '../../types/blog';

export function Post() {
  const { slug } = useParams();
  const [post, setPost] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await fetch(`http://localhost:8080/api/posts/${slug}`);
        if (!response.ok) {
          throw new Error('Post not found');
        }
        const data = await response.json();
        setPost(data);
        setError(null);
      } catch (error) {
        setError('The blog post you\'ve requested doesn\'t exist.');
        setPost(null);
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, [slug]);

  if (loading) {
    return <span>Loading...</span>;
  }

  if (error || !post) {
    return <span>{error}</span>;
  }

  return (
    <div style={{ padding: 20 }}>
      <h3>{post.title}</h3>
      <p>{post.description}</p>
    </div>
  );
}