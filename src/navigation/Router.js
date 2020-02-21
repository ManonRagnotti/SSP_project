import {BrowserRouter as AppRouter, Route, Switch, Redirect} from "react-router-dom";
import React from "react";
import RegisterContainer from "../view/Register/RegisterContainer";
import Header from "../components/Header";
import UsersContainer from "../view/Users/UsersContainer";
import CarsContainer from "../view/Cars/CarsContainer";
import HotelsContainer from "../view/Hotels/HotelsContainer";
import LoginContainer from "../view/Login/LoginContainer";

import Planning from "../components/Planning/Planning";

const Router = () => {

  return (<AppRouter>
    <div className="app">
      <Header/>
      <Redirect from="/" to="login"/>
      <Switch>
        <Route path="/register">
          <RegisterContainer/>
        </Route>
        <Route path="/login">
          <LoginContainer/>
        </Route>
        <Route path="/users">
          <UsersContainer/>
        </Route>
        <Route path="/hotels">
          <HotelsContainer/>
        </Route>
        <Route path="/cars">
          <CarsContainer/>
        </Route>
        <Route path="/planning">
          <Planning/>
        </Route>
      </Switch>
    </div>
  </AppRouter>)
};

export default Router
