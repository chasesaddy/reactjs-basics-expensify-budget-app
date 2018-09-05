import { createStore, combineReducers } from 'redux';
import uuid from 'uuid';

// 
//// Expenses
// 

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

// EDIT_EXPENSE

const editExpense = ( id, updates ) => ({
  type: 'EDIT_EXPENSE',
  id,
  updates
});


//
//// Filters
//

// SET_TEXT_FILTERS

const setTextFilter = ( text ) => ({
  type: 'SET_TEXT_FILTER',
  text
});

// SORT_BY_DATE
const sortByDate = () => ({
  type: 'SORT_BY_DATE',
});

// SORT_BY_AMOUNT

const sortByAmount = () => ({
  type: 'SORT_BY_AMOUNT',
});

// SET_START_DATE

const setStartDate = ( date ) => ({
  type: 'SET_START_DATE',
  startDate: date
});

// SET_END_DATE

const setEndDate = ( date ) => ({
  type: 'SET_END_DATE',
  endDate: date
});


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
  case 'EDIT_EXPENSE': 
    return state.map( ( oneExpense ) => {
      if ( oneExpense.id === action.id ) {
        return {
          ...oneExpense,
          ...action.updates
        };
      } else {
        return oneExpense;
      }
    });
  default:
    // will print filterReducer action.type
    console.log( action.type );
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
  case 'SET_TEXT_FILTER':
    return {
      ...state,
      text: action.text
    };
  case 'SORT_BY_DATE':
    return {
      ...state,
      sortBy: 'date'
    };
  case 'SORT_BY_AMOUNT':
    return {
      ...state,
      sortBy: 'amount'
    };
  case 'SET_START_DATE':
    return {
      ...state,
      startDate: action.startDate
    };
  case 'SET_END_DATE':
    return {
      ...state,
      endDate: action.endDate
    };
  default:
    // will print expenseReducer action.type
    console.log( action.type );
    return state;
  }
};


//
//// Store creation
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


//
//// Calling methods
//

const expenseOne = store.dispatch(
  addExpense( { description: 'Rent', amount: 100000 } )
);

const expenseTwo = store.dispatch(
  addExpense( { description: 'Coffee', amount: 300 } )
);

console.log( 'expenseOne (doesn\'t show in middleware: ' );
console.log( expenseOne );
store.dispatch( removeExpense( { id: expenseOne.expense.id } ) );

store.dispatch( editExpense( expenseTwo.expense.id, { amount: 500 } ) );

store.dispatch( setTextFilter( 'rent' ) );
store.dispatch( setTextFilter( '' ) );

store.dispatch( sortByAmount() );
store.dispatch( sortByDate() );

store.dispatch( setStartDate( 125 ) );
store.dispatch( setStartDate() );
store.dispatch( setEndDate( 1250 ) );


//
//// Examples/Demo
//

// example properties
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


// Spreading Objects

// example object
const user = {
  name: 'Kim',
  age: 27
};

// Simple spread object syntax and just showing result of the object
// console.log({
//   ...user
// });
// {name: "Kim", age: 27}

// Placing properties after spreading the object overrides them
// console.log({
//   ...user, location: 'Philly', age: 28
// });
// {name: "Kim", age: 28, location: "Philly"}

// Does not override if property is placed before the spreading object
// console.log({
//   age: 28, ...user, location: 'Philly'
// });
// {age: 27, name: "Kim", location: "Philly"}
