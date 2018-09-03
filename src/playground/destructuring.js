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