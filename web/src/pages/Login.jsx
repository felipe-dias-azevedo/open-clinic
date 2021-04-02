import React from 'react';
import {Link} from 'react-router-dom';
import InputLabel from '../components/InputLabel';

function Login() {
    return (
        <div className="container" id="main-app">
            <header>
                <h1 className="header-text">Login</h1>
            </header>
            <div className="content-app">
                <div className="row">
                    <InputLabel label="Username" isPassword={false} />
                </div>
                <div className="row">
                    <InputLabel label="Password" isPassword={true} />
                </div>
            </div>
            <footer>
                <section className="left-footer">
                    <Link to="/" className="button" id="btnClose">
                        Return
                    </Link>
                </section>
                <section className="right-footer">
                    <button className="button" id="btnLogin">Confirm</button>
                </section>
            </footer>
        </div>
    );
}

export default Login;