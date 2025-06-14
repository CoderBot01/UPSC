import { resourceLibrary } from '@/data/resources';
import { ResourceItem } from './components/ResourceItem';
import { PageHeader } from '@/components/shared/PageHeader';
import { Library } from 'lucide-react';

export default function ResourcesPage() {
  return (
    <div className="space-y-6">
      <PageHeader 
        title="Resource Library"
        description="A curated list of important articles, books, and websites for UPSC preparation."
      />
      
      {resourceLibrary.length > 0 ? (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {resourceLibrary.map(resource => (
            <ResourceItem key={resource.id} resource={resource} />
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center text-center py-12 text-muted-foreground bg-card rounded-lg shadow-sm">
          <Library className="w-16 h-16 mb-4 text-primary" />
          <h2 className="text-xl font-semibold">Resource Library is Empty</h2>
          <p className="mt-2">Check back later for curated study materials and resources.</p>
        </div>
      )}
    </div>
  );
}
