const express = require('express');
const cors = require('cors')
const app = express();
const mongoose = require('mongoose')
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors())

mongoose.connect("mongodb://localhost:27017/todoapp", {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

app.listen(3000, () => {
 console.log("Server started on port 3000")
})

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

app.get('/todo/completed', (req, res) => {
    todoModel.find({ completed: true }, (err, todos) => {
        if (err) {
            res.send("Error while fetching Todos")
        } else {
            res.json(todos)
        }
    })
})

app.get('/todo/uncomplete', (req, res) => {
    todoModel.find({ completed: false }, (err, todos) => {
        if (err) {
            res.send("Error while fetching Todos")
        } else {
            res.json(todos)
        }
    })
})

app.post('/todo/complete/:id', (req, res) => {
    todoModel.findByIdAndUpdate(req.params.id, {completed : true}, (err, todo) => {
        if (!err) {
            res.send("Good work")
        }
    })
})

app.delete('/todo/:id', (req, res) => {
    let query = {_id: req.params.id}
    todoModel.deleteOne(query, (err) => {
        if (err) {
            res.send("Error while deleting todo")
        } else {
            res.send("Todo deleted")
        }
    })
})