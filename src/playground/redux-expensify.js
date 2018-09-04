import { createStore, combineReducers } from 'redux';
import uuid from 'uuid';

// ADD_EXPENSE

const addExpense = (
  {
    description = '', 
    note = '', 
    amount = 0, 
    createdAt = 0
  } = {} 
) => ({
  type: 'ADD_EXPENSE',
  expense: {
    id: uuid(),
    description,
    note,
    amount,
    createdAt
  }
});

// REMOVE_EXPENSE

const removeExpense = ( { id } = {} ) => ({ 
  type: 'REMOVE_EXPENSE',
  id
});

//
//// TODO:
//

// EDIT_EXPENSE

// SET_TEXT_FILTERS
// SORT_BY_DATE
// SORT_BY_AMOUNT
// SET_START_DATE
// SET_END_DATE


//
//// Reducers
//

// Expenses Reducer

const expensesReducerDefaultState = [];

const expensesReducer = ( state = expensesReducerDefaultState, action ) => {
  switch ( action.type ) {
  case 'ADD_EXPENSE':
    return [
      ...state, action.expense
    ];
  case 'REMOVE_EXPENSE':    
    return state.filter( ( oneExpense ) => oneExpense.id !== action.id );
    // Could have done destructuring. Didn't think of that.
    // return state.filter( ( { id } ) => id !== action.id );
  default:
    return state;
  }
};

// Filters Reducer
const filterReducerDefaultState = {
  text: '',
  sortBy: 'date',
  startDate: undefined,
  endDate: undefined
};

const filterReducer = ( state = filterReducerDefaultState, action ) => {
  switch( action.type ) {
  default:
    console.log( action.type );
    return state;
  }
};

//
//// Other 
//

const store = createStore(
  combineReducers({
    expenses: expensesReducer,
    filters: filterReducer
  })
);

store.subscribe( () => {
  console.log( store.getState() );
});

const expenseOne = store.dispatch(
  addExpense( { description: 'Rent', amount: 100000 } )
);

console.log( 'expenseOne:' );
console.log( expenseOne );

const expenseTwo = store.dispatch(
  addExpense({ description: 'Coffee', amount: 300 })
);

store.dispatch( removeExpense( { id: expenseOne.expense.id } ) );


//
//// demo
//

const demoState = {
  expenses: [
    {
      id: 'asdf',
      description: 'Jan rent',
      note: 'I am a lulz for you',
      amount: 54500,
      createdAt: 0
    }
  ],
  filters: {
    text: 'rent',
    sortBy: 'amount', // date or amount
    startDate: undefined,
    endDate: undefined
  }
};
