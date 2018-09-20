import React from 'react';
import { shallow } from 'enzyme';

import { Header } from '../../components/Header';

test( 'should render [simple] Header correctly', () => { 
  const startLogout = jest.fn();

  const wrapper = shallow( <Header startLogout={ startLogout } /> );

  wrapper.find( 'button' ).simulate( 'click' );
  
  expect( startLogout ).toHaveBeenCalled();
  
  expect( wrapper ).toMatchSnapshot();
} );
