import MainContent from "@/components/MainContent/MainContent";
import Header from "@/components/Header/Header";
import MainContainer from "@/components/MainContainer/MainContainer";
import React from "react";
import NavBar from "@/components/Header/NavBar/NavBar";
import {useVisitorTracker} from "@/lib/database/visitorTracker";


export default function Home() {
    useVisitorTracker()

    return (
        <main>
            <div className={"center-content"}>
                <MainContainer>
                    <Header>
                        <NavBar/>
                    </Header>
                    <MainContent/>
                </MainContainer>
            </div>
        </main>
    )
}
