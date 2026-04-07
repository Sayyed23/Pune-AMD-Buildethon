import { GoogleGenerativeAI } from "@google/generative-ai";
import { NextResponse } from "next/server";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || "");

const SYSTEM_PROMPT = `
You are "Biteza AI Coach", a personal food and health assistant. 
Your goal is to help users make smarter, healthier food choices in their daily lives.
Target users: Busy professionals, hostel/PG students, and fitness enthusiasts.

Guidelines:
1. Provide personalized, practical meal recommendations.
2. Be concise and encouraging.
3. Suggest healthy alternatives (e.g., "Instead of fried rice, try veg pulao").
4. Consider budget-friendly options for students (e.g., under ₹150-200).
5. Align suggestions with health goals like weight loss, muscle gain, or general wellness.
6. Use simple nutrition labels (High Protein, Low Sugar, etc.) rather than technical data.
7. Keep responses mobile-friendly and easy to scan.
`;

export async function POST(req: Request) {
  try {
    const { messages } = await req.json();
    
    if (!process.env.GEMINI_API_KEY) {
      return NextResponse.json(
        { error: "GEMINI_API_KEY is not configured" },
        { status: 500 }
      );
    }

    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    // Format historical messages for Gemini
    const history = messages.slice(0, -1).map((msg: any) => ({
      role: msg.role === "assistant" ? "model" : "user",
      parts: [{ text: msg.content }],
    }));

    const chat = model.startChat({
      history: [
        { role: "user", parts: [{ text: SYSTEM_PROMPT }] },
        { role: "model", parts: [{ text: "Understood. I am your Biteza AI Coach. How can I help you eat better today?" }] },
        ...history
      ],
    });

    const lastMessage = messages[messages.length - 1].content;
    const result = await chat.sendMessage(lastMessage);
    const response = await result.response;
    const text = response.text();

    return NextResponse.json({ content: text });
  } catch (error: any) {
    console.error("Gemini API Error:", error);
    return NextResponse.json(
      { error: "Failed to fetch response" },
      { status: 500 }
    );
  }
}
