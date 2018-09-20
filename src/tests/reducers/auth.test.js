import authReducer from '../../reducers/auth';
import auth from '../fixtures/auth';

test( 'should set uid for logged in user', () => {   
  const uid = 'jiwnfiKJFJS';

  const action = {
    type: 'LOGIN',
    uid
  };

  const state = authReducer( auth, action );
  expect( state.uid ).toEqual( uid );
} );

test( 'should remove uid for logged out user', () => {   
  const empty = {};
  const action = {
    type: 'LOGOUT'
  };

  const state = authReducer( auth, action );
  expect( state ).toEqual( empty );
} );
