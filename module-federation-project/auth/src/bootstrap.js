import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";

import App from "./App";

export const mount = (el, { history, onAuthChange }) => {
  ReactDOM.render(<App history={history} onAuthChange={onAuthChange} />, el);
};

if (process.env.NODE_ENV === "development") {
  const devRoot = document.querySelector("#auth-dev");

  devRoot && mount(devRoot, { history: createBrowserHistory() });
}
