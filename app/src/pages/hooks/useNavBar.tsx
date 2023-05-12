import {useEffect, useState} from "react";

export default function useNavBar(): boolean {
    const SIDEBAR_THRESHOLD: number = 600

    const isNavHamburgerThreshold = (): boolean => {
        return window.innerWidth <= SIDEBAR_THRESHOLD
    }

    const [shouldUseSideBar, setShouldUseNavBar] = useState(() => isNavHamburgerThreshold())

    useEffect(() => {
        const handleResize = (): void => {
            setShouldUseNavBar(isNavHamburgerThreshold())
        }
        handleResize()
        window.addEventListener("resize", handleResize)
        return () => window.removeEventListener("resize", handleResize)
    }, [])

    return shouldUseSideBar
}