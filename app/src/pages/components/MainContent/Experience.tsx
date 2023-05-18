import {MdWork} from "react-icons/md";
import React from "react";
import ContentHeader from "@/pages/components/MainContent/ContentCard/ContentHeader";

export default function Experience(): JSX.Element {

    return (
        <>
            <ContentHeader title={"Experience"} icon={<MdWork/>}/>
            <p>Pelco</p>
        </>
    )
}