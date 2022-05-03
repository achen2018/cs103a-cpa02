'use strict';
const mongoose = require( 'mongoose' );
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;

var departureSchema = Schema( {
  name: String,
  date: Date,
  numberOfBags: Number,
  leaveCampus: String,
  terminal: String,
  airline: String,
  flightTime: String,
  completed: Boolean
} );

module.exports = mongoose.model( 'Departure', departureSchema);