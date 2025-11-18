import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { createCharacter } from "../actions/createCharacter";

export const CreateCharacter = () => {
  return (
    <form action={createCharacter}>
      <Input placeholder="Name" name="characterName"></Input>
      <Input placeholder="System Prompt" name="systemPrompt"></Input>
      <Button>Create character</Button>
    </form>
  );
};
