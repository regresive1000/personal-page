import styles from '../public/styles/Header.module.scss';
import { HashLink as Link } from 'react-router-hash-link';


const Header = () => {
    return (
        <header className={styles.header}>
        
            <Link smooth to="/#contacto" className={`${styles.button} ${styles.paddingLR}`}> Contactame </Link>
            
            
        </header>
        
    )
}

export default Header