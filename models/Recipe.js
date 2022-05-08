'use strict';
const mongoose = require( 'mongoose' );
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;

var recipeSchema = Schema( {
  item: String,
  category: String,
  ingredients: String,
  totalCookTime: String,
  instructions: String,
} );

module.exports = mongoose.model( 'Recipe', recipeSchema);