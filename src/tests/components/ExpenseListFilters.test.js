import React from 'react';
import { shallow } from 'enzyme';

import { ExpenseListFilters } from '../../components/ExpenseListFilters';

import { filters, moreFilters } from '../fixtures/filters';

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
  wrapper.find( 'input' ).at( 0 ).simulate( 'change', { target: { value: filters.text } } );

  expect( setTextFilter ).toHaveBeenLastCalledWith( filters.text );

  // expect( wrapper ).toMatchSnapshot();

  // 

  changePropData();

  wrapper.find( 'input' ).at( 0 ).simulate( 'change', { target: { value: filters.text } } );

  expect( setTextFilter ).toHaveBeenLastCalledWith( filters.text );

  expect( wrapper ).toMatchSnapshot();
} );

test( 'should sort by date', () => { 
  changePropData();

  wrapper.find( 'select' ).at( 0 ).simulate( 'change', { target: { value: filters.sortBy } } );

  expect( sortByDate ).toHaveBeenCalled();
} );

test( 'should sort by amount', () => { 
  changePropData();

  wrapper.find( 'select' ).at( 0 ).simulate( 'change', { target: { value: moreFilters.sortBy } } );

  expect( sortByAmount ).toHaveBeenCalled();
  expect( wrapper ).toMatchSnapshot();
} );

test( 'should handle date changes', () => { 
  wrapper.find( 'withStyles(DateRangePicker)' ).prop( 'onDatesChange' )( { startDate: filters.startDate, endDate: filters.endDate } );

  expect( setStartDate ).toHaveBeenCalledWith( filters.startDate );
  expect( setEndDate ).toHaveBeenCalledWith( filters.EndDate );
  // expect( wrapper ).toMatchSnapshot();

  //
  // actual date data
  changePropData();

  wrapper.find( 'withStyles(DateRangePicker)' ).prop( 'onDatesChange' )( { startDate: filters.startDate, endDate: filters.endDate } );

  expect( setStartDate ).toHaveBeenCalledWith( filters.startDate );
  expect( setEndDate ).toHaveBeenCalledWith( filters.EndDate );
  expect( wrapper ).toMatchSnapshot();
} );

test( 'should handle date focus changes', () => { 
  const calFocused = true;
  wrapper.find( 'withStyles(DateRangePicker)' ).prop( 'onFocusChange' )( calFocused );  

  expect( wrapper.state( 'calFocused' ) ).toEqual( calFocused );
  expect( wrapper ).toMatchSnapshot();
} );
