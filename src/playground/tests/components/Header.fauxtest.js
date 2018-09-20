import React from 'react';
import { shallow } from 'enzyme';

// needs 3 ../
import Header from '../../../components/Header';

test( 'should render Header correctly', () => { 
  const wrapper = shallow( <Header /> );
  
  expect( wrapper ).toMatchSnapshot();

  expect( wrapper.find( 'h1' ).length ).toBe( 1 );
  expect( wrapper.find( 'h1' ).text() ).toBe( 'Expensify' );
} );
