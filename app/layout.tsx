import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Walid Rabei | Creative Frontend Developer",
  description:
    "Premium portfolio of Walid Rabei, a UI/UX-focused creative frontend developer building interactive web experiences, gamified interfaces, and cinematic digital products.",
  keywords: [
    "Walid Rabei",
    "Creative Frontend Developer",
    "UI UX Designer",
    "Interactive Web",
    "React Developer",
    "Next.js Portfolio"
  ],
  authors: [{ name: "Walid Rabei" }],
  creator: "Walid Rabei",
  openGraph: {
    title: "Walid Rabei | Creative Frontend Developer",
    description: "Immersive interfaces, gamified web experiences, and premium UI/UX product design.",
    type: "website",
    locale: "en_US",
    siteName: "Walid Rabei Portfolio"
  },
  robots: {
    index: true,
    follow: true
  }
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#05060b"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body>{children}</body>
    </html>
  );
}
