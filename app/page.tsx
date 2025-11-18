import { Characters } from "./_components/Characters";
import CreateButton from "./_components/CreateButton";

export default function Home() {
  return (
    <div>
      <div>Choose a Character</div>
      <Characters />
      <CreateButton />
    </div>
  );
}
