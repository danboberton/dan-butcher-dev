import styles from "./NavBar.module.css"
import React from "react";


interface Props {
    children: JSX.Element
}
export default function NavBar({children}: Props): JSX.Element {

    return (
        <div className={styles.navContainer}>
            {children}
        </div>
    )
}