import React from "react";
import { Link } from "react-router-dom";

const BlogCard = ({ blog }) => {
  return (
    <article className="group">
      <Link to={`/blogs/${blog.slug}`}>
        <h3 className="text-xl font-bold text-slate-900 transition group-hover:text-blue-600 dark:text-white dark:group-hover:text-blue-400">
          {blog.title}
        </h3>
        <p className="mt-3 text-sm text-slate-600 dark:text-slate-400">
          {blog.summary}
        </p>
        <p className="mt-4 text-xs text-slate-500 dark:text-slate-500">
          {blog.date} · {blog.readTime}
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          {blog.tags.map((tag) => (
            <span
              key={tag}
              className="rounded bg-slate-100 px-2 py-1 text-xs text-slate-600 dark:bg-slate-800 dark:text-slate-400"
            >
              {tag}
            </span>
          ))}
        </div>
      </Link>
    </article>
  );
};

export default BlogCard;
