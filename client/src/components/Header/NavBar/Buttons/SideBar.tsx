import {IconContext} from "react-icons";
import {FaHamburger} from "react-icons/fa";
import React, {useState} from "react";
import styles from "./SideBar.module.css"

interface Props {
    children: JSX.Element,
    sideBarActive: boolean
}

export default function SideBar({children, sideBarActive}: Props): JSX.Element {

    return (
        <>
            <div id={'sidebar'}
                data-testid='sidebar'
                 className={`${sideBarActive ? styles.sideBarActive : styles.sideBarNavHidden} ${styles.sideBar}`}>
                {children}
            </div>
        </>
    )
}