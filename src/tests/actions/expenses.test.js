import { addExpense, removeExpense, editExpense, startAddExpense } from '../../actions/expenses';
import expenses from '../fixtures/expenses';

import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';

const createMockStore = configureStore( [ thunk ] );

test( 'should setup remove expense action object', () => { 
  const action = removeExpense( { id: '123abc' } );
  expect( action ).toEqual( { 
    type: 'REMOVE_EXPENSE',
    id: '123abc'
  } );
} );

test( 'should setup edit expense action object', () => {   
  const action = editExpense( 
    '123abc', 
    { 
      description: 'lol', 
      amount: 50 
    } );

  expect( action ).toEqual( {
    type: 'EDIT_EXPENSE',
    id: '123abc',
    updates: { 
      description: 'lol', 
      amount: 50 
    }
  } );
} );

test( 'should setup add expense action object with provided values', () => { 
  const action = addExpense( expenses[ 2 ] );

  expect( action ).toEqual( {
    type: 'ADD_EXPENSE',
    expense: expenses[ 2 ]
  } );
} );

test( 'should add expense to database and store', ( done ) => { 
  const initialState = {}
  const store = createMockStore( initialState );
  const expenseData = {
    description: 'Mouse',
    amount: 3000,
    note: 'This one is better',
    createdAt: 1000
  };

  store.dispatch( startAddExpense( expenseData ) ).then( () => { 
    expect( 1 ).toBe( 1 );
    done();
  } );
} );

test( 'should add expense with defaults to database and store', () => { 
  
} );

// test( 'should setup add expense action object with default values', () => { 
//   const action = addExpense();

//   expect( action ).toEqual( {
//     type: 'ADD_EXPENSE',
//     expense: {
//       id: expect.any( String ),
//       description: '',
//       note: '',
//       amount: 0,
//       createdAt: 0
//     }
//   } );
// } );
