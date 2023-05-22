import styles from "./MainContent.module.css"
import ContentCard from "@/pages/components/MainContent/ContentCard/ContentCard";
import About from "@/pages/components/MainContent/About";
import Skills from "@/pages/components/MainContent/Skills";
import Education from "@/pages/components/MainContent/Education";
import Experience from "@/pages/components/MainContent/Experience";
import Projects from "@/pages/components/MainContent/Projects";
import Connect from "@/pages/components/MainContent/Connect";


export default function MainContent({}): JSX.Element {

    const content: JSX.Element[] = [
        <About/>,
        <Skills/>,
        <Education/>,
        <Experience/>,
        <Projects/>,
        <Connect/>
    ]

    return (
        <div className={styles.mainContent}>
            {content.map((value: JSX.Element, index: number): JSX.Element => {
                return (
                    <ContentCard index={index +1} key={`content-${index}`}>
                        {value}
                    </ContentCard>
                )
            })}
        </div>
    )
}