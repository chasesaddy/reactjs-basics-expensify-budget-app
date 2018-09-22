const path = require( 'path' );
const express = require( 'express' );
const app = express();
const publicPath = path.join( __dirname, '..', 'public' );
const port = process.env.PORT || 3000;

app.use( express.static( publicPath ) );

// if what person requests isn't in the public folder, just give them index.html. This allows you to have people go to React urls even though they aren't explicitly there in any way server-side
app.get( '*', ( req, res ) => {
  res.sendFile( path.join( publicPath, 'index.html' ) );
} );

app.listen( port, () => {
  console.log( 'Server is up' );
} );
