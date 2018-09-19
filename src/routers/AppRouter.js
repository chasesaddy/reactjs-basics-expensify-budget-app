import React from 'react';

import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Dashboard from '../components/Dashboard';
import Add from '../components/Add';
import Edit from '../components/Edit';
import Header from '../components/Header';
import { LoginPage } from '../components/LoginPage';
import HelpPage from '../components/HelpPage';
import NotFoundPage from '../components/NotFoundPage';

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route path="/" component={ LoginPage } exact={ true } />
        <Route path="/dashboard" component={ Dashboard } exact={ true } />
        <Route path="/create" component={ Add } exact={ true } />
        <Route path="/:id/edit" component={ Edit } exact={ true } />        
        <Route path="/help" component={ HelpPage } exact={ true } />
        <Route component={ NotFoundPage } />
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;
