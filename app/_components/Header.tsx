"use client";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export const Header = ({ characterId }: { characterId: string }) => {
  const { push } = useRouter();

  return (
    <div>
      <Button onClick={() => push("/")}>home</Button>
      <Button onClick={() => push(`/aiChat/${characterId}`)}>chat</Button>
    </div>
  );
};
