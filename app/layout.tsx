import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: [
    "latin",
  ],
  variable: "--font-inter",
});

const spaceGrotesk = Space_Grotesk({
  subsets: [
    "latin",
  ],
  variable: "--font-space-grotesk",
});

export const metadata: Metadata = {
  title: "TechFlow",
  description:
    "The next-generation developer knowledge hub. Ask questions, share solutions, explore curated discussions, and get instant AI-assisted guidance. Built to fix everything Stack Overflow gets wrong.",
  icons: {
    icon: "/images/site-logo.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${spaceGrotesk.variable}antialiased`}>{children}</body>
    </html>
  );
}
