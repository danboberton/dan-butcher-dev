import NavButton from "@/pages/components/Header/NavBar/Buttons/NavButton";
import React from "react";

export default function NavButtonsAll(): JSX.Element{

    return(
        <>
            <NavButton title={"About"} link={"#about"}/>
            <NavButton title={"Skills"} link={"#skills"}/>
            <NavButton title={"Education"} link={"#education"}/>
            <NavButton title={"Experience"} link={"#experience"}/>
            <NavButton title={"Projects"} link={"#projects"}/>
            <NavButton title={"Connect"} link={"#connect"}/>
        </>
    )
}