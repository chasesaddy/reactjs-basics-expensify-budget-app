import React from 'react';
import { shallow } from 'enzyme';
import ExpenseListItem from '../../components/ExpenseListItem';

import expenses from '../fixtures/expenses';

test( 'should render one ExpenseListItem from fixture data', () => { 
  const example = expenses[ 0 ];
  const wrapper = shallow( <ExpenseListItem key={ example.id } { ...example } /> );

  expect( wrapper ).toMatchSnapshot();
} );
