import React from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { marked } from "marked";
import DOMPurify from "dompurify";
import { blogs } from "../data/blogs";

const BlogDetail = () => {
  const { slug } = useParams();
  const blog = blogs.find((item) => item.slug === slug);

  if (!blog) {
    return (
      <main className="min-h-screen bg-white px-6 py-24 text-slate-900 dark:bg-slate-950 dark:text-white">
        <div className="mx-auto max-w-3xl">
          <h1 className="text-3xl font-bold">Blog not found</h1>
          <Link
            to="/blogs"
            className="mt-6 inline-block text-sm font-medium text-blue-600 dark:text-blue-400"
          >
            ← Back to blogs
          </Link>
        </div>
      </main>
    );
  }

  const html = DOMPurify.sanitize(marked.parse(blog.content));

  return (
    <main className="min-h-screen bg-white dark:bg-slate-950">
      <section className="mx-auto max-w-3xl px-6 pb-20 pt-32">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Link
            to="/blogs"
            className="text-sm font-medium text-slate-600 transition hover:text-slate-900 dark:text-slate-400 dark:hover:text-white"
          >
            ← Back to blogs
          </Link>
          <h1 className="mt-6 text-4xl font-bold text-slate-900 dark:text-white">
            {blog.title}
          </h1>
          <p className="mt-3 text-sm text-slate-600 dark:text-slate-400">
            {blog.date} · {blog.readTime}
          </p>
        </motion.div>

        <motion.article
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="prose prose-slate mt-10 max-w-none dark:prose-invert"
        >
          <div dangerouslySetInnerHTML={{ __html: html }} />
        </motion.article>
      </section>
    </main>
  );
};

export default BlogDetail;
