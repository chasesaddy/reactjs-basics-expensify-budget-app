import moment from 'moment';

const getVisibleExpenses = ( expenses, { text, sortBy, startDate, endDate } ) => {
  return expenses.filter( ( solo ) => {
    
    const createdAtMoment = moment( solo.createdAt );

    const startDateMatched = startDateMatch( createdAtMoment, startDate );
    const endDateMatched = endDateMatch( createdAtMoment, endDate );
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

const startDateMatch = ( createdAtMoment, startDate ) => {
  return startDate ? moment( startDate ).isSameOrBefore( createdAtMoment, 'day' ) : true;
};

const endDateMatch = ( createdAtMoment, endDate ) => {
  return endDate ? moment( endDate ).isSameOrAfter( createdAtMoment, 'day' ) : true;
};

const textMatch = ( objText, text ) => {
  return ( typeof text !== 'string' || objText.toLowerCase().includes( text.toLowerCase() ) );
};

export default getVisibleExpenses;
