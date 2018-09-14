import React from 'react';
import { shallow } from 'enzyme';

import { AddExpensePage } from '../../components/Add';

import expenses from '../fixtures/expenses';

let onSubmit, history, wrapper;
beforeEach( () => { 
  onSubmit = jest.fn();
  history = { push: jest.fn() };

  wrapper = shallow( <AddExpensePage onSubmit={ onSubmit } history={ history } /> );
} );

test( 'should render AddExpensePage correctly', () => { 
  expect( wrapper ).toMatchSnapshot();
} );

test( 'should handle onSubmit', () => { 
  const example = expenses[ 0 ];
  wrapper.find( 'ExpenseForm' ).prop( 'onSubmit' )( example );
  
  expect( history.push ).toHaveBeenLastCalledWith( '/' );
  expect( onSubmit ).toHaveBeenLastCalledWith( example );
} );
