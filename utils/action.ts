import { GoogleGenerativeAI } from "@google/generative-ai";

interface Chat {
    role: "user" | "model";
    parts: string;
}

const genAI = new GoogleGenerativeAI("AIzaSyAjfXalBoObQnsFcNKmeGn67ot4w1nGb2s");

export async function run(prompt: string, history: Chat[]) {
    const model = genAI.getGenerativeModel({ model: "gemini-pro" })

    const chat = model.startChat({
        history: history,
        generationConfig: {
            maxOutputTokens: 1000,
        }
    })

    const result = await chat.sendMessage(prompt);
    const response = await result.response;
    const output = response.text()

    return output
}