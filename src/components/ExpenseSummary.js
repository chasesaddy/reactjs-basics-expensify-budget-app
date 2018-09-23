import React from 'react';
import { connect } from 'react-redux';
import numeral from 'numeraljs';

import selectExpenses from '../selectors/expenses';
import selectExpensesTotal from '../selectors/expenses-total';

export class ExpenseSummary extends React.Component {
  plural() {
    return this.props.expenseCount > 1 ? 'expenses' : 'expense';
  }
  totalAmount() {
    return numeral( this.props.expensesTotal / 100 ).format( '$0,0.00' );
  }

  render() {
    return (
      <div>
        Viewing { this.props.expenseCount } { this.plural() } totalling { this.totalAmount() }
      </div>
    );
  }
}

const mapStateToProps = ( state ) => {
  const visibleExpenses = selectExpenses( state.expenses, state.filters );

  return {
    expenseCount: visibleExpenses.length,
    expensesTotal: selectExpensesTotal( visibleExpenses )
  };
};

export default connect( mapStateToProps )( ExpenseSummary );
