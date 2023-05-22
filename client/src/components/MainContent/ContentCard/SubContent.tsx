import styles from "@/components/MainContent/ContentCard/ContentCard.module.css";

interface Props {
    children: JSX.Element | JSX.Element[]
}

export default function SubContent({children}: Props): JSX.Element {

    return (
        <div className={styles.subContentContainer}>
            <div className={styles.subContent}>
                {children}
            </div>
        </div>
    )
}