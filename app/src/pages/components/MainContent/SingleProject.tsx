import styles from "@/pages/components/MainContent/ContentCard/ContentCard.module.css";
import React from "react";
import {BsGithub} from "react-icons/bs";
import {FaHandPointRight} from "react-icons/fa";
import {IconContext} from "react-icons";
import {IoMdPlanet} from "react-icons/io";

interface Props {
    title: string,
    description: string,
    features: JSX.Element,
    gitURL: string,
    timeframe: string
}

export default function SingleProject({title, description, features, gitURL, timeframe}: Props): JSX.Element {

    return (
        <>
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
                            <button className={styles.gitButton} onClick={() => window.location.href = gitURL}>
                                <BsGithub/>
                            </button>
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
        </>
    )
}