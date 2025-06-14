'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  SidebarProvider,
  Sidebar,
  SidebarHeader,
  SidebarContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarInset,
  SidebarFooter,
  SidebarMenuSub,
  SidebarMenuSubItem,
  SidebarMenuSubButton,
} from '@/components/ui/sidebar';
import { Button } from '@/components/ui/button';
import { Header } from './Header';
import { navItems, type NavItem } from './SidebarNavItems';
import { BookHeart, ChevronDown, ChevronUp } from 'lucide-react';
import { Toaster } from '@/components/ui/toaster';
import { cn } from '@/lib/utils';

export function AppLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [openGroups, setOpenGroups] = useState<Record<string, boolean>>({});

  const toggleGroup = (label: string) => {
    setOpenGroups(prev => ({ ...prev, [label]: !prev[label] }));
  };
  
  const renderNavItems = (items: NavItem[], isSubMenu = false) => {
    return items.map((item) => {
      const isActive = item.href === '#' ? false : pathname.startsWith(item.href) && (item.href === '/' ? pathname === '/' : true);
      const Comp = isSubMenu ? SidebarMenuSubButton : SidebarMenuButton;

      if (item.isGroup && item.subItems) {
        const isGroupOpen = openGroups[item.label] ?? false;
        return (
          <SidebarMenuItem key={item.label}>
            <SidebarMenuButton
              onClick={() => toggleGroup(item.label)}
              className="justify-between"
              aria-expanded={isGroupOpen}
            >
              <div className="flex items-center gap-2">
                <item.icon />
                <span>{item.label}</span>
              </div>
              {isGroupOpen ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
            </SidebarMenuButton>
            {isGroupOpen && (
              <SidebarMenuSub>
                {item.subItems.map(subItem => (
                   <SidebarMenuSubItem key={subItem.label}>
                     <Link href={subItem.href} passHref legacyBehavior>
                       <SidebarMenuSubButton isActive={pathname.startsWith(subItem.href)}>
                         <subItem.icon className="mr-2 h-4 w-4" />
                         <span>{subItem.label}</span>
                       </SidebarMenuSubButton>
                     </Link>
                   </SidebarMenuSubItem>
                ))}
              </SidebarMenuSub>
            )}
          </SidebarMenuItem>
        );
      }

      return (
        <SidebarMenuItem key={item.label}>
          <Link href={item.href} passHref legacyBehavior>
            <Comp isActive={isActive} tooltip={item.label}>
              <item.icon />
              <span>{item.label}</span>
            </Comp>
          </Link>
        </SidebarMenuItem>
      );
    });
  };


  return (
    <SidebarProvider defaultOpen >
      <Sidebar 
        variant="sidebar" 
        collapsible="icon" 
        className={cn(
          "border-r border-sidebar-border",
          "bg-sidebar text-sidebar-foreground" 
        )}
      >
        <SidebarHeader className="p-4 border-b border-sidebar-border">
          <Link href="/" className="flex items-center gap-2 text-lg font-semibold">
             <BookHeart className="h-7 w-7 text-sidebar-primary" />
             <span className="font-bold text-xl text-sidebar-primary group-data-[collapsible=icon]:hidden">Last Attempt</span>
          </Link>
        </SidebarHeader>
        <SidebarContent className="p-2">
          <SidebarMenu>
            {renderNavItems(navItems)}
          </SidebarMenu>
        </SidebarContent>
        <SidebarFooter className="p-4 mt-auto border-t border-sidebar-border">
          <p className="text-xs text-sidebar-foreground/70 group-data-[collapsible=icon]:hidden">© {new Date().getFullYear()} Last Attempt</p>
        </SidebarFooter>
      </Sidebar>
      <SidebarInset className="flex flex-col">
        <Header />
        <main className="flex-1 overflow-y-auto p-4 md:p-6 lg:p-8">
          {children}
        </main>
        <Toaster />
      </SidebarInset>
    </SidebarProvider>
  );
}
