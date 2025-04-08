'use client';

import { ChevronDown, Search } from 'lucide-react';
import { usePathname } from 'next/navigation';
import React, { useState } from 'react';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useSearchDialog } from '@/hooks/use-search-dialog';
import { cn } from '@/lib/utils';

const hoverBgClass = 'bg-gray-200';

export function SearchForm() {
  const [isHovered, setIsHovered] = useState(false);
  const pathname = usePathname();
  const { isOpen, open } = useSearchDialog();

  const isProfilePage = pathname === '/profile';

  const handleHover = (hover: boolean) => () => setIsHovered(hover);

  const handleClick = () => {
    if (!isOpen) {
      open();
    }
  };

  return (
    <form className="w-full">
      <div
        className={cn('flex h-12 items-center rounded-xl bg-gray-100', isHovered && hoverBgClass)}
      >
        {/* 왼쪽 아이콘 영역 */}
        <div
          className={cn('flex h-full items-center pl-4 transition-colors duration-150')}
          onMouseEnter={handleHover(true)}
          onMouseLeave={handleHover(false)}
        >
          <Search strokeWidth={4} size={16} className="text-gray-500" />
        </div>

        {/* 인풋 영역 */}
        <Input
          placeholder={isProfilePage ? '내 핀 검색' : '검색'}
          className={cn(
            'h-full w-full rounded-none border-none shadow-none',
            'placeholder:text-base placeholder:text-gray-900',
            'focus:ring-0 focus:outline-none focus-visible:ring-0',
            isProfilePage && 'rounded-r-none'
          )}
          onMouseEnter={handleHover(true)}
          onMouseLeave={handleHover(false)}
          onClick={handleClick}
          readOnly
        />

        {/* 버튼을 감싸는 영역 */}
        {isProfilePage && (
          <div
            className={cn(
              'relative flex h-full items-center',
              'after:absolute after:-left-1 after:h-7 after:w-0.5 after:bg-gray-300'
            )}
          >
            <Button
              variant="ghost"
              className={cn(
                'ml-1 h-full cursor-pointer rounded-xl px-8 font-bold',
                'hover:bg-gray-300'
              )}
              type="button"
            >
              내 핀 <ChevronDown />
            </Button>
          </div>
        )}
      </div>
    </form>
  );
}
