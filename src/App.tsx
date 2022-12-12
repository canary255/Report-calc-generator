import { useState } from "react";
import { PokemonReport } from "./page/PokemonReport";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="app">
      <PokemonReport />
    </div>
  );
}

export default App;
