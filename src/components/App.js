import React from "react";
import Important from "../components/Important";
import BrainDump from "../components/BrainDump";
import HourlySched from "../components/HourlySched";


function App() {
  return (

    <div className="app">
    <h1 className="heading">Your Time-Box</h1>
      <Important />
      <BrainDump />
      <HourlySched />    
      <footer className="copyright">
        <h4 id="copyright">©2023 Made by Delton Hughes</h4>
      </footer>
    </div>
    
  );
}

export default App;
