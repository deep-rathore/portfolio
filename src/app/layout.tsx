import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/layout/SmoothScroll";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://deeprathore.dev"), // Add actual domain here
  title: {
    default: "Gagandeep Singh Rathore | Full-Stack Developer",
    template: "%s | Gagandeep Singh Rathore",
  },
  description: "I design and build fast, beautiful web apps — from local Punjab businesses to global freelance clients. Specialized in MERN, Django, and Next.js.",
  keywords: ["Gagandeep Singh Rathore", "Deep Rathore", "Full-Stack Developer", "MERN Stack", "Django Developer", "Next.js", "Freelance Developer Punjab", "React Developer"],
  authors: [{ name: "Gagandeep Singh Rathore" }],
  creator: "Gagandeep Singh Rathore",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://deeprathore.dev",
    title: "Gagandeep Singh Rathore | Full-Stack Developer",
    description: "Building real-world web experiences — clean code, bold design.",
    siteName: "Gagandeep Singh Rathore Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Gagandeep Singh Rathore - Full-Stack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Gagandeep Singh Rathore | Full-Stack Developer",
    description: "Building real-world web experiences — clean code, bold design.",
    creator: "@deeprathore",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} bg-[#050505] text-white antialiased selection:bg-blue-500/30 selection:text-white`}>
        <SmoothScroll>
          {/* <Navbar /> */}
          <main className="relative flex flex-col min-h-screen">
            {children}
          </main>
          {/* <Footer /> */}
        </SmoothScroll>
      </body>
    </html>
  );
}
