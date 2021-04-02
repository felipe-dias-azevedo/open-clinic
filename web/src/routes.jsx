import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Landing from './pages/Landing';
import Login from './pages/Login';
import UsersConfig from './pages/UsersConfig';
import UserInsert from './pages/UserInsert';
import UserUpdate from './pages/UserUpdate';


function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Landing} />
        <Route path="/login" component={Login} />
        <Route path="/users/config" component={UsersConfig} />
        <Route path="/users/insert" exact component={UserInsert} />
        <Route path="/users/update/:id" component={UserUpdate} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;