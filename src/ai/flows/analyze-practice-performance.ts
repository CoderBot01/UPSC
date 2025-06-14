'use server';

/**
 * @fileOverview Analyzes user performance on practice questions and provides feedback.
 *
 * - analyzePracticePerformance - A function that analyzes performance and suggests improvements.
 * - AnalyzePracticePerformanceInput - The input type for the function.
 * - AnalyzePracticePerformanceOutput - The return type for the function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const AnalyzePracticePerformanceInputSchema = z.object({
  topic: z.string().describe('The topic of the practice questions.'),
  totalQuestions: z.number().describe('The total number of questions in the practice set.'),
  correctAnswers: z.number().describe('The number of questions the user answered correctly.'),
});
export type AnalyzePracticePerformanceInput = z.infer<typeof AnalyzePracticePerformanceInputSchema>;

const AnalyzePracticePerformanceOutputSchema = z.object({
  scoreSummary: z.string().describe('A brief summary of the user\'s score (e.g., "Good effort!", "Needs improvement").'),
  weaknessAnalysis: z.string().describe('Analysis of potential weak areas related to the topic based on the score. This should be constructive and encouraging.'),
  improvementSuggestions: z.string().describe('Actionable suggestions for how the user can improve on this topic.'),
  recommendedResources: z.array(z.string()).describe('A list of 2-3 specific book titles or resource types (e.g., "NCERT chapters on X", "Standard reference book Y") relevant to the topic for further study. Be specific if possible.'),
});
export type AnalyzePracticePerformanceOutput = z.infer<typeof AnalyzePracticePerformanceOutputSchema>;

export async function analyzePracticePerformance(
  input: AnalyzePracticePerformanceInput
): Promise<AnalyzePracticePerformanceOutput> {
  return analyzePracticePerformanceFlow(input);
}

const prompt = ai.definePrompt({
  name: 'analyzePracticePerformancePrompt',
  input: {schema: AnalyzePracticePerformanceInputSchema},
  output: {schema: AnalyzePracticePerformanceOutputSchema},
  prompt: `You are an expert UPSC exam tutor. A student has just completed a practice quiz on the topic: "{{topic}}".
They attempted {{totalQuestions}} questions and got {{correctAnswers}} correct.

Please provide an analysis of their performance including:
1.  A brief, encouraging score summary.
2.  An analysis of potential weak areas within the topic of "{{topic}}", inferring from the score. For example, if the score is low, they might need to revisit fundamentals. If it's moderate, they might struggle with application or specific sub-topics.
3.  Actionable suggestions for improvement on this topic.
4.  Recommend 2-3 specific and relevant study resources (like book titles or types of material) for the topic "{{topic}}". For example, "For Modern History, consider 'Spectrum's A Brief History of Modern India' or 'NCERT Class XII Themes in Indian History Part III'."

Keep the tone supportive and constructive.
The user's score is {{correctAnswers}} out of {{totalQuestions}}.
`,
});

const analyzePracticePerformanceFlow = ai.defineFlow(
  {
    name: 'analyzePracticePerformanceFlow',
    inputSchema: AnalyzePracticePerformanceInputSchema,
    outputSchema: AnalyzePracticePerformanceOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    if (!output) {
        throw new Error('Failed to generate performance analysis.');
    }
    return output;
  }
);
