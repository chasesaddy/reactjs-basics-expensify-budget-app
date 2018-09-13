import moment from 'moment';

import filtersReducer from '../../reducers/filters';

const def = { 
    text: '',
    sortBy: 'date',
    startDate: moment().startOf( 'month' ),
    endDate: moment().endOf( 'month' )
  }

test( 'should setup default filter values', () => { 
  const state = filtersReducer( undefined, { type: '@@INT' } );

  expect( state ).toEqual( def );
} );

test( 'should set sortBY to amount', () => { 
  const state = filtersReducer( undefined, { type: 'SORT_BY_AMOUNT' } );

  expect( state.sortBy ).toBe( 'amount' );
} );

test( 'should set sortBY to date (when notde default', () => { 
  const state = filtersReducer( 
    { ...def, sortBy: 'amount' }, 
    { type: 'SORT_BY_DATE' } 
  );

  expect( state.sortBy ).toBe( 'date' );
} );

test( 'should set text to be a text filter', () => { 
  const text = 'hi';

  const action = { 
    type: 'SET_TEXT_FILTER', 
    text
  };

  const state = filtersReducer( undefined, action );

  expect( state.text ).toBe( text );
} );

test( 'should set start date to the date', () => { 
  const dateExample = moment().startOf( 'month' );

  const action = { 
    type: 'SET_START_DATE', 
    startDate: dateExample 
  }

  const state = filtersReducer( undefined, action );

  expect( state.startDate ).toEqual( dateExample );
} );

test( 'should set end date to the date', () => { 
  const dateExample = moment().endOf( 'month' );

  const action = { 
    type: 'SET_END_DATE', 
    endDate: dateExample 
  }

  const state = filtersReducer( undefined, action );

  expect( state.endDate ).toEqual( dateExample );
} );