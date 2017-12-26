import React, { Component } from "react";
import "./StoresMenu.css";

class StoresMenu extends Component {
  render() {
    return (
      <div className="roboto">
        <h2> Stores List: </h2>
        <span className="center bottom-margin">
          <a className="button is-danger disabled" onClick={() => this.props.resetState()}>
            Reset
          </a>
        </span>
      </div>
    );
  }
}

export default StoresMenu;
