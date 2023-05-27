import {FaHamburger, FaRegWindowClose} from "react-icons/fa";
import {IconContext} from "react-icons";
import React from "react";
import styles from "@/components/Header/NavBar/Buttons/HamburgerButton.module.css";

interface Props {
    sideBarActive: boolean,
    setSideBarActive: (value: (((prevState: boolean) => boolean) | boolean)) => void
}

export default function HamburgerButton({sideBarActive, setSideBarActive}: Props): JSX.Element {

    return (
        <div className={styles.navContainer}>
        <IconContext.Provider value={{color: "white", size: "1.5rem"}}>
            <div>
                <button data-testid="hamburger-button" onClick={() => {
                    setSideBarActive(!sideBarActive)
                }}>
                    {sideBarActive? <FaRegWindowClose/> : <FaHamburger/>}
                </button>
            </div>
        </IconContext.Provider>
        </div>
    )
}