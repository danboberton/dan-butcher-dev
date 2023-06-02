import React, {useEffect, useState} from "react";
import NavButtonsAll from "@/components/Header/NavBar/NavButtonsAll";
import SideBar from "@/components/Header/NavBar/Buttons/SideBar";
import HamburgerButton from "@/components/Header/NavBar/Buttons/HamburgerButton";
import styles from "@/components/Header/NavBar/NavBar.module.css";
import {createPortal} from "react-dom";

export default function NavBar(): JSX.Element {
    const [shouldUseSideBar, setShouldUseNavBar] = useState(false)
    const [sideBarActive, setSideBarActive] = useState(false)

    const SIDEBAR_THRESHOLD: number = 750


    useEffect(() => {
        const isNavHamburgerThreshold = (): boolean => {
            return window.innerWidth <= SIDEBAR_THRESHOLD
        }
        const handleResize = (): void => {
            const isWidthThreshold = isNavHamburgerThreshold()

            if (!isWidthThreshold) setSideBarActive(false)
            setShouldUseNavBar(isWidthThreshold)
        }
        window.addEventListener("resize", handleResize)
        handleResize()
        return () => window.removeEventListener("resize", handleResize)
    }, [])

    if (!shouldUseSideBar) {
        return (
            <div className={styles.navContainer}>
                <NavButtonsAll setSideBarActive={false}/>
            </div>
        )
    } else {
        const sideBar =
            <SideBar sideBarActive={sideBarActive}>
                <NavButtonsAll setSideBarActive={setSideBarActive}/>
            </SideBar>
        const sidebarPlacement = () => {
            const mainContainer = document.getElementById('main-container')
            return mainContainer ? createPortal(sideBar, mainContainer) : null
        }

        return (
            <div className={styles.navContainer}>
                <HamburgerButton sideBarActive={sideBarActive}
                                 setSideBarActive={setSideBarActive}/>
                {sidebarPlacement()}
            </div>
        )
    }
}


// export const UseSideBar = ({navBarContext}: { navBarContext: NavBarContext }): JSX.Element => {
//     return (
//         <SideBar sideBarActive={navBarContext.sideBarActive}>
//             <NavButtonsAll navBarContext={navBarContext}/>
//         </SideBar>
//     )
// }
//
// export const UseTopNavBar = (): JSX.Element => {
//
//     return (
//         <NavBar>
//             <NavButtonsAll navBarContext={false}/>
//         </NavBar>
//     )
// }
//
// export const HamburgerInTopNavBar = ({navBarContext}: { navBarContext: NavBarContext }): JSX.Element => {
//
//     return (
//         <NavBar>
//             <HamburgerButton sideBarActive={navBarContext.sideBarActive}
//                              setSideBarActive={navBarContext.setSideBarActive}/>
//         </NavBar>
//     )
// }
//
// export const TopNavOrHamburger = ({navBarContext}: { navBarContext: NavBarContext }): JSX.Element => {
//
//     return !navBarContext.shouldUseSideBar ? <UseTopNavBar/> :
//         <HamburgerInTopNavBar navBarContext={navBarContext}/>
// }
//
// export const Sidebar = ({navBarContext}: { navBarContext: NavBarContext }): JSX.Element => {
//
//     return navBarContext.shouldUseSideBar ? <UseSideBar navBarContext={navBarContext}/> : <></>
// }