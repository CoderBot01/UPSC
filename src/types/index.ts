
export interface SyllabusTopic {
  id: string;
  title: string;
  description?: string;
  subTopics?: SyllabusTopic[];
}

export interface SyllabusMainTopic extends SyllabusTopic {
  // Main topics might have specific properties if needed in future
}

export interface UPSCSubject {
  id: string;
  name: string;
  mainTopics: SyllabusMainTopic[];
}

export interface Resource {
  id: string;
  title: string;
  description: string;
  url: string;
  type: 'article' | 'video' | 'book' | 'website';
  tags?: string[];
  imageUrl?: string; // Optional image for the resource card
  dataAiHint?: string;
}

export interface Goal {
  id: string;
  text: string;
  completed: boolean;
  createdAt: string; // ISO date string
}

export interface ProgressItem {
  topicId: string;
  completed: boolean;
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string; // for URL generation if needed
  author: string;
  date: string; // ISO date string
  excerpt: string;
  imageUrl?: string;
  dataAiHint?: string;
  tags?: string[];
}
