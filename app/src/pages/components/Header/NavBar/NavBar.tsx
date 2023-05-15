import styles from "./NavBar.module.css"
import NavButton from "@/pages/components/Header/NavBar/Buttons/NavButton";
import React, {useEffect, useState} from "react";
import SideBar from "@/pages/components/Header/NavBar/Buttons/SideBar";
import NavButtonsAll from "@/pages/components/Header/NavBar/NavButtonsAll";

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