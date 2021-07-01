import NavHeader from '../../components/NavHeader';
import TitleBody from '../../components/TitleBody';
import InputLabel from '../../components/InputLabel';
import InputLabelPassword from '../../components/InputLabelPassword';
import Button from '../../components/Button';
import '../../styles/defaultFill.css';

export default function AdminLogin() {
    return (
        <div className="app-main">
            <NavHeader />
            <TitleBody label="Operator Login" />
            <section>
                <InputLabel label="Username" isDark />
                <InputLabelPassword isDark />
                <div className="bottom-button">
                    <Button label="Confirm" isDark />
                </div>
            </section>
        </div>
    );
}