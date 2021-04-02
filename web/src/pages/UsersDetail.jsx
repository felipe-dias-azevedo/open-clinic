import React from 'react';
import InputLabel from '../components/InputLabel';

function UsersDetail() {
  // var header = insert ? "User Registration:" : `Updating User: <p>${name} ${lastname} - ID: ${id}</p>`;
  // var button = insert ? "hidden" : "";

  return (
    <>
      <header>
        <section className="header-user-left">
          <h1 className="header-text"></h1>
        </section>
        <section className="header-user-right">

        </section>
      </header>
      <div className="content-app">
        <div className="row">
          <InputLabel label="First Name" isPassword={false} />
        </div>
        <div className="row">
          <InputLabel label="Last Name" isPassword={false} />
        </div>
      </div>
      <footer>
        <section className="left-footer">
          <button className="button" id="btnCancelInsert">Cancel</button>
        </section>
        <section className="right-footer">
          <button className="button " id="btnResetData">Reset Data</button>
          <button className="button" id="btnConfirmInsert">Confirm</button>
        </section>
      </footer>
    </>
  );
}

export default UsersDetail;