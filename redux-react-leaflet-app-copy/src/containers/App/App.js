import React, { Component } from "react";
import "./App.css";
import * as initialState from "../../data.json";
import Menu from "../Menu/Menu.js";
import MyMap from "../../components/Map/Map.js";
import StoreLocMenu from "../../components/StoreLocMenu/StoreLocMenu.js";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: initialState.features,
      resellerTypeClicked: false,
      center: [],
      zoom: 2,
    };
    this.handleChange = (type, e) => {
      let newState = [
        ...initialState.features.filter(f => f.properties[type] == e.currentTarget.text),
      ];
      this.setState({
        data: newState,
      });
    };
    this.resetState = () => this.setState({ data: initialState.features, zoom: 2 });
    this.handleFlag = () => {
      this.setState({
        resellerTypeClicked: !this.state.resellerTypeClicked,
      });
    };
    this.centerOnStore = newCenter => {
      this.setState({
        center: [newCenter[1], newCenter[0]],
        zoom: 12,
      });
      console.log("newCenter: ", newCenter);
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
        <div className="columns">
          <div className="column is-one-quarter">
            <h1 id="menu-loc-title" className="item ">
              Our locations
            </h1>
            <StoreLocMenu storeLocs={this.state.data} centerOnStore={this.centerOnStore} />
          </div>
          <div className="column" />
          <div id="map-container">
            <MyMap
              data={this.state.data}
              center={this.state.center}
              zoom={this.state.zoom}
              resellerTypeClicked={this.state.resellerTypeClicked}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
