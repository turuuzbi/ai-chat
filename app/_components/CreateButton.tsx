"use client";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export default function CreateButton() {
  const { push } = useRouter();
  return (
    <Button onClick={() => push("/addCharacter")}>Create a Character</Button>
  );
}
