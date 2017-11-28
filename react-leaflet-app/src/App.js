import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import * as initialState from "./data.json";
import Menu from "./Menu.js";
import MyMap from "./Map.js";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = initialState;
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Menu data={this.state.features} />
        </header>
        <div id="map-container">
          <MyMap data={this.state.features} />
        </div>
      </div>
    );
  }
}

export default App;
