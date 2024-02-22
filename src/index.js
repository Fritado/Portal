import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./i18n";
import { Provider } from "react-redux";
import { Toaster } from "react-hot-toast";
import { store } from "./reducer/Store";

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
      <Toaster />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
