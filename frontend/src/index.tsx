import * as React from "react";
import * as ReactDOM from "react-dom";

import { BrowserRouter as Router } from "react-router-dom";
import { Main } from "./components/Main";
import { Provider } from "react-redux";
import store from "./store/index";
import "./index.css";

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Main />
    </Router>
  </Provider>,
  document.getElementById("root") as HTMLElement
);
