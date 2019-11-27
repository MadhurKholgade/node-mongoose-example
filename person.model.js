'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

const PersonSchema = new Schema({
    firstname: {type: String, required: true, max:40},
    lastname: {type: String, required: true, max:40}
});

module.exports = mongoose.model('Person', PersonSchema);