import { PageHeader } from '@/components/shared/PageHeader';
import { PracticeQuestionGeneratorForm } from './components/PracticeQuestionGeneratorForm';

export default function PracticeQuestionsPage() {
  return (
    <div className="space-y-6">
      <PageHeader 
        title="AI Practice Question Generator"
        description="Create custom practice questions for any UPSC topic, tailored to specific exam formats. Test your knowledge and strengthen your preparation."
      />
      <PracticeQuestionGeneratorForm />
    </div>
  );
}
