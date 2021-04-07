import '../styles/inputLabel.css';

export default function InputLabel({label, isDark}) {
    return (
        <div className="input-label">
            <section>
                <h3>{label}:</h3>
            </section>
            <input
                type="text"
                className={isDark ? "dark-input" : "light-input"}
                placeholder={`Type your ${label}`}
            />
        </div>
    );
}