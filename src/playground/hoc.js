// Higher Order Component (HOC) - A component, HOC component (like a regular React component), that renders another component
// Reuse code
// Render hijacking
// Prop manipulation
// Abstract state

import React from 'react';
import ReactDOM from 'react-dom';

const Info = ( props ) => (
  <div>
    <h1>
      Info
    </h1>
    <p>
      The info is: { props.info }
    </p>
  </div>
);

const withAdminWarning = ( WrappedComponent ) => {
  const lol = ( props ) => (
    <div>
      { props.isAdmin && <p>This is private info. Please don't share!</p> }
      <WrappedComponent { ...props } />
    </div>
  );

  return lol;
};

const requireAuthentication = ( WrappedComponent ) => {
  const lol = ( props ) => (
    <div>
      { props.isAuthenticated ? (
        <WrappedComponent { ...props } />
      ) : (
        <p>Sorry fam!</p>
      ) }
    </div>
  );

  return lol;
};

const AuthInfo = requireAuthentication( Info );

const AdminInfo = withAdminWarning( Info );

// ReactDOM.render( <AdminInfo isAdmin={ false } info="These are the details you are looking for" />, document.getElementById( 'app' ) );

ReactDOM.render(<AuthInfo isAuthenticated={ false } info="These are the details you are looking for" />, document.getElementById( 'app' ) );
