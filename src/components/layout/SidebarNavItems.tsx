
import type { LucideIcon } from 'lucide-react';
import { LayoutDashboard, BookOpen, Activity, Library, Target, Lightbulb, Brain, MessageSquareQuote, ScrollText, Rss, Mail, FileQuestion } from 'lucide-react';

export interface NavItem {
  href: string;
  label: string;
  icon: LucideIcon;
  isChained?: boolean;
  subItems?: NavItem[];
  isGroup?: boolean;
}

export const navItems: NavItem[] = [
  { href: '/', label: 'Dashboard', icon: LayoutDashboard },
  { href: '/syllabus', label: 'Syllabus', icon: BookOpen },
  { href: '/progress', label: 'Progress', icon: Activity },
  { href: '/resources', label: 'Resource Library', icon: Library },
  { href: '/goals', label: 'Goal Setting', icon: Target },
  {
    href: '#',
    label: 'AI Tools',
    icon: Brain,
    isGroup: true,
    subItems: [
      { href: '/ai-tools/study-material', label: 'Study Material', icon: Lightbulb, isChained: true },
      { href: '/ai-tools/practice-questions', label: 'Practice Questions', icon: Brain, isChained: true },
      { href: '/ai-tools/qa', label: 'Q&A Assistant', icon: MessageSquareQuote, isChained: true },
      { href: '/ai-tools/text-summarizer', label: 'Text Summarizer', icon: ScrollText, isChained: true },
      { href: '/ai-tools/document-question-generator', label: 'Doc Q-Generator', icon: FileQuestion, isChained: true },
    ]
  },
  { href: '/blog', label: 'Blog', icon: Rss },
  { href: '/contact', label: 'Contact Us', icon: Mail },
];
