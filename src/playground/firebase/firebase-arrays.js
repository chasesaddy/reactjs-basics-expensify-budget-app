import db from './firebase-config';

// Arrays being pushed to Firebase just sets them down as objects basically with the index as the root of each array property
// using push() gives the data you push a randomly generated ID as its root
db.ref( 'expenses' ).push( { 
  description: 'lol',
  amount: 5000
} );
