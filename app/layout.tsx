import type { Metadata } from "next";
import "./globals.css";

import { Inconsolata, Roboto } from "next/font/google";
import localFont from "next/font/local";

import Header from "@/components/header";
import GoogleAnalytics from "@/components/google-analytics";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "stardue128",
  description: "정성을 다해 작성합니다",
};

const roboto = Roboto({
  subsets: ["latin-ext"],
  weight: ["400", "500", "700"],
  variable: "--font-roboto",
});

const pretendard = localFont({
  src: "../fonts/PretendardVariable.woff2",
  variable: "--font-pretendard",
  weight: "variable",
});

const inconsolata = Inconsolata({
  subsets: ["latin-ext"],
  weight: "variable",
  variable: "--font-inconsolata",
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
          roboto.variable,
          pretendard.variable,
          inconsolata.variable,
          "font-roboto bg-background text-foreground",
        )}
      >
        <div
          className={cn(
            "mx-auto flex w-full flex-col items-center justify-center",
            "my-6 gap-y-2 px-5",
            "sm:my-8 sm:gap-y-4 sm:px-16",
            "max-w-screen-lg md:my-16 md:gap-y-3.5 md:px-36",
            "selection:bg-indigo-600 selection:text-white",
          )}
        >
          <Header />
          {children}
        </div>
        <GoogleAnalytics GA_MEASUREMENT_ID={process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || ''} />
      </body>
    </html>
  );
}
