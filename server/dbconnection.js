
function connect() {
    const mysql = require('mysql');

    var con = mysql.createConnection({
        host: "localhost",
        user: "felipe",
        password: "123mysql@",
        database: "TestingNode"
    });
    
    console.log("Connected to MySQL.");

    return con;
}

function getUsers() {
    const conn = connect();
    var result = [];
    var result_query = (callback) => {
            conn.query("SELECT * FROM users;", (err, res, fields) => {
            if (err) throw err;
            console.log("Select on Database. " + res.length + " results.");
            if (res.length) {
                for (var i = 0; i < res.length; i++) {     
                    result.push(res[i]);
                }
            }
            callback(null, result);
        });
    }
    return result_query;
}

function setUser(firstName, lastName) {
    const conn = connect();
    if (typeof(firstName) != 'string' && typeof(lastName) != 'string') {
        throw "Error: Names Must be String type."
    }
    conn.query("INSERT INTO users (name, lastname) values (?, ?)", [firstName, lastName], (err, result) => {
        if (err) throw err;
        console.log("Insert on Database. " + result.affectedRows + " records inserted.");
    });
}

function updateUser(new_data) {
    const conn = connect();
    if (typeof(new_data.first_name) != 'string' && typeof(new_data.last_name) != 'string') {
        throw "Error: Names Must be String type."
    }
    if (new_data.first_name != undefined && new_data.last_name != undefined) {
        const data = [new_data.first_name, new_data.last_name, new_data.id]
        conn.query("UPDATE users SET name = ?, lastname = ? WHERE id = ?", data, (err, result) => {
            if (err) throw err;
            console.log("Updated record sucessfully on Database.");
        });
    } else if (new_data.first_name == undefined) {
        const data = [new_data.last_name, new_data.id]
        conn.query("UPDATE users SET lastname = ? WHERE id = ?", data, (err, result) => {
            if (err) throw err;
            console.log("Updated record sucessfully on Database.");
        });
    } else if (new_data.last_name == undefined) {
        const data = [new_data.first_name, new_data.id]
        conn.query("UPDATE users SET name = ? WHERE id = ?", data, (err, result) => {
            if (err) throw err;
            console.log("Updated record sucessfully on Database.");
        });
    } else {
        throw "Error: No Information!"
    }
}

function deleteUser(id_user) {
    const conn = connect();
    conn.query("DELETE FROM users WHERE id = ?", id_user, (err, result) => {
        if (err) throw err;
        console.log("Deleted record sucessfully on Database.");
    });
}

module.exports = {getUsers, setUser, updateUser, deleteUser}