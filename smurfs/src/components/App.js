import React, { Component } from "react";
import Smurfs from "./Smurfs";
import SmurfForm from "./SmurfForm";
import "./App.css";
class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>SMURFS! W/Redux</h1>
        <SmurfForm />
        <Smurfs />
      </div>
    );
  }
}

export default App;
