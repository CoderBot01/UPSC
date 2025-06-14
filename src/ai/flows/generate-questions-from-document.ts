
'use server';

/**
 * @fileOverview AI flow for generating questions and answers from document content.
 *
 * - generateQuestionsFromDocument - A function that takes text and returns questions with answers.
 * - GenerateQuestionsFromDocumentInput - The input type for the function.
 * - GenerateQuestionsFromDocumentOutput - The return type for the function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateQuestionsFromDocumentInputSchema = z.object({
  documentContent: z.string().min(100, {message: "Document content must be at least 100 characters."}).max(20000, {message: "Document content cannot exceed 20,000 characters."}).describe('The text content from which to generate questions and answers.'),
  numberOfQuestions: z.number().min(1).max(10).default(3).describe('The desired number of questions to generate.'),
});
export type GenerateQuestionsFromDocumentInput = z.infer<typeof GenerateQuestionsFromDocumentInputSchema>;

const GeneratedQuestionSchema = z.object({
  questionText: z.string().describe("The text of the generated question."),
  answerText: z.string().describe("The answer to the generated question, derived from the document content."),
});

const GenerateQuestionsFromDocumentOutputSchema = z.object({
  questions: z.array(GeneratedQuestionSchema).describe('An array of generated questions, each with its corresponding answer.'),
});
export type GenerateQuestionsFromDocumentOutput = z.infer<typeof GenerateQuestionsFromDocumentOutputSchema>;

export async function generateQuestionsFromDocument(
  input: GenerateQuestionsFromDocumentInput
): Promise<GenerateQuestionsFromDocumentOutput> {
  return generateQuestionsFromDocumentFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateQuestionsFromDocumentPrompt',
  input: {schema: GenerateQuestionsFromDocumentInputSchema},
  output: {schema: GenerateQuestionsFromDocumentOutputSchema},
  prompt: `You are an expert question creator for UPSC (Union Public Service Commission) aspirants.
Based on the following document content, generate {{numberOfQuestions}} distinct and insightful questions that would be suitable for a UPSC aspirant to test their understanding of the material.
Focus on creating questions that require analytical thinking and comprehension of the core concepts presented in the text. Avoid overly simplistic or direct recall questions if the text allows for more depth.

For each question generated, you MUST also provide a concise answer based *solely* on the provided document content.

Document Content:
{{{documentContent}}}

Return the questions and their answers in the specified JSON output format, ensuring each object in the 'questions' array has both a 'questionText' and an 'answerText' field.
`,
});

const generateQuestionsFromDocumentFlow = ai.defineFlow(
  {
    name: 'generateQuestionsFromDocumentFlow',
    inputSchema: GenerateQuestionsFromDocumentInputSchema,
    outputSchema: GenerateQuestionsFromDocumentOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    if (!output || !output.questions) {
        throw new Error('Failed to generate questions and answers from the document.');
    }
    // Ensure each question has an answer, even if AI schema validation is very strict
    output.questions.forEach(q => {
      if (q.answerText === undefined) q.answerText = "No answer provided by AI.";
    });
    return output;
  }
);

