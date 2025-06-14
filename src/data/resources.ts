
import type { Resource } from '@/types';

export const resourceLibrary: Resource[] = [
  {
    id: 'resource-1',
    title: 'NCERT Textbooks (Class 6-12)',
    description: 'Fundamental books for building a strong base for UPSC preparation, especially for History, Geography, and Social Issues.',
    url: 'https://ncert.nic.in/textbook.php',
    type: 'book',
    tags: ['foundation', 'history', 'geography', 'polity', 'economy'],
    imageUrl: 'https://placehold.co/600x400.png',
    dataAiHint: 'books library'
  },
  {
    id: 'resource-2',
    title: 'The Hindu Newspaper',
    description: 'Essential daily reading for current affairs, editorial analysis, and opinion pieces relevant to the UPSC syllabus.',
    url: 'https://www.thehindu.com/',
    type: 'website',
    tags: ['current affairs', 'daily reading', 'analysis'],
    imageUrl: 'https://placehold.co/600x400.png',
    dataAiHint: 'newspaper reading'
  },
  {
    id: 'resource-3',
    title: 'Indian Polity by M. Laxmikanth',
    description: 'A comprehensive guide to the Indian political system and constitution, considered a bible for UPSC aspirants.',
    url: '#', // Placeholder, typically a link to buy or an online resource
    type: 'book',
    tags: ['polity', 'constitution', 'governance'],
    imageUrl: 'https://placehold.co/600x400.png',
    dataAiHint: 'textbook study'
  },
  {
    id: 'resource-4',
    title: 'PRS Legislative Research',
    description: 'Provides summaries and analysis of bills, acts, and legislative discussions in the Indian Parliament.',
    url: 'https://prsindia.org/',
    type: 'website',
    tags: ['legislation', 'parliament', 'governance'],
    imageUrl: 'https://placehold.co/600x400.png',
    dataAiHint: 'research website'
  },
  {
    id: 'resource-5',
    title: 'PIB (Press Information Bureau)',
    description: 'Official source for government announcements, policies, and initiatives.',
    url: 'https://pib.gov.in/',
    type: 'website',
    tags: ['government', 'policy', 'current affairs'],
    imageUrl: 'https://placehold.co/600x400.png',
    dataAiHint: 'official document'
  },
  {
    id: 'resource-6',
    title: 'A Brief History of Modern India - Spectrum Books',
    description: 'A widely recommended book for covering Modern Indian History for the Civil Services Examination.',
    url: '#', // Placeholder for purchase link
    type: 'book',
    tags: ['history', 'modern india', 'freedom struggle'],
    imageUrl: 'https://placehold.co/600x400.png',
    dataAiHint: 'history book'
  },
  {
    id: 'resource-7',
    title: 'Certificate Physical and Human Geography - G.C. Leong',
    description: 'A classic book for understanding fundamental concepts of physical and human geography.',
    url: '#', // Placeholder for purchase link
    type: 'book',
    tags: ['geography', 'physical geography', 'climatology'],
    imageUrl: 'https://placehold.co/600x400.png',
    dataAiHint: 'geography textbook'
  },
  {
    id: 'resource-8',
    title: 'Yojana Magazine',
    description: 'A monthly magazine by the Ministry of Information and Broadcasting, focusing on socio-economic issues and government schemes.',
    url: 'http://yojana.gov.in/',
    type: 'website', // Official website provides access to magazines
    tags: ['socio-economic', 'government schemes', 'development'],
    imageUrl: 'https://placehold.co/600x400.png',
    dataAiHint: 'magazine cover'
  },
  {
    id: 'resource-9',
    title: 'Kurukshetra Magazine',
    description: 'A monthly journal focusing on rural development, agriculture, and panchayati raj.',
    url: 'https://www.publicationsdivision.nic.in/journals/index.php?option=com_jfolder&view=category&id=11:kurukshetra-english', // Link to journal page
    type: 'website',
    tags: ['rural development', 'agriculture', 'governance'],
    imageUrl: 'https://placehold.co/600x400.png',
    dataAiHint: 'journal publication'
  },
  {
    id: 'resource-10',
    title: 'Ministry of External Affairs (MEA) Website',
    description: 'Official source for India\'s foreign policy statements, bilateral relations, and international agreements.',
    url: 'https://www.mea.gov.in/',
    type: 'website',
    tags: ['international relations', 'foreign policy', 'diplomacy'],
    imageUrl: 'https://placehold.co/600x400.png',
    dataAiHint: 'government building'
  },
  {
    id: 'resource-11',
    title: 'NITI Aayog Website',
    description: 'Premier policy think tank of the Government of India, providing directional and policy inputs. Publishes various reports and indices.',
    url: 'https://www.niti.gov.in/',
    type: 'website',
    tags: ['policy', 'reports', 'indian economy', 'governance'],
    imageUrl: 'https://placehold.co/600x400.png',
    dataAiHint: 'policy meeting'
  }
];
