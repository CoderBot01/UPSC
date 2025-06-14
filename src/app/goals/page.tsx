'use client';

import { useGoals } from '@/hooks/useGoals';
import { AddGoalForm } from './components/AddGoalForm';
import { GoalItem } from './components/GoalItem';
import { PageHeader } from '@/components/shared/PageHeader';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Target, ListChecks } from 'lucide-react';

export default function GoalsPage() {
  const { goals, addGoal, toggleGoalCompletion, removeGoal, getTodayGoals } = useGoals();
  const todayGoals = getTodayGoals();
  const completedGoalsCount = todayGoals.filter(goal => goal.completed).length;

  return (
    <div className="space-y-6">
      <PageHeader 
        title="Daily Study Goals"
        description="Set and track your study objectives for the day to stay productive."
      />

      <Card>
        <CardHeader>
          <CardTitle>Add New Goal</CardTitle>
          <CardDescription>What do you plan to achieve today?</CardDescription>
        </CardHeader>
        <CardContent>
          <AddGoalForm onAddGoal={addGoal} />
        </CardContent>
      </Card>
      
      {todayGoals.length > 0 && (
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <ListChecks className="h-5 w-5 text-primary" />
              Today&apos;s Goals
            </CardTitle>
            <CardDescription>
              {completedGoalsCount} of {todayGoals.length} goals completed. Keep up the great work!
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            {todayGoals.map(goal => (
              <GoalItem
                key={goal.id}
                goal={goal}
                onToggle={toggleGoalCompletion}
                onRemove={removeGoal}
              />
            ))}
          </CardContent>
        </Card>
      )}

      {todayGoals.length === 0 && (
         <Card>
          <CardContent className="pt-6">
            <div className="flex flex-col items-center justify-center text-center text-muted-foreground py-8">
              <Target className="w-16 h-16 mb-4 text-primary" />
              <h2 className="text-xl font-semibold">No Goals for Today Yet</h2>
              <p className="mt-2">Set some study goals to get started with your preparation!</p>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
