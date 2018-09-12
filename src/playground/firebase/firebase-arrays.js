import db from './firebase-config';

// Arrays being pushed to Firebase just sets them down as objects basically with the index as the root of each array property
// using push() gives the data you push a randomly generated ID as its root
db.ref( 'expenses' ).push( { 
  description: 'lol',
  amount: 5000
} );

// To get array back, convert firebase content into an array
db.ref( 'expenses' ).on( 'value', ( snapshot ) => { 
  const expenses = [];

  snapshot.forEach( ( solo ) => { 
    expenses.push( { 
      id: solo.key,
      ...solo.val()
    } );
  } );

  console.log( expenses );
} );


//
// Other examples of methods to see changes

// child_removed lets you know when a child from the root of the ref() gets removed
db.ref( 'expenses' ).on( 'child_removed', ( snapshot ) => { 
  console.log( snapshot.key, snapshot.val() );
} );

// child_changed as it sounds like, lets you know a child from the root of the ref() gets changed
db.ref( 'expenses' ).on( 'child_changed', ( snapshot ) => { 
  console.log( snapshot.key, snapshot.val() );
} );

// child_added - again as it sounds. Fires when child from the root of the ref() gets added
// child_addded doesn't only get called for when a child is added. It does do that.
// It also fires for all initial children at the ref() location
db.ref( 'expenses' ).on( 'child_added', ( snapshot ) => { 
  console.log( snapshot.key, snapshot.val() );
} );
