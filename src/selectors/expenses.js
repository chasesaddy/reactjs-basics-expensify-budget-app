
const getVisibleExpenses = ( expenses, { text, sortBy, startDate, endDate } ) => {
  return expenses.filter( ( solo ) => {
    // 
    const startDateMatched = startDateMatch( solo.createdAt, startDate );    
    const endDateMatched = endDateMatch( solo.createdAt, endDate );
    const textMatched = textMatch( solo.description, text );
    // const textMatched = true;

    console.log( solo.description );
    console.log( `start: ${ startDateMatched }` );
    console.log( `end: ${ endDateMatched }` );

    const test = typeof endDate !== 'number';
    const testTwo = solo.createdAt <= endDate;
    console.log( `test: ${ test }` );
    console.log( `testTwo: ${ testTwo }` );

    return startDateMatched && endDateMatched && textMatched;
  }).sort( ( a, b ) => {
    if ( sortBy == 'date' ) {
      return b.createdAt > a.createdAt ? 1 : -1;
    } else if ( sortBy == 'amount' ) {
      return b.amount > a.amount ? 1 : -1;
    }
  });
};

const startDateMatch = ( objCreatedDate, startDate ) => {
  return ( typeof startDate !== 'number' || objCreatedDate >= startDate );
};

const endDateMatch = ( objCreatedDate, endDate ) => {
  return ( typeof endDate !== 'number' || objCreatedDate <= endDate );
};

const textMatch = ( objText, text ) => {
  return ( typeof text !== 'string' || objText.toLowerCase().includes( text.toLowerCase() ) );
};

export default getVisibleExpenses;
