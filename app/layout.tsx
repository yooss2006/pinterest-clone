import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/header/header";
import { SearchForm } from "@/components/layout/search/search-form";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Pinterest Clone",
  description: "Pinterest Clone",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="h-full flex">
          <Header />
          <main className="w-full overflow-y-scroll">
            <section aria-label="검색 및 프로필" className="px-5 py-4">
              <SearchForm />
            </section>
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
