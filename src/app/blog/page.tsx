
import { PageHeader } from '@/components/shared/PageHeader';
import { BlogPostItem } from './components/BlogPostItem';
import type { BlogPost } from '@/types';
import { Rss } from 'lucide-react';

// Mock data for blog posts
const mockBlogPosts: BlogPost[] = [
  {
    id: '1',
    slug: 'upsc-preparation-strategy-2025',
    title: 'Comprehensive UPSC Preparation Strategy for 2025 Aspirants',
    author: 'Dr. IAS Expert',
    date: '2024-07-28T10:00:00Z',
    excerpt: 'A detailed guide on how to approach the UPSC civil services examination in 2025, covering syllabus, resources, and time management.',
    imageUrl: 'https://placehold.co/600x400.png',
    dataAiHint: 'study planning books',
    tags: ['UPSC Strategy', 'Exam Tips', '2025 Aspirants'],
  },
  {
    id: '2',
    slug: 'importance-of-ncert-books',
    title: 'Why NCERT Books are Crucial for UPSC Foundation',
    author: 'Education Analyst',
    date: '2024-07-25T14:30:00Z',
    excerpt: 'Understanding the significance of NCERT textbooks in building a strong foundation for the UPSC civil services exam.',
    imageUrl: 'https://placehold.co/600x400.png',
    dataAiHint: 'textbooks stack',
    tags: ['NCERT', 'Study Material', 'Foundation'],
  },
  {
    id: '3',
    slug: 'current-affairs-mastery-upsc',
    title: 'Mastering Current Affairs for UPSC: A Practical Approach',
    author: 'Current Affairs Guru',
    date: '2024-07-22T09:15:00Z',
    excerpt: 'Effective techniques to cover and revise current affairs, a vital component of the UPSC examination.',
    imageUrl: 'https://placehold.co/600x400.png',
    dataAiHint: 'news headlines collage',
    tags: ['Current Affairs', 'Revision', 'Exam Preparation'],
  },
  {
    id: '4',
    slug: 'choosing-upsc-optional-subject',
    title: 'Choosing Your UPSC Optional Subject: A Strategic Guide',
    author: 'Strategy Coach',
    date: '2024-07-20T11:00:00Z',
    excerpt: 'A comprehensive guide to help you select the most suitable optional subject for the UPSC Mains exam, considering scoring potential, interest, and syllabus overlap.',
    imageUrl: 'https://placehold.co/600x400.png',
    dataAiHint: 'decision making choices',
    tags: ['Optional Subject', 'UPSC Mains', 'Strategy', 'Decision Making'],
  }
];


export default function BlogPage() {
  return (
    <div className="space-y-6">
      <PageHeader
        title="UPSC AI Guide Blog"
        description="Insights, tips, and strategies for your UPSC preparation journey."
      />

      {mockBlogPosts.length > 0 ? (
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {mockBlogPosts.map(post => (
            <BlogPostItem key={post.id} post={post} />
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center text-center py-12 text-muted-foreground bg-card rounded-lg shadow-sm">
          <Rss className="w-16 h-16 mb-4 text-primary" />
          <h2 className="text-xl font-semibold">No Blog Posts Yet</h2>
          <p className="mt-2">Check back soon for insightful articles and tips!</p>
        </div>
      )}
    </div>
  );
}
