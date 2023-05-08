import styles from "./NavBar.module.css"

const NavButton = (text: string, link: string): JSX.Element => {
    const handleClick = () => {
        window.location.href = link
    }

    return (
        <button onClick={handleClick} className={styles.NavButton}>
            <p className={styles.buttonText}>{text}</p>
        </button>
    )
}
export default function NavBar({}): JSX.Element {

    return (
        <div className={styles.navContainer}>
            {NavButton("About", "test")}
            {NavButton("Skills", "test")}
            {NavButton("Education", "test")}
            {NavButton("Experience", "test")}
            {NavButton("Projects", "test")}
        </div>
    )
}