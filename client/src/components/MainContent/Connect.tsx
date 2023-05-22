import ContentHeader from "@/components/MainContent/ContentCard/ContentHeader";
import {TbPlugConnected} from "react-icons/tb";
import styles from './connect.module.css'
import { SocialIcon } from 'react-social-icons';

export default function Connect(){

    return(
        <div id={"connect"}>
            <ContentHeader title={"Connect"} icon={<TbPlugConnected/>}/>
            <div className={styles.connectContainer}>
                <SocialIcon url="https://github.com/danboberton" className={styles.socialIcon}/>
                <SocialIcon url="https://www.linkedin.com/in/dan-butcher-foco" className={styles.socialIcon}/>
            </div>
        </div>
    )
}