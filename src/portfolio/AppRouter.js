import React from 'react';

import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Header from './Header';
import PortfolioHome from './PortfolioHome';
import { PortfolioItemHome, PortfolioItem } from './PortfolioItem';
import ContactPage from  './ContactPage';

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route path="/portfolio" component={ PortfolioHome } exact={ true } />
        <Route path="/portfolio/items/:id" component={ PortfolioItem } />
        <Route path="/portfolio/items" component={ PortfolioItemHome } />
        <Route path="/portfolio/contact" component={ ContactPage } />
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;
