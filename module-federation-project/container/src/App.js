import React, { lazy, Suspense, useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import {
  StylesProvider,
  createGenerateClassName,
} from "@material-ui/core/styles";

import Header from "./components/Header";
import ProgressBar from "./components/ProgressBar";

// Lazy Imports
const AuthApp = lazy(() => import("./components/AuthApp"));
const MarketingApp = lazy(() => import("./components/MarketingApp"));

const generateClassName = createGenerateClassName({
  productionPrefix: "container",
});

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

  return (
    <StylesProvider generateClassName={generateClassName}>
      <BrowserRouter>
        <Header user={user} logout={logout} />

        <Suspense fallback={<ProgressBar />}>
          <Switch>
            <Route path="/auth">
              <AuthApp onAuthChange={onAuthChange} />
            </Route>
            <Route path="/" component={MarketingApp} />
          </Switch>
        </Suspense>
      </BrowserRouter>
    </StylesProvider>
  );
};

export default App;
