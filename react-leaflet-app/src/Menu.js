import React, { Component } from "react";
import "./Menu.css";

// const geoSubMenu = () =>
const Test = text => <b>{JSON.stringify(text.text)}</b>;
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
      // this.setState({ data: filtered }
      return <div className="navbar-dropdown is-boxed">{items}</div>;
    };
  }

  render() {
    return (
      <nav className="navbar is-transparent">
        <div className="navbar-brand">
          <h4 className="navbar-item" href="https://bulma.io">
            React Leaflet Store Locator
            {console.log("PROOOOOPS", this.props)}
            <Test text={this.props.resellerTypeClicked} />
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
          <a className="navbar-item" href="#" onClick={() => this.props.resetState()}>
            Reset Filters
          </a>
        </div>
      </nav>
    );
  }
}

export default Menu;
