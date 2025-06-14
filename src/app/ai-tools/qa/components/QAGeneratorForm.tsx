
'use client';

import { useState } from 'react';
import { useForm, type SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { answerUserQuestion, type AnswerUserQuestionOutput } from '@/ai/flows/answer-user-question';
import { useToast } from '@/hooks/use-toast';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Terminal, MessageSquareQuote, Sparkles, CheckCircle } from 'lucide-react';
import { LoadingDots } from '@/components/shared/LoadingDots';
import { Separator } from '@/components/ui/separator';

const formSchema = z.object({
  question: z.string().min(10, { message: 'Question must be at least 10 characters long.' }).max(1000, { message: 'Question must be at most 1000 characters long.' }),
});

type FormData = z.infer<typeof formSchema>;

export function QAGeneratorForm() {
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState<AnswerUserQuestionOutput | null>(null);
  const [error, setError] = useState<string | null>(null);
  const { toast } = useToast();

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      question: '',
    },
  });

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    setIsLoading(true);
    setResult(null);
    setError(null);
    try {
      const output = await answerUserQuestion(data);
      setResult(output);
      toast({
        title: "Answer Ready!",
        description: "The AI has generated an answer to your question.",
      });
    } catch (e) {
      const errorMsg = e instanceof Error ? e.message : 'An unknown error occurred.';
      setError(errorMsg);
      toast({
        variant: "destructive",
        title: "Error Getting Answer",
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
          <CardTitle>Ask Your Question</CardTitle>
          <CardDescription>Type your UPSC-related query below and let our AI assistant provide an answer and explanation.</CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <FormField
                control={form.control}
                name="question"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Your Question</FormLabel>
                    <FormControl>
                      <Textarea 
                        placeholder="e.g., What were the main causes of the Revolt of 1857? or Explain the concept of Judicial Review." 
                        {...field} 
                        rows={5}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" disabled={isLoading} className="w-full md:w-auto">
                {isLoading ? <LoadingDots /> : (
                  <>
                    <MessageSquareQuote className="mr-2 h-4 w-4" /> Get Answer
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
              AI Generated Response
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <h3 className="font-semibold text-lg mb-2 flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-green-600" />
                Answer:
              </h3>
              <p className="text-foreground whitespace-pre-wrap bg-muted/50 p-4 rounded-md">{result.answer}</p>
            </div>
            <Separator />
            <div>
              <h3 className="font-semibold text-lg mb-2 flex items-center gap-2">
                <Sparkles className="h-5 w-5 text-accent" />
                Explanation:
              </h3>
              <p className="text-muted-foreground whitespace-pre-wrap bg-muted/30 p-4 rounded-md">{result.explanation}</p>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
