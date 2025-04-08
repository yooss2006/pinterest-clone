import Link from 'next/link';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { cn } from '@/lib/utils';

export function ProfileLink() {
  return (
    <Link
      href="/profile"
      data-label="내 프로필"
      title="yoofh2006"
      className={cn(
        'relative flex h-12 w-12 cursor-pointer items-center justify-center rounded-md',
        'duration-75 hover:bg-gray-200',
        'after:absolute after:bottom-[-2.3rem] after:left-1/2 after:z-100 after:w-max after:-translate-x-1/2 after:content-[attr(data-label)]',
        'after:rounded-md after:bg-black after:px-2 after:py-1.5 after:text-xs after:text-white',
        'after:opacity-0 after:transition-opacity after:duration-200 hover:after:opacity-100'
      )}
    >
      <Avatar>
        <AvatarImage src="https://github.com/shadcn.png" />
        <AvatarFallback>User</AvatarFallback>
      </Avatar>
    </Link>
  );
}
