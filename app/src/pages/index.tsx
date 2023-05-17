import MainContent from "@/pages/components/MainContent/MainContent";
import Header from "@/pages/components/Header/Header";
import MainContainer from "@/pages/components/MainContainer/MainContainer";
import React from "react";
import useNavBar, {Sidebar, TopNavOrHamburger, NavBarContext} from "@/pages/hooks/useNavBar";


export default function Home() {
    const navBarContext: NavBarContext = useNavBar()

    return (
        <main>
            <div className={"center-content"}>
                <MainContainer>
                    <Header>
                        <TopNavOrHamburger navBarContext={navBarContext}/>
                    </Header>
                    <Sidebar navBarContext={navBarContext}/>
                    <MainContent/>
                </MainContainer>
            </div>
        </main>
    )
}
