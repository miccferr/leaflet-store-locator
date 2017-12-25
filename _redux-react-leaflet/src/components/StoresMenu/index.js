import React, { Component } from "react";
import "./StoresMenu.css";

class StoresMenu extends Component {
  render() {
    return (
      <div>
        <h3 className="stores-header"> Stores List: </h3>
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
