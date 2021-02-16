
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
    document.getElementById("main-app").innerHTML = `<header>
    <h2 class="header-text">Select a User:</h2>
    </header>
    <div class="content-app">

    </div>
    <footer>
        <button id="btnLogout">Log Out</button>
    </footer>`;
    document.querySelector('#btnLogout').addEventListener('click', () => {
        changeScreen(1);
    })
}

function loadInsert() {
    document.getElementById("main-app").innerHTML = "";
}

function loadUpdate() {
    document.getElementById("main-app").innerHTML = "";
}