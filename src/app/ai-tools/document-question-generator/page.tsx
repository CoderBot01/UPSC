
import { PageHeader } from '@/components/shared/PageHeader';
import { DocumentQuestionGeneratorForm } from './components/DocumentQuestionGeneratorForm';

export default function DocumentQuestionGeneratorPage() {
  return (
    <div className="space-y-6">
      <PageHeader
        title="AI Document Question Generator"
        description="Paste your document content below, and the AI will generate relevant questions to help you study."
      />
      <DocumentQuestionGeneratorForm />
    </div>
  );
}
