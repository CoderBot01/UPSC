
'use server';

/**
 * @fileOverview AI flow for summarizing text.
 *
 * - summarizeText - A function that takes text and returns a summary.
 * - SummarizeTextInput - The input type for the function.
 * - SummarizeTextOutput - The return type for the function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SummarizeTextInputSchema = z.object({
  textToSummarize: z.string().min(50, {message: "Text must be at least 50 characters."}).max(20000, {message: "Text cannot exceed 20,000 characters."}).describe('The text content to be summarized.'),
});
export type SummarizeTextInput = z.infer<typeof SummarizeTextInputSchema>;

const SummarizeTextOutputSchema = z.object({
  summary: z.string().describe('The concise summary of the provided text.'),
});
export type SummarizeTextOutput = z.infer<typeof SummarizeTextOutputSchema>;

export async function summarizeText(
  input: SummarizeTextInput
): Promise<SummarizeTextOutput> {
  return summarizeTextFlow(input);
}

const prompt = ai.definePrompt({
  name: 'summarizeTextPrompt',
  input: {schema: SummarizeTextInputSchema},
  output: {schema: SummarizeTextOutputSchema},
  prompt: `You are an expert summarizer. Please provide a concise and informative summary of the following text.
Focus on extracting the key points, main arguments, and critical information. The summary should be easy to understand for a UPSC (Union Public Service Commission) aspirant who needs to quickly grasp the essence of the text for exam preparation.

Avoid jargon where possible or explain it briefly if essential. Ensure the summary is neutral and accurately reflects the content of the original text.

Text to Summarize:
{{{textToSummarize}}}

Provide only the summary as a string in the output.
`,
});

const summarizeTextFlow = ai.defineFlow(
  {
    name: 'summarizeTextFlow',
    inputSchema: SummarizeTextInputSchema,
    outputSchema: SummarizeTextOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    if (!output) {
        throw new Error('Failed to generate summary.');
    }
    return output;
  }
);
