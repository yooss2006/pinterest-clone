import { cn } from '@/lib/utils';

export const navItemClasses = cn(
  'w-12 h-12 min-w-12 min-h-12 flex justify-center items-center rounded-lg relative mx-auto cursor-pointer',
  'duration-75 hover:bg-gray-100',
  'focus-visible:outline-blue-300 focus-visible:outline-3',
  'after:content-[attr(data-label)] after:absolute after:z-100 after:left-full after:text-nowrap after:ml-2',
  'after:bg-black after:text-white after:text-xs after:rounded-md after:px-2 after:py-1',
  'after:opacity-0 hover:after:opacity-100 after:transition-opacity after:duration-200'
);
