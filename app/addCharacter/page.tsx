import { CreateCharacter } from "../_components/createCharacter";
import { Header } from "../_components/Header";

const Page = () => {
  return (
    <div>
      <Header />
      <div>Create a Character</div>
      <CreateCharacter />
    </div>
  );
};
export default Page;
