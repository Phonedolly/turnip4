import type { Metadata } from "next";
import "./globals.css";

import { Geist_Mono } from "next/font/google";

// import localFont from "next/font/local";
import Header from "@/components/header";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "stardue128",
  description: "정성을 다해 작성합니다",
};

const geistMono = Geist_Mono({
  subsets: ["latin-ext"],
  weight: "variable",
  variable: "--font-geist-mono",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body
        className={cn(
          `antialiased`,
          geistMono.variable,
          // monaspaceArgonVF.variable,
          // monaspaceNeonVF.variable,
          "font-sd-minburi",
          "h-full mx-auto max-w-screen-lg px-4 my-16",
          "bg-background"
        )}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
