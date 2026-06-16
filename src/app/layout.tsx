import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import CustomCursor from "@/components/CustomCursor";
import SmoothScroll from "@/components/SmoothScroll";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://harshvardhan-portfolio-two.vercel.app"),
  title: "Harshvardhan Soni — Backend Engineer | Java · Spring Boot · Auth Systems · AI",
  description:
    "Backend Software Engineer specializing in authentication systems (LDAP, NTLM, SSO), distributed systems, and AI-powered developer tools. Open to SDE-2 backend roles at top tech companies.",
  keywords: [
    "Backend Engineer", "Software Engineer", "Java Developer", "Spring Boot",
    "Authentication Systems", "LDAP", "NTLM", "SSO", "System Design",
    "AI Engineer", "Full Stack Developer", "Harshvardhan Soni", "miniOrange",
  ],
  authors: [{ name: "Harshvardhan Soni", url: "https://linkedin.com/in/harshvardhansonihv" }],
  creator: "Harshvardhan Soni",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://harshvardhan-portfolio-two.vercel.app",
    title: "Harshvardhan Soni — Backend Engineer",
    description: "Building enterprise-grade authentication systems and AI-powered developer tools.",
    siteName: "Harshvardhan Soni Portfolio",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Harshvardhan Soni — Backend Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Harshvardhan Soni — Backend Engineer",
    description: "Backend Engineer specializing in authentication, distributed systems, and AI tools.",
    images: ["/opengraph-image"],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#030308] text-[#e8eaf0]">
        <CustomCursor />
        <SmoothScroll>
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
