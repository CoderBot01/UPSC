
import { PageHeader } from '@/components/shared/PageHeader';
import { TextSummarizerForm } from './components/TextSummarizerForm';

export default function TextSummarizerPage() {
  return (
    <div className="space-y-6">
      <PageHeader
        title="AI Text Summarizer"
        description="Paste your text below to get a concise summary, ideal for quick revisions and understanding key points."
      />
      <TextSummarizerForm />
    </div>
  );
}
