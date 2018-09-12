import db from './firebase-config';

db.ref().set( { 
  name: 'It Is Moi',
  age: 28,
  isSingle: true,
  location: {
    city: 'Philah',
    zip: '08904'
  }
} ).then( () => { 
  console.log( 'Data is saved' );
} ).catch( ( e ) => { 
  console.log( 'Data broke', e );
} );

// // completely overwrites
// db.ref().set( { 
//   age: 27,
// } );

// only overwrites the "ref"
db.ref( 'name' ).set( 
  'Moi Again'
);

db.ref( 'location/city' ).set( 
  'NYC'
);

db.ref( 'attributes' ).set( { 
  height: 70,
  width: 60
} ).then( () => { 
  console.log( 'Second call worked' );
} ).catch( ( e ) => { 
  console.log( 'Nope deux', e );
} );
