import React from 'react';
import {Link} from 'react-router-dom';

function Landing() {
    return (
        <div className="container" id="main-app">
            <h1>Hello World!</h1>
            <Link to="/login" className="button">
                Login
            </Link>
        </div>
    );
}

export default Landing;