import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';

import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/initialize';
// I guess this goes here for now as well?
import 'react-dates/lib/css/_datepicker.css';

const store = configureStore();

import './playground/sample-appjs-stuff';

const jsx = (
  <Provider store={ store }>
    <AppRouter />
  </Provider>
);

// ReactDOM.render( <AppRouter />, document.getElementById( 'app' ) );
ReactDOM.render( jsx, document.getElementById( 'app' ) );
