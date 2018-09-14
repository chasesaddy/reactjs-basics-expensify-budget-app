import React from 'react';
import { connect } from 'react-redux';

import ExpenseForm from './ExpenseForm';
import { addExpense } from '../actions/expenses';

export class AddExpensePage extends React.Component {
  onSubmit = ( oneExpense ) => {    
    this.props.onSubmit( oneExpense );
    this.props.history.push( '/' );
  };

  render() {
    return (
      <div>
        <h1>
          Add Expense
        </h1>

        <ExpenseForm 
          onSubmit={ this.onSubmit }
        />
      </div>
    );
  };
}

const mapsDispatchToProps = ( dispatch ) => ( {
  onSubmit: ( expense ) => dispatch( addExpense ( expense ) )
} );

export default connect( undefined, mapsDispatchToProps )( AddExpensePage );
