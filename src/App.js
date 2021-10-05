import React from "react";
import Header from "./Components/Header";
import "./App.css";
import Snippets from "./Components/Snippets";

const App = () => {
  return (
    <div className="app">
      <Header />
      <Snippets />
    </div>
  );
};

export default App;
