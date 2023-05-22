import {MdWork} from "react-icons/md";
import React from "react";
import ContentHeader from "@/pages/components/MainContent/ContentCard/ContentHeader";
import styles from "@/pages/components/MainContent/education.module.css";

export default function Experience(): JSX.Element {

    return (
            <div id={"experience"}>
                <ContentHeader title={"Experience"} icon={<MdWork/>}/>
                <div className={styles.eduContainer}>
                    <div>
                        <p className={styles.bold}>Engineering Intern<span className={styles.sub}> - Pelco (Motorola Solutions, Inc.)</span></p>
                    </div>
                    <div className={styles.yearContainer}>
                        <p className={styles.year}>June 2022 - March 2023</p>
                    </div>
                </div>
                <div className={styles.eduContainer}>
                    <div>
                        <p className={styles.bold}>Touring Recording / Monitor Engineer<span className={styles.sub}> - The String Cheese Incident</span></p>
                    </div>
                    <div className={styles.yearContainer}>
                        <p className={styles.year}>2012 - 2021</p>
                    </div>
                </div>
                <div className={styles.eduContainer}>
                    <div>
                        <p className={styles.bold}>Technical Coordinator<span className={styles.sub}> - Colorado State University</span></p>
                    </div>
                    <div className={styles.yearContainer}>
                        <p className={styles.year}>2010 - 2016</p>
                    </div>
                </div>
            </div>
    )
}