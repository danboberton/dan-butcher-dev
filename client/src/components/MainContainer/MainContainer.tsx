import styles from './MainContainer.module.css'
import Image from "next/image";
import pillars from "../../../public/pillars.png";

type Props = {
    children: JSX.Element | JSX.Element[]
};
export default function MainContainer({children}: Props) {

    return (
        <div className={styles.mainContainer} id={"main-container"}>
            <div className={styles.backgroundImage}>
                <Image
                    src={pillars}
                    alt={'NASA Pillars of Creation'}
                    quality={100}
                    fill
                    sizes={'100%'}
                    style={{
                        objectFit: 'cover'
                    }}/>
            </div>
            {children}
        </div>
    )
}