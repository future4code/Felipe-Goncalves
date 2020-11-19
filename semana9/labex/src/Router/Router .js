import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import ListTripsPage from "../components/ListTripsPage";
import LoginPage from "../components/LoginPage";
import Home from "../components/Home";
import ApplicationFormPage from "../components/ApplicationFormPage ";
import CreateTripPage from "../components/CreateTripPage";
import ProtectedRoute from "../components/ProtectedRoute";
import PageAdm from "../components/PageAdm";

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
        <ProtectedRoute exact path="/trips/create">
          <CreateTripPage />
        </ProtectedRoute>
        <ProtectedRoute exact path="/trips/list">
          <ListTripsPage />
        </ProtectedRoute>
        <ProtectedRoute exact path="/trip/page-adm">
          <PageAdm />
        </ProtectedRoute>
      </Switch>
    </BrowserRouter>
  );
}

export default Router;
