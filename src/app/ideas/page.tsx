import BlurFade from "@/components/magicui/blur-fade";
import { resume } from "@/data/resume";
import type { Metadata } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://saurabh4269.github.io";

export const metadata: Metadata = {
  title: "Ideas",
  description: `A public scratchpad of ${resume.personal.name}'s half-baked ideas, experiments, and speculative thoughts on AI, startups, and technology.`,
  keywords: [
    "Saurabh Gupta ideas",
    "AI startup ideas",
    "IIT Bombay founder",
    "speculative technology",
    "building in public",
  ],
  authors: [{ name: resume.personal.name, url: siteUrl }],
  alternates: {
    canonical: `${siteUrl}/ideas`,
  },
  openGraph: {
    title: `Ideas | ${resume.personal.name}`,
    description: "A collection of thoughts, experiments, and half-baked ideas.",
    url: `${siteUrl}/ideas`,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `Ideas | ${resume.personal.name}`,
    description: "A collection of thoughts, experiments, and half-baked ideas.",
    creator: "@saurabh42690",
  },
};

const BLUR_FADE_DELAY = 0.04;

export default async function IdeasPage() {
  return (
    <section id="ideas">
      <BlurFade delay={BLUR_FADE_DELAY}>
        <h1 className="text-2xl font-semibold tracking-tight mb-2">
          Ideas
        </h1>
        <p className="text-sm text-muted-foreground mb-8">
          A collection of thoughts, experiments, and half-baked ideas.
        </p>
      </BlurFade>
    </section>
  );
}
