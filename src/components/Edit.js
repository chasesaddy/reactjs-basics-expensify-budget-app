import React from 'react';
import { connect } from 'react-redux';

import ExpenseForm from './ExpenseForm';
import { startEditExpense, startRemoveExpense } from '../actions/expenses';

export class EditExpensePage extends React.Component {
  onSubmit = ( oneExpense ) => {
    this.props.startEditExpense( this.props.expense.id, oneExpense );
    this.props.history.push( '/' );
  };

  onClick = () => { 
    const theId = this.props.expense.id;
    
    this.props.startRemoveExpense( { id: theId } );
    this.props.history.push( '/' );
  };


  render() {
    return (
      <div>
        <div className="page-header">
          <div className="content-container">
            <h1 className="page-header__title">Edit Expense</h1>
          </div>
        </div>
        <div className="content-container">
          <ExpenseForm
            expense={ this.props.expense }
            onSubmit={ this.onSubmit }
          />
          <button className="button button--secondary" onClick={ this.onClick }>Remove Expense</button>
        </div>

      </div>
    );
  };
}

const mapStateToProps = ( state, props ) => ( {
  expense: state.expenses.find( ( oneExpense ) => oneExpense.id === props.match.params.id )
} );

const mapDispatchToProps = ( dispatch, props ) => ( { 
  startEditExpense: ( theId, oneExpense ) => dispatch( startEditExpense( theId, oneExpense ) ),  
  startRemoveExpense: ( theId ) => dispatch( startRemoveExpense( theId ) )
} );

export default connect( mapStateToProps, mapDispatchToProps )( EditExpensePage );
