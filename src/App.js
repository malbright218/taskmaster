import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Add from "./Components/Add"
import Tile from "./Components/Tile";
import Clock from "./Components/Clock";

function App() {
  return (
    <div className="container">
      <Clock />
      <Add />
      <div className="row">
        <Tile />
        <Tile />
        <Tile />
      </div>
      <div className="row">
        <Tile />
        <Tile />
        <Tile />
      </div>
      <div className="row">
        <Tile />
        <Tile />
        <Tile />
      </div>
    </div>
  );
}

export default App;
