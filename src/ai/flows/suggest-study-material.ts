'use server';

/**
 * @fileOverview A study material recommendation AI agent.
 *
 * - suggestStudyMaterial - A function that handles the study material recommendation process.
 * - SuggestStudyMaterialInput - The input type for the suggestStudyMaterial function.
 * - SuggestStudyMaterialOutput - The return type for the suggestStudyMaterial function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SuggestStudyMaterialInputSchema = z.object({
  userProgress: z
    .string()
    .describe('The current progress of the user in the UPSC syllabus.'),
  syllabus: z.string().describe('The UPSC syllabus.'),
  topic: z.string().describe('The specific topic for which study material is needed.'),
});
export type SuggestStudyMaterialInput = z.infer<typeof SuggestStudyMaterialInputSchema>;

const SuggestStudyMaterialOutputSchema = z.object({
  recommendedMaterial: z
    .string()
    .describe('The recommended study material for the given topic.'),
  reasoning: z
    .string()
    .describe('The reasoning behind the recommended study material.'),
});
export type SuggestStudyMaterialOutput = z.infer<typeof SuggestStudyMaterialOutputSchema>;

export async function suggestStudyMaterial(
  input: SuggestStudyMaterialInput
): Promise<SuggestStudyMaterialOutput> {
  return suggestStudyMaterialFlow(input);
}

const prompt = ai.definePrompt({
  name: 'suggestStudyMaterialPrompt',
  input: {schema: SuggestStudyMaterialInputSchema},
  output: {schema: SuggestStudyMaterialOutputSchema},
  prompt: `You are an expert UPSC exam preparation guide.

You will use the user's current progress, the UPSC syllabus, and the specific topic to recommend the most relevant study material.

User Progress: {{{userProgress}}}
Syllabus: {{{syllabus}}}
Topic: {{{topic}}}

Based on the above information, recommend study material and explain your reasoning.`,
});

const suggestStudyMaterialFlow = ai.defineFlow(
  {
    name: 'suggestStudyMaterialFlow',
    inputSchema: SuggestStudyMaterialInputSchema,
    outputSchema: SuggestStudyMaterialOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
