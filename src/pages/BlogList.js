import React from "react";
import { motion } from "framer-motion";
import BlogCard from "../components/BlogCard";
import { blogs } from "../data/blogs";

const BlogList = () => {
  return (
    <main className="min-h-screen bg-white dark:bg-slate-950">
      <section className="mx-auto max-w-7xl px-6 pb-12 pt-32">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl"
        >
          <h1 className="text-4xl font-bold text-slate-900 dark:text-white md:text-5xl">
            Blog
          </h1>
          <p className="mt-4 text-base text-slate-600 dark:text-slate-400">
            Articles on product thinking, UI systems, and engineering craft.
          </p>
        </motion.div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-20">
        <div className="grid gap-8 md:grid-cols-2">
          {blogs.map((blog, index) => (
            <motion.div
              key={blog.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <BlogCard blog={blog} />
            </motion.div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default BlogList;
