import NavHeader from '../components/NavHeader';
import TitleBody from '../components/TitleBody';
import Button from '../components/Button';
import '../styles/defaultFill.css';

export default function Register() {
    return (
        <div className="app-main">
            <NavHeader />
            <TitleBody label="Register" />
            <section>
                <div className="bottom-button">
                    <Button label="Confirm" isDark />
                </div>
            </section>
        </div>
    );
}