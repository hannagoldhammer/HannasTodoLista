// Alla dependencies som jag behöver
const config = require("./config/config");
const express = require("express");
const mongoose = require("mongoose")
const todoRouter = require("./router/todoRouter");
// const path = require("path");
const app = express();

// För att läsa av data som postas till databasen. Denna datan är urlencodad.
app.use(express.urlencoded({extended: true}));

// Måste den vara i en speciall ordning? 

// app.use(express.static(path.join(__dirname +'/public')))
app.use('/public', express.static('public'))

// Läsa av views-mappen med ejs
app.set("view engine", "ejs");

// Ligger här för att den ska kunna routa.
app.use(todoRouter);

// Lyssna på port 8010
const port = process.env.PORT || 8030;

// För att undvika error i terminalen när man använder mongoose.
const options = {
    useUnifiedTopology: true, 
    useNewUrlParser: true
}

// Connecta till mongoose och starta sedan applikationen 
mongoose.connect(config.databaseURL, options).then(() => {
    console.log(`You are successfully connected to port: ${port}`);
    app.listen(port)
})