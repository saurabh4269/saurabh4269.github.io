import { allPosts } from "content-collections";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { BlogListing } from "@/components/blog-listing";

const PAGE_SIZE = 10;

export const metadata: Metadata = {
  title: "Blog",
  description: "Thoughts on software development, life, and more.",
  openGraph: {
    title: "Blog",
    description: "Thoughts on software development, life, and more.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog",
    description: "Thoughts on software development, life, and more.",
  },
};

export async function generateStaticParams() {
  const totalPages = Math.ceil(allPosts.length / PAGE_SIZE);
  // Pages 2+ are served here; page 1 lives at /blog.
  // Always return at least one entry so output:export doesn't reject the route.
  const pages = Array.from({ length: Math.max(0, totalPages - 1) }, (_, i) => ({
    page: String(i + 2),
  }));
  return pages.length > 0 ? pages : [{ page: "2" }];
}

export default async function BlogPageN({
  params,
}: {
  params: Promise<{ page: string }>;
}) {
  const { page } = await params;
  const totalPages = Math.ceil(allPosts.length / PAGE_SIZE);
  const pageNum = parseInt(page, 10);

  // Redirect numeric page 1 — it's served by /blog
  if (isNaN(pageNum) || pageNum < 2 || pageNum > totalPages) {
    notFound();
  }

  return <BlogListing pageParam={page} />;
}
