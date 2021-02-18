var ipc = require('electron').ipcRenderer;
const { dialog } = require('electron')

// function changeScreen() {
//     // window.close()
//     const win_users = new BrowserWindow({
//         width: 800,
//         height: 600,
//         parent: win,
//         webPreferences: {
//             nodeIntegration: true
//         }
//     })
//     win_users.show()
//     win_users.loadFile('users.html')
// }

function changeScreen(screen) {
    switch (screen) {
        case 1:
            // LOGIN SCREEN
            loadLogin();
            break;
        case 2:
            // USERS SCREEN
            loadUsers();
            break;
        case 3:
            // INSERT SCREEN
            loadInsert();
            break;
        case 4:
            // UPDATE SCREEN
            loadUpdate();
            break;
    }
}

document.querySelector('#btnClose').addEventListener('click', () => {
    window.close()
})

document.querySelector('#btnLogin').addEventListener('click', () => {
    changeScreen(2);
})

function loadLogin() {
    document.getElementById("main-app").innerHTML = `<header>
    <h1 class="header-text">Login</h1>
    </header>
    <div class="content-app">
    <div class="row">
        <section>
            <div class="title-input">
                <h3 class="input-heading">Username:</h3>
            </div>
            <input type="text" id="username-input" class="form-control text-input" placeholder="">
        </section>
        </div>
        <div class="row">
        <section>
        <div class="title-input">
        <h3 class="input-heading">Password:</h3>
        </div>
        <input type="password" id="username-input" class="form-control text-input" placeholder="">
        </section>
        </div>
        </div>
        <footer>
        <section class="left-footer">
            <button id="btnClose">Close</button>
        </section>
        <section class="right-footer">
            <button id="btnLogin">Confirm</button>
        </section>
    </footer>`;
    document.querySelector('#btnClose').addEventListener('click', () => {
        window.close()
    })
    
    document.querySelector('#btnLogin').addEventListener('click', () => {
        changeScreen(2);
    })
}

function loadUsers() {
    var data_users = []
    var data_users = [
        {name: "Felipe Azevedo"},
        {name: "Mariana Azevedo"},
        {name: "Mayara Fernandes"}
    ]

    function createUser(name, id) {
        return `<div class="user">
        <section class="user-left">
            <h3>${name}</h3>
            <p class="id-hidden">${id}</p>
        </section>
        <section class="user-right">
            <button class="button user-button">Update</button>
            <button class="button user-button button-delete">Delete</button>
        </section>
        </div>`;
    };

    if (data_users.length >= 1) {
        var output_users = "";
        for (let i = 0; i < data_users.length; i++) {
            output_users += createUser(data_users[i].name, i);
        }
    } else {
        output_users = "<h1>No User Inserted</h1>"
    }

    document.getElementById("main-app").innerHTML = `<header>
        <section class="header-user-left">
            <h1 class="header-text">Select a User:</h1>
        </section>
        <section class="header-user-right">
            <button>Insert User</button>
        </section>
    </header>
    <div class="content-user">
        ${output_users}
    </div>
    <footer>
        <section class="left-footer">
            <button class="button" id="btnLogout">Log Out</button>
        </section>
        <section class="right-footer">
            <button class="button" id="btnRefresh">Refresh</button>
            <!-- <button id="btnDelete">Delete User</button> -->
        </section>
    </footer>`;
    document.querySelector('#btnLogout').addEventListener('click', () => {
        changeScreen(1);
    });
    getUserByClick();
}

function loadInsert() {
    document.getElementById("main-app").innerHTML = "";
}

function loadUpdate() {
    document.getElementById("main-app").innerHTML = "";
}

function getUserByClick() {
    var buttons = document.getElementsByClassName('button-delete');
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', () => {
            ipc.once('actionReply', function(event, response){
                processResponse(response);
            })
            ipc.send('invokeAction', buttons[i].parentElement.parentElement.firstElementChild.lastElementChild.textContent);
        });
    }
}

// document.getElementById('btnLogin').addEventListener('click', function(){
//     ipc.once('actionReply', function(event, response){
//         processResponse(response);
//     })
//     ipc.send('invokeAction', 1);
// });