import React from "react";
import { BrowserRouter } from "react-router-dom";

import Header from "./components/Header";
import MarketingApp from "./components/MarketingApp";

const App = () => (
  <BrowserRouter>
    <Header />
    <MarketingApp />
  </BrowserRouter>
);

export default App;
