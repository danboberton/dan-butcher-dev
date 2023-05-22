import styles from './ContentCard//ContentCard.module.css'
import ContentHeader from "@/pages/components/MainContent/ContentCard/ContentHeader";
import React from "react";
import {GiSkills} from "react-icons/gi"
import SubContent from "@/pages/components/MainContent/ContentCard/SubContent";

export default function Skills(): JSX.Element {

    return (
        <>
            <div id={"skills"}>
                <ContentHeader title={"Skills"} icon={<GiSkills/>}/>
                <h3 className={styles.subTitle}>Languages</h3>
                <SubContent>
                    <code>Javascript</code>
                    <code>typescript</code>
                    <code>python</code>
                    <code>HTML</code>
                    <code>css</code>
                    <code>sass</code>
                    <code>bash</code>
                    <code>C++</code>
                    <code>Java</code>
                    <code>SQL</code>
                </SubContent>
                <h3 className={styles.subTitle}>Libraries & Tech</h3>
                <SubContent>
                    <code>React</code>
                    <code>next.js</code>
                    <code>Docker</code>
                    <code>jest</code>
                    <code>node.js</code>
                    <code>git</code>
                    <code>mongodb</code>
                    <code>JUnit</code>
                    <code>Mockito</code>
                    <code>Makefile</code>
                    <code>CMake</code>
                    <code>webpack</code>
                    <code>playwright</code>
                    <code>REST APIs</code>
                </SubContent>
                <h3 className={styles.subTitle}>OS & Tools</h3>
                <SubContent>
                    <code>Linux</code>
                    <code>MacOS</code>
                    <code>Windows</code>
                    <code>VS Code</code>
                    <code>Jetbrains</code>
                    <code>ProTools</code>
                    <code>Adobe Creative Cloud</code>
                    <code>GitHub</code>
                </SubContent>
                <h3 className={styles.subTitle}>General Knowledge</h3>
                <SubContent>
                    <code>Agile</code>
                    <code>Scrum</code>
                    <code>Troubleshooting</code>
                    <code>Algorithms</code>
                    <code>Design Patterns</code>
                    <code>Test Driven Development</code>
                    <code>Continuous Integration / Continuous Deployment</code>
                    <code>Machine Learning</code>
                    <code>Databases</code>
                    <code>Software Testing</code>
                    <code>Human-Computer Interaction</code>
                    <code>Team Leadership</code>
                    <code>Networking</code>
                    <code>Mobile-First Responsive Design</code>
                </SubContent>
            </div>

        </>
    )
}