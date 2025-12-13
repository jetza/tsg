"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState, useEffect } from "react";

interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  category: string;
  createdAt: string;
}

export default function BlogPage() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState<string>("Sve");
  const categories = ["Sve", "Vesti", "Saveti", "Blog"];

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setLoading(true);
        const url =
          selectedCategory === "Sve"
            ? "/api/posts"
            : `/api/posts?category=${selectedCategory}`;
        const response = await fetch(url);
        const data = await response.json();
        setPosts(data);
      } catch (error) {
        console.error("Error fetching posts:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, [selectedCategory]);

  return (
    <div className="min-h-screen py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl font-heading font-bold mb-12 text-primary-500"
        >
          Blog
        </motion.h1>

        {/* Category filter */}
        <div className="flex gap-4 mb-12 flex-wrap">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 font-semibold transition-all border-2 border-[#546e7a] ${
                selectedCategory === category
                  ? "bg-primary-500 text-white"
                  : "bg-white text-primary-500 hover:bg-primary-50"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Loading state */}
        {loading && (
          <div className="text-center py-20">
            <div className="inline-block animate-spin h-12 w-12 border-b-2 border-primary-500 rounded-full"></div>
            <p className="mt-4 text-gray-600">Učitavanje...</p>
          </div>
        )}

        {/* Blog posts grid */}
        {!loading && posts.length > 0 && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-[#546e7a] border-2 border-[#546e7a]">
            {posts.map((post) => (
              <Link
                key={post.id}
                href={`/blog/${post.slug}`}
                className="bg-white p-8 hover:bg-primary-500 hover:text-white transition-colors group"
              >
                <div className="text-sm font-semibold mb-3 text-primary-400 group-hover:text-white">
                  {post.category}
                </div>
                <h2 className="text-2xl font-heading font-bold mb-4 text-primary-500 group-hover:text-white">
                  {post.title}
                </h2>
                <p className="text-gray-700 group-hover:text-white mb-4 line-clamp-3">
                  {post.excerpt || "Kliknite da pročitate više..."}
                </p>
                <div className="text-sm text-gray-500 group-hover:text-white">
                  {new Date(post.createdAt).toLocaleDateString("sr-RS")}
                </div>
              </Link>
            ))}
          </div>
        )}

        {/* Empty state */}
        {!loading && posts.length === 0 && (
          <div className="text-center py-20">
            <p className="text-xl text-gray-500">
              Nema postova u ovoj kategoriji.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
