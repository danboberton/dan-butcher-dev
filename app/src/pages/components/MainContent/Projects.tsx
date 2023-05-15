import styles from './ContentCard//ContentCard.module.css'
import ContentHeader from "@/pages/components/MainContent/ContentCard/ContentHeader";
import React from "react";
import {BiGitPullRequest} from "react-icons/bi"
import SubContent from "@/pages/components/MainContent/ContentCard/SubContent";
import SingleProject from "@/pages/components/MainContent/SingleProject";

export default function Projects(): JSX.Element {

    return (
        <>
            <ContentHeader title={"Projects"} icon={<BiGitPullRequest/>}/>
            <SingleProject title={"Dan-Butcher.dev"}
                           description={"This Website"}
                           features={
                               <ul>
                                   <li>Next.js / React Single Page Application</li>
                                   <li>Typescript</li>
                                   <li>Mobile-First Design</li>
                                   <li>All From Scratch</li>
                                   <li>Custom Hamburger Menu for Mobile</li>
                               </ul>
                           }
                           gitURL={"www."}/>
        </>
    )
}