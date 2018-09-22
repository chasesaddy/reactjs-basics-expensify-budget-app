import selectExpensesTotal from '../../selectors/expenses-total.js';
import expenses from '../fixtures/expenses';

test( 'should return 0 if no expenses', () => { 
  const example = [];
  expect( selectExpensesTotal( example ) ).toBe( 0 );
} );

test( 'should correctly add up a single expense', () => { 
  const example = [ expenses[ 0 ] ];
  // expect( selectExpensesTotal( example ) ).toBe( example.amount );
  expect( selectExpensesTotal( example ) ).toBe( 350 );
} );

test( 'should correctly add up multiple expenses', () => { 
  const example = expenses.slice( 0, 3 );
  const amountsTotal = example.map( ( solo ) => solo.amount );
  const total = amountsTotal[ 0 ] + amountsTotal[ 1 ] + amountsTotal[ 2 ];
  // expect( selectExpensesTotal( example ) ).toBe( total );
  expect( selectExpensesTotal( example ) ).toBe( 8140 );
} );
