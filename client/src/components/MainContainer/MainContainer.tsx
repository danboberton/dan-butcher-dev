import styles from './MainContainer.module.css'


type Props = {
    children: JSX.Element | JSX.Element[]
};
export default function MainContainer({children}: Props) {

    return (
        <div className={styles.mainContainer} id={"main-container"}>
            {children}
        </div>
    )
}