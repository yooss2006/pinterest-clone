'use client';

import { DialogContent, DialogOverlay, DialogTitle } from '@radix-ui/react-dialog';

import { Dialog, DialogHeader } from '@/components/ui/dialog';
import { useSearchDialog } from '@/hooks/use-search-dialog';

export function SearchDialog() {
  const { isOpen, close } = useSearchDialog();
  return (
    <Dialog open={isOpen} onOpenChange={close}>
      <DialogOverlay className="fixed inset-0 z-10 bg-black/30" />
      <DialogContent className="bg-background absolute top-20 z-20 w-[calc(100%-150px)]">
        <DialogHeader className="sr-only">
          <DialogTitle>검색</DialogTitle>
        </DialogHeader>
        <section>
          <h2>최근 검색 기록</h2>
          <ul>
            <li>사람 일러스트 드로잉</li>
            <li>봄 코디</li>
            <li>인스타 피드</li>
            <li>빈티지 라벨</li>
            <li>감성사진</li>
          </ul>
        </section>
      </DialogContent>
    </Dialog>
  );
}
