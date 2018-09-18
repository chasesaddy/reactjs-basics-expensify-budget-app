import db from './firebase-config';

// my own quick testing to see how to get ID of pushed stuff.
const heh = db.ref( 'rofl' ).push( 'lol' );

console.log( 'lol', heh.key );

// 

db.ref()
  .once( 'value' )
  .then( ( snapshot ) => { 
    const val = snapshot.val();
    console.log( val );
  } ).catch( ( e ) => { 
    console.log( 'Not fetching sad', e );
  } );


// object
let reference = 'location';
// just prints string
reference = 'location/city';

db.ref( reference )
  .once( 'value' )
  .then( ( snapshot ) => { 
    const val = snapshot.val();
    console.log( val );
  } ).catch( ( e ) => { 
    console.log( 'Not fetching sad', e );
  } );

// once() only shows data once. To subscribe you have to use on() and a callback
const subscribe = () => {
  db.ref()
    .on( 'value', ( snapshot ) => { 
      console.log( snapshot.val() );
    } );

  setTimeout( () => { 
    db.ref( 'age' ).set( 29 );
  }, 2500 );
};

// subscribe();

//
// Can also stop subscribing with off()
const turnItAllOff = () => {
  setTimeout( () => { 
    db.ref( 'age' ).set( 30 );
  }, 5000 );

  // off with no arguments removes all subscriptions
  setTimeout( () => { 
    db.ref().off();
  }, 7000 );

  setTimeout( () => { 
    db.ref( 'age' ).set( 31 );
  }, 7500 );
};

// subscribe();
// turnItAllOff();

// example for removing one subscription

const specificSubscribeAndUnsubscribe = () => {
  const onValueChange = ( snapshot ) => { 
    console.log( snapshot.val() );
  };

  db.ref()
    .on( 'value', onValueChange );

  setTimeout( () => { 
    db.ref( 'name' ).set( 'Nice Guy' );
  }, 3000 );

  // off with no arguments removes all subscriptions
  setTimeout( () => { 
    db.ref().off( 'value', onValueChange );
  }, 5000 );

  setTimeout( () => { 
    db.ref( 'name' ).set( 'Wont Happen' );
  }, 6000 );
};

// specificSubscribeAndUnsubscribe();

// Since on returns the callback, no need to have it be a separate function. Can simplify it
const properSpecificSubscribeAndUnsubscribe = () => {
  const onValueChange = db.ref()
    .on( 'value', ( snapshot ) => { 
      console.log( snapshot.val() );
    } );

  setTimeout( () => { 
    db.ref( 'name' ).set( 'Nice Guy' );
  }, 3000 );

  // off with no arguments removes all subscriptions
  setTimeout( () => { 
    db.ref().off( 'value', onValueChange );
  }, 5000 );

  setTimeout( () => { 
    db.ref( 'name' ).set( 'Wont Happen' );
  }, 6000 );
};

// properSpecificSubscribeAndUnsubscribe();

// Can also be notified of errors for the subscriptions
const specificSubscribeAndUnsubscribeError = () => {
  const onValueChange = db.ref()
    .on( 'value', ( snapshot ) => { 
      console.log( snapshot.val() );
    }, ( e ) => { 
      console.log( 'Fetching rekt', e );
    } );

  setTimeout( () => { 
    db.ref( 'name' ).set( 'Nice Guy' );
  }, 3000 );

  // off with no arguments removes all subscriptions
  setTimeout( () => { 
    db.ref().off( 'value', onValueChange );
  }, 5000 );

  setTimeout( () => { 
    db.ref( 'name' ).set( 'Wont Happen' );
  }, 6000 );
};

// specificSubscribeAndUnsubscribeError();

// Everything combined (same as above) and also using specific properties of 
const everything = () => {
  const onValueChange = db.ref()
    .on( 'value', ( snapshot ) => { 
      const lame = snapshot.val();
      console.log( `${ lame.name } is a ${ lame.jerb } in ${ lame.location.city }.` );
    }, ( e ) => { 
      console.log( 'Fetching rekt', e );
    } );

  setTimeout( () => { 
    db.ref( 'name' ).set( 'Nice Guy' );
  }, 3000 );

  // off with no arguments removes all subscriptions
  setTimeout( () => { 
    db.ref().off( 'value', onValueChange );
  }, 5000 );

  setTimeout( () => { 
    db.ref( 'name' ).set( 'Wont Happen' );
  }, 6000 );
};

everything();
