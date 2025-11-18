import { GoogleGenerativeAI } from "@google/generative-ai";
import { prisma } from "@/lib/db";
import { NextResponse } from "next/server";

const genAI = new GoogleGenerativeAI("AIzaSyBbzY6wmauGt8z3Suzjxbc5Q3fqpB5jii0");
const ai = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });

export const POST = async (
  req: Request,
  context: { params: Promise<{ characterId: string }> }
) => {
  const { characterId } = await context.params;
  const { message } = await req.json();

  const character = await prisma.character.findUnique({
    where: { id: characterId },
  });

  if (!character)
    return NextResponse.json({ error: "Character not found" }, { status: 404 });

  const prompt = [
    {
      role: "user",
      parts: [{ text: `System Instruction:\n${character.systemPrompt}` }],
    },
    {
      role: "user",
      parts: [{ text: message }],
    },
  ];
  const result = await ai.generateContent({
    contents: prompt,
  });
  const reply = result.response.text();

  await prisma.message.createMany({
    data: [
      { role: "user", content: message, characterId },
      { role: "assistant", content: reply, characterId },
    ],
  });
};
