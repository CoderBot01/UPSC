'use client';

import { useProgress } from '@/hooks/useProgress';
import { upscSyllabus } from '@/data/syllabus';
import type { UPSCSubject } from '@/types';
import { Progress } from '@/components/ui/progress';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { PageHeader } from '@/components/shared/PageHeader';
import { CheckCircle, ListTodo } from 'lucide-react';

export default function ProgressPage() {
  const { getOverallProgress, getProgressForSubject, isTopicCompleted } = useProgress();

  const overallProgress = getOverallProgress();

  const countTopics = (subject: UPSCSubject) => {
    let total = 0;
    let completed = 0;
    subject.mainTopics.forEach(mainTopic => {
      const countInTopic = (topic: import('@/types').SyllabusTopic) => {
        total++;
        if (isTopicCompleted(topic.id)) {
          completed++;
        }
        topic.subTopics?.forEach(sub => countInTopic(sub));
      };
      countInTopic(mainTopic);
    });
    return { total, completed };
  };

  return (
    <div className="space-y-6">
      <PageHeader 
        title="Your Progress"
        description="Track your UPSC syllabus completion and stay motivated."
      />

      <Card>
        <CardHeader>
          <CardTitle className="text-xl flex items-center gap-2">
            <CheckCircle className="h-6 w-6 text-green-500" />
            Overall Syllabus Progress
          </CardTitle>
          <CardDescription>Your journey towards mastering the UPSC syllabus.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="text-3xl font-bold text-primary">{overallProgress}%</div>
          <Progress value={overallProgress} className="mt-2 h-3" />
          <p className="text-sm text-muted-foreground mt-1">
            {overallProgress === 100 ? "Congratulations! You've covered the entire syllabus." : "Keep going, you're making great progress!"}
          </p>
        </CardContent>
      </Card>

      <h2 className="text-lg font-semibold text-foreground pt-4">Progress by Subject</h2>
      <div className="grid gap-4 md:grid-cols-2">
        {upscSyllabus.map((subject) => {
          const subjectProgress = getProgressForSubject(subject.id);
          const { total, completed } = countTopics(subject);
          return (
            <Card key={subject.id}>
              <CardHeader>
                <CardTitle className="text-lg">{subject.name}</CardTitle>
                 <CardDescription>{completed} of {total} topics completed</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-primary">{subjectProgress}%</div>
                <Progress value={subjectProgress} className="mt-1 h-2" />
              </CardContent>
            </Card>
          );
        })}
      </div>
       {upscSyllabus.length === 0 && (
        <Card>
          <CardContent className="pt-6">
            <div className="flex flex-col items-center justify-center text-center text-muted-foreground">
              <ListTodo className="w-12 h-12 mb-4" />
              <p className="text-lg font-medium">No syllabus data found.</p>
              <p>Please ensure the syllabus is correctly configured to track progress.</p>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
