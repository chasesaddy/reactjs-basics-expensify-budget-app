import moment from 'moment';

import selectExpenses from '../../selectors/expenses';
import expenses from '../fixtures/expenses'

const def = {
  text: '',
  sortBy: 'date',
  startDate: undefined,
  endDate: undefined
}

test( 'should filter by text value', () => { 
  const filters = {
    ...def,
    text: 'y'
  }

  const result = selectExpenses( expenses, filters );

  expect( result ).toEqual( [ expenses[ 1 ] ] );
} );

test( 'should filter by startDate', () => { 
  const filters = {    
    ...def,
    startDate: moment( 0 ).subtract( 1, 'days' )
  }

  const result = selectExpenses( expenses, filters );

  expect( result ).toEqual( [ expenses[ 1 ], expenses[ 2 ] ] )
} );

test( 'should filter by endDate', () => { 
  const filters = {    
    ...def,
    endDate: moment( 0 ).add( 2, 'days' )
  }

  const result = selectExpenses( expenses, filters );

  expect( result ).toEqual( [ expenses[ 2 ], expenses[ 0 ] ] )
} );

test( 'should sort by date', () => { 
  const filters = {    
    ...def
  }

  const result = selectExpenses( expenses, filters );

  expect( result ).toEqual( [ expenses[ 1 ], expenses[ 2 ], expenses[ 0 ] ] )
} );

test( 'should sort by amount', () => { 
  const filters = {    
    ...def,
    sortBy: 'amount'
  }

  const result = selectExpenses( expenses, filters );

  expect( result ).toEqual( [ expenses[ 2 ], expenses[ 1 ], expenses[ 0 ] ] )
} );


