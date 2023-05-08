import styles from './ContentCard.module.css'


type Props = {
    index: number,
    children: JSX.Element,
};
export default function ContentCard({children, index}: Props) {


    return (
        <div className={styles.contentCard} style={{backgroundColor: }}>
            {children}
        </div>
    )
}