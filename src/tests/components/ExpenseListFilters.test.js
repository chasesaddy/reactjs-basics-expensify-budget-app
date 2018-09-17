import React from 'react';
import { shallow } from 'enzyme';

import { ExpenseListFilters } from '../../components/ExpenseListFilters';

import { filters, moreFilters } from '../fixtures/filters';

import moment from 'moment';

let wrapper, setStartDate, setEndDate, setTextFilter, sortByDate, sortByAmount;

const changePropData = () => {
  wrapper.setProps( { 
    filters: moreFilters 
  } );
}

beforeEach( () => {
  setStartDate = jest.fn();
  setEndDate = jest.fn();
  setTextFilter = jest.fn();
  sortByDate = jest.fn();
  sortByAmount = jest.fn();

  wrapper = shallow( <ExpenseListFilters 
      filters={ filters }
      setStartDate={ setStartDate }
      setEndDate={ setEndDate }
      setTextFilter={ setTextFilter }
      sortByDate={ sortByDate }
      sortByAmount={ sortByAmount }
    />
  );
} );

test( 'should render ExpenseListFilters correctly', () => { 
  expect( wrapper ).toMatchSnapshot();
} );

test( 'should render ExpenseListFilters with alt data correctly', () => { 
  changePropData();

  expect( wrapper ).toMatchSnapshot();
} );

test( 'should handle text change', () => { 
  const value = 'bill';

  wrapper.find( 'input' ).at( 0 ).simulate( 'change', { target: { value } } );

  expect( setTextFilter ).toHaveBeenLastCalledWith( value );
  expect( wrapper ).toMatchSnapshot();
} );

test( 'should sort by date', () => { 
  const value = 'date';
  // change current data to 'amount'
  changePropData();

  wrapper.find( 'select' ).at( 0 ).simulate( 'change', { target: { value: value } } );

  expect( sortByDate ).toHaveBeenCalled();
} );

test( 'should sort by amount', () => { 
  const value = 'amount';

  wrapper.find( 'select' ).at( 0 ).simulate( 'change', { target: { value } } );

  expect( sortByAmount ).toHaveBeenCalled();
  expect( wrapper ).toMatchSnapshot();
} );

test( 'should handle date changes', () => { 
  changePropData();

  const startDate = moment( 0 ).add( 4, 'days' );
  const endDate = moment( 0 ).add( 6, 'days' );

  wrapper.find( 'withStyles(DateRangePicker)' ).prop( 'onDatesChange' )( { startDate, endDate } );

  expect( setStartDate ).toHaveBeenCalledWith( startDate );
  expect( setEndDate ).toHaveBeenCalledWith( endDate );
  expect( wrapper ).toMatchSnapshot();
} );

test( 'should handle date focus changes', () => { 
  // const calFocused = 'startDate';
  const calFocused = 'endDate';

  wrapper.find( 'withStyles(DateRangePicker)' ).prop( 'onFocusChange' )( calFocused );  

  expect( wrapper.state( 'calFocused' ) ).toEqual( calFocused );
  expect( wrapper ).toMatchSnapshot();
} );
