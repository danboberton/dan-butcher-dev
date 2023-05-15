import React, {useEffect, useState} from "react";
import NavButtonsAll from "@/pages/components/Header/NavBar/NavButtonsAll";
import SideBar from "@/pages/components/Header/NavBar/Buttons/SideBar";
import NavBar from "@/pages/components/Header/NavBar/NavBar";
import HamburgerButton from "@/pages/components/Header/NavBar/Buttons/HamburgerButton";

export type NavBarReturn = {
    shouldUseSideBar: boolean,
    sideBarActive: boolean,
    setSideBarActive: React.Dispatch<React.SetStateAction<boolean>>
}

export default function useNavBar(): {
    sideBarActive: boolean;
    shouldUseSideBar: boolean;
    setSideBarActive: (value: (((prevState: boolean) => boolean) | boolean)) => void
} {
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

export const useSideBar = (sideBarActive: boolean) => {
    return (
        <SideBar sideBarActive={sideBarActive}>
            <NavButtonsAll/>
        </SideBar>
    )
}

export const useTopNavBar: JSX.Element = (
    <NavBar>
        <NavButtonsAll/>
    </NavBar>
)

export const hamburgerInTopNavBar = (sidebarActive: boolean, setSideBarActive: (value: (((prevState: boolean) => boolean) | boolean)) => void) => {

    return (
        <NavBar>
            <HamburgerButton sideBarActive={sidebarActive} setSideBarActive={setSideBarActive}/>
        </NavBar>
    )
}