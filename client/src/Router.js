import React from "react";
import { Route, BrowserRouter, Switch, Redirect } from "react-router-dom";
import Welcome from "./pages/Welcome";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Notfound from "./pages/Notfound";

export default function router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Welcome} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
        <Route path="/not-found" component={Notfound} />
        <Redirect to="/not-found" />
      </Switch>
    </BrowserRouter>
  );
}
