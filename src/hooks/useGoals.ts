'use client';

import type { Goal } from '@/types';
import useLocalStorageState from './useLocalStorageState';
import { nanoid } from 'nanoid';

const GOALS_STORAGE_KEY = 'upscAiGuideGoals';

interface UseGoalsReturn {
  goals: Goal[];
  addGoal: (text: string) => void;
  toggleGoalCompletion: (goalId: string) => void;
  removeGoal: (goalId: string) => void;
  getTodayGoals: () => Goal[];
}

export function useGoals(): UseGoalsReturn {
  const [goals, setGoals] = useLocalStorageState<Goal[]>(GOALS_STORAGE_KEY, []);

  const addGoal = (text: string) => {
    const newGoal: Goal = {
      id: nanoid(),
      text,
      completed: false,
      createdAt: new Date().toISOString(),
    };
    setGoals(prevGoals => [newGoal, ...prevGoals]);
  };

  const toggleGoalCompletion = (goalId: string) => {
    setGoals(prevGoals =>
      prevGoals.map(goal =>
        goal.id === goalId ? { ...goal, completed: !goal.completed } : goal
      )
    );
  };

  const removeGoal = (goalId: string) => {
    setGoals(prevGoals => prevGoals.filter(goal => goal.id !== goalId));
  };
  
  const getTodayGoals = (): Goal[] => {
    const today = new Date().toISOString().split('T')[0];
    return goals.filter(goal => goal.createdAt.startsWith(today));
  };

  return { goals, addGoal, toggleGoalCompletion, removeGoal, getTodayGoals };
}
