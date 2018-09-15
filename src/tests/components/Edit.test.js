import React from 'react';
import { shallow } from 'enzyme';

import { EditExpensePage } from '../../components/Edit';

import expenses from '../fixtures/expenses';

let editExpense, removeExpense, history, wrapper, example;
beforeEach( () => { 
  editExpense = jest.fn();
  removeExpense = jest.fn();
  
  history = { push: jest.fn() };

  example = expenses[ 0 ];

  wrapper = shallow( <EditExpensePage 
    expense={ example } 
    history={ history } 
    editExpense={ editExpense } 
    removeExpense={ removeExpense } 
  /> )
} );

test( 'should render EditExpensePage correctly', () => { 
  expect( wrapper ).toMatchSnapshot();
} );

test( 'should handle onSubmit which is editExpense', () => {   
  wrapper.find( 'ExpenseForm' ).prop( 'onSubmit' )( example );

  expect( history.push ).toHaveBeenLastCalledWith( '/' );
  expect( editExpense ).toHaveBeenLastCalledWith( example.id, example );
} );

test( 'should handle onClick which is removeExpense', () => { 
  wrapper.find( 'button' ).prop( 'onClick' )();

  expect( history.push ).toHaveBeenLastCalledWith( '/' );
  expect( removeExpense ).toHaveBeenLastCalledWith( example.id );
} );
