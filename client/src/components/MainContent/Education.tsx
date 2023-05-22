import {IoSchoolSharp} from "react-icons/io5";
import React from "react";
import ContentHeader from "@/components/MainContent/ContentCard/ContentHeader";
import styles from './education.module.css'


export default function Education(): JSX.Element {

    return (
        <div id={"education"}>
            <ContentHeader title={"Education"} icon={<IoSchoolSharp/>}/>
            <div className={styles.eduContainer}>
                <div>
                    <p className={styles.bold}>Bachelors of Computer Science<span className={styles.sub}> - Colorado State University</span></p>
                    <p className={styles.subIndent}><span className={styles.italic}>concentration in Software Engineering </span></p>
                </div>
                <div className={styles.yearContainer}>
                    <p className={styles.year}>May 2023</p>
                </div>
            </div>
            <div className={styles.eduContainer}>
                <div>
                    <p className={styles.bold}>Audio Production Certificate<span className={styles.sub}> - Conservatory of Recording Arts and Sciences</span></p>
                </div>
                <div className={styles.yearContainer}>
                    <p className={styles.year}>2009</p>
                </div>
            </div>
        </div>
    )
}