import React from "react";
import ReactDOM from "react-dom";
import App from "./containers/App/App.js";
import registerServiceWorker from "./registerServiceWorker";
// import "./reducers.js";

ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();
