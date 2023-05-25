import styles from "@/components/MainContent/ContentCard/ContentCard.module.css";
import React from "react";
import {BsGithub} from "react-icons/bs";
import {IconContext} from "react-icons";
import {IoMdPlanet} from "react-icons/io";

interface Props {
    title: string,
    description: string,
    features: JSX.Element,
    gitURL: string | boolean,
    timeframe: string
}

export default function SingleProject({title, description, features, gitURL, timeframe}: Props): JSX.Element {

    const conditionalButton = (): JSX.Element | null => {
        if (gitURL !== false) {
            return (
                <button className={styles.gitButton} onClick={() => window.open(gitURL as string, "_blank")}>
                    <BsGithub/>
                </button>)
        } else {
            return null
        }
    }

    return (
        <div className={styles.projectContainer}>
            <div className={styles.projectHeaderContainer}>
                <div className={styles.pointerContainer}>
                    <IconContext.Provider value={{color: "white", size: "2rem"}}>
                        <IoMdPlanet/>
                    </IconContext.Provider>
                    <h3 className={styles.subTitle}>{title}</h3>
                </div>
                <IconContext.Provider value={{color: "white", size: "2rem"}}>
                    <div className={styles.gitIconContainer}>
                        <div className={styles.gitButtonContainer}>
                            {conditionalButton()}
                        </div>
                    </div>
                </IconContext.Provider>
            </div>
            <div className={styles.timeframeContainer}>
                <p className={styles.timeframe}>({timeframe})</p>
            </div>
            <div className={styles.projectContentContainer}>
                <div className={styles.growContainer}>
                    <h4 className={styles.feature}>About:</h4>
                    <p> {description}</p>
                </div>
                <div className={styles.growContainer}>
                    <h4 className={styles.feature}>Features:</h4>
                    {features}
                </div>
            </div>
        </div>
    )
}