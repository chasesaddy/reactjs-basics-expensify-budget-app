const selectExpensesTotal = ( expenses = [] ) => {
  const amounts = expenses.map( ( solo ) => solo.amount );
  const reducer = ( addedUp, current ) => addedUp + current;
  return amounts.reduce( reducer, 0 );
};

export const expensesCount = ( expenses = [] ) => {
  return expenses.length;
};

export default selectExpensesTotal;
