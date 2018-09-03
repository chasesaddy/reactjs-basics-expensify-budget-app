// 
// Object destructuring
// 

const person = {
  name: 'Moi',
  age: 28,
  location: {
    city: 'NYC',
    temp: 90
  }
};

const { age } = person;
console.log( `${ person.name } is ${ age }.` );

// Nested objects
const { city, temp } = person.location;
console.log(`${ city } is ${ temp }.`);

// Can change the variable names
const { temp: temperature } = person.location;
console.log(`${ city } is ${ temperature }.`);

// Can also have default values
const { name = 'Anonymous', age: theAge } = person;
console.log( `${ name } is ${ theAge }.` );

// Can combine default and different variable name

// Can also have default values
const { name: theName = 'Anonymous', age: theAgeAgain } = person;
console.log( `${ theName } is ${ theAgeAgain }.` );

// 
// Array destructuring
// 

const address = [ '102 Barclay Ct', 'Philah', 'Penn', '90210' ];

const { 1: addy } = address;
console.log( addy );

const [ street, theCity, state, zip ] = address;
console.log( `You are in ${ theCity } and ${ state }.` );

const [ secondStreet, , secondState ] = address;
console.log(`You are in ${ secondStreet } and ${ secondState }.`);

const addressTwo = [ undefined, 'Philah', 'Penn' ];
const [ thirdStreet = 'A street that is default', , thirdState, thirdZip = '00000' ] = addressTwo;
console.log(`You are in ${ thirdStreet } and ${ thirdZip }.` );
