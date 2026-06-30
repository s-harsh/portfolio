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
  title: "Harshvardhan Soni — Backend Software Engineer | Pune | Java · Auth Systems · AI",
  description:
    "Harshvardhan Soni — Backend Software Engineer in Pune, India. 2+ years shipping enterprise authentication systems (LDAP, NTLM, OAuth 2.0, SAML), privacy compliance platforms, and AI-powered tooling. Open to SDE-1 & SDE-2 backend roles at top tech companies.",
  keywords: [
    "Harshvardhan Soni", "Software Engineer Pune", "SDE Pune", "Backend Engineer Pune",
    "Java Developer Pune", "Backend Engineer", "Software Engineer", "Java Developer",
    "Spring Boot", "Authentication Systems", "LDAP", "NTLM", "OAuth 2.0", "SAML",
    "IAM Engineer", "Identity Access Management", "System Design", "AI Engineer",
    "Privacy Compliance", "GDPR", "miniOrange", "Harshvardhan",
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
