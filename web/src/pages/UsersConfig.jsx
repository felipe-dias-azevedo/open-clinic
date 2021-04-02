import React from 'react';
import { Link } from 'react-router-dom';
import UserBox from '../components/UserBox';

function UsersConfig() {
  const usersData = [
    {id: 1, firstName: "Felipe", lastName: "Azevedo"},
    {id: 2, firstName: "Mariana", lastName: "Azevedo"},
    {id: 3, firstName: "Mayara", lastName: "Fernandes"}
  ];

  return (
    <div className="container" id="main-app">
      <header>
        <section className="header-user-left">
          <h1 className="header-text">
            Select a User:
          </h1>
        </section>
        <section className="header-user-right">
          <Link to="/users/insert" className="button">
            Insert User
          </Link>
        </section>
      </header>
      <div id="registered-users" className="content-user">
      {usersData.map(user => {
        return <UserBox key={user.id} id={user.id} firstName={user.firstName} lastName={user.lastName} />
      })}
      </div>
      <footer>
        <section className="left-footer">
          <Link to="/" className="button">
            Log Out
          </Link>
        </section>
        <section className="right-footer"></section>
      </footer>
    </div>
  );
}

export default UsersConfig;