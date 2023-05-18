import {IoSchoolSharp} from "react-icons/io5";
import React from "react";
import ContentHeader from "@/pages/components/MainContent/ContentCard/ContentHeader";

export default function Education(): JSX.Element {

    return (
        <>
            <ContentHeader title={"Education"} icon={<IoSchoolSharp/>}/>
            <p>Bachelors of Computer Science concentration in Software Engineering</p>
        </>
    )
}