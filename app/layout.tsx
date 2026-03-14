import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

<meta name="viewport" content="width=device-width, initial-scale=1.0" />

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Alisha Bukhari | Portfolio",
  description: "AI Software Engineer & Full-Stack Developer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
      <html lang="en">
        <body className="bg-[#0b0f19] text-white antialiased">
          {children}
        </body>
      </html>
  );
}