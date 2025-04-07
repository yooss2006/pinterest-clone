'use client';

import { ChevronDown, Search } from 'lucide-react';
import { usePathname } from 'next/navigation';
import React, { useState } from 'react'; // useState 추가

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useSearchDialog } from '@/hooks/use-search-dialog';
import { cn } from '@/lib/utils';
const hoverBgClass = 'bg-gray-200';

export function SearchForm() {
  const [isHovered, setIsHovered] = useState(false);
  const pathname = usePathname();
  const { open } = useSearchDialog();

  const handleHover = (hover: boolean) => () => setIsHovered(hover);

  return (
    <form>
      <div className="flex h-12 items-center">
        {/* 왼쪽 아이콘 영역 */}
        <div
          className={cn(
            'flex h-full items-center rounded-l-xl bg-gray-100 pl-4 transition-colors duration-150',
            isHovered && hoverBgClass
          )}
          onMouseEnter={handleHover(true)}
          onMouseLeave={handleHover(false)}
        >
          <Search strokeWidth={4} size={16} className="text-gray-500" />
        </div>

        {/* 인풋 영역 */}
        <Input
          placeholder="내 핀 검색"
          className={cn(
            'h-full w-full rounded-none rounded-r-xl border-none bg-gray-100 shadow-none transition-colors duration-150',
            'placeholder:text-base placeholder:text-gray-900',
            'focus:ring-0 focus:outline-none focus-visible:ring-0',
            isHovered && hoverBgClass,
            pathname === '/profile' && 'rounded-r-none'
          )}
          onMouseEnter={handleHover(true)}
          onMouseLeave={handleHover(false)}
          onClick={open}
        />

        {/* 버튼을 감싸는 영역 */}
        {pathname === '/profile' && (
          <div
            className={cn(
              'relative flex h-full items-center rounded-r-xl bg-gray-100 transition-colors duration-150',
              'after:absolute after:-left-1 after:h-7 after:w-0.5 after:bg-gray-300',
              isHovered && hoverBgClass
            )}
          >
            <Button
              variant="ghost"
              className={cn(
                'ml-1 h-full cursor-pointer rounded-r-lg px-8 font-bold',
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
