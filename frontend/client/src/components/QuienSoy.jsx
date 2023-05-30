import styles from '../public/styles/QuienSoy.module.scss'
import profileImg from '../assets/imgs/1.jpg'

const QuienSoy = () => {
    return(
        <section className={`${styles.section} row section section-display d-flex`}>

            <div className={`${styles.flecha} flecha col-1`}>
            </div>

            <div className={`${styles.contenedor} col-10 row contenedor d-flex flex-column`}>
                <div className={`${styles.divP}`}>
                    <p className={styles.p}>Mi habilidad para trabajar tanto en el frontend como en el backend me permite crear soluciones completas y eficientes, ya que conozco el funcionamiento (pros/contras) de ambos lados. Además, tengo una buena capacidad resolutiva de problemas, siempre buscando la eficiencia. Tengo facilidad al relacionarme con un equipo y soy permeable a la aparición de ideas nuevas. Mi objetivo personal es crecer como desarrollador y cada día aprender un poco mas sobre este mundo</p>
                </div>

                <div className={styles.divImg}>
                    <img className={styles.img} src={profileImg} alt="" width={500} height={500} />
                </div>
            </div>


        </section>
    )

}

export default QuienSoy;