'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ProductSchema = new Schema({
  name: {
    unique: true,
    type: String,
  },
  description: String,
  price: Number,
}, { collection: 'Product' });


var Product = mongoose.model('Product', ProductSchema);

module.exports = Product;
