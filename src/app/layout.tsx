import Navbar from "@/components/navbar";
import { ThemeProvider } from "@/components/theme-provider";
import { TooltipProvider } from "@/components/ui/tooltip";
import { resume } from "@/data/resume";
import { cn } from "@/lib/utils";
import { withBasePath } from "@/lib/basePath";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { FlickeringGrid } from "@/components/magicui/flickering-grid";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://example.com";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["400", "500", "600", "700"],
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-mono",
});

const ogImagePath = withBasePath("/og.png");

const personJsonLd = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "Person",
  name: resume.personal.name,
  url: siteUrl,
  image: `${siteUrl}${withBasePath(resume.personal.avatar)}`,
  sameAs: [
    "https://github.com/saurabh4269",
    "https://www.linkedin.com/in/saurabhgupta0342/",
    "https://x.com/saurabh42690",
  ],
  jobTitle: "Co-Founder & Software Engineer",
  worksFor: {
    "@type": "Organization",
    name: "Heisenbug",
    url: "https://www.heisenbug.ai/",
  },
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "Indian Institute of Technology, Bombay",
    url: "https://www.iitb.ac.in/",
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Mumbai",
    addressRegion: "Maharashtra",
    addressCountry: "IN",
  },
  knowsAbout: [
    "Agentic AI",
    "Privacy Engineering",
    "Post-Quantum Cryptography",
    "Autonomous Systems",
    "Python",
    "TypeScript",
    "Next.js",
    "Robotics",
    "DPDP Compliance",
  ],
}).replace(/</g, "\\u003c");

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: resume.personal.name,
    template: `%s | ${resume.personal.name}`,
  },
  description: resume.personal.description,
  keywords: [
    "Saurabh Gupta",
    "Saurabh Gupta IIT Bombay",
    "Heisenbug",
    "DPDP compliance startup",
    "agentic AI",
    "privacy engineering",
    "post-quantum cryptography",
    "GSoC 2026 OWASP",
    "autonomous UAV",
    "software engineer Mumbai",
    "IIT Bombay student",
    "co-founder India",
    "zero-knowledge proofs",
  ],
  authors: [{ name: resume.personal.name, url: siteUrl }],
  creator: resume.personal.name,
  publisher: resume.personal.name,
  alternates: {
    canonical: siteUrl,
  },
  manifest: "/manifest.json",
  openGraph: {
    title: `${resume.personal.name}`,
    description: resume.personal.description,
    url: siteUrl,
    siteName: `${resume.personal.name}`,
    locale: "en_US",
    type: "website",
    images: [
      {
        url: ogImagePath,
        width: 1200,
        height: 630,
        alt: resume.personal.name,
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    title: `${resume.personal.name}`,
    card: "summary_large_image",
    creator: "@saurabh42690",
    site: "@saurabh42690",
    images: [ogImagePath],
  },
};

export { personJsonLd };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{ __html: personJsonLd }}
        />
      </head>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased relative",
          geist.variable,
          geistMono.variable
        )}
      >
        <ThemeProvider attribute="class" defaultTheme="light">
          <TooltipProvider delayDuration={0}>
            <div className="absolute inset-0 top-0 left-0 right-0 h-[100px] overflow-hidden z-0">
              <FlickeringGrid
                className="h-full w-full"
                squareSize={2}
                gridGap={2}
                style={{
                  maskImage: "linear-gradient(to bottom, black, transparent)",
                  WebkitMaskImage: "linear-gradient(to bottom, black, transparent)",
                }}
              />
            </div>
            <div className="relative z-10 max-w-2xl mx-auto py-12 pb-24 sm:py-24 px-6">
              {children}
            </div>
            <Navbar />
          </TooltipProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
