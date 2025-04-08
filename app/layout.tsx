import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import { Suspense } from 'react';

import { Header } from '@/components/layout/header/header';
import { SearchProfileBar } from '@/components/layout/search-profile-bar/search-profile-bar';

import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin']
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin']
});

export const metadata: Metadata = {
  title: 'Pinterest Clone',
  description: 'Pinterest Clone'
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <div className="flex h-full">
          <Header />
          <main className="w-full overflow-y-scroll">
            <section aria-label="검색 및 프로필">
              <Suspense fallback={<div>Loading...</div>}>
                <SearchProfileBar />
              </Suspense>
            </section>
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
