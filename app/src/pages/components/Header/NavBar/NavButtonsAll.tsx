import NavButton from "@/pages/components/Header/NavBar/Buttons/NavButton";
import React from "react";

export default function NavButtonsAll(): JSX.Element{

    return(
        <>
            <NavButton title={"About"} link={"test"}/>
            <NavButton title={"Skills"} link={"test"}/>
            <NavButton title={"Education"} link={"test"}/>
            <NavButton title={"Experience"} link={"test"}/>
            <NavButton title={"Projects"} link={"test"}/>
        </>
    )
}