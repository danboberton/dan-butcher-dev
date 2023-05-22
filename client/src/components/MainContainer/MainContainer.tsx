import styles from './MainContainer.module.css'
import bg from '../../../public/cosmic-cliffs.png'

type Props = {
    children: JSX.Element | JSX.Element[]
};
export default function MainContainer({children}: Props) {

    return (
        <div className={styles.mainContainer} style={{
            maxWidth: '1000px',
            width: '100%',
            backgroundImage: `radial-gradient(ellipse, rgba(var(--space-black-rgb), 0), rgba(var(--space-black-rgb), 1)),
            url(${bg.src})`,
            backgroundRepeat: 'no-repeat',
            backgroundAttachment: 'fixed',
            backgroundColor: 'rgb(var(--space-black-rgb))'
        }}>
            {children}
        </div>
    )
}