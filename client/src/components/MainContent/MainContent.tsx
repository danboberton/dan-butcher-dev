import styles from "./MainContent.module.css"
import ContentCard from "@/components/MainContent/ContentCard/ContentCard";
import About from "@/components/MainContent/About";
import Skills from "@/components/MainContent/Skills";
import Education from "@/components/MainContent/Education";
import Experience from "@/components/MainContent/Experience";
import Projects from "@/components/MainContent/Projects";
import Connect from "@/components/MainContent/Connect";


export default function MainContent({}): JSX.Element {

    const content: JSX.Element[] = [
        <About key={'about'}/>,
        <Skills key={'skills'}/>,
        <Education key={'education'}/>,
        <Experience key={'experience'}/>,
        <Projects key={'projects'}/>,
        <Connect key={'connect'}/>
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