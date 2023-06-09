import {AiOutlineLineChart} from "react-icons/ai";
import React from "react";
import ContentHeader from "@/components/MainContent/ContentCard/ContentHeader";
import styles from './planning.module.css';

export default function Planning(): JSX.Element {

    return (
        <div id={"planning"}>
            <ContentHeader title={"The Road Forward"} icon={<AiOutlineLineChart/>}/>
            <div className={styles.planningContainer}>
                <p>Having just graduated with my Bachelors in Computer Science, I&#39;m currently busy applying for jobs. {""}
                    But I&#39;m also heavily focused on developing my portfolio projects to hone my skills and continue learning. {""}
                    My main focus at the moment is this website. I have no shortage of ideas about how to expand and improve {""}
                    the features of this site and I&#39;m enthusiastic about software project planning, so I&#39;m {""}
                    <em>using github Projects to roadmap feature development</em> on this site. {""}
                    <a href={"https://github.com/users/danboberton/projects/4"}>Check it out!</a> {""}
                    I&#39;m planning out my weeks as milestones and estimating story points to make weekly goals.
                </p>
            </div>

        </div>
    )
}