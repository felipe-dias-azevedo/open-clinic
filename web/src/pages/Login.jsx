import { Link } from 'react-router-dom';
import NavHeader from '../components/NavHeader';
import TitleBody from '../components/TitleBody';
import InputLabel from '../components/InputLabel';
import InputLabelPassword from '../components/InputLabelPassword';
import Button from '../components/Button';
import '../styles/defaultFill.css';

export default function Login() {
    return (
        <div className="app-main">
            <NavHeader />
            <TitleBody label="Login" />
            <section>
                <InputLabel label="Username" />
                <InputLabelPassword />
                <Link to="/register">
                    Dont have an account? Register Now!
                </Link>
                <div className="bottom-button">
                    <Button label="Confirm" isDark />
                </div>
            </section>
        </div>
    );
}