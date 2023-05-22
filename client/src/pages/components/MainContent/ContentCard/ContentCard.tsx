import styles from './ContentCard.module.css'

type Props = {
    index: number,
    children: JSX.Element,
};

export default function ContentCard({children, index}: Props) {
    const getRotateColor = (): string => {
        const colors: { [color: string]: string } = {
            blue: styles.blueContent,
            mag: styles.magContent,
            orange: styles.orangeContent
        }

        const numColorCycles: number = Object.keys(colors).length
        switch (index % numColorCycles) {
            case 0:
                return colors['mag']
            case 1:
                return colors['blue']
            case 2:
                return colors['orange']
            default:
                return ""
        }
    }

    return (
        <article>
            <div className={`${getRotateColor()} ${styles.contentCard}`}>
                {children}
            </div>
        </article>
    )
}