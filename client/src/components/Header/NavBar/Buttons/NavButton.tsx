import React from "react";
import styles from "@/components/Header/NavBar/Buttons/NavButton.module.css";
import {NavBarContext} from "@/components/Header/NavBar/useNavBar";

type Props = {
    title: string,
    link: string,
    navBarContext: NavBarContext | false
}
export default function NavButton({title, link, navBarContext}: Props): JSX.Element {

    const handleClick = (): void => {
        window.location.href = link
        navBarContext ? navBarContext.setSideBarActive(false) : null
    }

    return (
        <button data-testid={`${title}-button`}
                onClick={handleClick}
                className={styles.NavButton}>
            <p className={styles.buttonText}>{title}</p>
        </button>
    )
}