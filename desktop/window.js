var ipc = require('electron').ipcRenderer;

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

function changeScreen(screen, insert=true, arguments_update={}) {
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
            // INSERT/UPDATE SCREEN
            loadInsertUpdate(insert, arguments_update);
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
        <input type="password" id="password-input" class="form-control text-input" placeholder="">
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
    var data_users = [];
    var data_users = [
        {id: 1, name: "Felipe", lastname: "Azevedo"},
        {id: 2, name: "Mariana", lastname: "Azevedo"},
        {id: 3, name: "Mayara", lastname: "Fernandes"}
    ];

    function createUser(name, id) {
        return `<div class="user">
        <section class="user-left">
            <h3>${name}</h3>
            <p class="id-hidden">${id}</p>
        </section>
        <section class="user-right">
            <button class="button user-button button-update">Update</button>
            <button class="button user-button button-delete">Delete</button>
        </section>
        </div>`;
    };

    if (data_users.length >= 1) {
        var output_users = "";
        for (let i = 0; i < data_users.length; i++) {
            let user_name = data_users[i].name + " " + data_users[i].lastname;
            output_users += createUser(user_name, i);
        }
    } else {
        output_users = "<h1>No User Inserted</h1>"
    }

    document.getElementById("main-app").innerHTML = `<header>
        <section class="header-user-left">
            <h1 class="header-text">Select a User:</h1>
        </section>
        <section class="header-user-right">
            <button class="button" id="btnRegister">Insert User</button>
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
        </section>
    </footer>`;
    document.querySelector('#btnRegister').addEventListener('click', () => {
        changeScreen(3);
    });
    document.querySelector('#btnLogout').addEventListener('click', () => {
        changeScreen(1);
    });
    defineDeleteButtonWithDialog();
    defineUpdateButtons(data_users);
}

function loadInsertUpdate(insert, update_arg) {
    
    if (!insert) {
        var name = update_arg.name
        var lastname = update_arg.lastname
        var id = update_arg.id
    }

    document.getElementById("main-app").innerHTML = `<header>
        <section class="header-user-left">
            <h1 class="header-text">${insert ? "User Registration:" : `Updating User: <p>${name} ${lastname} - ID: ${id}</p>`}</h1>
        </section>
        <section class="header-user-right">
            
        </section>
    </header>
    <div class="content-app">
        <div class="row">
            <section>
                <div class="title-input">
                    <h3 class="input-heading">First Name:</h3>
                </div>
                <input type="text" id="name-input" class="form-control text-input" placeholder="">
            </section>
        </div>
        <div class="row">
            <section>
                <div class="title-input">
                    <h3 class="input-heading">Last Name:</h3>
                </div>
                <input type="text" id="lastname-input" class="form-control text-input" placeholder="">
            </section>
        </div>
    </div>
    <footer>
        <section class="left-footer">
            <button class="button" id="btnCancelInsert">Cancel</button>
            </section>
        <section class="right-footer">
            ${insert ? "" : `<button class="button" id="btnResetData">Reset Data</button>`}
            <button class="button" id="btnConfirmInsert">Confirm</button>
        </section>
    </footer>`;
    document.querySelector('#btnCancelInsert').addEventListener('click', () => {
        changeScreen(2);
    });
    if (!insert) {
        document.getElementById('name-input').value = name;
        document.getElementById('lastname-input').value = lastname;
        document.querySelector('#btnResetData').addEventListener('click', () => {
            document.getElementById('name-input').value = name;
            document.getElementById('lastname-input').value = lastname;
        });
    }
    // document.querySelector('#btnConfirmInsert').addEventListener('click', () => {
    // });
    defineConfirmButtonToRegister();
}

function defineDeleteButtonWithDialog() {
    var buttons = document.getElementsByClassName('button-delete');
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', () => {
            ipc.once('actionReply', function(event, response){
                processResponse(response);
            })
            ipc.send('invokeDeleteDialog', buttons[i].parentElement.parentElement.firstElementChild.lastElementChild.textContent);
        });
    }
}

function defineUpdateButtons(data_users) {
    var buttons = document.getElementsByClassName('button-update');
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', () => {
            changeScreen(3, false, data_users[i]);
        });
    }
}

function defineConfirmButtonToRegister() {
    document.querySelector('#btnConfirmInsert').addEventListener('click', () => {
        var name_in = document.getElementById('name-input').value;
        var lastname_in = document.getElementById('lastname-input').value;
        var data = {
            name: name_in,
            lastname: lastname_in
        };
        ipc.once('actionReply', function(event, response){
            processResponse(response);
        })
        ipc.send('invokeConfirm', data);
    });
}

// document.getElementById('btnLogin').addEventListener('click', function(){
//     ipc.once('actionReply', function(event, response){
//         processResponse(response);
//     })
//     ipc.send('invokeAction', 1);
// });