const express = require('express');
const cors = require('cors')
const app = express();
const mongoose = require('mongoose')
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.listen(3000, () => {
 console.log("Server started on port 3000")
})

mongoose.connect("mongodb://localhost:27017/todoapp", {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

var db = mongoose.connection;

db.on('open', () => {
    console.log('Connected to mongoDB');
});

db.on('error', (error) => {
    console.log(error)
});

let todoModel = require('./todo_schema')

app.post('/todo/add', (req, res) => {
    let newTODO = new todoModel;

    newTODO.title = req.body.todo;

    newTODO.completed = false;

    newTODO.save((err) => {
        if(err) {
            res.send("Error while adding todo");
        } else {
            res.send("Todo added");
        }
    })
})