import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Landing from './pages/Landing';
import Login from './pages/Login';
import UsersConfig from './pages/UsersConfig';
import UsersDetail from './pages/UsersDetail';


function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Landing} />
        <Route path="/login" component={Login} />
        <Route path="/users/config" component={UsersConfig} />
        <Route path="/users/detail" component={UsersDetail} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;