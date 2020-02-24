"use strict";

// Alla dependencies som jag behöver
var config = require("./config/config");
var express = require("express");
var mongoose = require("mongoose");
var todoRouter = require("./router/todoRouter");
var sassMiddleware = require("node-sass-middleware");
var path = require("path");
var app = express();

// För att läsa av data som postas till databasen. Denna datan är urlencodad.
app.use(express.urlencoded({ extended: true }));

// Middleware för sass
app.use(sassMiddleware({
    src: path.join(__dirname, "sass"),
    dest: path.join(__dirname, "public")
}));

// app.use(express.static(path.join(__dirname +'/public')))
app.use(express.static('public'));

// Läsa av views-mappen med ejs
app.set("view engine", "ejs");

// Ligger här för att den ska kunna routa.
app.use(todoRouter);

// Lyssna på port 8010
var port = process.env.PORT || 8030;

// För att undvika error i terminalen när man använder mongoose.
var options = {
    useUnifiedTopology: true,
    useNewUrlParser: true

    // Connecta till mongoose och starta sedan applikationen 
};mongoose.connect(config.databaseURL, options).then(function () {
    console.log("You are successfully connected to port: " + port);
    app.listen(port);
});

module.exports = { app: app };