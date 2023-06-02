import styles from "@/components/MainContent/ContentCard/content-card.module.css";
import {IconContext} from "react-icons";
import React from "react";

interface Props {
    title: string,
    icon: JSX.Element | null
}

export default function ContentHeader({title, icon}: Props): JSX.Element {

    return (
        <div className={styles.contentHeaderContainer}>
            <IconContext.Provider value={{color: "white", size: "4rem", style: {alignSelf: "left"}}}>
                <div className={styles.iconContainer}>
                    {icon}
                </div>
                <div className={styles.titleContainer}>
                    <h2 className={"content-title responsive"}>{title}</h2>
                </div>
                <div className={styles.emptyContainer}>
                    {icon}
                </div>
            </IconContext.Provider>
        </div>
    )
}