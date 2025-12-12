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
              className={`px-6 py-2 rounded-full font-semibold transition-all ${
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
            <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-primary-500"></div>
            <p className="mt-4 text-gray-600">Učitavanje...</p>
          </div>
        )}

        {/* Blog posts grid */}
        {!loading && posts.length > 0 && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div className="p-6">
                  <div className="text-sm text-primary-400 font-semibold mb-2">
                    {post.category}
                  </div>
                  <h2 className="text-2xl font-heading font-bold mb-3 text-primary-500">
                    {post.title}
                  </h2>
                  <p className="text-gray-700 mb-4 line-clamp-3">
                    {post.excerpt || "Kliknite da pročitate više..."}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">
                      {new Date(post.createdAt).toLocaleDateString("sr-RS")}
                    </span>
                    <Link
                      href={`/blog/${post.slug}`}
                      className="text-primary-400 font-semibold hover:text-primary-500 inline-flex items-center"
                    >
                      Pročitaj više
                      <svg
                        className="w-4 h-4 ml-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </Link>
                  </div>
                </div>
              </motion.article>
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
