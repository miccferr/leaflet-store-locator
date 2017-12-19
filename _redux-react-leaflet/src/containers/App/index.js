import React, { Component } from "react";
import { Provider } from "react-redux";
import { store } from "../../redux/store";
import "./index.css";
import Menu from "../Menu";
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="columns">
          <div className="column is-one-third">
            <Menu />
          </div>
          <div className="column is-two-thirds">asdasd</div>
        </div>
      </Provider>
    );
  }
}

export default App;
