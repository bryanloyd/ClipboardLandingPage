import React from "react";
import Header from "./Components/Header";
import "./App.css";
import Snippets from "./Components/Snippets";
import Access from "./Components/Access";
import Supercharge from "./Components/Supercharge";

const App = () => {
  return (
    <div className="app">
      <Header />
      <Snippets />
      <Access />
      <Supercharge />
    </div>
  );
};

export default App;
