import type { Metadata } from "next";
import "./globals.css";

import { Geist, Geist_Mono } from "next/font/google";

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

const geist = Geist({
  subsets: ["latin-ext"],
  weight: "variable",
  variable: "--font-geist",
  fallback: ["Sandol GothicNeoUni TTF"],
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
          geist.variable,
          "bg-background font-geist text-foreground",
        )}
      >
        <div
          className={cn(
            "flex w-full mx-auto flex-col items-center justify-center",
            "my-6 gap-y-2 px-5",
            "sm:my-8 sm:gap-y-4 sm:px-12",
            "max-w-screen-lg md:my-16 md:gap-y-3.5 md:px-12",
            "selection:bg-bone-500 selection:text-foreground",
          )}
        >
          <Header />
          {children}
        </div>
      </body>
    </html>
  );
}
