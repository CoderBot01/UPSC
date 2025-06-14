import type { Resource } from '@/types';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Image from 'next/image';
import { ExternalLink, Book, Video, Globe } from 'lucide-react';

interface ResourceItemProps {
  resource: Resource;
}

const TypeIcon = ({ type }: { type: Resource['type'] }) => {
  switch (type) {
    case 'article': return <Book className="h-4 w-4" />;
    case 'video': return <Video className="h-4 w-4" />;
    case 'book': return <Book className="h-4 w-4" />;
    case 'website': return <Globe className="h-4 w-4" />;
    default: return <Book className="h-4 w-4" />;
  }
};


export function ResourceItem({ resource }: ResourceItemProps) {
  return (
    <Card className="flex flex-col h-full overflow-hidden hover:shadow-xl transition-shadow duration-300">
      {resource.imageUrl && (
        <div className="relative h-48 w-full">
          <Image 
            src={resource.imageUrl} 
            alt={resource.title} 
            layout="fill" 
            objectFit="cover" 
            data-ai-hint={resource.dataAiHint || "resource image"}
          />
        </div>
      )}
      <CardHeader>
        <CardTitle className="text-lg">{resource.title}</CardTitle>
        <CardDescription className="text-sm line-clamp-3 h-[3.75rem] overflow-hidden">{resource.description}</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        {resource.tags && resource.tags.length > 0 && (
          <div className="flex flex-wrap gap-1 mb-3">
            {resource.tags.map(tag => (
              <Badge key={tag} variant="secondary" className="text-xs">{tag}</Badge>
            ))}
          </div>
        )}
      </CardContent>
      <CardFooter className="mt-auto">
        <Button asChild variant="default" size="sm" className="w-full">
          <a href={resource.url} target="_blank" rel="noopener noreferrer">
            <TypeIcon type={resource.type} />
            <span className="ml-2">
              {resource.type === 'book' && resource.url === '#' ? 'Find Book' : `Visit ${resource.type.charAt(0).toUpperCase() + resource.type.slice(1)}`}
            </span>
            <ExternalLink className="ml-auto h-4 w-4" />
          </a>
        </Button>
      </CardFooter>
    </Card>
  );
}
