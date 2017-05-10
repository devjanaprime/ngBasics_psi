// requires
var express = require( 'express' );
var router = express.Router();
var bodyParser = require( 'body-parser' );

// globals
var items =[];

router.get( '/', function( req, res ){
  console.log( 'inventory router get call' );
  res.send( items );
}); //end get

router.post( '/', function( req, res ){
  console.log( 'inventory router post call:', req.body );
  items.push( req.body );
  res.sendStatus( 200 );
}); //end get

module.exports = router;
