// Expenses Reducer

const expensesReducerDefaultState = [];

const expensesReducer = ( state = expensesReducerDefaultState, action ) => {
  switch ( action.type ) {
  case 'ADD_EXPENSE':
    return [
      ...state, action.expense
    ];
  case 'REMOVE_EXPENSE': 
    console.log( 'here' );
    console.log( action.id );
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

export default expensesReducer;
