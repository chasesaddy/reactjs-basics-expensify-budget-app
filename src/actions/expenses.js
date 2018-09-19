import uuid from 'uuid';
import db from '../firebase/firebase';

// 
//// Expenses
// 

// ADD_EXPENSE

const addExpense = ( expense ) => ({
  type: 'ADD_EXPENSE',
  expense
});

const startAddExpense = ( expenseData = {} ) => {
  return ( dispatch ) => {
    const {
      description = '',
      note = '',
      amount = 0,
      createdAt = 0
    } = expenseData;

    const expense = { description, note, amount, createdAt };

    return db.ref( 'expenses' ).push( expense ).then( ( ref ) => { 
      dispatch( addExpense( { 
        id: ref.key,
        ...expense
      } ) );
    } );
  };
};

// REMOVE_EXPENSE

const removeExpense = ({ id } = {}) => ({
  type: 'REMOVE_EXPENSE',
  id
});

const startRemoveExpense = ( { id } = {} ) => {
  return ( dispatch ) => {
    return db.ref( `expenses/${ id }` ).remove().then( ( ref ) => { 
      dispatch( removeExpense( { id } ) );
    } );
  };
};

// EDIT_EXPENSE

const editExpense = ( id, updates ) => ({
  type: 'EDIT_EXPENSE',
  id,
  updates
});

// SET_EXPENSES
const setExpenses = ( expenses ) => ( { 
  type: 'SET_EXPENSES',
  expenses
} );

const startSetExpenses = () => {
  return ( dispatch ) => {
    return db.ref( 'expenses' ).once( 'value' ).then( ( snapshot ) => { 
      const allExpenses = [];
      snapshot.forEach( ( solo ) => { 
        allExpenses.push( {
          id: solo.key,
          ...solo.val()
        } );
      } );      
      dispatch( setExpenses( allExpenses ) );
    } );
  };
};

export { addExpense, startAddExpense, removeExpense, startRemoveExpense, editExpense, setExpenses, startSetExpenses };
