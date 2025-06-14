'use client';

import { upscSyllabus } from '@/data/syllabus';
import type { SyllabusMainTopic, SyllabusTopic as SyllabusTopicType, UPSCSubject } from '@/types';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { useProgress } from '@/hooks/useProgress';
import { PageHeader } from '@/components/shared/PageHeader';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';

function SyllabusTopic({ topic, level = 0 }: { topic: SyllabusTopicType | SyllabusMainTopic; level?: number }) {
  const { toggleTopicCompletion, isTopicCompleted } = useProgress();
  const hasSubtopics = topic.subTopics && topic.subTopics.length > 0;

  const handleCheckedChange = () => {
    toggleTopicCompletion(topic.id);
  };

  const topicContent = (
    <div className="flex items-center space-x-3 py-2">
      <Checkbox
        id={`topic-${topic.id}`}
        checked={isTopicCompleted(topic.id)}
        onCheckedChange={handleCheckedChange}
        aria-label={`Mark ${topic.title} as ${isTopicCompleted(topic.id) ? 'incomplete' : 'complete'}`}
      />
      <Label htmlFor={`topic-${topic.id}`} className={`flex-1 ${isTopicCompleted(topic.id) ? 'line-through text-muted-foreground' : ''}`}>
        {topic.title}
      </Label>
    </div>
  );

  if (hasSubtopics) {
    return (
      <AccordionItem value={topic.id} className="border-b-0">
        <AccordionTrigger className={`hover:no-underline ${level > 0 ? 'pl-4' : ''}`}>
          {topicContent}
        </AccordionTrigger>
        <AccordionContent className={`pl-${(level + 1) * 4} border-l ml-3`}>
          {topic.subTopics?.map(subTopic => (
            <SyllabusTopic key={subTopic.id} topic={subTopic} level={level + 1} />
          ))}
        </AccordionContent>
      </AccordionItem>
    );
  }

  return (
    <div className={`py-1 ${level > 0 ? 'pl-4' : ''}`}>
     {topicContent}
    </div>
  );
}


export default function SyllabusPage() {
  const { getProgressForSubject } = useProgress();

  return (
    <div className="space-y-6">
      <PageHeader 
        title="UPSC Syllabus"
        description="Explore the detailed syllabus for the Civil Services Examination. Mark topics as you complete them."
      />
      
      {upscSyllabus.map((subject: UPSCSubject) => (
        <Card key={subject.id}>
          <CardHeader>
            <CardTitle className="text-xl">{subject.name}</CardTitle>
            <div className="mt-2">
              <Label className="text-sm text-muted-foreground">Progress: {getProgressForSubject(subject.id)}%</Label>
              <Progress value={getProgressForSubject(subject.id)} className="h-2 mt-1" />
            </div>
          </CardHeader>
          <CardContent>
            <Accordion type="multiple" className="w-full">
              {subject.mainTopics.map(mainTopic => (
                <AccordionItem value={mainTopic.id} key={mainTopic.id} className="border-b">
                   <SyllabusTopic topic={mainTopic} />
                </AccordionItem>
              ))}
            </Accordion>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
