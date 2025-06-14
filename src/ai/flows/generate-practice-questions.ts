// This file is machine-generated - DO NOT EDIT.

'use server';

/**
 * @fileOverview Practice question generator for the UPSC exam.
 *
 * - generatePracticeQuestions - A function that generates practice questions on a given topic.
 * - GeneratePracticeQuestionsInput - The input type for the generatePracticeQuestions function.
 * - GeneratePracticeQuestionsOutput - The return type for the generatePracticeQuestions function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GeneratePracticeQuestionsInputSchema = z.object({
  topic: z.string().describe('The topic for which to generate practice questions.'),
  examFormat: z
    .string()
    .describe('The format of the UPSC exam, e.g., multiple choice, essay, etc. For interactive mode, MCQs are preferred.'),
  numberQuestions: z
    .number()
    .min(1)
    .max(10) // Limit the number of questions
    .default(5)
    .describe('The number of practice questions to generate.'),
});
export type GeneratePracticeQuestionsInput = z.infer<
  typeof GeneratePracticeQuestionsInputSchema
>;

const QuestionSchema = z.object({
  questionText: z.string().describe("The text of the practice question."),
  options: z.array(z.string()).min(3).max(5).describe("An array of 3 to 5 answer options for the question."),
  correctAnswerIndex: z.number().describe("The 0-based index of the correct answer in the 'options' array."),
  explanation: z.string().describe("A concise explanation of why the correct answer is correct and/or why other options might be incorrect.")
});

const GeneratePracticeQuestionsOutputSchema = z.object({
  questions: z.array(QuestionSchema).describe('An array of practice questions, each with text, options, correct answer index, and explanation.'),
});
export type GeneratePracticeQuestionsOutput = z.infer<
  typeof GeneratePracticeQuestionsOutputSchema
>;

export async function generatePracticeQuestions(
  input: GeneratePracticeQuestionsInput
): Promise<GeneratePracticeQuestionsOutput> {
  return generatePracticeQuestionsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generatePracticeQuestionsPrompt',
  input: {schema: GeneratePracticeQuestionsInputSchema},
  output: {schema: GeneratePracticeQuestionsOutputSchema},
  prompt: `You are an expert in generating practice questions for the UPSC exam.

  Generate {{numberQuestions}} practice questions on the topic of "{{topic}}".
  The questions should be in a multiple-choice format, suitable for the "{{examFormat}}".

  For each question, you MUST provide the following in a structured format:
  1.  \`questionText\`: The text of the question.
  2.  \`options\`: An array of 4 distinct string options.
  3.  \`correctAnswerIndex\`: A 0-based index (0, 1, 2, or 3) indicating which option is correct relative to the 'options' array.
  4.  \`explanation\`: A concise explanation detailing why the correct answer is indeed correct. If relevant, also explain why common distractors are incorrect.

  Ensure your entire response is a JSON object that strictly adheres to the output schema, containing an array of these question objects under the "questions" key.
  Do not include any introductory or concluding remarks, or any text outside of the structured JSON response.
  `,
});

const generatePracticeQuestionsFlow = ai.defineFlow(
  {
    name: 'generatePracticeQuestionsFlow',
    inputSchema: GeneratePracticeQuestionsInputSchema,
    outputSchema: GeneratePracticeQuestionsOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    if (!output || !output.questions) {
      throw new Error('Failed to generate questions or the output was not in the expected format.');
    }
    // Ensure each question has options, even if AI fails (though schema should catch this)
    output.questions.forEach(q => {
      if (!q.options) q.options = [];
    });
    return output;
  }
);

