import NavButton from "@/components/Header/NavBar/Buttons/NavButton";
import React from "react";

interface Props {
    setSideBarActive: React.Dispatch<React.SetStateAction<boolean>> | false
}
export default function NavButtonsAll({setSideBarActive}: Props): JSX.Element{

    return(
        <>
            <NavButton title={"About"} link={"#about"} setSideBarActive={setSideBarActive}/>
            <NavButton title={"Skills"} link={"#skills"} setSideBarActive={setSideBarActive}/>
            <NavButton title={"Education"} link={"#education"} setSideBarActive={setSideBarActive}/>
            <NavButton title={"Experience"} link={"#experience"} setSideBarActive={setSideBarActive}/>
            <NavButton title={"Forward"} link={"#planning"} setSideBarActive={setSideBarActive}/>
            <NavButton title={"Projects"} link={"#projects"} setSideBarActive={setSideBarActive}/>
            <NavButton title={"Connect"} link={"#connect"} setSideBarActive={setSideBarActive}/>
        </>
    )
}