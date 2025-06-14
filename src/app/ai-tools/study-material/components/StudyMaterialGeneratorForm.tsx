'use client';

import { useState } from 'react';
import { useForm, type SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { suggestStudyMaterial, type SuggestStudyMaterialOutput } from '@/ai/flows/suggest-study-material';
import { useToast } from '@/hooks/use-toast';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Terminal, Lightbulb } from 'lucide-react';
import { LoadingDots } from '@/components/shared/LoadingDots';

const formSchema = z.object({
  topic: z.string().min(3, { message: 'Topic must be at least 3 characters.' }).max(100),
  userProgress: z.string().min(10, { message: 'Progress description must be at least 10 characters.'}).max(500),
  syllabus: z.string().min(10, { message: 'Syllabus context must be at least 10 characters.'}).max(1000),
});

type FormData = z.infer<typeof formSchema>;

export function StudyMaterialGeneratorForm() {
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState<SuggestStudyMaterialOutput | null>(null);
  const [error, setError] = useState<string | null>(null);
  const { toast } = useToast();

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      topic: '',
      userProgress: '',
      syllabus: 'UPSC Civil Services Examination Syllabus focusing on General Studies and optional subjects.', // Pre-fill generic syllabus
    },
  });

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    setIsLoading(true);
    setResult(null);
    setError(null);
    try {
      const output = await suggestStudyMaterial(data);
      setResult(output);
      toast({
        title: "Recommendation Ready!",
        description: "Study material suggestions have been generated.",
      });
    } catch (e) {
      const errorMsg = e instanceof Error ? e.message : 'An unknown error occurred.';
      setError(errorMsg);
      toast({
        variant: "destructive",
        title: "Error Generating Recommendation",
        description: errorMsg,
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Get Study Material Recommendations</CardTitle>
          <CardDescription>Provide details about your topic, progress, and syllabus context to receive AI-powered suggestions.</CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <FormField
                control={form.control}
                name="topic"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Topic</FormLabel>
                    <FormControl>
                      <Input placeholder="e.g., Modern Indian History" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="userProgress"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Your Current Progress on this Topic</FormLabel>
                    <FormControl>
                      <Textarea placeholder="e.g., Completed NCERTs, need advanced books..." {...field} rows={3}/>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="syllabus"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Relevant Syllabus Context (Optional)</FormLabel>
                    <FormControl>
                      <Textarea placeholder="Provide specific parts of the syllabus this topic relates to..." {...field} rows={4}/>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" disabled={isLoading} className="w-full md:w-auto">
                {isLoading ? <LoadingDots /> : (
                  <>
                    <Lightbulb className="mr-2 h-4 w-4" /> Get Recommendations
                  </>
                )}
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>

      {error && (
        <Alert variant="destructive">
          <Terminal className="h-4 w-4" />
          <AlertTitle>Error</AlertTitle>
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}

      {result && (
        <Card>
          <CardHeader>
            <CardTitle>Recommended Study Material</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h3 className="font-semibold text-lg mb-1">Material:</h3>
              <p className="text-foreground whitespace-pre-wrap">{result.recommendedMaterial}</p>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-1">Reasoning:</h3>
              <p className="text-muted-foreground whitespace-pre-wrap">{result.reasoning}</p>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
