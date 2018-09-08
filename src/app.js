import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import AppRouter from './routers/AppRouter';

import configureStore from './store/configureStore';
import { addExpense } from './actions/expenses';
import { setTextFilter } from './actions/filters';
import getVisibleExpenses from './selectors/expenses';

import 'normalize.css/normalize.css';
import './styles/styles.scss';

const store = configureStore();

store.subscribe( () => {
  const state = store.getState();
  const visibleExpenses = getVisibleExpenses( state.expenses, state.filters );
  console.log( 'visibleExpenses: ' );
  console.log( visibleExpenses );
});

store.dispatch( addExpense( { description : 'Water bill', note : 'what you think?', amount : 2500, createdAt : 250000 } ) );
store.dispatch( addExpense( { description : 'Gas bill', note : 'you smell something?', amount : 5050, createdAt : 5000 } ) );
// store.dispatch( setTextFilter( 'bill') );
// store.dispatch( setTextFilter( 'water' ) );

// setTimeout( () => {
//   store.dispatch( setTextFilter( 'bill' ) );
// }, 3000 );

const jsx = (
  <Provider store={ store }>
    <AppRouter />
  </Provider>
);

// ReactDOM.render( <AppRouter />, document.getElementById( 'app' ) );
ReactDOM.render( jsx, document.getElementById( 'app' ) );
