import type { Metadata } from "next";
import "./globals.css";

import { Geist, Geist_Mono } from "next/font/google";
import localFont from "next/font/local";

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

const fourtyTwoDotSans = localFont({
  src: "../fonts/42dotSans-VariableFont_wght.woff2",
  variable: "--font-fourty-two-dot-sans",
  weight: "variable",
});

const geist = Geist({
  subsets: ["latin-ext"],
  weight: "variable",
  variable: "--font-geist",
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
          fourtyTwoDotSans.variable,
          geist.variable,
          "font-fourty-two-dot-sans bg-background text-foreground",
        )}
      >
        <div
          className={cn(
            "mx-auto flex w-full flex-col items-center justify-center",
            "my-6 gap-y-2 px-5",
            "sm:my-8 sm:gap-y-4 sm:px-16",
            "max-w-screen-lg md:my-16 md:gap-y-3.5 md:px-36",
            "selection:bg-bone-400 selection:text-foreground",
          )}
        >
          <Header />
          {children}
        </div>
      </body>
    </html>
  );
}
