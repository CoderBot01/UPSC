import type React from 'react';
import { cn } from '@/lib/utils';

interface PageHeaderProps {
  title: string;
  description?: string;
  className?: string;
  children?: React.ReactNode; // For actions like buttons
}

export function PageHeader({ title, description, className, children }: PageHeaderProps) {
  return (
    <div className={cn('mb-6 md:mb-8 pb-4 border-b', className)}>
      <div className="flex flex-col md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-foreground md:text-3xl">
            {title}
          </h1>
          {description && (
            <p className="mt-1 text-muted-foreground">{description}</p>
          )}
        </div>
        {children && <div className="mt-4 md:mt-0">{children}</div>}
      </div>
    </div>
  );
}
