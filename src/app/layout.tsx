import type { Metadata } from "next";
import { Inter } from "next/font/google";
// import { Analytics } from "@vercel/analytics/react";
// import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Bradley Hung | Software Engineer",
  description: "Full-stack software engineer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.className} min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50`}
      >
        {children}
        {/* <Analytics />
        <SpeedInsights /> */}
      </body>
    </html>
  );
}
