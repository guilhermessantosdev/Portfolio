import { useState } from "react";
import Navbar from "./components/header/Navbar";
import Profile from "./components/header/Profile";
import Certificados from "./components/main/Certificados";
import Habilidades from "./components/main/Habilidades";
import Contatos from "./components/footer/Contatos";
import Matrix from "./components/Matrix";

function App() {
  const [count, setCount] = useState(0);
  return (
    <>
      <Matrix />
      <Navbar />
      <Profile />
      <Certificados />
      <Habilidades />
      <Contatos />
    </>
  );
}
export default App;
