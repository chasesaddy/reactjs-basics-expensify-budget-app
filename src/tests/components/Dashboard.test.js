import React from 'react';
import { shallow } from 'enzyme';

import Dashboard from '../../components/Dashboard';

test( 'should render [simple] [Expense] Dashboard correctly', () => { 
  const wrapper = shallow( <Dashboard /> );
  
  expect( wrapper ).toMatchSnapshot();
} );
