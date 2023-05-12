import {Inter} from 'next/font/google'
import MainContent from "@/pages/components/MainContent/MainContent";
import Header from "@/pages/components/Header/Header";
import MainContainer from "@/pages/components/MainContainer/MainContainer";
import NavButton from "@/pages/components/Header/NavBar/Buttons/NavButton";
import React from "react";
import HamburgerNav from "@/pages/components/Header/NavBar/Buttons/HamburgerNav";
import NavButtonsAll from "@/pages/components/Header/NavBar/NavButtonsAll";
import NavBar from "@/pages/components/Header/NavBar/NavBar";
import useNavBar from "@/pages/hooks/useNavBar";

const inter = Inter({subsets: ['latin']})

export default function Home() {
    const shouldUseSideBar = useNavBar()
    const useTheSideBar: JSX.Element =
        (
            <HamburgerNav>
                <NavButtonsAll/>
            </HamburgerNav>
        )

    return (
        <main>
            <div className={"center-content"}>
                <MainContainer>
                    <Header>
                        {!shouldUseSideBar ? <NavBar useSideBar={shouldUseSideBar}/> : <></>}
                    </Header>
                    {shouldUseSideBar ? useTheSideBar : <></>}
                    <MainContent/>
                </MainContainer>
            </div>
        </main>
    )
}
