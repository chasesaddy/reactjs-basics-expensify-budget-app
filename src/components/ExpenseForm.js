import React from 'react';

import moment from 'moment';
import 'react-dates/initialize';
import { SingleDatePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';

class ExpenseForm extends React.Component {
  state = {
    description: '',
    note: '',
    amount: '',
    createdAt: moment(),
    calFocused: false,
    errorMsg: ''
  };

  onDescriptionChange = ( e ) => {
    const description = e.target.value;
    this.setState( () => ( { description } ) );
  };

  onNoteChange = ( e ) => {
    const note = e.target.value;
    this.setState( () => ( { note } ) );
  };

  onAmountChange = ( e ) => {
    const amount = e.target.value;
    if ( !amount || amount.match(/^\d{1,}(\.\d{0,2})?$/) ) {
      this.setState( () => ( { amount } ) );
    }
  };

  onDateChange = ( createdAt ) => {
    if ( createdAt ) {
      this.setState( () => ( { createdAt } ) );
    }
  };

  onFocusChange  = ( { focused } ) => {
    this.setState( () => ( { calFocused: focused } ) );
  };

  onSubmit = ( e ) => {
    e.preventDefault();

    if ( !this.state.description || !this.state.amount ) {
      this.setState( () => ( { error: 'Need description and amount, please.' } ) );
    } else {
      this.setState( () => ( { error: '' } ) );
      console.log( 'Submitted' );
    }
  }

  render() {
    return (
      <div>
        
          { this.state.error && 
          <div className="errorMsg">{ this.state.error }</div>
          }        

        <form onSubmit={ this.onSubmit }>

          <input 
            type="text"
            placeholder="Description"
            autoFocus
            value={ this.state.description }
            onChange={ this.onDescriptionChange }
          />

          <input 
            type="text"
            placeholder="Amount"
            value={ this.state.amount }
            onChange={ this.onAmountChange }
          />

          <SingleDatePicker 
            date={ this.state.createdAt }
            onDateChange={ this.onDateChange }
            focused={ this.state.calFocused }
            onFocusChange={ this.onFocusChange }
            numberOfMonths={ 1 }
            isOutsideRange={ () => { false } }
          />

          <textarea
            placeholder="Add a note for your expense (optional)"
            value={ this.state.note }
            onChange={ this.onNoteChange }
          >
          </textarea>

          <button>
            Add Expense
          </button>

        </form>

      </div>
    )
  };
}

export default ExpenseForm;
