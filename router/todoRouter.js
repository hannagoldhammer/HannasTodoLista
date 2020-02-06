const express = require("express");
const newTodos = require("../model/newTodos");
const router = express.Router();

    // router.get("/todos", async (req, res) => {
    //     const allTodos = await newTodos.find().sort({text: 1});
    //     // Rendrera todoList.ejs och skicka in {tasks} objektet till den sidan.
    //     res.render("todos", {allTodos});
    // });
    
    // router.post("/todolist", async (req, res) => {
    //     const task = new newTodos({
    //         // req.body har tillgång till alla egenskaper inom comment
    //         text: req.body.text
    //       })
    //       const response = await task.save();
    //     console.log(req.body);
    //     res.redirect("/todos");
    // });

router.route("/todos")
    .get(async(req, res)  => {
        // Hitta alla newTodos som är sparade på databasen
        const allTodos = await newTodos.find().sort({text: 1});
        // Rednera todos.ejs och skicka in objektet allTodos som innehåller alla newTodos som finns sparade på databasen.
        res.render("todos", {allTodos});
    })
    
    .post(async (req, res) => {
        await new newTodos({text: req.body.text}).save();
        res.redirect("todos");
    })


router.route("/update/:id")    
    // För att uppdatera en todo
    .get(async (req, res) => {
        const updateSingelTodo = await newTodos.findById({_id: req.params.id})
        res.render("editTodo", {updateSingelTodo});
    })
    .post( async (req, res) => {
        // Vad händer här?
        await newTodos.updateOne({_id: req.body.id}, {$set: {text: req.body.text}})
        res.redirect("/todos");
    })

// För att kunna göra en delete
router.get("/delete/:id", async (req, res) => {
    await newTodos.deleteOne({_id: req.params.id})
    res.redirect("/todos")
})
    
module.exports = router;


