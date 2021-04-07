import '../styles/button.css';

export default function Button({label, isDark, ...rest}) {
    return (
        <button
            type="button"
            className={isDark ? "dark-button" : "light-button"}
            {...rest}
        >
            {label}
        </button>
    )
}