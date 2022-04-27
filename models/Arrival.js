'use strict';
const mongoose = require( 'mongoose' );
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;

var arrivalSchema = Schema( {
  name: String,
  date: Date,
  numberOfBags: Number,
  terminal: String,
  airline: String,
  flightNumber: Number,
  arrivalTime: String
} );

module.exports = mongoose.model( 'Arrival', arrivalSchema);