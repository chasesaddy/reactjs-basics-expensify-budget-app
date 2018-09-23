import React from 'react';
import { shallow } from 'enzyme';

import { ExpenseSummary } from '../../components/ExpenseSummary';

test( 'should show display for single expense', () => { 
  const shouldBe = 'Viewing 1 expense totalling $3.50';

  const wrapper = shallow(<ExpenseSummary expenseCount={ 1 } expensesTotal={ 350 } /> );
  const specificHtml = wrapper.find( 'div' ).at( 0 );

  expect( specificHtml.text() ).toBe( shouldBe );
  expect( wrapper ).toMatchSnapshot();
} );

test( 'should show display for multiple expenses', () => { 
  const shouldBe = 'Viewing 3 expenses totalling $81.40';

  const wrapper = shallow(<ExpenseSummary expenseCount={ 3 } expensesTotal={ 8140 } /> );
  const specificHtml = wrapper.find( 'div' ).at( 0 );

  expect( specificHtml.text() ).toBe( shouldBe );
  expect( wrapper ).toMatchSnapshot();
} );
