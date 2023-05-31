import styles from '../ContentCard/ContentCard.module.css'
import ContentHeader from "@/components/MainContent/ContentCard/ContentHeader";
import React from "react";
import {BiGitPullRequest} from "react-icons/bi"
import SubContent from "@/components/MainContent/ContentCard/SubContent";
import SingleProject from "@/components/MainContent/Projects/SingleProject";

export default function Projects(): JSX.Element {

    return (
        <div id={"projects"}>
            <ContentHeader title={"Projects"} icon={<BiGitPullRequest/>}/>
            <SingleProject title={"Dan-Butcher.dev"}
                           description={"I built this website from scratch in next.js focusing on mobile-first responsive design, playwright and jest automated cross-browser/cross-viewport testing. I'm currently working on expanding this to include some dynamic content using dynamic routes and server side rendering."}
                           features={
                               <ul>
                                   <li>Next.js / React Single Page Application</li>
                                   <li>Typescript</li>
                                   <li>Mobile-First Responsive Design</li>
                                   <li>All From Scratch</li>
                                   <li>Custom Hamburger Menu for Mobile</li>
                               </ul>
                           }
                           gitURL={"https://github.com/danboberton/dan-butcher-dev"}
                           timeframe={"2023"}/>
            <SingleProject title={"Context Aware Sound Alerts"}
                           description={"A senior group project, this SPA was designed to administer a scientific experiment to participants" +
                               " and aggregate data in a mongo database. Notification sound effects were played randomly over 3 different background noise contexts, " +
                               "users were asked to click a button when they heard a notification sound. We then calculated a hit rate to investigate how different sound effect and background sound pairings performed. Data analysis done in python with Jupyter Notebook, pandas, and matplotlib."}
                           features={
                               <ul>
                                   <li>React Single Page Application</li>
                                   <li>mongodb database</li>
                                   <li>Express REST API backend</li>
                                   <li>python and juypter notebook data analytics</li>
                                   <li>custom bash run script</li>
                               </ul>
                           }
                           gitURL={"https://github.com/danboberton/CASA"}
                           timeframe={"2023"}/>
            <SingleProject title={"money-mate"}
                           description={"A group project for Project Management. This React SPA was designed to help manage a family budget."}
                           features={
                               <ul>
                                   <li>React Single Page Application</li>
                                   <li>Typescript</li>
                                   <li>python Flask back-end</li>
                                   <li>mongodb served from Docker Container</li>
                                   <li>playwright and jest unit-testing</li>
                               </ul>
                           }
                           gitURL={"https://github.com/danboberton/money-mate"}
                           timeframe={"2023"}/>
            <SingleProject title={"Omega Chess"}
                           description={"A group project for CS414 Object Oriented Design with a React front-end and Java back-end. The emphasis for this project was on architectural design of a" +
                               "Java Spark backend to implement logic for a chess game utilizing software design patterns. We were the only group who didn't use a chess board library, we wrote our own custom chessboard components. I'm currently working on porting this to a Docker container to run locally  instead of hosted on a University server."}
                           features={
                               <ul>
                                   <li>React Single Page Application</li>
                                   <li>Sprint / Agile team</li>
                                   <li>Java Spark backend</li>
                                   <li>SQL Database for persistent Game State</li>
                                   <li>UML Modeled and Designed Backend</li>
                                   <li>Used Umbrello to Code Generate Basic Architecture from UML Models</li>
                               </ul>
                           }
                           gitURL={false}
                           timeframe={"2022"}/>
            <SingleProject title={"Global Distances Calculator"}
                           description={"This was my first exposure to a large React codebase. Our group excelled in implementing time-boxed REST-API endpoints with multi-threaded algorithms to find efficient paths to GPS coordinates."}
                           features={
                               <ul>
                                   <li>React Single Page Application</li>
                                   <li>Sprint / Agile team</li>
                                   <li>Java Spark backend</li>
                               </ul>
                           }
                           gitURL={false}
                           timeframe={"2021"}/>
            <SingleProject title={"Remote SPL Calculator"}
                           description={"A remote Sound Pressure Level sensor deployed on a Raspberry Pi. The sensor unit would calculate current SPL and log the data back over a socket."}
                           features={
                               <ul>
                                   <li>python</li>
                                   <li>sockets</li>
                                   <li>bash scripting</li>
                               </ul>
                           }
                           gitURL={"https://github.com/danboberton/SPLSensor-CS370"}
                           timeframe={"2021"}/>
        </div>
    )
}