const express = require('express');
const app = express();

app.use(express.urlencoded({extended: true}));
app.use(express.json())

app.get('/', (req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end("My First App with NodeJS");
});

app.get('/users', (req, res) => {
    const db = require("./dbconnection");
    const usuarios = db.getUsers();
    usuarios(function (err, result) {
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(result);
    });
});

app.post('/user', (req, res) => {
    const db = require("./dbconnection");
    const first_name = req.body.first_name;
    const last_name = req.body.last_name;
    db.setUser(first_name, last_name);
    res.status(200).send('User Created Sucessfully!');
});

app.put('/user/:id', (req, res) => {
    const db = require("./dbconnection");
    const data = {
        id: req.params.id,
        first_name: req.body.first_name,
        last_name: req.body.last_name
    };
    db.updateUser(data);
    res.status(200).send('User Updated Sucessfully!');
});

app.delete('/user/:id', (req, res) => {
    const db = require("./dbconnection");
    const id = req.params.id;
    db.deleteUser(id);
    res.status(200).send('User Deleted Sucessfully');
});

app.listen(3000, () => {
    console.log(`App listening on port 3000.`)
});