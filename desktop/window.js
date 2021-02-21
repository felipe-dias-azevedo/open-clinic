var ipc = require('electron').ipcRenderer;

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

function showModal(data_user, description) {
    let title = description.title;
    let text = description.text;

    // document.getElementsByClassName('button-delete')[id_button];
    var main_app = document.getElementById("main-app");
    main_app.innerHTML =
        `<div id="modal">
            <div id="main-modal" class="animate">
                <div id="head-modal">
                    <h2 id="title-modal">${title}</h2>
                    <p id="text-modal">${text}</p>
                </div>
                <div id="foot-modal">
                    <button class="button no-button">No</button>
                    <button class="button yes-button" autofocus>Yes</button>
                </div>
            </div>
        </div>`
    + main_app.innerHTML;
    
    function closeModal() {
        var data_users = [
            {id: 1, name: "Felipe", lastname: "Azevedo"},
            {id: 2, name: "Mariana", lastname: "Azevedo"},
            {id: 3, name: "Mayara", lastname: "Fernandes"}
        ];
        document.getElementById("modal").remove();
        if (description.type == 0) {
            loadUsers();
        } else {
            document.querySelector('#btnCancelInsert').addEventListener('click', () => {
                changeScreen(2);
            });
            defineConfirmButtonToRegister(data_user.id);
            document.getElementById('name-input').value = data_user.name;
            document.getElementById('lastname-input').value = data_user.lastname;
            document.querySelector('#btnResetData').addEventListener('click', () => {
                document.getElementById('name-input').value = data_user.name;
                document.getElementById('lastname-input').value = data_user.lastname;
            });
            var head_update = document.getElementsByClassName('header-text')[0].firstElementChild;
            if (head_update != null) {
                head_update.textContent = `${data_user.name} ${data_user.lastname} - ID: ${data_user.id}`;
            }
        }
    }

    document.getElementsByClassName('no-button')[0].addEventListener('click', () => {
        // document.getElementById("main-app").classList.add()
        closeModal();
    });
    document.getElementsByClassName('yes-button')[0].addEventListener('click', () => {
        if (description.type == 0) {
            console.log("DELETE - ID: " + data_user.id);
        } else {
            console.log(`INFO - ID: ${data_user.id} NAME: ${data_user.name} LASTNAME: ${data_user.lastname}`)
        }
        closeModal();
    });
}

function defineDeleteButtonWithDialog(data_users) {
    var buttons = document.getElementsByClassName('button-delete');
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', () => {
            // ipc.once('actionReply', function(event, response){
            //     processResponse(response);
            // })
            // ipc.send('invokeDeleteDialog', buttons[i].parentElement.parentElement.firstElementChild.lastElementChild.textContent);
            showModal(data_users[i], {
                type: 0,
                title: "Are you sure of the data Selected?",
                text: "Users CAN NOT be recovered after being deleted."
            });
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

function defineConfirmButtonToRegister(id_user) {
    document.querySelector('#btnConfirmInsert').addEventListener('click', () => {
        var name_in = document.getElementById('name-input').value;
        var lastname_in = document.getElementById('lastname-input').value;
        var data = {
            id: id_user,
            name: name_in,
            lastname: lastname_in
        };
        // ipc.once('actionReply', function(event, response){
        //     processResponse(response);
        // })
        // ipc.send('invokeConfirm', data);
        showModal(data, {
            type: 1,
            title: "Are you sure of the data inserted?",
            text: "Users created can be deleted later."
        });
    });
}


document.querySelector('#btnClose').addEventListener('click', () => {
    window.close()
})

document.querySelector('#btnLogin').addEventListener('click', () => {
    changeScreen(2);
})