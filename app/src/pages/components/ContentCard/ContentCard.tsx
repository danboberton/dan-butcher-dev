import styles from './ContentCard.module.css'

type Props = {
    index: number,
    children: JSX.Element,
};

export default function ContentCard({children, index}: Props) {
    const getRotateColor = (): string => {
        const colors: { [color: string]: string } = {
            clear: styles.clearContent,
            blue: styles.blueContent,
            mag: styles.magContent,
        }

        const numColorCycles: number = Object.keys(colors).length
        console.log("There are " + numColorCycles + " possible BG colors")
        switch (index % numColorCycles) {
            case 0:
                return colors['clear']
            case 1:
                return colors['blue']
            case 2:
                return colors['mag']
            default:
                return ""
        }
    }

    return (
        <div className={`${getRotateColor()} ${styles.contentCard}`}>
            {children}
        </div>
    )
}