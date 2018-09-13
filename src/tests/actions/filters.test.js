import { setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate } from '../../actions/filters';

import moment from 'moment';

test( 'should generate set start date action object', () => {
  const randomDate = moment().startOf( 'month' );
  const action = setStartDate( randomDate );

  expect( action ).toEqual( {
    type: 'SET_START_DATE', 
    startDate: randomDate
  } );
} );

test( 'should generate set end date action object', () => {
  const randomDate = moment().startOf( 'month' );
  const action = setEndDate( randomDate );

  expect( action ).toEqual( {
    type: 'SET_END_DATE', 
    endDate: randomDate
  } );
} );

test( 'should generate sort by date action object', () => {
  const action = sortByDate();

  expect( action ).toEqual( {
    type: 'SORT_BY_DATE', 
  } );
} );

test( 'should generate sort by amount action object', () => {
  const action = sortByAmount();

  expect( action ).toEqual( {
    type: 'SORT_BY_AMOUNT', 
  } );
} );

test( 'should generate set text filter action object', () => {
  const text = 'blah';
  const action = setTextFilter( text );

  expect( action ).toEqual( {
    type: 'SET_TEXT_FILTER', 
    text
  } );
} );

test( 'should generate default text filter action object', () => {
  const action = setTextFilter();

  expect( action ).toEqual( {
    type: 'SET_TEXT_FILTER', 
    text: ''
  } );
} );
