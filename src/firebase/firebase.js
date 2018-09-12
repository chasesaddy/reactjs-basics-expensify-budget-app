// import * as firebase from 'firebase';
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyA-GOA3b-HvrFH3LKr37DvKw7OPrYBj3QI",
  authDomain: "learning-js-expensify-deux.firebaseapp.com",
  databaseURL: "https://learning-js-expensify-deux.firebaseio.com",
  projectId: "learning-js-expensify-deux",
  storageBucket: "learning-js-expensify-deux.appspot.com",
  messagingSenderId: "365586213998"
};

firebase.initializeApp( firebaseConfig );

const db = firebase.database();

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
