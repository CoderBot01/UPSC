'use client';

import type { ProgressItem } from '@/types';
import useLocalStorageState from './useLocalStorageState';
import { upscSyllabus } from '@/data/syllabus';

const PROGRESS_STORAGE_KEY = 'upscAiGuideProgress';

interface UseProgressReturn {
  progress: ProgressItem[];
  toggleTopicCompletion: (topicId: string) => void;
  isTopicCompleted: (topicId: string) => boolean;
  getOverallProgress: () => number;
  getProgressForSubject: (subjectId: string) => number;
}

export function useProgress(): UseProgressReturn {
  const [progress, setProgress] = useLocalStorageState<ProgressItem[]>(PROGRESS_STORAGE_KEY, []);

  const toggleTopicCompletion = (topicId: string) => {
    setProgress(prevProgress => {
      const existingItem = prevProgress.find(item => item.topicId === topicId);
      if (existingItem) {
        return prevProgress.map(item =>
          item.topicId === topicId ? { ...item, completed: !item.completed } : item
        );
      }
      return [...prevProgress, { topicId, completed: true }];
    });
  };

  const isTopicCompleted = (topicId: string): boolean => {
    return progress.find(item => item.topicId === topicId)?.completed || false;
  };

  const getAllTopicIds = (): string[] => {
    const ids: string[] = [];
    upscSyllabus.forEach(subject => {
      subject.mainTopics.forEach(mainTopic => {
        const addSubTopicIds = (topic: import('@/types').SyllabusTopic) => {
          ids.push(topic.id);
          if (topic.subTopics) {
            topic.subTopics.forEach(subTopic => addSubTopicIds(subTopic));
          }
        };
        addSubTopicIds(mainTopic);
      });
    });
    return ids;
  };
  
  const getTopicIdsForSubject = (subjectId: string): string[] => {
    const ids: string[] = [];
    const subject = upscSyllabus.find(s => s.id === subjectId);
    if (subject) {
      subject.mainTopics.forEach(mainTopic => {
        const addSubTopicIds = (topic: import('@/types').SyllabusTopic) => {
          ids.push(topic.id);
          if (topic.subTopics) {
            topic.subTopics.forEach(subTopic => addSubTopicIds(subTopic));
          }
        };
        addSubTopicIds(mainTopic);
      });
    }
    return ids;
  };


  const getOverallProgress = (): number => {
    const allTopicIds = getAllTopicIds();
    if (allTopicIds.length === 0) return 0;
    const completedTopics = allTopicIds.filter(id => isTopicCompleted(id)).length;
    return Math.round((completedTopics / allTopicIds.length) * 100);
  };

  const getProgressForSubject = (subjectId: string): number => {
    const subjectTopicIds = getTopicIdsForSubject(subjectId);
    if (subjectTopicIds.length === 0) return 0;
    const completedTopics = subjectTopicIds.filter(id => isTopicCompleted(id)).length;
    return Math.round((completedTopics / subjectTopicIds.length) * 100);
  };


  return { progress, toggleTopicCompletion, isTopicCompleted, getOverallProgress, getProgressForSubject };
}
