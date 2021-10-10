import React, { lazy, Suspense, useEffect, useState } from "react";
import { Router, Route, Switch, Redirect } from "react-router-dom";
import { createBrowserHistory } from "history";
import {
  StylesProvider,
  createGenerateClassName,
} from "@material-ui/core/styles";

import Header from "./components/Header";
import ProgressBar from "./components/ProgressBar";

// Lazy Imports
const AuthApp = lazy(() => import("./components/AuthApp"));
const MarketingApp = lazy(() => import("./components/MarketingApp"));
const DashboardApp = lazy(() => import("./components/DashboardApp"));

const generateClassName = createGenerateClassName({
  productionPrefix: "container",
});

const history = createBrowserHistory();

const App = () => {
  const [user, setUser] = useState(null);

  const logout = () => setUser(null);

  const onAuthChange = () => {
    setUser({
      id: 1,
      name: "Amruth Pillai",
      email: "im.amruth@gmail.com",
    });
  };

  useEffect(() => {
    if (user) {
      history.push("/dashboard");
    }
  }, [user]);

  return (
    <StylesProvider generateClassName={generateClassName}>
      <Router history={history}>
        <Header user={user} logout={logout} />

        <Suspense fallback={<ProgressBar />}>
          <Switch>
            <Route path="/auth">
              <AuthApp onAuthChange={onAuthChange} />
            </Route>
            <Route path="/dashboard">
              {!user && <Redirect to="/" />}
              <DashboardApp />
            </Route>
            <Route path="/" component={MarketingApp} />
          </Switch>
        </Suspense>
      </Router>
    </StylesProvider>
  );
};

export default App;
