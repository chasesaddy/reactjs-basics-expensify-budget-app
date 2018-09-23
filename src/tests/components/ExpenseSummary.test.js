import React from 'react';
import { shallow } from 'enzyme';

import { ExpenseSummary } from '../../components/ExpenseSummary';

import expenses from '../fixtures/expenses';

test( 'should show display for single expense', () => { 
  const example = [ expenses[ 0 ] ];
  const shouldBe = 'Viewing 1 expense totalling $3.50';

  const wrapper = shallow( <ExpenseSummary expenses={ example } /> );
  const specificHtml = wrapper.find( 'div' ).at( 0 );

  expect( specificHtml.text() ).toBe( shouldBe );
  expect( wrapper ).toMatchSnapshot();
} );

test( 'should show display for multiple expenses', () => { 
  const example = expenses.slice( 0, 3 );
  const shouldBe = 'Viewing 3 expenses totalling $81.40';

  const wrapper = shallow( <ExpenseSummary expenses={ example } /> );
  const specificHtml = wrapper.find( 'div' ).at( 0 );

  expect( specificHtml.text() ).toBe( shouldBe );
  expect( wrapper ).toMatchSnapshot();
} );
