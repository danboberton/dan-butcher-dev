import MainContent from "@/pages/components/MainContent/MainContent";
import Header from "@/pages/components/Header/Header";
import MainContainer from "@/pages/components/MainContainer/MainContainer";
import React from "react";
import useNavBar, {useSideBar, useTopNavBar, NavBarReturn, hamburgerInTopNavBar} from "@/pages/hooks/useNavBar";


export default function Home() {
    let {shouldUseSideBar, sideBarActive, setSideBarActive}: NavBarReturn = useNavBar()


    return (
        <main>
            <div className={"center-content"}>
                <MainContainer>
                    <Header>
                        {!shouldUseSideBar ? useTopNavBar : hamburgerInTopNavBar(sideBarActive, setSideBarActive)}
                    </Header>
                    {shouldUseSideBar ? useSideBar(sideBarActive) : <></>}
                    <MainContent/>
                </MainContainer>
            </div>
        </main>
    )
}
