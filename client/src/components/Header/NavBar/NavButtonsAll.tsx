import NavButton from "@/components/Header/NavBar/Buttons/NavButton";
import React from "react";
import {NavBarContext} from "@/hooks/useNavBar";

interface Props {
    navBarContext: NavBarContext | false
}
export default function NavButtonsAll({navBarContext}: Props): JSX.Element{

    return(
        <>
            <NavButton title={"About"} link={"#about"} navBarContext={navBarContext}/>
            <NavButton title={"Skills"} link={"#skills"} navBarContext={navBarContext}/>
            <NavButton title={"Education"} link={"#education"} navBarContext={navBarContext}/>
            <NavButton title={"Experience"} link={"#experience"} navBarContext={navBarContext}/>
            <NavButton title={"Projects"} link={"#projects"} navBarContext={navBarContext}/>
            <NavButton title={"Connect"} link={"#connect"} navBarContext={navBarContext}/>
        </>
    )
}