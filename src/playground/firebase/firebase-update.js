import db from './firebase-config';

// Almost always want to pass an object because if just updating a single property like a string, can just use set().

// basic example
db.ref().update( { 
  name: 'Not Mee',
  age: 30
} );

// can also add new attributes
db.ref().update( { 
  name: 'Not Mee',
  age: 30,
  jerb: 'Software person'
} );

// Can remove by setting property to null
db.ref().update( { 
  name: 'Not Mee',
  age: 30,
  jerb: 'Software person',
  isSingle: null
} );

// Normally if you update a nested object and only update one of its properties, it'll overwrite the whole object to be just that one property.
// What if you also want to update something else alongside a nested object. To be able to modify one property and then also a nested object requires not normally valid JS. Is weird and not used much. So the nested object to be updated needs to be in [single] quotes.
db.ref().update( { 
  jerb: 'Own person',
  'location/city': 'Jersey City'
} );
