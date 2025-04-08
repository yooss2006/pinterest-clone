'use client';

import { DialogContent, DialogOverlay, DialogTitle } from '@radix-ui/react-dialog';
import Image from 'next/image';

import { Dialog, DialogHeader } from '@/components/ui/dialog';
import { useSearchDialog } from '@/hooks/use-search-dialog';
import { cn } from '@/lib/utils';

const searchHistory = ['사람 일러스트 드로잉', '봄 코디', '인스타 피드', '빈티지 라벨', '감성사진'];

// 데이터 구조: 이미지와 레이블 포함
const popularSearches = [
  { image: '1.png', label: '남자 패션' },
  { image: '2.png', label: '빈티지 배경화면' },
  { image: '3.png', label: '포스터 디자인' },
  { image: '4.png', label: '감성사진' },
  { image: '5.png', label: '웹디자인' },
  { image: '6.png', label: '아이폰 배경화면 감성' },
  { image: '7.png', label: '감성 배경화면' },
  { image: '8.png', label: '아이폰 빈티지 배경화면' }
];

export function SearchDialog() {
  const { isOpen, close } = useSearchDialog();
  return (
    <Dialog open={isOpen} onOpenChange={close}>
      <DialogOverlay className="fixed inset-0 z-10 bg-black/30" />
      <DialogContent className="bg-background absolute top-20 z-20 w-[calc(100%-150px)] rounded-b-md px-8">
        <DialogHeader className="sr-only">
          <DialogTitle>검색</DialogTitle>
        </DialogHeader>
        <section className="mt-2 mb-6">
          <h2 className="mb-2 font-semibold">최근 검색 기록</h2>
          <ul className="flex flex-wrap gap-2">
            {searchHistory.map((history) => (
              <li
                key={history}
                className={cn(
                  'cursor-pointer rounded-xl bg-gray-100 px-4 py-1 text-sm transition-colors hover:bg-gray-200',
                  'after:ml-1 after:font-bold after:text-gray-400 after:content-["X"] hover:after:text-gray-600'
                )}
              >
                {history}
              </li>
            ))}
          </ul>
        </section>
        <section className="mb-6">
          <h2 className="mb-4 font-semibold">Pinterest에서 인기 있는 검색어</h2>
          <ul className="grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
            {popularSearches.map((search) => (
              <li
                key={search.image}
                className="group flex cursor-pointer items-center overflow-hidden rounded-xl bg-gray-100 transition-colors hover:bg-gray-200"
              >
                <div className="relative h-30 w-30 flex-shrink-0">
                  <Image
                    src={`/popular-image/${search.image}`}
                    alt={search.label}
                    fill
                    objectFit="cover"
                    className="object-cover"
                  />
                </div>
                <div className="flex-grow px-4 py-2">
                  <p className="text-sm font-semibold">{search.label}</p>
                </div>
              </li>
            ))}
          </ul>
        </section>
      </DialogContent>
    </Dialog>
  );
}
