import { Characters } from "./_components/Characters";
import CreateButton from "./_components/CreateButton";
import { Header } from "./_components/Header";

export default function Home() {
  return (
    <div>
      <Header />
      <div>Choose a Character</div>
      <Characters />
      <CreateButton />
    </div>
  );
}
