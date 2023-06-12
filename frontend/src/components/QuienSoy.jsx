import styles from '../public/styles/QuienSoy.module.scss'
import profileImg from '../assets/imgs/1.jpg'

const QuienSoy = () => {
    return(
        <section className={`${styles.section} row section section-display d-flex`}>

            <div className={`${styles.flecha} flecha col-1`}>
            </div>

            <div className={`${styles.contenedor} col-11 col-lg-10 row contenedor d-flex flex-column`}>
                <div className={`${styles.divP}`}>
                    <p className={styles.p}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem perspiciatis quam expedita incidunt tempora neque dicta nihil possimus! Unde autem iure magnam laboriosam voluptatibus ipsam dignissimos sit dolorum quo natus.</p>
                </div>

                <div className={styles.divImg}>
                    <img className={styles.img} src={profileImg} alt="" width={500} height={500} />
                </div>
            </div>


        </section>
    )

}

export default QuienSoy;