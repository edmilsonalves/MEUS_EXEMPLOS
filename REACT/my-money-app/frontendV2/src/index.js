import React from "react";
import ReactDOM from "react-dom";
import App from "./main/app";
import { createStore } from "redux";
import recucers from "./main/reducers";
import { Provider } from "react-redux";

const store = createStore(recucers);
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("app")
);
