"use strict";

var express = require("express");
var newTodos = require("../model/newTodos");
var router = express.Router();

// Router för allt som ska in på förstasidan
router.route("/todos").get(async function (req, res) {
    console.log(req.query);
    var currentPage = req.query.page || 1;
    var items = 3;

    var sort = req.query.sort;

    // Hitta alla newTodos som är sparade på databasen    
    var allTodos = await newTodos.find();
    var threeTodos = await newTodos.find().skip((currentPage - 1) * items).limit(items).sort({ text: sort });
    var pagesCount = Math.ceil(allTodos.length / items);

    res.render("todos", { threeTodos: threeTodos, pagesCount: pagesCount, currentPage: currentPage });
}).post(async function (req, res) {
    await new newTodos({ text: req.body.text }).save(function (error, success) {
        if (error) {
            res.send(error._message);
        } else res.redirect("todos");
    });
});

// Router för allt som ska in på update-sidan
router.route("/update/:id")
// För att uppdatera en todo
.get(async function (req, res) {
    var updateSingelTodo = await newTodos.findById({ _id: req.params.id });
    res.render("editTodo", { updateSingelTodo: updateSingelTodo });
}).post(async function (req, res) {
    await newTodos.updateOne({ _id: req.body.id }, { $set: { text: req.body.text } }, { runValidators: true });
    res.redirect("/todos");
});

router.route("/todos/about").get(async function (req, res) {
    res.render("about");
});

// För att kunna göra en delete
router.get("/delete/:id", async function (req, res) {
    await newTodos.deleteOne({ _id: req.params.id });
    res.redirect("/todos");
});

module.exports = router;