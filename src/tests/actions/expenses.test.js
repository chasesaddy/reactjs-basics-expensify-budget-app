import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import { 
  addExpense, 
  startAddExpense, 
  removeExpense, 
  startRemoveExpense,
  editExpense, 
  startEditExpense, 
  setExpenses, 
  startSetExpenses } from '../../actions/expenses';

import expenses from '../fixtures/expenses';
import db from '../../firebase/firebase';

const uid = 'testuid123';
const defaultAuthState = { auth: { uid } };
const createMockStore = configureStore( [ thunk ] );

beforeEach( ( done ) => { 
  const expensesData = {};

  expenses.forEach( ( { id, description, note, amount, createdAt } ) => {
    expensesData[ id ] = { description, note, amount, createdAt };
  });

  db.ref( `users/${ uid }/expenses` ).set( expensesData ).then( () => { 
    done();
  } );
} );


// REMOVE

test( 'should setup remove expense action object', () => { 
  const action = removeExpense( { id: '123abc' } );
  expect( action ).toEqual( { 
    type: 'REMOVE_EXPENSE',
    id: '123abc'
  } );
} );

test( 'should remove expenses from firebase', ( done ) => { 
  const store = createMockStore( defaultAuthState );
  const example = expenses[ 0 ];  

  store.dispatch( startRemoveExpense( { id: example.id } ) ).then( () => { 
    // dispatch did happen/action correctly dispatched
    const actions = store.getActions();
    expect( actions[ 0 ] ).toEqual( { 
      type: 'REMOVE_EXPENSE',
      id: example.id
    } );

    // data was saved to db
    db.ref( `users/${ uid }/expenses/${ example.id }` ).once( 'value' ).then( ( snapshot ) => { 
      // both are equivalent
      // expect( snapshot.val() ).toEqual( null );
      expect( snapshot.val() ).toBeFalsy();
      done();
    } );
  } );
} );


// EDIT

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

test( 'should edit expenses from firebase', ( done ) => { 
  const store = createMockStore( defaultAuthState );
  const example = expenses[ 0 ];
  const updates = {
    description: 'lol',
    amount: 50
  };

  store.dispatch( startEditExpense( example.id, updates ) ).then( () => { 
    // dispatch did happen/action correctly dispatched
    const actions = store.getActions();
    expect( actions[ 0 ] ).toEqual( { 
      type: 'EDIT_EXPENSE',
      id: example.id,
      updates
    } );

    // data was saved to db
    return db.ref( `users/${ uid }/expenses/${ example.id }` ).once( 'value' ).then( ( snapshot ) => { 
      expect( snapshot.val() ).not.toEqual( example );
      expect( snapshot.val().description ).toEqual( updates.description );
      expect( snapshot.val().amount ).toEqual( updates.amount );
      done();
    } );

  } );
} );


// ADD

test( 'should setup add expense action object with provided values', () => { 
  const action = addExpense( expenses[ 2 ] );

  expect( action ).toEqual( {
    type: 'ADD_EXPENSE',
    expense: expenses[ 2 ]
  } );
} );

test( 'should add expense to database and store', ( done ) => { 
  const store = createMockStore( defaultAuthState );
  const expenseData = {
    description: 'Mouse',
    amount: 3000,
    note: 'This one is better',
    createdAt: 1000
  };

  store.dispatch( startAddExpense( expenseData ) ).then( () => { 
    // dispatch did happen/action correctly dispatched
    const actions = store.getActions();
    expect( actions[ 0 ] ).toEqual( { 
      type: 'ADD_EXPENSE',
      expense: {
        id: expect.any( String ),
        ...expenseData
      }
    } );

    // data was saved to db
    return db.ref( `users/${ uid }/expenses/${ actions[ 0 ].expense.id }` ).once( 'value' );
  } ).then((snapshot ) => { 
    expect( snapshot.val() ).toEqual( expenseData );
    done();
  } );
} );

test( 'should add expense with defaults to database and store', ( done ) => { 
  const store = createMockStore( defaultAuthState );
  const defaultData = {
    description: '',
    note: '',
    amount: 0,
    createdAt: 0
  };

  store.dispatch( startAddExpense( {} ) ).then( () => { 
    // dispatch did happen/action correctly dispatched
    const actions = store.getActions();
    expect( actions[ 0 ] ).toEqual( { 
      type: 'ADD_EXPENSE',
      expense: {
        id: expect.any( String ),
        ...defaultData
      }
    } );

    // data was saved to db
    return db.ref( `users/${ uid }/expenses/${ actions[ 0 ].expense.id }` ).once( 'value' );
  } ).then((snapshot ) => { 
    expect( snapshot.val() ).toEqual( defaultData );
    done();
  } );
} );


// SET

test( 'should setup set expense action object with data', () => { 
  const action = setExpenses( expenses );
  expect( action ).toEqual( { 
    type: 'SET_EXPENSES',
    expenses
  } );
} );

test( 'should fetch the expenses from firebase', ( done ) => { 
  const store = createMockStore( defaultAuthState );

  store.dispatch( startSetExpenses() ).then( () => { 
    const actions = store.getActions();
    expect( actions[ 0 ] ).toEqual( { 
      type: 'SET_EXPENSES',
      expenses
    } );
    done();
  } );
} );
