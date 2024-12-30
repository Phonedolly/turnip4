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
          "font-primary bg-background text-foreground"
        )}
      >
        <div
          className={cn(
            "flex flex-col justify-center items-center",
            "my-4 px-5 mx-auto gap-y-2",
            "sm:px-12 sm:my-8 sm:gap-y-4",
            "md:px-12 md:my-12 max-w-screen-lg md:gap-y-3.5"
            // "lg:mx-12 lg:my-12"
          )}
        >
          <Header />
          {children}
        </div>
      </body>
    </html>
  );
}
