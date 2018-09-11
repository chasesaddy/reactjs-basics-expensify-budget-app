import moment from 'moment';

const getVisibleExpenses = ( expenses, { text, sortBy, startDate, endDate } ) => {
  return expenses.filter( ( solo ) => {
    
    const createdAtMoment = moment( solo.createdAt )

    const startDateMatched = startDate ? moment( startDate ).isSameOrBefore( createdAtMoment, 'day' ) : true;
    const endDateMatched = startDate ? moment( endDate ).isSameOrAfter( createdAtMoment, 'day' ) : true;
    const textMatched = textMatch( solo.description, text );

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
