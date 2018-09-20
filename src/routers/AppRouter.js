import React from 'react';

import { Router, Route, Switch } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';

import Dashboard from '../components/Dashboard';
import Add from '../components/Add';
import Edit from '../components/Edit';
import LoginPage from '../components/LoginPage';
import HelpPage from '../components/HelpPage';
import NotFoundPage from '../components/NotFoundPage';

import PrivateRoute from './PrivateRoute';

export const history = createHistory();

const AppRouter = () => (
  <Router history={ history }>
    <div>      
      <Switch>
        <Route path="/" component={ LoginPage } exact={ true } />
        <PrivateRoute path="/dashboard" component={ Dashboard } exact={ true } />
        <PrivateRoute path="/create" component={ Add } exact={ true } />
        <PrivateRoute path="/:id/edit" component={ Edit } exact={ true } />        
        <Route path="/help" component={ HelpPage } exact={ true } />
        <Route component={ NotFoundPage } />
      </Switch>
    </div>
  </Router>
);

export default AppRouter;
