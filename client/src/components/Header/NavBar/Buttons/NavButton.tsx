import React from "react";
import styles from "@/components/Header/NavBar/Buttons/NavButton.module.css";

type Props = {
    title: string,
    link: string
}
export default function NavButton({title, link}: Props): JSX.Element {

    const handleClick = (): void => {
        window.location.href = link
    }

    return (
        <button onClick={handleClick} className={styles.NavButton}>
            <p className={styles.buttonText}>{title}</p>
        </button>
    )
}