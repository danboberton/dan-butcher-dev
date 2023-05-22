import ContentHeader from "@/pages/components/MainContent/ContentCard/ContentHeader";
import {TbPlugConnected} from "react-icons/tb";

export default function Connect(){

    return(
        <div id={"connect"}>
            <ContentHeader title={"Connect"} icon={<TbPlugConnected/>}/>

        </div>
    )
}