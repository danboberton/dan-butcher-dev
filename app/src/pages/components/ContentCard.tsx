import styles from './ContentCard.module.css'


type Props = {
    index: number,
    children: JSX.Element,
};
export default function ContentCard({children, index}: Props) {

    const steps: {[key: number]: string} = {
        0: '.blue',
        1: '.mag'
    }
    const cycleColors: ()=>string = () => {
        const mod: number = index % Object.keys(steps).length
        return steps[mod]
    }

    return (
        <div className={styles.contentCard}>
            {children}
        </div>
    )
}