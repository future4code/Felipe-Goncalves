import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import ListTripsPage from "../components/ListTripsPage";
import LoginPage from "../components/LoginPage";
import Home from "../components/Home";
import ApplicationFormPage from "../components/ApplicationFormPage ";
import CreateTripPage from "../components/CreateTripPage";

function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/login">
          <LoginPage />
        </Route>
        <Route exact path="/application-form">
          <ApplicationFormPage />
        </Route>
        <Route exact path="/trips/create">
          <CreateTripPage />
        </Route>
        <Route exact path="/trips/list">
          <ListTripsPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default Router;
