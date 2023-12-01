import logo from './logo.svg';
import './App.css';
import RuseState from "./Components/RuseState";
import RuseRef from "./Components/RuseRef";
import {useState,useContext} from "react";

const testContext =  useContext(); // return object gồm provider & consumer

function App() {

  return (
    <div className="App">
      <RuseState/>
      <RuseRef/>
    </div>
  );
}

export default App;
