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

export { setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate };
