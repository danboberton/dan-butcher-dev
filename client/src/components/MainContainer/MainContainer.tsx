import Image from 'next/image'
import styles from './MainContainer.module.css'
import bg from '../../../public/cosmic-cliffs.png'

type Props = {
    children: JSX.Element | JSX.Element[]
};
export default function MainContainer({children}: Props) {

    return (
        <div className={styles.mainContainer}>
            <div style={{
                backgroundImage: `url(${bg.src})`,
                backgroundAttachment: 'fixed',
                backgroundSize: 'cover'
            }}>

                {children}
            </div>
        </div>
    )
}