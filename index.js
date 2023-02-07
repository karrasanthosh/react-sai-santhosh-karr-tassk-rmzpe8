import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";

import { store } from "./data___Helper";
import { App } from "./App";

// setup fake backend
import { configureFakeBackend } from "./data___Helper";
configureFakeBackend();

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("saiSan")
);
