import { BrowserRouter, Switch, Route } from "react-router-dom";
import React, { useState } from "react";
import LoginPage from "../components/LoginPage";
import FeedPage from "../components/FeedPage";
import RegistrationPage from "../components/RegistrationPage";
import PostPage from "../components/PostPage";

export default function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <LoginPage />
        </Route>
        <Route exact path="/registrationPage">
          <RegistrationPage />
        </Route>
        <Route exact path="/feedPage">
          <FeedPage />
        </Route>
        <Route exact path="/postPage/:id">
          <PostPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
