import React, { Component } from "react";
import "./Menu.css";

class Menu extends Component {
  constructor(props) {
    super();
    this._createSubMenu = function(type) {
      let filtered = [...new Set(props.data.map(f => f.properties[type]))];
      let items = filtered.map((f, i) => (
        <a
          key={i}
          className="navbar-item"
          href="#"
          onClick={e => {
            e.preventDefault();
            if (type == "resseller_type") {
              if (!this.props.resellerTypeClicked) {
                props.handleFlag();
                props.handleChange(type, e);
              } else {
                props.handleChange(type, e);
              }
            } else {
              if (!this.props.resellerTypeClicked) {
                props.handleChange(type, e);
              } else {
                props.handleFlag();
                props.handleChange(type, e);
              }
            }
          }}
        >
          {f}
        </a>
      ));
      return <div className="navbar-dropdown is-boxed">{items}</div>;
    };
    this.createMenuItem = (arr, objKey, i) => {
      console.log("objKey: ", objKey);
      console.log("III: ", i);
      console.log(arr[objKey]);
      return (
        <div key={i} className="navbar-item has-dropdown is-hoverable">
          <a className="navbar-item" href="/documentation/overview/start/">
            {objKey}
          </a>
          {this._createSubMenu(arr[objKey])}
        </div>
      );
    };
  }

  render() {
    const menuItems = {
      Postcode: "zip",
      Country: "country",
      "State/Province": "state_province",
      "Reseller Type": "resseller_type",
    };
    return (
      <nav className="navbar is-transparent">
        <div className="navbar-brand">
          <h4 className="navbar-item" href="https://bulma.io">
            React Leaflet Store Locator
          </h4>
          <div className="navbar-burger burger" data-target="navbarExampleTransparentExample">
            <span />
            <span />
            <span />
          </div>
        </div>

        <div id="navbarExampleTransparentExample" className="navbar-menu">
          {Object.keys(menuItems).map((objKey, i) => this.createMenuItem(menuItems, objKey, i))}
          <a className="navbar-item" href="#" onClick={() => this.props.resetState()}>
            Reset Filters
          </a>
        </div>
      </nav>
    );
  }
}

export default Menu;
