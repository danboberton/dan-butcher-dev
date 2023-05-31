import React from "react";
import styles from "@/components/Header/NavBar/Buttons/NavButton.module.css";
import {NavBarContext} from "@/components/Header/NavBar/NavBar";

type Props = {
    title: string,
    link: string,
    setSideBarActive: React.Dispatch<React.SetStateAction<boolean>> | false
}
export default function NavButton({title, link, setSideBarActive}: Props): JSX.Element {

    const handleClick = (): void => {
        window.location.href = link
        setSideBarActive ? setSideBarActive(false) : null
    }

    return (
        <button data-testid={`${title}-button`}
                onClick={handleClick}
                className={styles.NavButton}>
            <p className={styles.buttonText}>{title}</p>
        </button>
    )
}