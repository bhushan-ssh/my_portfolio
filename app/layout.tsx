import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});



export const metadata: Metadata = {
  title: "Bhushan Sonawane | IT Engineer & Full-Stack Developer",
  description:
    "Portfolio of an Information Technology Engineering student specializing in full-stack development, AI/ML, and building innovative digital solutions. Open to internship opportunities.",
  keywords: [
    "IT Engineer",
    "Full-Stack Developer",
    "React",
    "Next.js",
    "Python",
    "Machine Learning",
    "Portfolio",
  ],
  authors: [{ name: "Bhushan Sonwane" }],
  openGraph: {
    title: "Bhushan Sonwane | IT Engineer & Full-Stack Developer",
    description:
      "Portfolio of an Information Technology Engineering student specializing in full-stack development, AI/ML, and building innovative digital solutions.",
    type: "website",
  },
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
};

export const viewport: Viewport = {
  themeColor: "#ffffff",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-background">
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
        {process.env.NODE_ENV === "production" && <Analytics />}
      </body>
    </html>
  );
}
