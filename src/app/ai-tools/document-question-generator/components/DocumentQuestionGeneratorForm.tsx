
'use client';

import { useState, useRef, useEffect } from 'react';
import { useForm, type SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { generateQuestionsFromDocument, type GenerateQuestionsFromDocumentOutput } from '@/ai/flows/generate-questions-from-document';
import { useToast } from '@/hooks/use-toast';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Terminal, FileQuestion, Sparkles, ListChecks, HelpCircle, CheckCircle, Eye, EyeOff, UploadCloud, XCircle, FileText, FileType } from 'lucide-react';
import { LoadingDots } from '@/components/shared/LoadingDots';
import { Separator } from '@/components/ui/separator';
import { Badge } from '@/components/ui/badge';
import type * as PDFJS from 'pdfjs-dist';

const formSchema = z.object({
  documentContent: z.string().min(100, { message: 'Document content must be at least 100 characters.' }).max(20000, { message: 'Document content cannot exceed 20,000 characters.' }),
  numberOfQuestions: z.coerce.number().min(1, {message: "Must generate at least 1 question."}).max(10, {message: "Cannot generate more than 10 questions."}).default(3),
});

type FormData = z.infer<typeof formSchema>;

export function DocumentQuestionGeneratorForm() {
  const [isLoading, setIsLoading] = useState(false);
  const [isProcessingFile, setIsProcessingFile] = useState(false);
  const [result, setResult] = useState<GenerateQuestionsFromDocumentOutput | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [answersVisibility, setAnswersVisibility] = useState<Record<number, boolean>>({});
  const [uploadedFileName, setUploadedFileName] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { toast } = useToast();

  // Dynamically import pdfjs-dist only on the client-side
  const [pdfjs, setPdfjs] = useState<typeof PDFJS | null>(null);
  useEffect(() => {
    import('pdfjs-dist')
      .then(pdfjsLib => {
        // Configure the worker source. Using a CDN for simplicity.
        // For production, you'd typically host this worker file yourself.
        // Hardcoding version to 4.4.168 to match package.json and fix worker load error
        pdfjsLib.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/4.4.168/pdf.worker.min.js`;
        setPdfjs(pdfjsLib);
      })
      .catch(err => {
        console.error("Failed to load pdfjs-dist:", err);
        toast({
          variant: "destructive",
          title: "PDF Library Error",
          description: "Could not load PDF processing library. PDF uploads may not work.",
        });
      });
  }, [toast]);


  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      documentContent: '',
      numberOfQuestions: 3,
    },
  });

  const handleFileChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setIsProcessingFile(true);
      setUploadedFileName(null); // Clear previous file name
      form.setValue('documentContent', ''); // Clear previous content

      if (file.type === "text/plain") {
        const reader = new FileReader();
        reader.onload = (e) => {
          const text = e.target?.result as string;
          if (text.length > 20000) {
            toast({
              variant: "destructive",
              title: "File Too Large",
              description: "The .txt file exceeds the 20,000 character limit.",
            });
            if(fileInputRef.current) fileInputRef.current.value = "";
            setIsProcessingFile(false);
            return;
          }
          form.setValue('documentContent', text);
          setUploadedFileName(file.name);
          toast({
            title: "TXT File Loaded",
            description: `Content from "${file.name}" has been loaded.`,
          });
          setIsProcessingFile(false);
        };
        reader.onerror = () => {
          toast({ variant: "destructive", title: "File Read Error", description: "Could not read the .txt file." });
          setIsProcessingFile(false);
        };
        reader.readAsText(file);
      } else if (file.type === "application/pdf" && pdfjs) {
        toast({ title: "Processing PDF", description: "Extracting text from PDF, please wait..." });
        try {
          const arrayBuffer = await file.arrayBuffer();
          const pdfDoc = await pdfjs.getDocument({ data: arrayBuffer }).promise;
          let fullText = '';
          for (let i = 1; i <= pdfDoc.numPages; i++) {
            const page = await pdfDoc.getPage(i);
            const textContent = await page.getTextContent();
            fullText += textContent.items.map(item => ('str' in item ? item.str : '')).join(' ') + '\n';
          }

          if (fullText.length > 20000) {
            toast({
              variant: "destructive",
              title: "PDF Content Too Large",
              description: "Extracted text from PDF exceeds 20,000 characters. Please use a smaller PDF or one with less text.",
            });
             if(fileInputRef.current) fileInputRef.current.value = "";
             setIsProcessingFile(false);
            return;
          }
          form.setValue('documentContent', fullText.trim());
          setUploadedFileName(file.name);
          toast({
            title: "PDF Loaded Successfully",
            description: `Text content from "${file.name}" has been extracted and loaded.`,
          });
        } catch (pdfError) {
          console.error("PDF processing error:", pdfError);
          toast({
            variant: "destructive",
            title: "PDF Processing Error",
            description: "Could not extract text from the PDF. The file might be corrupted, password-protected, or an image-only PDF.",
          });
           if(fileInputRef.current) fileInputRef.current.value = "";
        } finally {
          setIsProcessingFile(false);
        }
      } else {
        toast({
          variant: "destructive",
          title: "Invalid File Type",
          description: "Please upload a .txt or .pdf file.",
        });
        if(fileInputRef.current) fileInputRef.current.value = "";
        setIsProcessingFile(false);
      }
    }
  };

  const clearUploadedFile = () => {
    form.setValue('documentContent', '');
    setUploadedFileName(null);
    if(fileInputRef.current) {
      fileInputRef.current.value = ""; 
    }
    toast({
      title: "File Cleared",
      description: "Uploaded file content has been removed.",
    });
  };

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    setIsLoading(true);
    setResult(null);
    setError(null);
    setAnswersVisibility({});
    try {
      const output = await generateQuestionsFromDocument(data);
      setResult(output);
      if (output.questions && output.questions.length > 0) {
        const initialVisibility: Record<number, boolean> = {};
        output.questions.forEach((_, index) => {
          initialVisibility[index] = false;
        });
        setAnswersVisibility(initialVisibility);
      }
      toast({
        title: "Questions & Answers Generated!",
        description: `The AI has generated ${output.questions?.length || 0} Q&A pairs.`,
      });
    } catch (e) {
      const errorMsg = e instanceof Error ? e.message : 'An unknown error occurred.';
      setError(errorMsg);
      toast({
        variant: "destructive",
        title: "Error Generating Q&A",
        description: errorMsg,
      });
    } finally {
      setIsLoading(false);
    }
  };

  const toggleAnswerVisibility = (index: number) => {
    setAnswersVisibility(prev => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Generate Questions & Answers from Document</CardTitle>
          <CardDescription>Upload a .txt or .pdf file, or paste content. Then specify how many Q&A pairs you want the AI to generate.</CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <div className="space-y-2">
                <FormLabel htmlFor="file-upload">Upload .txt or .pdf File (Optional)</FormLabel>
                <div className="flex items-center gap-2">
                  <Input
                    id="file-upload"
                    type="file"
                    accept=".txt,.pdf"
                    onChange={handleFileChange}
                    ref={fileInputRef}
                    className="flex-grow"
                    aria-describedby="file-upload-help"
                    disabled={isProcessingFile}
                  />
                   {uploadedFileName && (
                    <Button variant="ghost" size="icon" onClick={clearUploadedFile} aria-label="Clear uploaded file" disabled={isProcessingFile}>
                      <XCircle className="h-5 w-5" />
                    </Button>
                  )}
                </div>
                <p id="file-upload-help" className="text-xs text-muted-foreground">Max 20,000 characters from extracted text. If a file is uploaded, its content will be used.</p>
                {isProcessingFile && (
                  <div className="flex items-center text-sm text-muted-foreground mt-2">
                    <LoadingDots dotClassName="bg-primary/70" />
                    <span className="ml-2">Processing file...</span>
                  </div>
                )}
                {uploadedFileName && !isProcessingFile && (
                  <Badge variant="secondary" className="mt-2 inline-flex items-center gap-1">
                    {uploadedFileName.endsWith('.pdf') ? <FileType className="h-3 w-3" /> : <FileText className="h-3 w-3" />}
                    Loaded: {uploadedFileName}
                  </Badge>
                )}
              </div>

              <FormField
                control={form.control}
                name="documentContent"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Document Content (or paste here if not uploading)</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Paste your document text here (100-20,000 characters)..."
                        {...field}
                        rows={10}
                        className="min-h-[200px]"
                        disabled={!!uploadedFileName || isProcessingFile} 
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="numberOfQuestions"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Number of Questions (1-10)</FormLabel>
                    <FormControl>
                      <Input type="number" min="1" max="10" {...field} disabled={isProcessingFile} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" disabled={isLoading || isProcessingFile} className="w-full md:w-auto">
                {isLoading ? <LoadingDots /> : (
                  <>
                    <FileQuestion className="mr-2 h-4 w-4" /> Generate Q&A
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

      {result && result.questions && result.questions.length > 0 && (
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <ListChecks className="h-6 w-6 text-primary" />
              Generated Questions & Answers
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {result.questions.map((qa, index) => (
              <div key={index} className="space-y-3 p-4 rounded-md border bg-muted/20">
                <div className="flex items-start gap-3">
                  <HelpCircle className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-foreground">Question {index + 1}:</p>
                    <p className="text-foreground whitespace-pre-wrap">{qa.questionText}</p>
                  </div>
                </div>
                
                <Button 
                  variant="outline" 
                  size="sm" 
                  onClick={() => toggleAnswerVisibility(index)}
                  className="my-2"
                  aria-expanded={answersVisibility[index]}
                >
                  {answersVisibility[index] ? (
                    <>
                      <EyeOff className="mr-2 h-4 w-4" /> Hide Answer
                    </>
                  ) : (
                    <>
                      <Eye className="mr-2 h-4 w-4" /> Show Answer
                    </>
                  )}
                </Button>

                {answersVisibility[index] && (
                  <>
                    <Separator />
                    <div className="flex items-start gap-3 pt-3">
                      <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-1" />
                       <div>
                        <p className="font-semibold text-foreground">Answer:</p>
                        <p className="text-muted-foreground whitespace-pre-wrap">{qa.answerText}</p>
                      </div>
                    </div>
                  </>
                )}
              </div>
            ))}
          </CardContent>
        </Card>
      )}
       {result && result.questions && result.questions.length === 0 && (
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Sparkles className="h-6 w-6 text-primary" />
              Generated Questions & Answers
            </CardTitle>
          </CardHeader>
          <CardContent>
             <p className="text-muted-foreground">The AI did not generate any Q&A for the provided content. Try refining the text or topic, or ensure the uploaded file is not empty.</p>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
