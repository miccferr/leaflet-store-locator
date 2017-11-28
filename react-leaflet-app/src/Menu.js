import React, { Component } from "react";
import "./Menu.css";

// const geoSubMenu = () =>

class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = { data: props.data };
    this._createSubMenu = function(type) {
      let filtered = [...new Set(this.state.data.map(f => f.properties[type].toUpperCase()))];
      let items = filtered.map((f, i) => (
        <a key={i} className="navbar-item" href="/documentation/overview/start/">
          {f}
        </a>
      ));
      return <div className="navbar-dropdown is-boxed">{items}</div>;
    };
  }

  render() {
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
          <div className="navbar-item has-dropdown is-hoverable">
            <a className="navbar-item" href="/documentation/overview/start/">
              Postcode
            </a>
            {this._createSubMenu("zip")}
          </div>
          <div className="navbar-item has-dropdown is-hoverable">
            <a className="navbar-item" href="/documentation/overview/start/">
              Country
            </a>
            {this._createSubMenu("country")}
          </div>
          <div className="navbar-item has-dropdown is-hoverable">
            <a className="navbar-item" href="/documentation/overview/start/">
              State/Province
            </a>
            {this._createSubMenu("state_province")}
          </div>
          <div className="navbar-item has-dropdown is-hoverable">
            <a className="navbar-item" href="/documentation/overview/start/">
              Reseller Type
            </a>
            {this._createSubMenu("resseller_type")}
          </div>
        </div>
      </nav>
    );
  }
}

export default Menu;
