import { PageHeader } from '@/components/shared/PageHeader';
import { StudyMaterialGeneratorForm } from './components/StudyMaterialGeneratorForm';

export default function StudyMaterialPage() {
  return (
    <div className="space-y-6">
      <PageHeader 
        title="AI Study Material Advisor"
        description="Get personalized recommendations for books, articles, and other resources based on your study needs and progress."
      />
      <StudyMaterialGeneratorForm />
    </div>
  );
}
