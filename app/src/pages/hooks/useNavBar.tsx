import React, {useEffect, useState} from "react";
import NavButtonsAll from "@/pages/components/Header/NavBar/NavButtonsAll";
import SideBar from "@/pages/components/Header/NavBar/Buttons/SideBar";
import NavBar from "@/pages/components/Header/NavBar/NavBar";
import HamburgerButton from "@/pages/components/Header/NavBar/Buttons/HamburgerButton";

export interface NavBarContext {
    shouldUseSideBar: boolean,
    sideBarActive: boolean,
    setSideBarActive: React.Dispatch<React.SetStateAction<boolean>>
}


export default function useNavBar(): NavBarContext {
    const SIDEBAR_THRESHOLD: number = 600
    const [shouldUseSideBar, setShouldUseNavBar] = useState(false)
    const [sideBarActive, setSideBarActive] = useState(false)

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

    return {shouldUseSideBar, sideBarActive, setSideBarActive}
}

export const UseSideBar = ({navBarContext}: {navBarContext: NavBarContext}): JSX.Element => {
    return (
        <SideBar sideBarActive={navBarContext.sideBarActive}>
            <NavButtonsAll/>
        </SideBar>
    )
}

export const UseTopNavBar = (): JSX.Element => {

    return (
        <NavBar>
            <NavButtonsAll/>
        </NavBar>
    )
}

export const HamburgerInTopNavBar = ({navBarContext}: {navBarContext: NavBarContext}): JSX.Element => {

    return (
        <NavBar>
            <HamburgerButton sideBarActive={navBarContext.sideBarActive}
                             setSideBarActive={navBarContext.setSideBarActive}/>
        </NavBar>
    )
}

export const TopNavOrHamburger = ({navBarContext}: {navBarContext: NavBarContext}): JSX.Element => {

    return !navBarContext.shouldUseSideBar ? <UseTopNavBar/> :
        <HamburgerInTopNavBar navBarContext={navBarContext}/>
}

export const Sidebar = ({navBarContext}: {navBarContext: NavBarContext}): JSX.Element => {

    return navBarContext.shouldUseSideBar ? <UseSideBar navBarContext={navBarContext}/> : <></>
}