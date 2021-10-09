import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";

import App from "./App";

export const mount = (el, { history }) => {
  ReactDOM.render(<App history={history} />, el);
};

if (process.env.NODE_ENV === "development") {
  const devRoot = document.querySelector("#dashboard-dev");

  devRoot && mount(devRoot, { history: createBrowserHistory() });
}
