import React from 'react';
import UserBox from '../components/UserBox';

function UsersConfig() {
  var usersData = [
    {id: 1, firstName: "Felipe", lastName: "Azevedo"},
    {id: 2, firstName: "Mariana", lastName: "Azevedo"},
    {id: 3, firstName: "Mayara", lastName: "Fernandes"}
  ];

  return (
    <>
      <header>
        <section className="header-user-left">
          <h1 className="header-text">
            Select a User:
          </h1>
        </section>
        <section className="header-user-right">
          <button className="button" id="btnRegister">Insert User</button>
        </section>
      </header>
      <div id="registered-users" className="content-user">
      {usersData.map(user => {
        return <UserBox key={user.id} id={user.id} firstName={user.firstName} lastName={user.lastName} />
      })}
      </div>
      <footer>
        <section className="left-footer">
          <button className="button" id="btnLogout">Log Out</button>
        </section>
        <section className="right-footer">
          <button className="button" id="btnRefresh">Refresh</button>
        </section>
      </footer>
    </>
  );
}

export default UsersConfig;