const express = require("express");
const newTodos = require("../model/newTodos");
const router = express.Router();

// Router för allt som ska in på förstasidan
router.route("/todos")
    .get(async (req, res) => {
        console.log(req.query)
        const currentPage = req.query.page || 1;
        const items = 3;
        
        const sort = req.query.sort;
        
        // Hitta alla newTodos som är sparade på databasen    
        const allTodos = await newTodos.find();
        const threeTodos = await newTodos.find().skip((currentPage - 1) * items).limit(items).sort({ text: sort });
        const pagesCount = Math.ceil(allTodos.length / items)
        
        res.render("todos", { threeTodos, pagesCount, currentPage });  
    })

    .post(async (req, res) => {
        await new newTodos({ text: req.body.text }).save((error, success) => {
            if (error) {
                res.send(error._message)
            } else
                res.redirect("todos")
        });
    })

// Router för allt som ska in på update-sidan
router.route("/update/:id")
    // För att uppdatera en todo
    .get(async (req, res) => {
        const updateSingelTodo = await newTodos.findById({ _id: req.params.id })
        res.render("editTodo", { updateSingelTodo });
    })
    .post(async (req, res) => {
        await newTodos.updateOne({ _id: req.body.id }, { $set: { text: req.body.text } }, { runValidators: true });
        res.redirect("/todos");
    })

// För att kunna göra en delete
router.get("/delete/:id", async (req, res) => {
    await newTodos.deleteOne({ _id: req.params.id })
    res.redirect("/todos")
})

module.exports = router;


