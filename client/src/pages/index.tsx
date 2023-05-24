import MainContent from "@/components/MainContent/MainContent";
import Header from "@/components/Header/Header";
import MainContainer from "@/components/MainContainer/MainContainer";
import React from "react";
import useNavBar, {Sidebar, TopNavOrHamburger, NavBarContext} from "@/hooks/useNavBar";

interface Props{
    spec?: string
}
export default function Home({spec}: Props) {
    const navBarContext: NavBarContext = useNavBar()

    return (
        <main>
            <div className={"center-content"}>
                <MainContainer>
                    {spec ? <p>{spec}</p> : <></>}
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
