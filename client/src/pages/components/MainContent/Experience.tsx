import {MdWork} from "react-icons/md";
import React from "react";
import ContentHeader from "@/pages/components/MainContent/ContentCard/ContentHeader";

export default function Experience(): JSX.Element {

    return (
        <>
            <div id={"experience"}>
                <ContentHeader title={"Experience"} icon={<MdWork/>}/>
                <p>2022-2023 Firmware Engineering Intern - Pelco </p>
            </div>
        </>
    )
}