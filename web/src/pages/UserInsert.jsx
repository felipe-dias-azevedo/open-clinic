import React from 'react';
import {Link} from 'react-router-dom';
import InputLabel from '../components/InputLabel';

function UserInsert() {
  return (
    <div className="container" id="main-app">
      <header>
        <section className="header-user-left">
          <h1 className="header-text">
            User Registration:
          </h1>
        </section>
      </header>
      <div className="content-app">
          <InputLabel label="First Name" isPassword={false} />
          <InputLabel label="Last Name" isPassword={false} />
      </div>
      <footer>
        <section className="left-footer">
          <Link to="/users/config" className="button">
            Cancel
          </Link>
        </section>
        <section className="right-footer">
          <button className="button" id="btnConfirmInsert">
            Confirm
          </button>
        </section>
      </footer>
    </div>
  );
}

export default UserInsert;