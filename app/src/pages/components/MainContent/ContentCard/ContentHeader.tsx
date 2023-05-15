import styles from "@/pages/components/MainContent/ContentCard/ContentCard.module.css";
import {IconContext} from "react-icons";
import React from "react";

interface Props {
    title: string,
    icon: JSX.Element | null
}
export default function ContentHeader({title, icon}: Props): JSX.Element{

    return(
        <div className={styles.contentHeaderContainer}>
            <h2 className={"content-title responsive"}>{title}</h2>
            <IconContext.Provider value={{color: "white", size: "4rem"}}>
                <div className={styles.iconContainer}>
                    {icon}
                </div>
            </IconContext.Provider>
        </div>
    )
}