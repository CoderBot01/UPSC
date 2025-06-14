
'use client';

import { useState } from 'react';
import { useForm, type SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { summarizeText, type SummarizeTextOutput } from '@/ai/flows/summarize-text';
import { useToast } from '@/hooks/use-toast';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Terminal, ScrollText, Sparkles } from 'lucide-react';
import { LoadingDots } from '@/components/shared/LoadingDots';
import { Separator } from '@/components/ui/separator';

const formSchema = z.object({
  textToSummarize: z.string().min(50, { message: 'Text must be at least 50 characters long.' }).max(20000, { message: 'Text must be at most 20,000 characters long.' }),
});

type FormData = z.infer<typeof formSchema>;

export function TextSummarizerForm() {
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState<SummarizeTextOutput | null>(null);
  const [error, setError] = useState<string | null>(null);
  const { toast } = useToast();

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      textToSummarize: '',
    },
  });

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    setIsLoading(true);
    setResult(null);
    setError(null);
    try {
      const output = await summarizeText(data);
      setResult(output);
      toast({
        title: "Summary Ready!",
        description: "The AI has generated a summary of your text.",
      });
    } catch (e) {
      const errorMsg = e instanceof Error ? e.message : 'An unknown error occurred.';
      setError(errorMsg);
      toast({
        variant: "destructive",
        title: "Error Generating Summary",
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
          <CardTitle>Summarize Your Text</CardTitle>
          <CardDescription>Paste the text you want to summarize into the box below. The AI will provide a concise overview.</CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <FormField
                control={form.control}
                name="textToSummarize"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Text to Summarize</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Paste your article, notes, or any text here..."
                        {...field}
                        rows={10}
                        className="min-h-[200px]"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" disabled={isLoading} className="w-full md:w-auto">
                {isLoading ? <LoadingDots /> : (
                  <>
                    <ScrollText className="mr-2 h-4 w-4" /> Summarize Text
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
            <CardTitle className="flex items-center gap-2">
              <Sparkles className="h-6 w-6 text-primary" />
              AI Generated Summary
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="bg-muted/50 p-4 rounded-md">
              <p className="text-foreground whitespace-pre-wrap">{result.summary}</p>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
