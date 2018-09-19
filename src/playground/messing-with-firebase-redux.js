import db from '../firebase/firebase';


const startSetExpenses = ( expenseData = {} ) => {
  return db.ref( 'expenses' ).once( 'value' ).then( ( snapshot ) => { 
    const data = [];
    snapshot.forEach( ( solo ) => { 
      data.push(
        {
          id: solo.key,
          ...solo.val()
        }
      )
    } );
    console.log( data );
  } );
};

// startSetExpenses();

const addExpense = ( expense ) => ({
  type: 'ADD_EXPENSE',
  expense
});

export const startAddExpense = ( expenseData = {} ) => {
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

// startAddExpense();
