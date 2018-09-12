import db from './firebase-config';

// main way to remove
db.ref( 'isSingle' ).remove().then( () => { 
  console.log( 'Success. Removed.' );
} ).catch( ( e ) => { 
  console.log( 'Remove failed: ', e );
} );

// other way
db.ref( 'isSingle' ).set( null ).then( () => { 
  console.log( 'Success. Removed.' );
} ).catch( ( e ) => { 
  console.log( 'Remove failed: ', e );
} );
