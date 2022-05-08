'use strict';
const mongoose = require( 'mongoose' );
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;

var contactSchema = Schema( {
  name: String,
  message: String
} );

module.exports = mongoose.model( 'Contact', contactSchema);