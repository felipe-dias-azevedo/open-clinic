import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom';
import { useParams } from 'react-router';
import InputLabel from '../components/InputLabel';

function UserUpdate() {
  const params = useParams();
  const [user, setUser] = useState();

  useEffect(() => {
    setUser({id: 1, firstName: "Felipe", lastName: "Azevedo"})
  }, [params.id]);

  if (!user) {
    return <p>Loading...</p>;
  }

  return (
    <div className="container" id="main-app">
      <header>
        <section className="header-user-left">
          <h1 className="header-text">
            Updating User: 
            <p>{user.firstName} {user.lastName} - ID: {user.id}</p>
          </h1>
        </section>
        <section className="header-user-right"></section>
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
          <button className="button" id="">Reset Data</button>
          <button className="button" id="btnConfirmInsert">Confirm</button>
        </section>
      </footer>
    </div>
  );
}

export default UserUpdate;