const moment = require.requireActual( 'moment' );

const fauxMoment = ( timestamp = 0 ) => {
  return moment( timestamp );
};

export default fauxMoment;
