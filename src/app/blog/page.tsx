import { resume } from "@/data/resume";
import type { Metadata } from "next";
import { BlogListing } from "@/components/blog-listing";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://saurabh4269.github.io";

export const metadata: Metadata = {
  title: "Blog",
  description: `Writing by ${resume.personal.name} — technical deep-dives, startup learnings, and ideas on AI, privacy, cryptography, and building in public.`,
  keywords: [
    "Saurabh Gupta blog",
    "IIT Bombay tech blog",
    "zero knowledge proofs",
    "agentic AI writing",
    "privacy engineering blog",
    "post-quantum cryptography",
    "startup founder blog India",
  ],
  authors: [{ name: resume.personal.name, url: siteUrl }],
  alternates: {
    canonical: `${siteUrl}/blog`,
  },
  openGraph: {
    title: `Blog | ${resume.personal.name}`,
    description: `Writing by ${resume.personal.name} on AI, privacy, cryptography, and building in public.`,
    url: `${siteUrl}/blog`,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `Blog | ${resume.personal.name}`,
    description: `Writing by ${resume.personal.name} on AI, privacy, cryptography, and building in public.`,
    creator: "@saurabh42690",
  },
};

export default function BlogPage() {
  return <BlogListing pageParam="1" />;
}
