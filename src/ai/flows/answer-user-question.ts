
'use server';

/**
 * @fileOverview Provides answers and explanations to user questions related to UPSC topics.
 *
 * - answerUserQuestion - A function that takes a user's question and returns an answer and explanation.
 * - AnswerUserQuestionInput - The input type for the function.
 * - AnswerUserQuestionOutput - The return type for the function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const AnswerUserQuestionInputSchema = z.object({
  question: z.string().min(10, { message: 'Question must be at least 10 characters.' }).max(1000).describe('The user\'s question about a UPSC-related topic.'),
});
export type AnswerUserQuestionInput = z.infer<typeof AnswerUserQuestionInputSchema>;

const AnswerUserQuestionOutputSchema = z.object({
  answer: z.string().describe('A direct and comprehensive answer to the user\'s question.'),
  explanation: z.string().describe('A detailed explanation supporting the answer, providing context, relevant concepts, or further details.'),
});
export type AnswerUserQuestionOutput = z.infer<typeof AnswerUserQuestionOutputSchema>;

export async function answerUserQuestion(
  input: AnswerUserQuestionInput
): Promise<AnswerUserQuestionOutput> {
  return answerUserQuestionFlow(input);
}

const prompt = ai.definePrompt({
  name: 'answerUserQuestionPrompt',
  input: {schema: AnswerUserQuestionInputSchema},
  output: {schema: AnswerUserQuestionOutputSchema},
  prompt: `You are an expert UPSC exam tutor and subject matter expert. A user has a question.

User's Question: "{{question}}"

Please provide:
1.  \`answer\`: A clear, accurate, and comprehensive answer to the question.
2.  \`explanation\`: A detailed explanation that elaborates on the answer. This explanation should provide context, cite relevant concepts or facts if applicable, and help the user understand the topic thoroughly. Aim for educational value.

Structure your entire response as a JSON object that strictly adheres to the output schema.
Do not include any introductory or concluding remarks, or any text outside of the structured JSON response.
`,
});

const answerUserQuestionFlow = ai.defineFlow(
  {
    name: 'answerUserQuestionFlow',
    inputSchema: AnswerUserQuestionInputSchema,
    outputSchema: AnswerUserQuestionOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    if (!output) {
        throw new Error('Failed to generate an answer for the question.');
    }
    return output;
  }
);
