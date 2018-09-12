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

firebase.database().ref().set( { name: 'It Is Moi' } );
