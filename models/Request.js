'use strict';
const mongoose = require( 'mongoose' );
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;

var requestSchema = Schema( {
  userId: ObjectId,
  name: String,
  pickUp: String,
  dropOff: String,
  message: String,
  completed: Boolean
} );

module.exports = mongoose.model( 'Request', requestSchema);