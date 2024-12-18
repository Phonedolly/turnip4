import type { Metadata } from "next";
import "./globals.css";

import localFont from "next/font/local";

import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "stardue128",
  description: "정성을 다해 작성합니다.",
};

const monaspaceNeon = localFont({
  src: "../fonts/MonaspaceNeonVarVF[wght,wdth,slnt].woff2",
  variable: "--font-monaspace-neon",
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
          monaspaceNeon.variable,
          "font-minburi-space3",
          "h-full w-full",
          "bg-santa-fe-100"
        )}
      >
        {children}
      </body>
    </html>
  );
}
