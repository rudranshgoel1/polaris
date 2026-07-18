// POST localhost:3000/api/demo/blocking

import { generateText } from "ai";
import { groq, type GroqLanguageModelOptions } from "@ai-sdk/groq";

export async function POST() {
    const response = await generateText({
        model: groq('llama-3.3-70b-versatile'),
        providerOptions: {
            groq: {
                parallelToolCalls: true, // Enable parallel function calling (default: true)
            } satisfies GroqLanguageModelOptions,
        },
        prompt: 'How many "r"s are in the word "strawberry"?',
    });

    return Response.json({ response });
};