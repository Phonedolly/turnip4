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
          "font-sd-minburi",
          "bg-background",
          "text-foreground"
        )}
      >
        <div
          className={cn(
            "flex flex-col justify-center items-center",
            "my-6 px-5",
            "sm:px-12 sm:my-12",
            "md:px-16 md:my-16 md:max-w-screen-lg"
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
