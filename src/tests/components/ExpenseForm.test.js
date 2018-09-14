import React from 'react';
import { shallow } from 'enzyme';

import ExpenseForm from '../../components/ExpenseForm';
import expenses from '../fixtures/expenses';

import moment from 'moment';

test( 'should render ExpenseForm correctly', () => { 
  const wrapper = shallow( <ExpenseForm /> );

  expect( wrapper ).toMatchSnapshot();
} );

test( 'should render ExpenseForm correctly with data', () => { 
  const example = expenses[ 0 ];
  const wrapper = shallow( <ExpenseForm expense={ example } /> );

  expect( wrapper ).toMatchSnapshot();
} );

test( 'should render error for invalid form submission', () => { 
  const wrapper = shallow( <ExpenseForm /> );

  expect( wrapper ).toMatchSnapshot();

  wrapper.find( 'form' ).simulate( 'submit', { 
    preventDefault: () => { } 
  } );

  expect( wrapper.state( 'error' ).length ).toBeGreaterThan( 0 );
  expect( wrapper ).toMatchSnapshot();
} );

test( 'should set description on input change', () => { 
  const value = 'New description';
  const wrapper = shallow( <ExpenseForm /> );

  // I don't like using at. Would much prefer better specific thing like ID. Or class if it'll be unique. Like scraping.
  wrapper.find( 'input' ).at( 0 ).simulate( 'change', { 
    target: { value } 
  } );
  
  expect( wrapper.state( 'description' ) ).toBe( value ); 
} );

test( 'should set note on input change', () => {
  const value = 'New note';
  const wrapper = shallow( <ExpenseForm /> );

  wrapper.find( 'textarea' ).simulate( 'change', {
    target: { value }
  });

  expect( wrapper.state( 'note' ) ).toBe( value );
} );

test( 'should set valid amount on input change', () => {
  const value = '23.50';
  const wrapper = shallow( <ExpenseForm /> );

  wrapper.find( 'input' ).at( 1 ).simulate( 'change', {
    target: { value }
  });

  expect( wrapper.state( 'amount' ) ).toBe( value );
} );

test( 'should try to set invalid amount on input change', () => {
  const value = '12.222';
  const wrapper = shallow( <ExpenseForm /> );

  wrapper.find( 'input' ).at( 1 ).simulate( 'change', {
    target: { value }
  });

  expect( wrapper.state( 'amount' ) ).toBe( '' );
} );

test( 'should call onSubmit prop for dummy form submission', () => { 
  const onSubmitSpy = jest.fn();
  onSubmitSpy( 'Moi', 'Phillah' );
  expect( onSubmitSpy ).toHaveBeenCalledWith( 'Moi', 'Phillah' );
} );

test( 'should call onSubmit prop for valid form submission', () => { 
  const example = expenses[ 0 ];
  const onSubmitSpy = jest.fn();
  const wrapper = shallow( <ExpenseForm expense={ example } onSubmit={ onSubmitSpy } /> );
  wrapper.find( 'form' ).simulate( 'submit', { 
    preventDefault: () => { } 
  } );

  expect( wrapper.state( 'error' ) ).toBe( '' );
  expect( onSubmitSpy ).toHaveBeenLastCalledWith( { 
    description: example.description,
    note: example.note,
    amount: example.amount,
    createdAt: example.createdAt
  } );
} );

test( 'should set new data on date change', () => { 
  const now = moment();
  const wrapper = shallow( <ExpenseForm /> );

  // first way to make SingleDatePicker still not work as opposed to course not having an issue. This was from enzyme issue 184 comments.
  // wrapper.find( SingleDatePicker ).prop( 'onDateChange' )( now );
  // other way to make it work as opposed to course
  wrapper.find( 'withStyles(SingleDatePicker)' ).prop( 'onDateChange' )( now );

  expect( wrapper.state( 'createdAt' ) ).toEqual( now );
} );

test( 'should set proper data on focus change', () => { 
  const focused = true;
  const wrapper = shallow( <ExpenseForm /> );

  // first way to make SingleDatePicker still not work as opposed to course not having an issue. This was from enzyme issue 184 comments.
  // wrapper.find( SingleDatePicker ).prop( 'onFocusChange' )( theBool );
  // other way to make it work as opposed to course
  wrapper.find( 'withStyles(SingleDatePicker)' ).prop( 'onFocusChange' )( { focused } );

  expect( wrapper.state( 'calFocused' ) ).toEqual( focused );
} );
