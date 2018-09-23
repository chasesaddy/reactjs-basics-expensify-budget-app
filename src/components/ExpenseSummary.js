import React from 'react';
import { connect } from 'react-redux';
import numeral from 'numeraljs';

import selectExpenses from '../selectors/expenses';
import selectExpensesTotal from '../selectors/expenses-total';
import { expensesCount } from '../selectors/expenses-total';

export class ExpenseSummary extends React.Component {
  count() {
    return expensesCount( this.props.expenses );
  }
  plural() {
    return this.count() > 1 ? 'expenses' : 'expense';
  }
  totalAmount() {
    const amount = selectExpensesTotal( this.props.expenses );
    return numeral( amount / 100 ).format( '$0,0.00' );
  }

  render() {
    return (
      <div>
        Viewing { this.count() } { this.plural() } totalling { this.totalAmount() }
      </div>
    );
  }
}

const mapStateToProps = ( state ) => {
  return {    
    expenses: selectExpenses( state.expenses, state.filters )
  };
};

export default connect( mapStateToProps )( ExpenseSummary );
