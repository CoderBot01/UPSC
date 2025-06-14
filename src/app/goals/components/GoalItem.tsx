'use client';

import type { Goal } from '@/types';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { X } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { cn } from '@/lib/utils';

interface GoalItemProps {
  goal: Goal;
  onToggle: (id: string) => void;
  onRemove: (id: string) => void;
}

export function GoalItem({ goal, onToggle, onRemove }: GoalItemProps) {
  return (
    <Card className={cn("transition-all", goal.completed ? 'bg-muted/50' : 'bg-card')}>
      <CardContent className="p-4 flex items-center justify-between gap-4">
        <div className="flex items-center space-x-3 flex-grow">
          <Checkbox
            id={`goal-${goal.id}`}
            checked={goal.completed}
            onCheckedChange={() => onToggle(goal.id)}
            aria-label={`Mark goal "${goal.text}" as ${goal.completed ? 'incomplete' : 'complete'}`}
          />
          <Label
            htmlFor={`goal-${goal.id}`}
            className={cn(
              "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 flex-grow break-all",
              goal.completed ? 'line-through text-muted-foreground' : 'text-foreground'
            )}
          >
            {goal.text}
          </Label>
        </div>
        <Button
          variant="ghost"
          size="icon"
          onClick={() => onRemove(goal.id)}
          aria-label={`Remove goal "${goal.text}"`}
          className="text-muted-foreground hover:text-destructive h-8 w-8"
        >
          <X className="h-4 w-4" />
        </Button>
      </CardContent>
    </Card>
  );
}
