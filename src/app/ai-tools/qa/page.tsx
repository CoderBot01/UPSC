
import { PageHeader } from '@/components/shared/PageHeader';
import { QAGeneratorForm } from './components/QAGeneratorForm';

export default function QAPage() {
  return (
    <div className="space-y-6">
      <PageHeader 
        title="AI Q&A Assistant"
        description="Ask any UPSC-related question and get a detailed answer and explanation from our AI expert."
      />
      <QAGeneratorForm />
    </div>
  );
}
