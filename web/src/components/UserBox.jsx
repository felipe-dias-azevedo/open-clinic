import React from 'react';
import { Link } from 'react-router-dom';

function UserBox({id, firstName, lastName}) {
    return (
        <div className="user">
            <section className="user-left">
                <h3>{firstName} {lastName}</h3>
                {/* <p className="hidden">{id}</p> */}
            </section>
            <section className="user-right">
                <Link to={`/users/update/${id}`} className="button user-button button-update">
                    Update
                </Link>
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