import React from "react";
import ReactDOM from "react-dom";
import App from "./main/app";
import { createStore } from "redux";
import reducers from "./main/reducers";
// import promise from "redux-promise";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

// const store = applyMiddleware(promise)(createStore)(reducers);

const store = createStore(reducers);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById("app")
);
