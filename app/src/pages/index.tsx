import {Inter} from 'next/font/google'
import MainContent from "@/pages/components/MainContent/MainContent";
import Header from "@/pages/components/Header/Header";
import MainContainer from "@/pages/components/MainContainer/MainContainer";

const inter = Inter({subsets: ['latin']})

export default function Home() {
    return (
        <main>
            <div className={"center-content"}>
                <MainContainer>
                    <Header/>
                    <MainContent/>
                </MainContainer>
            </div>
        </main>
    )
}
