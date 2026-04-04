import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "Anshuman Patek — Portfolio",
  description:
    "A minimalist developer portfolio for Anshuman Patek, inspired by modern design trends.",
  icons: {
    icon: [{ url: "/favicon.png", type: "image/png" }],
    apple: "/favicon.png",
  },
  openGraph: {
    title: "Anshuman Patek — Portfolio",
    description:
      "A minimalist developer portfolio for Anshuman Patek, inspired by modern design trends.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
