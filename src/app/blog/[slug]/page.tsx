"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { notFound } from "next/navigation";

interface BlogPost {
  id: string;
  title: string;
  content: string;
  excerpt: string;
  category: string;
  author: string;
  createdAt: string;
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const [post, setPost] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await fetch(`/api/posts/${params.slug}`);
        if (!response.ok) {
          notFound();
          return;
        }
        const data = await response.json();
        setPost(data);
      } catch (error) {
        console.error("Error fetching post:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, [params.slug]);

  if (loading) {
    return (
      <div className="min-h-screen py-20 px-6 flex items-center justify-center">
        <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-primary-500"></div>
      </div>
    );
  }

  if (!post) {
    notFound();
  }

  return (
    <div className="min-h-screen py-20 px-6">
      <article className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div className="mb-6">
            <span className="inline-block px-4 py-1 bg-primary-100 text-primary-500 rounded-full text-sm font-semibold mb-4">
              {post.category}
            </span>
          </div>

          <h1 className="text-5xl font-heading font-bold mb-6 text-primary-500">
            {post.title}
          </h1>

          <div className="flex items-center gap-4 mb-8 text-gray-600">
            <span>{post.author}</span>
            <span>•</span>
            <span>{new Date(post.createdAt).toLocaleDateString("sr-RS")}</span>
          </div>

          <div
            className="prose prose-lg max-w-none bg-white p-8 rounded-2xl shadow-lg"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </motion.div>
      </article>
    </div>
  );
}
