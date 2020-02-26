// Alla dependencies som jag behöver
const config = require("./config/config");
const express = require("express");
const mongoose = require("mongoose")
const todoRouter = require("./router/todoRouter");
const sassMiddleware = require("node-sass-middleware");
const path = require("path");
const app = express();

// För att läsa av data som postas till databasen. Denna datan är urlencodad.
app.use(express.urlencoded({extended: true}));

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
const dbUrl = process.env.MONGO_ATLAS_URL || 8030;

// För att undvika error i terminalen när man använder mongoose.
const options = {
    useUnifiedTopology: true, 
    useNewUrlParser: true
}

// Connecta till mongoose och starta sedan applikationen 
mongoose.connect(dbUrl, options).then(() => {
    console.log(`You are successfully connected to port: ${port}`);
    app.listen(port)
})

module.exports = {app};