import {IconContext} from "react-icons";
import {FaHamburger} from "react-icons/fa";
import React, {useState} from "react";
import styles from "./HamburgerNav.module.css"

type Props = {
    children: JSX.Element
}
export default function HamburgerNav({children}: Props): JSX.Element {

    const [navActive, setNavActive] = useState(false)
    {/*<IconContext.Provider value={{ color: "white", className: "global-class-name" }}>*/
    }

    const dropDown: JSX.Element = (
        <>
            <div className={styles.hamburgerNav}>
                {children}
            </div>
        </>
    )
    return (
        <>
            <IconContext.Provider value={{color: "white"}}>
                <div>
                    <button onClick={() => {
                        setNavActive(!navActive)
                    }}>
                        <FaHamburger/>
                    </button>
                </div>
            </IconContext.Provider>
            {navActive ? dropDown : null}
        </>
    )
}