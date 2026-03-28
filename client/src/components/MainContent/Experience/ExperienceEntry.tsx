import React from "react";
import styles from "@/components/MainContent/Education/education.module.css";

interface ExperienceEntryProps {
    title: string;
    company: string;
    year: string;
}

export default function ExperienceEntry({ title, company, year }: ExperienceEntryProps): JSX.Element {
    return (
        <>
            <div>
                <p className={styles.bold}>{title}</p>
            </div>
            <div>
                <p className={styles.sub}>{company}</p>
            </div>
            <div className={styles.yearContainer}>
                <p className={styles.year}>{year}</p>
            </div>
        </>
    );
}
