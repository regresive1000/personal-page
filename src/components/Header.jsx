import styles from '../public/styles/Header.module.scss'



const Header = () => {
    return (
        <header className={styles.header}>
        
            <button className={`${styles.button} ${styles.paddingLR}`}> Contactame </button>
            
        </header>
        
    )
}

export default Header