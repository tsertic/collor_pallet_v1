import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import seedColors from "./seedColors";
import "./App.css";
import Palette from "./Palette";

function App() {
  return (
    <div>
      <Palette palette={seedColors[5]} />
    </div>
  );
}

export default App;
