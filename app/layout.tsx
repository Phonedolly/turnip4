import type { Metadata } from "next";
import "./globals.css";

import { Geist_Mono } from "next/font/google";
import localFont from "next/font/local";

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
const pretendard = localFont({
  src: "../fonts/PretendardVariable.woff2",
  variable: "--font-pretendard",
});

const lineSeed = localFont({
  src: [
    {
      path: "../fonts/LineSeedKR-Th.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "../fonts/LineSeedKR-Rg.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../fonts/LineSeedKR-Bd.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-line-seed",
});
// const geist = Geist({
//   subsets: ["latin-ext"],
//   weight: "variable",
//   variable: "--font-geist",
//   fallback: ["SD November"],
// });

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
          // pretendard.variable,
          lineSeed.variable,
          // geist.variable,
          "font-lineSeed bg-background text-foreground",
        )}
      >
        <div
          className={cn(
            "mx-auto flex w-full flex-col items-center justify-center",
            "my-6 gap-y-2 px-5",
            "sm:my-8 sm:gap-y-4 sm:px-12",
            "max-w-screen-lg md:my-16 md:gap-y-3.5 md:px-20",
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
