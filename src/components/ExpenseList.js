import React from 'react';
import { connect } from 'react-redux';

const ExpenseList = ( props ) => (
  <div>
    <h1>
      Expense List
    </h1>

    <div>
      <ul>
        { props.filters.text }
        { props.expenses.map( ( solo ) => <li key={ solo.id }>{ solo.description }</li> ) }
      </ul>
    </div>
  </div>
);

const mapStateToProps = ( state ) => {
  return {
    expenses: state.expenses
    , filters: state.filters
  };
};

export default connect( mapStateToProps )( ExpenseList );
