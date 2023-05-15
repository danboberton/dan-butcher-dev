import {FaGrav} from "react-icons/fa";
import React from "react";
import ContentHeader from "@/pages/components/MainContent/ContentCard/ContentHeader";

export default function About(): JSX.Element {

    return (
        <>
            <ContentHeader title={"Hi, I'm Dan!"} icon={<FaGrav/>}/>
            <p className={"content-text responsive"}>I wrote my first code when I was 8 years old, copying some BASIC
                from my favorite magazine, 3-2-1 Contact. I've been obsessed with technology ever since. In my previous
                career I enjoyed a successful decade touring in the music industry with many notable bands working with
                state of the art technology. This high pressure work environment taught me to troubleshoot under
                pressure and work successfully in team environments to achieve our goals in extremely diverse
                conditions. It also forged my deep appreciation of the intersection of technology and art. <span
                    className={"emphasis"}>I love
                designing and building solutions to problems.</span></p>
        </>
    )
}