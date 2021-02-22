// import axios from 'axios';
const axios = require('axios');

function getUsers() {
    axios({
        method: 'get',
        url: 'http://localhost:3000/users'
    }).then(data => {
        console.log(data.data);
    }).catch(err => {
        console.log(err);
    });
}

function postUser(data) {
    axios({
        method: 'post',
        url: 'http://localhost:3000/user',
        data: {
            first_name: data.name,
            last_name: data.lastname
        }
    }).then(data => {
        console.log(data.status);
    }).catch(err => {
        console.log(err);
    });
}

function updateUser(data) {
    const URL = `http://localhost:3000/user/${data.id}`;
    axios({
        method: 'put',
        url: URL,
        data: {
            first_name: data.name,
            last_name: data.lastname
        }
    }).then(data => {
        console.log(data.status);
    }).catch(err => {
        console.log(err);
    });
}

function deleteUser(data) {
    const URL = `http://localhost:3000/user/${data.id}`;
    axios({
        method: 'delete',
        url: URL
    }).then(data => {
        console.log(data.status);
    }).catch(err => {
        console.log(err);
    });
}

// getUsers();
// postUser({
//     name: "Célia",
//     lastname: "Taniwaki"
// });
// updateUser({
//     id: 8,
//     name: "Fernando",
//     lastname: "Brandão"
// });
// deleteUser({
//     id: 8
// });