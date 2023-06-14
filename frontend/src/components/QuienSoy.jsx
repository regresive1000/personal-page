import styles from '../public/styles/QuienSoy.module.scss'
import profileImg from '../assets/imgs/1.jpg'

const QuienSoy = () => {
    return(
        <section className={`${styles.section} row section section-display d-flex`}>

            <div className={`${styles.flecha} flecha col-1`}>
            </div>

            <div className={`${styles.contenedor} col col-lg-10 row contenedor no-gutters d-flex flex-column`}>
                <div className={`${styles.divP}`}>
                    <p className={styles.p}>Soy un desarrollador web con pasión tanto en el front-end como en el back-end, mi objetivo es tratar de aprender cada día un poco, para asi ir completando este camino de aprendizaje, desde ya muchas gracias por leerme y espero que me tengan en cuenta</p>
                </div>

                <div className={styles.divImg}>
                    <img className={styles.img} src={profileImg} alt="" width={500} height={500} />
                </div>
            </div>


        </section>
    )

}

export default QuienSoy;