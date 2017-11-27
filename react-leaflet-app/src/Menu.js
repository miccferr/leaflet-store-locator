import React from "react";
import "./Menu.css";

const Menu = props => {
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
        <div className="navbar-start">
          <a className="navbar-item" href="https://bulma.io/">
            Home
          </a>
          <div className="navbar-item has-dropdown is-hoverable">
            <a className="navbar-link" href="/documentation/overview/start/">
              Docs
            </a>
            <div className="navbar-dropdown is-boxed">
              <a className="navbar-item" href="/documentation/overview/start/">
                Overview
              </a>
              <a className="navbar-item" href="https://bulma.io/documentation/modifiers/syntax/">
                Modifiers
              </a>
              <a className="navbar-item" href="https://bulma.io/documentation/columns/basics/">
                Columns
              </a>
              <a className="navbar-item" href="https://bulma.io/documentation/layout/container/">
                Layout
              </a>
              <a className="navbar-item" href="https://bulma.io/documentation/form/general/">
                Form
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Menu;
