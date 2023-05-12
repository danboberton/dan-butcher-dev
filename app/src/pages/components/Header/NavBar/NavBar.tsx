import styles from "./NavBar.module.css"
import NavButton from "@/pages/components/Header/NavBar/Buttons/NavButton";
import React, {useEffect, useState} from "react";
import HamburgerNav from "@/pages/components/Header/NavBar/Buttons/HamburgerNav";
import NavButtonsAll from "@/pages/components/Header/NavBar/NavButtonsAll";

type Props = {
    useSideBar: boolean
}
export default function NavBar({useSideBar}: Props): JSX.Element {

    return (
        <div className={styles.navContainer}>
            {useSideBar ? <NavButtonsAll/> : <></>}
        </div>
    )
}