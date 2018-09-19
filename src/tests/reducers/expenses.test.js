import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses'

test( 'should set default value', () => { 
  const state = expensesReducer( undefined, { type: '@@INT' } );

  expect( state ).toEqual( [] );
} );

test( 'should remove expense by id', () => { 
  const action = {
    type: 'REMOVE_EXPENSE',
    id: expenses[ 1 ].id
  };

  const state = expensesReducer( expenses, action );
  expect( state ).toEqual( [ expenses[ 0 ], expenses[ 2 ] ] );
} );

test( 'should not remove expense if id is not found', () => { 
  const action = {
    type: 'REMOVE_EXPENSE',
    id: '987987'
  };

  const state = expensesReducer( expenses, action );
  expect( state ).toEqual( expenses );
} );


// add expense
test( 'should add expense', () => { 
  const expense = {
    description: 'another one',
    note: 'here we go',
    amount: 10,
    createdAt: 50
  }
  const action = {
    type: 'ADD_EXPENSE',
    expense
  };

  const state = expensesReducer( expenses, action );

  // Proper and best way. Didn't think of it!
  expect( state ).toEqual( [ ...expenses, expense ] );
  // My ways i thought of
  expect( state ).toHaveLength( 4 );
  expect( state[ state.length - 1 ].description ).toEqual( 'another one' );
} )


// edit expense
// don't edit if expense not found (id)
test( 'should edit expense', () => { 
  const updates = {
    description: 'and another one',
    note: 'and here we go',
    amount: 110,
    createdAt: 150
  }
  const action = {
    type: 'EDIT_EXPENSE',
    id: expenses[ 1 ].id,
    updates
  };

  const state = expensesReducer( expenses, action );
  expect( state[ 1 ] ).not.toEqual( expenses[ 1 ] );
  expect( state[ 1 ].description ).toBe( 'and another one' );
} );

test( 'should not edit expense if [id] not found', () => { 
  const updates = {
    description: 'yo and another one',
    note: 'yo and here we go',
    amount: 9110,
    createdAt: 9150
  };
  const action = {
    type: 'EDIT_EXPENSE',
    id: '789789',
    updates
  };

  const state = expensesReducer( expenses, action );
  expect( state ).toEqual( expenses );
} );

test( 'should set expenses (clearing out all old ones, I didn\'t get that at first', () => { 
  const someExpense = {
    description: '1 - yo and another one',
    note: 'yo and here we go',
    amount: 19110,
    createdAt: 19150
  };
  const action = {
    type: 'SET_EXPENSES',
    expenses: [ someExpense ]
  };

  const state = expensesReducer( expenses, action );
  expect( state ).toEqual( [ someExpense ] );
} );

test( 'should add expenses on (multiple) like what "set expenses" sounded like to me :(', () => { 
  const someExpenses = [{
    description: '1 - yo and another one',
    note: 'yo and here we go',
    amount: 19110,
    createdAt: 19150
  }, {
    description: '2 - the second settings',
    note: 'go for a second time fam',
    amount: 22000,
    createdAt: 29150
  }];
  const action = {
    type: 'ADD_EXPENSES',
    expenses: someExpenses
  };

  const state = expensesReducer( expenses, action );
  expect( state ).toEqual( [ ...expenses, ...someExpenses ] );
} );
