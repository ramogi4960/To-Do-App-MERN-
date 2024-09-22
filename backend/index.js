const express = require('express');
const cors = require('cors');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

mongoose.connect("mongodb+srv://kevobizzi:kevobizzi@cluster0.uvbbx.mongodb.net/TODOAPP?retryWrites=true&w=majority&appName=Cluster0");

// CLOUD DATABASE CONFIGURATION

const Todo = mongoose.model("Todo", mongoose.Schema({
    item: String,
}));


app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post("/newItem", async (req, res) => {
    let document = await Todo({item: req.body.newItem}).save();
    res.redirect(302, "http://localhost:3000");
});

app.get("/allItems", async (req, res) => {
    let document = await Todo.find({});
    res.json(document);
});

app.get("/deleteItem/:_id", async (req, res) => {
    Todo.findByIdAndDelete(req.params._id).then(item => {
        res.redirect(302, "http://localhost:3000");
    }
    ).catch(error => {console.log(error)});
});




app.listen(8000, () => {
    console.log("To Do App Backend running on PORT: 8000")
});