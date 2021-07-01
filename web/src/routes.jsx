import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Landing from './pages/Landing';
import Login from './pages/Login';
import AdminLogin from './pages/admin/AdminLogin';
import Register from './pages/Register';

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/admin/login" component={AdminLogin} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;