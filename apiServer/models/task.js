'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var TaskSchema = new Schema({
  name: {
    unique: true,
    type: String,
  },
  createdAt: String,
  description: String,
  owner: String,
}, { collection: 'Task' });


var Task = mongoose.model('Task', TaskSchema);

module.exports = Task;
