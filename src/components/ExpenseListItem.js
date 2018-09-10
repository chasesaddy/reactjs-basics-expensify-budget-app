import React from 'react';
import { Link } from 'react-router-dom';

const ExpenseListItem = ( { id, description, amount, createdAt } ) => (
  <div>
    <h3>
      <Link to={ `${ id }/edit` }>{ description }</Link>
    </h3>
    <p>{ amount } - { createdAt }</p>    
  </div>
);

export default ExpenseListItem;
