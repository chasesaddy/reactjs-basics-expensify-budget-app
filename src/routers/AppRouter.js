import React from 'react';

import { Router, Route, Switch } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';

import Dashboard from '../components/Dashboard';
import Add from '../components/Add';
import Edit from '../components/Edit';
import LoginPage from '../components/LoginPage';
import NotFoundPage from '../components/NotFoundPage';

import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

export const history = createHistory();

const AppRouter = () => (
  <Router history={ history }>
    <div>      
      <Switch>
        <PublicRoute path="/" component={ LoginPage } exact={ true } />
        <PrivateRoute path="/dashboard" component={ Dashboard } exact={ true } />
        <PrivateRoute path="/create" component={ Add } exact={ true } />
        <PrivateRoute path="/:id/edit" component={ Edit } exact={ true } />
        <Route component={ NotFoundPage } />
      </Switch>
    </div>
  </Router>
);

export default AppRouter;
