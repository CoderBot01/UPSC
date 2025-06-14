'use client';

import { cn } from '@/lib/utils';

interface LoadingDotsProps {
  className?: string;
  dotClassName?: string;
}

export function LoadingDots({ className, dotClassName }: LoadingDotsProps) {
  return (
    <div className={cn('flex space-x-1', className)}>
      <span className={cn('h-2 w-2 animate-pulse rounded-full bg-primary delay-0', dotClassName)} />
      <span className={cn('h-2 w-2 animate-pulse rounded-full bg-primary delay-150', dotClassName)} />
      <span className={cn('h-2 w-2 animate-pulse rounded-full bg-primary delay-300', dotClassName)} />
    </div>
  );
}
