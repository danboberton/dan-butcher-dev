import {MdWork} from "react-icons/md";
import React from "react";
import ContentHeader from "@/components/MainContent/ContentCard/ContentHeader";
import ExperienceEntry from "@/components/MainContent/Experience/ExperienceEntry";
import styles from "@/components/MainContent/Education/education.module.css";

export default function Experience(): JSX.Element {

    return (
            <div id={"experience"}>
                <ContentHeader title={"Experience"} icon={<MdWork/>}/>
                <div className={styles.eduGrid}>
                    <ExperienceEntry title="Firmware Engineer" company="Motorola Solutions Inc." year="2024 - Present" />
                    <ExperienceEntry title="Senior Business Analyst" company="Republic Services" year="2023" />
                    <ExperienceEntry title="Engineering Intern" company="Pelco (Motorola Solutions, Inc.)" year="2022 - 2023" />
                    <ExperienceEntry title="Recording / Monitor Engineer" company="The String Cheese Incident" year="2012 - 2021" />
                    <ExperienceEntry title="Technical Coordinator" company="Colorado State University" year="2010 - 2016" />
                </div>

            </div>
    )
}