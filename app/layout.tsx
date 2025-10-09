import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Anshuman Patek - Full Stack Developer",
  description: "Full Stack Developer building scalable systems that live and breathe in the cloud. Specializing in React, Node.js, Docker, Kubernetes, and AWS.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

