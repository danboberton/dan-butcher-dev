import styles from "./Header.module.css"
import React, {useState, useEffect} from 'react'
import NavBar from "@/pages/components/NavBar/NavBar";

export default function Header({}) {

return (
    <header className={`${styles.sticky} ${styles.header}`}>
            <div className={styles.titleContainer}>
                <p className={`${styles.headerText}`}>Dan Butcher.<code>dev</code></p>
            </div>
            <NavBar/>
    </header>
)
}