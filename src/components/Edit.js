import React from 'react';
import { connect } from 'react-redux';

import ExpenseForm from './ExpenseForm';
import { editExpense, removeExpense } from '../actions/expenses';

const EditExpensePage = ( props ) => (
  <div>
    <ExpenseForm 
      expense={ props.expense }
      onSubmit={ ( oneExpense ) => {
        props.dispatch( editExpense( props.expense.id, oneExpense ) );
        props.history.push( '/' );
      }}
    />
    <button onClick={ () => {      
      const theId = props.expense.id;
      console.log( 'props expense', { id: theId } );
      props.dispatch( removeExpense( { id: theId } ) );
      props.history.push( '/' );
    }}>
      Remove
    </button>
  </div>
);

const mapStateToProps = ( state, props ) => {
  return {
    expense: state.expenses.find( ( oneExpense ) => oneExpense.id === props.match.params.id )
  };
};

export default connect( mapStateToProps )( EditExpensePage );
