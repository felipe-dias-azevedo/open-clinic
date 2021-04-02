import React, { useState } from 'react';
import {Link, useHistory} from 'react-router-dom';
import InputLabel from '../components/InputLabel';

function Login() {
    const history = useHistory();

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    function handleAuth() {
        if (username === "felipe" && password === "123") {
            history.push("/users/config");
        }
    }
    
    return (
        <div className="container" id="main-app" >
            <header>
                <h1 className="header-text">Login</h1>
            </header>
            <div className="content-app">
                <InputLabel 
                    label="Username"
                    isPassword={false}
                    name="username"
                    value={username}
                    onChange={(e) => {setUsername(e.target.value)}}
                />
                <InputLabel 
                    label="Password"
                    isPassword={true}
                    name="password"
                    value={password}
                    onChange={(e) => {setPassword(e.target.value)}}
                />
            </div>
            <footer>
                <section className="left-footer">
                    <Link to="/" className="button">
                        Return
                    </Link>
                </section>
                <section className="right-footer">
                    <button className="button" onClick={handleAuth}>
                        Confirm
                    </button>
                </section>
            </footer>
        </div>
    );
}

export default Login;