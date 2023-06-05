import {FaGrav} from "react-icons/fa";
import React from "react";
import ContentHeader from "@/components/MainContent/ContentCard/ContentHeader";
import styles from './about.module.css'
import Image from "next/image";

export default function About(): JSX.Element {

    return (
        <div id={"about"}>
            <ContentHeader title={"Hi, I'm Dan!"} icon={<FaGrav/>}/>
            <div className={styles.aboutContainer}>
                <div className={styles.headshotContainer}>
                    <div className={styles.shadow}>
                        <Image src={'/headshot-scaled.jpeg'} alt={'Headshot of Dan'} width={300} height={100}
                               className={styles.headshot}/>
                    </div>
                </div>
                <div className={styles.me}>
                    <p>&ensp; I wrote my first code when I was 8 years old, copying some BASIC
                        from my favorite magazine, 3-2-1 Contact. I have been obsessed with technology ever since. In
                        my {""}
                        previous career I enjoyed a successful decade in the music and video industry, working with {""}
                        talented artists and state of the art technology. This high pressure work environment taught me
                        to {""}
                        troubleshoot under pressure and work successfully in team environments to achieve our goals
                        in {""}
                        extremely diverse conditions. It also forged my deep appreciation of the intersection of
                        technology {""}
                        and art. <em>I love designing and building solutions to problems.</em></p>
                </div>
            </div>

        </div>
    )
}