import MainContent from "@/components/MainContent/MainContent";
import Header from "@/components/Header/Header";
import MainContainer from "@/components/MainContainer/MainContainer";
import React from "react";
import useNavBar, {Sidebar, TopNavOrHamburger, NavBarContext} from "@/components/Header/NavBar/useNavBar";


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
