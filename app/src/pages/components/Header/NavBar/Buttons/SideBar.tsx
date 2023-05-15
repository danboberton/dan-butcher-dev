import {IconContext} from "react-icons";
import {FaHamburger} from "react-icons/fa";
import React, {useState} from "react";
import styles from "./SideBar.module.css"

interface Props {
    children: JSX.Element,
    sideBarActive: boolean
}

export default function SideBar({children, sideBarActive}: Props): JSX.Element {

    {/*<IconContext.Provider value={{ color: "white", className: "global-class-name" }}>*/
    }

    return (
        <>
            <div className={sideBarActive ? styles.sideBarActive : styles.sideBarNavHidden}>
                {children}
            </div>
        </>
    )
}