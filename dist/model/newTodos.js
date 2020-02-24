"use strict";

var mongoose = require("mongoose");

var schemaTodo = new mongoose.Schema({
    // uppercase och lowercase: true. Uppdaterar det nya som skrivs in i listan och i databasen. Gammalt uppdateras inte. 
    text: { type: String, required: true, lowercase: true, minlength: 1 }
});

var newTodo = mongoose.model("New Todo", schemaTodo);

module.exports = newTodo;