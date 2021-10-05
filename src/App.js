import React from "react";
import Header from "./Components/Header";
import "./App.css";
import Snippets from "./Components/Snippets";
import Access from "./Components/Access";

const App = () => {
  return (
    <div className="app">
      <Header />
      <Snippets />
      <Access />
    </div>
  );
};

export default App;
