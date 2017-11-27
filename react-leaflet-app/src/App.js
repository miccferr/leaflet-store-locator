import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import * as initialState from "./data.json";
import Menu from "./Menu.js";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = initialState;
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Menu />
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
