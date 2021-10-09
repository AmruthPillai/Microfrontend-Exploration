import React from "react";
import { Switch, Route, Router } from "react-router-dom";
import {
  StylesProvider,
  createGenerateClassName,
} from "@material-ui/core/styles";

import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";

const generateClassName = createGenerateClassName({
  productionPrefix: "auth",
});

const App = ({ history, onAuthChange }) => {
  return (
    <StylesProvider generateClassName={generateClassName}>
      <Router history={history}>
        <Switch>
          <Route path="/auth/signin">
            <SignIn onAuthChange={onAuthChange} />
          </Route>
          <Route path="/auth/signup">
            <SignUp onAuthChange={onAuthChange} />
          </Route>
        </Switch>
      </Router>
    </StylesProvider>
  );
};

export default App;
