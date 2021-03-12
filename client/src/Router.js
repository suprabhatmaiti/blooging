import React from "react";
import { Route, BrowserRouter, Switch, Redirect } from "react-router-dom";
import Welcome from "./pages/Welcome";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Notfound from "./pages/Notfound";
import Header from "./components/Header";
import CreateBlog from "./pages/CreateBlog";
export default function router() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path="/" exact component={Welcome} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
        <Route path="/create" component={CreateBlog} />
        <Route path="/not-found" component={Notfound} />
        <Redirect to="/not-found" />
      </Switch>
    </BrowserRouter>
  );
}
