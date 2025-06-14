'use client';

import { useState } from 'react';
import { useForm, type SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { useToast } from '@/hooks/use-toast';
import { PlusCircle } from 'lucide-react';

const goalSchema = z.object({
  text: z.string().min(3, { message: 'Goal must be at least 3 characters long.' }).max(100, { message: 'Goal must be at most 100 characters long.' }),
});

type GoalFormData = z.infer<typeof goalSchema>;

interface AddGoalFormProps {
  onAddGoal: (text: string) => void;
}

export function AddGoalForm({ onAddGoal }: AddGoalFormProps) {
  const { toast } = useToast();
  const form = useForm<GoalFormData>({
    resolver: zodResolver(goalSchema),
    defaultValues: {
      text: '',
    },
  });

  const onSubmit: SubmitHandler<GoalFormData> = (data) => {
    onAddGoal(data.text);
    form.reset();
    toast({
      title: "Goal Added",
      description: `"${data.text.substring(0,30)}..." has been added to your daily goals.`,
    });
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="flex items-end gap-2">
        <FormField
          control={form.control}
          name="text"
          render={({ field }) => (
            <FormItem className="flex-grow">
              <FormLabel className="sr-only">New Goal</FormLabel>
              <FormControl>
                <Input placeholder="Enter your new study goal for today..." {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" disabled={form.formState.isSubmitting}>
          <PlusCircle className="h-4 w-4 mr-2" /> Add Goal
        </Button>
      </form>
    </Form>
  );
}
