import styles from '../public/styles/Proyectos.module.scss'

const Proyectos = () => {
  return (
    
    <>

    <section className={`${styles.section} row section section-display d-flex`}>
        <div className={`${styles.flecha} flecha col-1`}>
        </div>

        <div className={`${styles.proyectos} col-10 row contenedor d-flex justify-content-evenly`}>
            

            <article className={`${styles.cardsProyectos} col-8 row d-flex justify-content-center`}>

                <div className={`${styles.primerosProyectos} col-3`}>
                    <img src="" alt="" />
                </div>
                <div className={`${styles.primerosProyectos} col-3`}>
                    <img src="" alt="" />
                </div>
                <div className={`${styles.primerosProyectos} col-3`}>
                    <img src="" alt="" />
                </div>  
                <div className={`${styles.primerosProyectos} col-3`}>
                    <img src="" alt="" />
                </div>  
                <div className={`${styles.primerosProyectos} col-3`}>
                    <img src="" alt="" />
                </div>  
                

            </article>                

        </div>

    </section>

    <section className={`${styles.section} row section section-display d-flex`}>
    <div className={`${styles.flecha} flecha col-1`}>
    </div>

    <div className={`${styles.proyectos} col-10 row contenedor d-flex justify-content-evenly`}>
        <h4 className='col-1'>Mis primeros proyectos</h4>

        <article className={`${styles.cardsProyectos} col-8 row d-flex justify-content-center`}>

            <div className={`${styles.primerosProyectos} col`}>
                <img src="" alt="" />
            </div>
            <div className={`${styles.primerosProyectos} col`}>
                <img src="" alt="" />
            </div>
            <div className={`${styles.primerosProyectos} col`}>
                <img src="" alt="" />
            </div>  
            

        </article>                

    </div>

    </section>

    </>
  )
}

export default Proyectos