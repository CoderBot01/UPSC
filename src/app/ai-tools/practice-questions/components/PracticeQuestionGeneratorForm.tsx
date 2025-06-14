
'use client';

import { useState, useMemo } from 'react';
import type { SubmitHandler } from 'react-hook-form';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { generatePracticeQuestions, type GeneratePracticeQuestionsOutput } from '@/ai/flows/generate-practice-questions';
import { analyzePracticePerformance, type AnalyzePracticePerformanceOutput } from '@/ai/flows/analyze-practice-performance';
import { useToast } from '@/hooks/use-toast';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Terminal, PencilLine, CheckCircle, XCircle, Lightbulb, TrendingUp, BookOpen, BarChart3 } from 'lucide-react';
import { LoadingDots } from '@/components/shared/LoadingDots';
import { cn } from '@/lib/utils';
import { Separator } from '@/components/ui/separator';

const examFormats = ["Multiple Choice Questions (MCQs)", "Essay Type Questions", "Short Answer Questions"] as const;

const formSchema = z.object({
  topic: z.string().min(3, { message: 'Topic must be at least 3 characters.' }).max(100),
  examFormat: z.enum(examFormats),
  numberQuestions: z.coerce.number().min(1).max(10),
});

type FormData = z.infer<typeof formSchema>;

interface QuestionWithOptions {
  questionText: string;
  options: string[];
  correctAnswerIndex: number;
  explanation: string;
}

interface AnswerState {
  [questionIndex: number]: {
    selectedOptionIndex?: number;
    isCorrect?: boolean;
    isChecked: boolean;
  };
}

export function PracticeQuestionGeneratorForm() {
  const [isLoadingQuestions, setIsLoadingQuestions] = useState(false);
  const [generatedQuestions, setGeneratedQuestions] = useState<QuestionWithOptions[]>([]);
  const [answerStates, setAnswerStates] = useState<AnswerState>({});
  const [error, setError] = useState<string | null>(null);
  const { toast } = useToast();

  const [isLoadingAnalysis, setIsLoadingAnalysis] = useState(false);
  const [analysisResult, setAnalysisResult] = useState<AnalyzePracticePerformanceOutput | null>(null);
  const [analysisError, setAnalysisError] = useState<string | null>(null);
  const [currentTopicForAnalysis, setCurrentTopicForAnalysis] = useState<string>('');


  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      topic: '',
      examFormat: 'Multiple Choice Questions (MCQs)',
      numberQuestions: 3,
    },
  });

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    setIsLoadingQuestions(true);
    setGeneratedQuestions([]);
    setAnswerStates({});
    setError(null);
    setAnalysisResult(null);
    setAnalysisError(null);
    setCurrentTopicForAnalysis(data.topic);

    try {
      const output: GeneratePracticeQuestionsOutput = await generatePracticeQuestions({
        ...data,
        examFormat: "Multiple Choice Questions (MCQs)" 
      });
      if (output.questions && output.questions.length > 0) {
        const validQuestions = output.questions.filter(q => q.questionText && q.options && q.options.length > 0 && q.explanation && q.correctAnswerIndex !== undefined) as QuestionWithOptions[];
        setGeneratedQuestions(validQuestions);
        
        const initialAnswerStates: AnswerState = {};
        validQuestions.forEach((_, index) => {
          initialAnswerStates[index] = { isChecked: false };
        });
        setAnswerStates(initialAnswerStates);

        toast({
          title: "Questions Generated!",
          description: `${validQuestions.length} practice questions on "${data.topic}" are ready.`,
        });
      } else {
        setError("No questions were generated, or they were not in the expected format. Try a different topic or adjust parameters.");
         toast({
          variant: "destructive",
          title: "No Questions Generated",
          description: "The AI didn't return any questions. Please try again.",
        });
      }
    } catch (e) {
      const errorMsg = e instanceof Error ? e.message : 'An unknown error occurred.';
      setError(errorMsg);
      toast({
        variant: "destructive",
        title: "Error Generating Questions",
        description: errorMsg,
      });
    } finally {
      setIsLoadingQuestions(false);
    }
  };

  const handleOptionChange = (questionIndex: number, optionIndex: number) => {
    setAnswerStates(prev => ({
      ...prev,
      [questionIndex]: {
        ...prev[questionIndex],
        selectedOptionIndex: optionIndex,
        isChecked: false, 
        isCorrect: undefined,
      },
    }));
  };

  const checkAnswer = (questionIndex: number) => {
    const question = generatedQuestions[questionIndex];
    const currentAnswerState = answerStates[questionIndex];

    if (question && currentAnswerState?.selectedOptionIndex !== undefined) {
      const isCorrect = currentAnswerState.selectedOptionIndex === question.correctAnswerIndex;
      setAnswerStates(prev => ({
        ...prev,
        [questionIndex]: {
          ...prev[questionIndex],
          isCorrect: isCorrect,
          isChecked: true,
        },
      }));
    } else {
       toast({
        variant: "destructive",
        title: "No Answer Selected",
        description: "Please select an answer before checking.",
      });
    }
  };

  const allQuestionsChecked = useMemo(() => {
    if (generatedQuestions.length === 0) return false;
    return generatedQuestions.every((_, qIndex) => answerStates[qIndex]?.isChecked);
  }, [generatedQuestions, answerStates]);

  const score = useMemo(() => {
    return generatedQuestions.reduce((acc, _, qIndex) => acc + (answerStates[qIndex]?.isCorrect ? 1 : 0), 0);
  }, [generatedQuestions, answerStates]);

  const handleAnalyzePerformance = async () => {
    if (!allQuestionsChecked || generatedQuestions.length === 0) {
      toast({
        variant: "destructive",
        title: "Cannot Analyze",
        description: "Please complete all questions before analyzing performance.",
      });
      return;
    }
    setIsLoadingAnalysis(true);
    setAnalysisResult(null);
    setAnalysisError(null);
    try {
      const result = await analyzePracticePerformance({
        topic: currentTopicForAnalysis,
        totalQuestions: generatedQuestions.length,
        correctAnswers: score,
      });
      setAnalysisResult(result);
      toast({
        title: "Analysis Complete!",
        description: "Your performance analysis is ready.",
      });
    } catch (e) {
      const errorMsg = e instanceof Error ? e.message : 'An unknown error occurred.';
      setAnalysisError(errorMsg);
      toast({
        variant: "destructive",
        title: "Error Analyzing Performance",
        description: errorMsg,
      });
    } finally {
      setIsLoadingAnalysis(false);
    }
  };


  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Generate Practice Questions</CardTitle>
          <CardDescription>Specify a topic and number of questions to get interactive multiple-choice questions.</CardDescription>
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
                      <Input placeholder="e.g., The Revolt of 1857" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="examFormat"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Exam Format Focus</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select exam format" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {examFormats.map(format => (
                            <SelectItem key={format} value={format} disabled={format !== "Multiple Choice Questions (MCQs)"}>
                              {format}{format !== "Multiple Choice Questions (MCQs)" && " (Interactive coming soon)"}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="numberQuestions"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Number of Questions (1-10)</FormLabel>
                      <FormControl>
                        <Input type="number" min="1" max="10" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <Button type="submit" disabled={isLoadingQuestions} className="w-full md:w-auto">
                 {isLoadingQuestions ? <LoadingDots /> : (
                  <>
                    <PencilLine className="mr-2 h-4 w-4" /> Generate Questions
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
          <AlertTitle>Error Generating Questions</AlertTitle>
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}

      {generatedQuestions.length > 0 && (
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-foreground">Generated Questions:</h2>
          {generatedQuestions.map((question, qIndex) => (
            <Card key={qIndex}>
              <CardHeader>
                <CardTitle>Question {qIndex + 1}</CardTitle>
                <CardDescription className="text-base text-foreground pt-2 whitespace-pre-wrap">{question.questionText}</CardDescription>
              </CardHeader>
              <CardContent>
                <RadioGroup
                  onValueChange={(value) => handleOptionChange(qIndex, parseInt(value))}
                  value={answerStates[qIndex]?.selectedOptionIndex?.toString()}
                  disabled={answerStates[qIndex]?.isChecked}
                  className="space-y-2"
                >
                  {question.options.map((option, oIndex) => (
                    <div key={oIndex} className="flex items-center space-x-3 cursor-pointer">
                      <RadioGroupItem value={oIndex.toString()} id={`q${qIndex}-o${oIndex}`} />
                      <Label htmlFor={`q${qIndex}-o${oIndex}`} className={cn(
                        "font-normal flex-1 cursor-pointer",
                        answerStates[qIndex]?.isChecked && oIndex === question.correctAnswerIndex && "text-green-600 font-semibold",
                        answerStates[qIndex]?.isChecked && oIndex === answerStates[qIndex]?.selectedOptionIndex && oIndex !== question.correctAnswerIndex && "text-red-600 line-through"
                      )}>
                        {String.fromCharCode(65 + oIndex)}. {option}
                      </Label>
                    </div>
                  ))}
                </RadioGroup>
              </CardContent>
              <CardFooter className="flex flex-col items-start space-y-4">
                <Button 
                  onClick={() => checkAnswer(qIndex)} 
                  disabled={answerStates[qIndex]?.isChecked || answerStates[qIndex]?.selectedOptionIndex === undefined}
                  variant="outline"
                >
                  Check Answer
                </Button>
                {answerStates[qIndex]?.isChecked && (
                  <div className="w-full p-4 rounded-md bg-muted/50">
                    {answerStates[qIndex]?.isCorrect ? (
                      <div className="flex items-center text-green-700">
                        <CheckCircle className="mr-2 h-5 w-5" />
                        <span className="font-semibold">Correct!</span>
                      </div>
                    ) : (
                      <div className="flex items-center text-red-700">
                        <XCircle className="mr-2 h-5 w-5" />
                        <span className="font-semibold">Incorrect.</span>
                        {question.options[question.correctAnswerIndex] && (
                           <span className="ml-2">Correct answer: {String.fromCharCode(65 + question.correctAnswerIndex)}. {question.options[question.correctAnswerIndex]}</span>
                        )}
                      </div>
                    )}
                    <div className="mt-3 text-sm text-muted-foreground">
                      <div className="flex items-center font-medium text-foreground mb-1">
                        <Lightbulb className="mr-2 h-4 w-4 text-primary" />
                        Explanation:
                      </div>
                      <p className="whitespace-pre-wrap">{question.explanation}</p>
                    </div>
                  </div>
                )}
              </CardFooter>
            </Card>
          ))}
        </div>
      )}

      {allQuestionsChecked && generatedQuestions.length > 0 && (
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BarChart3 className="h-6 w-6 text-primary" />
              Quiz Summary
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-lg font-semibold">
              Your Score: <span className="text-primary">{score}</span> out of {generatedQuestions.length}
            </p>
            <Button onClick={handleAnalyzePerformance} disabled={isLoadingAnalysis} className="w-full md:w-auto">
              {isLoadingAnalysis ? <LoadingDots /> : (
                <>
                  <TrendingUp className="mr-2 h-4 w-4" /> Analyze My Performance
                </>
              )}
            </Button>
          </CardContent>
        </Card>
      )}

      {analysisError && (
        <Alert variant="destructive">
          <Terminal className="h-4 w-4" />
          <AlertTitle>Error Analyzing Performance</AlertTitle>
          <AlertDescription>{analysisError}</AlertDescription>
        </Alert>
      )}

      {analysisResult && (
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Lightbulb className="h-6 w-6 text-primary" />
              Performance Analysis
            </CardTitle>
            <CardDescription>{analysisResult.scoreSummary}</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <h3 className="font-semibold text-lg mb-2 flex items-center gap-2">
                <XCircle className="h-5 w-5 text-destructive" />
                Potential Weak Areas
              </h3>
              <p className="text-muted-foreground whitespace-pre-wrap">{analysisResult.weaknessAnalysis}</p>
            </div>
            <Separator />
            <div>
              <h3 className="font-semibold text-lg mb-2 flex items-center gap-2">
                <TrendingUp className="h-5 w-5 text-green-600" />
                Improvement Suggestions
              </h3>
              <p className="text-muted-foreground whitespace-pre-wrap">{analysisResult.improvementSuggestions}</p>
            </div>
            <Separator />
            <div>
              <h3 className="font-semibold text-lg mb-2 flex items-center gap-2">
                <BookOpen className="h-5 w-5 text-indigo-600" />
                Recommended Resources
              </h3>
              {analysisResult.recommendedResources.length > 0 ? (
                <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                  {analysisResult.recommendedResources.map((resource, index) => (
                    <li key={index} className="whitespace-pre-wrap">{resource}</li>
                  ))}
                </ul>
              ) : (
                <p className="text-muted-foreground">No specific resources recommended at this time. Focus on general topic revision.</p>
              )}
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
