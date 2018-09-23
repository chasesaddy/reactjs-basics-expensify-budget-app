import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
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
      <div className="page-header">
        <div className="content-container">
          <h1 className="page-header__title">Viewing <span>{ this.props.expenseCount }</span > { this.plural() } totalling <span>{ this.totalAmount() }</span></h1>
          <div className="page-header__actions">
            <Link className="button" to="/create">Add Expense</Link>
          </div>
        </div>
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
