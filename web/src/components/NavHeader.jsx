import { Icon } from '@iconify/react';
import { Link, useHistory } from 'react-router-dom';
import bxUser from '@iconify-icons/bx/bx-user';
import '../styles/header.css';

export default function NavHeader() {
    const history = useHistory();

    return (
        <nav>
            <section>
                <div 
                    className="nav-circle"
                    onClick={() => history.goBack()}
                >
                    <div className="arrow-left"></div>
                    <p>Back</p>
                </div>
            </section>
            <div className="header-title">
                <h1 className="title-app">
                    Open Clinic System
                </h1>
            </div>
            <section>
                <Link to="/login" className="nav-circle">
                    <Icon className="user-icon" icon={bxUser} />
                    <p>Login</p>
                </Link>
            </section>
        </nav>
    );
}