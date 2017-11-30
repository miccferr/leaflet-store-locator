import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import * as initialState from "./data.json";
import Menu from "./Menu.js";
import MyMap from "./Map.js";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { data: initialState.features, resellerTypeClicked: false };
    this.handleChange = (type, e) => {
      let newState = [
        ...initialState.features.filter(f => f.properties[type] == e.currentTarget.text),
      ];
      this.setState({
        data: newState,
      });
      // this.state.resellerTypeClicked ? this.handleFlag() : console.log("bod");
    };
    this.resetState = () => this.setState({ data: initialState.features });
    this.handleFlag = () => {
      let newClick = !this.state.resellerTypeClicked;
      console.log("new clicked", this.state.resellerTypeClicked);
      return this.setState({
        resellerTypeClicked: newClick,
      });
    };
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Menu
            data={this.state.data}
            resellerTypeClicked={this.state.resellerTypeClicked}
            handleChange={this.handleChange}
            handleFlag={this.handleFlag}
            resetState={this.resetState}
          />
        </header>
        <div id="map-container">
          <MyMap
            data={this.state.data}
            resellerTypeClicked={this.state.resellerTypeClicked}
            // handleFlag={this.handleFlag}
          />
        </div>
      </div>
    );
  }
}

export default App;
