'use client';

import { SidebarTrigger } from '@/components/ui/sidebar';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { BookHeart } from 'lucide-react';

export function Header() {
  return (
    <header className="sticky top-0 z-10 flex h-16 items-center gap-4 border-b bg-background/80 backdrop-blur-sm px-4 md:px-6">
      <div className="md:hidden">
        <SidebarTrigger />
      </div>
      <Link href="/" className="flex items-center gap-2 text-lg font-semibold md:text-base">
        <BookHeart className="h-6 w-6 text-primary" />
        <span className="font-bold text-xl text-primary">Last Attempt</span>
      </Link>
      <div className="flex-1">
        {/* Additional header content can go here, e.g. search bar */}
      </div>
      {/* User profile / settings can go here */}
      {/* <Button variant="ghost" size="icon">
        <Settings className="h-5 w-5" />
      </Button> */}
    </header>
  );
}
