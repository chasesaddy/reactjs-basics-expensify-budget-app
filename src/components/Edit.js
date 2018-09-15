import React from 'react';
import { connect } from 'react-redux';

import ExpenseForm from './ExpenseForm';
import { editExpense, removeExpense } from '../actions/expenses';

class EditExpensePage extends React.Component {
  onSubmit = ( oneExpense ) => {
    this.props.onSubmit( this.props.expense.id, oneExpense );
    this.props.history.push( '/' );
  };

  onClick = () => {      
    const theId = this.props.expense.id;
    // console.log( 'props expense', { id: theId } );
    
    this.props.onClick( theId );
    this.props.history.push( '/' );
  };
  

  render() {
    return (
      <div>
        <ExpenseForm 
          expense={ props.expense }
          onSubmit={ this.onSubmit }
        />
        <button onClick={ this.onClick }>
          Remove
        </button>
      </div>
    );
  };
}

const mapStateToProps = ( state, props ) => {
  return {
    expense: state.expenses.find( ( oneExpense ) => oneExpense.id === props.match.params.id )
  };
};

const mapDispatchToProps = ( dispatch ) => ( { 
  onSubmit: ( theId, oneExpense ) => dispatch( editExpense( theId, oneExpense ) ),
  onClick: ( theId ) => dispatch( removeExpense( { id: theId } ) )
} );

export default connect( mapStateToProps )( EditExpensePage );
