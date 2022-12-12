import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { HashRouter as Router } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import ParticlesBg from "particles-bg";

ReactDOM.render(
  <Router>
    <App />
    <ParticlesBg type="square" bg={true} />
  </Router>,
  document.getElementById("root")
);

serviceWorker.unregister();
