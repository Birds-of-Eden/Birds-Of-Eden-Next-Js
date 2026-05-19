"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Calendar, BookOpen } from "lucide-react";
import { format } from "date-fns";
import { processBlogSummary } from "./summaryUtils";

interface RecentBlog {
  id: number;
  slug: string;
  title: string;
  summary: string;
  date: string | Date;
  image?: string;
}

const RecentBlogSkeleton = () => (
  <div className="flex flex-col gap-3 p-4 rounded-lg border border-border bg-card animate-pulse">
    <div className="h-32 w-full rounded-md bg-muted" />
    <div className="h-4 w-3/4 rounded bg-muted" />
    <div className="h-3 w-1/2 rounded bg-muted" />
  </div>
);

export default function AdminRecentBlogs() {
  const [recentBlogs, setRecentBlogs] = useState<RecentBlog[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRecentBlogs = async () => {
      try {
        const response = await fetch("/api/blog?limit=4&sort=latest");
        if (!response.ok) throw new Error("Failed to fetch recent blogs");

        const data = await response.json();
        setRecentBlogs(data.blogs || data);
      } catch (error) {
        console.error("Error fetching recent blogs:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchRecentBlogs();
  }, []);

  if (loading) {
    return (
      <div className="rounded-2xl border border-border bg-card shadow-sm overflow-hidden">
        {/* Header */}
        <div className="flex items-center gap-3 px-6 py-5 border-b border-border bg-muted/40">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/15">
            <BookOpen className="h-5 w-5 text-primary" />
          </div>
          <h3 className="text-base font-semibold tracking-wide text-primary">
            Recent Articles
          </h3>
        </div>

        {/* Skeleton Content */}
        <div className="px-5 py-4 space-y-4">
          {[1, 2, 3].map((i) => (
            <RecentBlogSkeleton key={i} />
          ))}
        </div>
      </div>
    );
  }

  if (recentBlogs.length === 0) {
    return null;
  }

  return (
    <div className="rounded-2xl border border-border bg-card shadow-sm overflow-hidden">
      {/* Header */}
      <div className="p-5 border-b border-border bg-muted/40 flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/15">
          <BookOpen className="h-5 w-5 text-primary" />
        </div>
        <h3 className="text-lg font-semibold text-primary">Recent Articles</h3>
      </div>

      {/* Content */}
      <div className="p-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {recentBlogs.map((blog, index) => (
            <Link
              key={blog.id}
              href={`/blog/${blog.slug}`}
              className="group block"
            >
              <article className="relative flex flex-col gap-3 p-4 rounded-lg border border-border bg-card hover:bg-accent/50 hover:shadow-md transition-all duration-300">
                {/* New badge (only first item) */}
                {index === 0 && (
                  <span className="absolute top-3 right-3 text-[10px] uppercase tracking-widest px-2 py-1 rounded-full bg-primary/20 text-primary-foreground">
                    New
                  </span>
                )}

                {/* Image */}
                {blog.image && (
                  <div className="relative w-full h-32 rounded-md overflow-hidden bg-muted">
                    <img
                      src={blog.image}
                      alt={blog.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                )}

                {/* Text */}
                <div className="space-y-2 flex-1">
                  <h4 className="font-semibold text-sm leading-snug text-foreground group-hover:text-primary transition-colors line-clamp-2">
                    {blog.title}
                  </h4>

                  <p className="text-xs text-muted-foreground line-clamp-2 leading-relaxed">
                    {processBlogSummary(blog.summary, 120)}
                  </p>

                  <div className="flex items-center gap-2 text-xs text-muted-foreground pt-1">
                    <Calendar className="h-3 w-3 text-primary" />
                    <time dateTime={new Date(blog.date).toISOString()}>
                      {format(new Date(blog.date), "MMM d, yyyy")}
                    </time>
                  </div>
                </div>

                {/* Read link */}
                <div className="flex items-center text-xs font-medium text-primary gap-1">
                  <span>Read article</span>
                  <svg
                    className="h-3 w-3 transform group-hover:translate-x-1 transition-transform"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>
              </article>
            </Link>
          ))}
        </div>

        {/* View all */}
        <Link
          href="admin/blog"
          className="mt-6 block text-center py-3 rounded-lg border border-dashed border-primary/30 bg-primary/5 hover:bg-primary/10 text-sm font-medium text-primary transition-all"
        >
          View all articles →
        </Link>
      </div>
    </div>
  );
}
