'use strict';
const mongoose = require( 'mongoose' );
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;

var requestSchema = Schema( {
  name: String,
  requestDate: Date,
  message: String
} );

module.exports = mongoose.model( 'Request', requestSchema);