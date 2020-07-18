import React from "react";
import "./style.css";
import { DarkModeProvider } from "./DarkModeContext";
import Navbar from "./navbar";
import Contect from "./content";

function App() {

  return (
    <div className="App">
      <DarkModeProvider>
       <Navbar />
       <Contect />
      </DarkModeProvider>
    </div>
  );
}

export default App;
