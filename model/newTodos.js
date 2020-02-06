const mongoose = require("mongoose");

const schemaTodo = new mongoose.Schema(
    {
        text: String
    }
)

const newTodo = mongoose.model("New Todo", schemaTodo);

module.exports = newTodo;