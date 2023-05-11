import styles from "./NavBar.module.css"
import NavButton from "@/pages/components/Header/NavBar/Buttons/NavButton";
import React, {useEffect, useState} from "react";
import HamburgerNav from "@/pages/components/Header/NavBar/Buttons/HamburgerNav";

export default function NavBar({}): React.ReactNode {

    const isNavHamburgerThreshold = (width: number): boolean => {
        return width <= 600
    }

    const [navHamburger, setNavHamburger] = useState(false)

    useEffect(() => {
        const handleResize = (): void => {
            setNavHamburger(isNavHamburgerThreshold(window.innerWidth))
        }
        handleResize()
        window.addEventListener("resize", handleResize)
        return () => window.removeEventListener("resize", handleResize)
    }, [])


    const buttonsContent: JSX.Element = (
        <>
            <NavButton title={"About"} link={"test"}/>
            <NavButton title={"Skills"} link={"test"}/>
            <NavButton title={"Education"} link={"test"}/>
            <NavButton title={"Experience"} link={"test"}/>
            <NavButton title={"Projects"} link={"test"}/>
        </>
    )

    const noNavHamburger: JSX.Element = (
        <div className={styles.navContainer}>
            {buttonsContent}
        </div>
    )

    const yesNavHamburger: JSX.Element = (
        <div className={styles.navContainer}>
            <HamburgerNav >
                {buttonsContent}
            </HamburgerNav>
        </div>
    )

    return navHamburger ? yesNavHamburger : noNavHamburger
}