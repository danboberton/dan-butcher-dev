import {MdWork} from "react-icons/md";
import React from "react";
import ContentHeader from "@/components/MainContent/ContentCard/ContentHeader";
import styles from "@/components/MainContent/Education/education.module.css";

export default function Experience(): JSX.Element {

    return (
            <div id={"experience"}>
                <ContentHeader title={"Experience"} icon={<MdWork/>}/>
                <div className={styles.eduGrid}>
                    <div>
                        <p className={styles.bold}>
                            Engineering Intern</p>
                    </div>
                    <div>
                        <p className={styles.sub}>Pelco (Motorola Solutions, Inc.)</p>
                    </div>
                    <div className={styles.yearContainer}>
                        <p className={styles.year}>2022 - 2023</p>
                    </div>
                    <div>
                        <p className={styles.bold}>Recording / Monitor Engineer</p>
                    </div>
                    <div>
                        <p className={styles.sub}>The String Cheese Incident</p>
                    </div>
                    <div className={styles.yearContainer}>
                        <p className={styles.year}>2012 - 2021</p>
                    </div>
                    <div>
                        <p className={styles.bold}>Technical Coordinator</p>
                    </div>
                    <div>
                        <p className={styles.sub}>Colorado State University</p>
                    </div>
                    <div className={styles.yearContainer}>
                        <p className={styles.year}>2010 - 2016</p>
                    </div>
                </div>

            </div>
    )
}