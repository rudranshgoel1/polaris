// POST localhost:3000/api/demo/background

import { generateText } from "ai";
import { groq, type GroqLanguageModelOptions } from "@ai-sdk/groq";
import { inngest } from "@/inngest/client";

export async function POST() {
    const response = await inngest.send({
        name: "demo/generate",
        data: {},
    });

    return Response.json({ status: "started" });
};