import styles from "./Header.module.css"
import React from 'react'

interface Props {
    children: JSX.Element
}
export default function Header({children}: Props) {

    return (
        <header className={`${styles.header}`}>
            <div className={styles.titleContainer}>
                <p className={`${styles.headerText}`}>Dan Butcher.<code>dev</code></p>
            </div>
            {children}
        </header>
    )
}