import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter, Route, Switch } from 'react-router-dom';

import 'normalize.css/normalize.css';

import './styles/styles.scss';

const ExpenseDashboardPage = () => (
  <div>
    This is from my dashboard component
    
    <ul>
      <li>
        <a href="/create">Create</a>
      </li>
      <li>
        <a href="/edit">Edit</a>
      </li>
      <li>
        <a href="/help">Help</a>
      </li>
    </ul>
  </div>
);

const AddExpensePage = () => (
  <div>
    This is from my add expense component
  </div>
);

const EditExpensePage = () => (
  <div>
    This is the edit expense component
  </div>
);

const HelpPage = () => (
  <div>
    The help page.
  </div>
);

const NotFoundPage = () => (
  <div>
    404
  </div>
);

const routes = (
  <BrowserRouter>  
    <Switch>
      <Route path="/" component={ ExpenseDashboardPage } exact={ true } />
      <Route path="/create" component={ AddExpensePage } exact={ true } />
      <Route path="/edit" component={ EditExpensePage } exact={ true } />
      <Route path="/help" component={ HelpPage } exact={ true } />
      <Route component={ NotFoundPage } />
    </Switch>
  </BrowserRouter>
);

ReactDOM.render( routes, document.getElementById( 'app' ) );
