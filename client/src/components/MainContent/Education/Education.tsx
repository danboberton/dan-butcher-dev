import {IoSchoolSharp} from "react-icons/io5";
import React from "react";
import ContentHeader from "@/components/MainContent/ContentCard/ContentHeader";
import styles from './education.module.css'


export default function Education(): JSX.Element {

    return (
        <div id={"education"}>
            <ContentHeader title={"Education"} icon={<IoSchoolSharp/>}/>
            <div className={styles.eduGrid}>
                <div>
                    <p className={styles.bold}>
                        Bachelors of Computer Science
                    </p>
                    <p className={styles.subIndent}>
                        concentration Software Engineering
                    </p>
                </div>
                <div>
                    <p className={styles.sub}>Colorado State University</p>
                </div>
                <div className={styles.yearContainer}>
                    <p className={styles.year}>May 2023</p>
                </div>
                {/*ROW*/}
                <div>
                    <p className={styles.bold}>Audio Production Certificate

                    </p>
                </div>
                <div>
                    <p className={styles.sub}>Conservatory of Recording Arts and Sciences</p>
                </div>
                <div className={styles.yearContainer}>
                    <p className={styles.year}>2009</p>
                </div>
            </div>
        </div>
    )
}