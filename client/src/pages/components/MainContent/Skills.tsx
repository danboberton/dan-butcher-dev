import styles from './ContentCard//ContentCard.module.css'
import skillStyles from './skills.module.css'
import ContentHeader from "@/pages/components/MainContent/ContentCard/ContentHeader";
import React from "react";
import {GiSkills} from "react-icons/gi"
import {GrMysql, GrTest} from 'react-icons/gr'
import {DiApple, DiGithubBadge, DiJsBadge, DiLinux, DiSass, DiWindows} from 'react-icons/di'
import SubContent from "@/pages/components/MainContent/ContentCard/SubContent";
import {
    SiTypescript,
    SiPython,
    SiGnubash,
    SiCplusplus,
    SiNextdotjs,
    SiDocker,
    SiJest,
    SiNodedotjs,
    SiMongodb,
    SiJunit5,
    SiPytest,
    SiCmake,
    SiWebpack,
    SiPlaywright,
    SiJetbrains,
    SiProtools,
    SiAdobecreativecloud
} from "react-icons/si";
import {BsFiletypeHtml, BsFiletypeCss, BsGit} from 'react-icons/bs'
import { FaJava, FaReact } from 'react-icons/fa'
import {IconContext} from "react-icons";
import {IoBuild} from "react-icons/io5";
import {TbBrandVscode, TbCloudDataConnection} from "react-icons/tb";

interface skillIconProps {
    icon: JSX.Element,
    text: string
}

function SkillWithIcon({icon, text}: skillIconProps): JSX.Element {

    return (
        <div className={skillStyles.skillContainer}>
            <IconContext.Provider value={{color: "white", size: "2rem"}}>
                {icon}
            </IconContext.Provider>
            <p className={skillStyles.skill}>{text}</p>
        </div>
    )
}

export default function Skills(): JSX.Element {

    return (
        <>
            <div id={"skills"}>
                <ContentHeader title={"Skills"} icon={<GiSkills/>}/>
                <h3 className={styles.subTitle}>Languages</h3>
                <SubContent>
                    <SkillWithIcon icon={<DiJsBadge/>} text={"Javascript"}/>
                    <SkillWithIcon icon={<SiTypescript/>} text={"Typescript"}/>
                    <SkillWithIcon icon={<SiPython/>} text={"python"}/>
                    <SkillWithIcon icon={<BsFiletypeHtml/>} text={"HTML"}/>
                    <SkillWithIcon icon={<BsFiletypeCss/>} text={"css"}/>
                    <SkillWithIcon icon={<DiSass/>} text={"sass"}/>
                    <SkillWithIcon icon={<SiGnubash/>} text={"bash"}/>
                    <SkillWithIcon icon={<SiCplusplus/>} text={"C / C++"}/>
                    <SkillWithIcon icon={<FaJava/>} text={"Java"}/>
                    <SkillWithIcon icon={<GrMysql/>} text={"SQL"}/>
                </SubContent>
                <h3 className={styles.subTitle}>Libraries & Tech</h3>
                <SubContent>
                    <SkillWithIcon icon={<FaReact/>} text={"React"}/>
                    <SkillWithIcon icon={<SiNextdotjs/>} text={"Next.js"}/>
                    <SkillWithIcon icon={<SiDocker/>} text={"Docker"}/>
                    <SkillWithIcon icon={<SiJest/>} text={"jest"}/>
                    <SkillWithIcon icon={<SiNodedotjs/>} text={"Node.js"}/>
                    <SkillWithIcon icon={<BsGit/>} text={"git"}/>
                    <SkillWithIcon icon={<SiMongodb/>} text={"MongoDB"}/>
                    <SkillWithIcon icon={<SiJunit5/>} text={"JUnit"}/>
                    <SkillWithIcon icon={<GrTest/>} text={"Mockito"}/>
                    <SkillWithIcon icon={<SiPytest/>} text={"pytest"}/>
                    <SkillWithIcon icon={<IoBuild/>} text={"Makefile"}/>
                    <SkillWithIcon icon={<SiCmake/>} text={"Cmake"}/>
                    <SkillWithIcon icon={<SiWebpack/>} text={"webpack"}/>
                    <SkillWithIcon icon={<SiPlaywright/>} text={"Playwright"}/>
                    <SkillWithIcon icon={<TbCloudDataConnection/>} text={"Rest APIs"}/>
                </SubContent>
                <h3 className={styles.subTitle}>OS & Tools</h3>
                <SubContent>
                    <SkillWithIcon icon={<DiLinux/>} text={"Linux"}/>
                    <SkillWithIcon icon={<DiApple/>} text={"MacOS"}/>
                    <SkillWithIcon icon={<DiWindows/>} text={"Windows"}/>
                    <SkillWithIcon icon={<TbBrandVscode/>} text={"VSCode"}/>
                    <SkillWithIcon icon={<SiJetbrains/>} text={"JetBrains"}/>
                    <SkillWithIcon icon={<SiProtools/>} text={"ProTools"}/>
                    <SkillWithIcon icon={<SiAdobecreativecloud/>} text={"Adobe Creative Cloud"}/>
                    <SkillWithIcon icon={<DiGithubBadge/>} text={"github"}/>
                </SubContent>
                <h3 className={styles.subTitle}>General Knowledge</h3>
                <SubContent>
                    <p className={`${skillStyles.skill} ${skillStyles.skillBox}`}>Agile</p>
                    <p className={`${skillStyles.skill} ${skillStyles.skillBox}`}>Scrum</p>
                    <p className={`${skillStyles.skill} ${skillStyles.skillBox}`}>Troubleshooting</p>
                    <p className={`${skillStyles.skill} ${skillStyles.skillBox}`}>Algorithms</p>
                    <p className={`${skillStyles.skill} ${skillStyles.skillBox}`}>Design Patterns</p>
                    <p className={`${skillStyles.skill} ${skillStyles.skillBox}`}>Test Driven Development</p>
                    <p className={`${skillStyles.skill} ${skillStyles.skillBox}`}>Continuous Integration / Continuous Deployment</p>
                    <p className={`${skillStyles.skill} ${skillStyles.skillBox}`}>Machine Learning</p>
                    <p className={`${skillStyles.skill} ${skillStyles.skillBox}`}>Databases</p>
                    <p className={`${skillStyles.skill} ${skillStyles.skillBox}`}>Software Testing</p>
                    <p className={`${skillStyles.skill} ${skillStyles.skillBox}`}>Human-Computer Interaction</p>
                    <p className={`${skillStyles.skill} ${skillStyles.skillBox}`}>Team Leadership</p>
                    <p className={`${skillStyles.skill} ${skillStyles.skillBox}`}>Networking</p>
                    <p className={`${skillStyles.skill} ${skillStyles.skillBox}`}>Mobile-First Responsive Design</p>
                </SubContent>
            </div>

        </>
    )
}