import React from "react";
import { Router, Switch, Route } from "react-router-dom";

import WelcomePage from "./components/WelcomePage";

const App = ({ history }) => {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/dashboard" component={WelcomePage} />
      </Switch>
    </Router>
  );
};

export default App;
