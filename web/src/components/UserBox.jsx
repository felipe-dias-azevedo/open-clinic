import React from 'react';

function UserBox({id, firstName, lastName}) {
    return (
        <div className="user">
            <section className="user-left">
                <h3>{firstName} {lastName}</h3>
                <p className="hidden">{id}</p>
            </section>
            <section className="user-right">
                <button 
                    className="button user-button button-update"
                >
                    Update
                </button>
                <button
                    className="button user-button button-delete"
                >
                    Delete
                </button>
            </section>
        </div>
    );
}

export default UserBox;