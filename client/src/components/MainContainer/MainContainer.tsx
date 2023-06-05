import styles from './MainContainer.module.css'
import pillars from "../../../public/pillars.png";
import BackgroundImage from "@/components/MainContainer/BackgroundImage";

type Props = {
    children: JSX.Element | JSX.Element[]
};
export default function MainContainer({children}: Props) {

    return (
        <div className={styles.mainContainer} id={"main-container"}>
            <BackgroundImage image={pillars}/>
            {children}
        </div>
    )
}