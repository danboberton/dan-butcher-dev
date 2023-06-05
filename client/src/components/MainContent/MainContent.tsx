import styles from "./MainContent.module.css"
import ContentCard from "@/components/MainContent/ContentCard/ContentCard";
import About from "@/components/About/About";
import Skills from "@/components/MainContent/Skills";
import Education from "@/components/MainContent/Education/Education";
import Experience from "@/components/MainContent/Experience/Experience";
import Projects from "@/components/MainContent/Projects/Projects";
import Connect from "@/components/MainContent/Connect";
import Planning from "@/components/MainContent/Planning/Planning"

export default function MainContent({}): JSX.Element {

    const content: JSX.Element[] = [
        <About key={'about'}/>,
        <Skills key={'skills'}/>,
        <Education key={'education'}/>,
        <Experience key={'experience'}/>,
        <Planning/>,
        <Projects key={'projects'}/>,
        <Connect key={'connect'}/>
    ]

    return (
        <div className={styles.mainContent} data-testid="main-content">
            {content.map((value: JSX.Element, index: number): JSX.Element => {
                return (
                    <ContentCard index={index + 1} key={`content-${index}`}>
                        {value}
                    </ContentCard>
                )
            })}
        </div>
    )
}