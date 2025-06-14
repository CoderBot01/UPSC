import { cn } from '@/lib/utils';
import type React from 'react';

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export function Container({ children, className, ...props }: ContainerProps) {
  return (
    <div className={cn('container mx-auto px-4 py-8 sm:px-6 lg:px-8', className)} {...props}>
      {children}
    </div>
  );
}
