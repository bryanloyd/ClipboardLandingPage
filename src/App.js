import React from "react";
import Header from "./Components/Header";
import "./App.css";
import Snippets from "./Components/Snippets";
import Access from "./Components/Access";
import Supercharge from "./Components/Supercharge";
import Companies from "./Components/Companies";

const App = () => {
  return (
    <div className="app">
      <Header />
      <Snippets />
      <Access />
      <Supercharge />
      <Companies />
    </div>
  );
};

export default App;
