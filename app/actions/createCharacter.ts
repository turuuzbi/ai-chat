"use server";

import { prisma } from "@/lib/db";
import { revalidatePath } from "next/cache";

export const createCharacter = async (formData: FormData) => {
  const characterName = formData.get("characterName") as string;
  const systemPrompt = formData.get("systemPrompt") as string;

  if (!characterName) {
    throw new Error("Missing required fields");
  }

  await prisma.character.create({
    data: {
      characterName,
      systemPrompt,
    },
  });
  revalidatePath("/");
};
