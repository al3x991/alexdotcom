"use client";

import QRC from "@/components/QRC/QRC";
import Header from "@/components/Header";
import { JetBrains_Mono } from "@next/font/google";
import ScrollToTop from "@/components/ScrollToTop";
import ScrollUp from "@/components/Common/ScrollUp";
import "../styles/index.css";

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-jetbrainsMono",
});
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en">
      <body className={`${jetbrainsMono.variable}  lg:overflow-y-hidden`}>
        <Providers>
          <Header />
          <ScrollUp />
          {children}
          <QRC />
          <ScrollToTop />
        </Providers>
      </body>
    </html>
  );
}

import { Providers } from "./providers";
