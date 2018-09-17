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

test( '', () => { 

} );
