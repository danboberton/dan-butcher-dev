import styles from "@/pages/components/MainContent/ContentCard/ContentCard.module.css";
import React from "react";
import {BsGithub} from "react-icons/bs";
import {IconContext} from "react-icons";

interface Props {
    title: string,
    description: string,
    features: JSX.Element,
    gitURL: string
}

export default function SingleProject({title, description, features, gitURL}: Props): JSX.Element {

    return (
        <>
            <div className={styles.projectHeaderContainer}>
                <h3 className={styles.subTitle}>{title}</h3>
                <IconContext.Provider value={{color: "white", size: "2rem"}}>
                    <div className={styles.gitIconContainer}>
                        <p className={"content-text responsive"}>
                            src:
                        </p>
                        <div className={styles.gitButtonContainer}>
                            <button className={styles.gitButton}>
                                <BsGithub/>
                            </button>
                        </div>


                    </div>
                </IconContext.Provider>

            </div>

            <p className={"content-text responsive"}> {description}</p>
            <h4 className={styles.feature}>Features:</h4>
            {features}
        </>
    )
}