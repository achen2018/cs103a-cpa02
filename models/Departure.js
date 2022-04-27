'use strict';
const mongoose = require( 'mongoose' );
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;

var departureSchema = Schema( {
  name: String,
  date: Date,
  numberOfBags: Number,
  leaveCampus: String,
  location: String,
  terminal: String,
  airline: String,
  flightNumber: Number,
  flightTime: String
} );

module.exports = mongoose.model( 'Departure', departureSchema);