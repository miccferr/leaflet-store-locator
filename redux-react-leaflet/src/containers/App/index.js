import React, { Component } from "react";
import { connect } from "react-redux";
import { setCenter, resetState } from "../../redux/action-creators.js";

import "./index.css";
import StoreList from "../StoresList";
import MyMap from "../../components/Map";
import StoresMenu from "../../components/StoresMenu/index";

class App extends Component {
  render() {
    return (
      <div className="columns">
        <div className="column is-one-third">
          <StoresMenu resetState={this.props.resetState} />
          <StoreList setCenter={this.props.setCenter} data={this.props.data} />
        </div>
        <div className="column is-two-thirds">
          <MyMap
            center={this.props.options.center}
            data={this.props.data}
            zoom={this.props.options.zoom}
          />
        </div>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    resetState: () => dispatch(resetState()),
    setCenter: i => {
      console.log(i);
      dispatch(setCenter(i));
    },
  };
}

function mapStateToProps(state) {
  return {
    data: state.data,
    options: state.options,
  };
}

App = connect(mapStateToProps, mapDispatchToProps)(App);

export default App;
