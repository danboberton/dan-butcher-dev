import styles from "./Header.module.css"
import React, {useState, useEffect} from 'react'

export default function Header({}) {

    // Adapted from:
    // https://www.makeuseof.com/sticky-header-react-create/#:~:text=Creating%20a%20Sticky%20Header&text=You%20can%20do%20this%20by,method%20of%20the%20window%20object.
    const [isSticky, setSticky] = useState(false);
    const handleScroll = () => {
        const windowScrollTop = window.scrollY;
        console.log(windowScrollTop)
        if (windowScrollTop > 10) {
            setSticky(true);
        } else {
            setSticky(false);
        }
    };
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const determineSticky = ()=>{
        const stickyTime = isSticky ? styles.sticky : styles.notSticky;
        return (
            `${stickyTime} ${styles.header}`
        )
    }

return (
    <header className={`${styles.sticky} ${styles.header}`}>
            <p className={`${styles.headerText}`}>Dan Butcher.<code>dev</code></p>
    </header>
)
}