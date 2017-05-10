// requires
var express = require( 'express' );
var router = express.Router();
var bodyParser = require( 'body-parser' );
var mongoose = require( 'mongoose' );

// mongoose stuff
mongoose.connect( 'localhost:27017/psiInventory' );
// schema
var thingSchema = mongoose.Schema({
  name: String,
  description: String
}); // end schema
// model
var things = mongoose.model( 'things', thingSchema );

// globals
var items =[];

router.get( '/', function( req, res ){
  console.log( 'inventory router get call' );
  things.find().then( function( data ){
    res.send( data );
  })
}); //end get

router.post( '/', function( req, res ){
  console.log( 'inventory router post call:', req.body );
  var newItem = things( req.body );
  newItem.save().then( function(){
    res.sendStatus( 200 );
  }); //end save newItem
}); //end get

module.exports = router;
