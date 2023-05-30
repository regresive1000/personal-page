import { useEffect } from 'react'
import styles from '../public/styles/HelloMain.module.scss'

const HelloMain = () => {

    useEffect(() => {
        function onLoadHandler(e) {
            document.querySelector('#nombre-inicio-sesion').style.opacity = 0;
            setTimeout(() => {
                document.querySelector('.h1').style.opacity = 0;
            }, 500)
            
            setTimeout(() => {
                document.querySelector('#nombre-inicio-sesion').style.opacity = 1;
            }, 1500)
        }
        onLoadHandler();
    }, []);

    return (
        <section className={`${styles.section} row`}>
            <h1 className={`${styles.h1} h1`} >¡Hola! <span className={`${styles.emoji} emoji`}>👋</span></h1>
            <div className={` ${styles.div} text-center col-12`} id='nombre-inicio-sesion'>
                <p className={` ${styles.pNombre}`}>Vanderstichel Nicolás Felipe</p>
                <p className={` ${styles.pPresentacion} `}>Desarrollador Full Stack</p>
            </div>
        </section>
    )
}

export default HelloMain