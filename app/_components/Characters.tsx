import { prisma } from "@/lib/db";

export const Characters = async () => {
  const characters = await prisma.character.findMany();
  return (
    <div>
      {characters.map((c) => {
        return (
          <div key={c.id}>
            <div>{c.characterName}</div>
          </div>
        );
      })}
    </div>
  );
};
