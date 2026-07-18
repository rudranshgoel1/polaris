import { generateText } from "ai";
import { inngest } from "./client";
import { groq, type GroqLanguageModelOptions } from "@ai-sdk/groq";

export const demoGenerate = inngest.createFunction(
    { id: "demo-generate" },
    { event: "demo/generate" },
    async ({ step }) => {
        const result = await step.run("generate-text", async () => {
            const response = await generateText({
                model: groq('llama-3.3-70b-versatile'),
                providerOptions: {
                    groq: {
                        parallelToolCalls: true, // Enable parallel function calling (default: true)
                    } satisfies GroqLanguageModelOptions,
                },
                prompt: 'How many "r"s are in the word "strawberry"?',
            });
            return JSON.parse(JSON.stringify(response));
        });
    },
);