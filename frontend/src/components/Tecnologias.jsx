import styles from '../public/styles/Tecnologias.module.scss'


const Tecnologias = () => {
    return (
        <>
        <section className={`${styles.section} row section section-display d-flex`}>
            
            <div className={`${styles.flecha} flecha col-1`}>
            </div>

            <div className={`${styles.frontend} col col-lg-10 row contenedor d-flex justify-content-evenly`}>
                <h4 className='col-1'>Frontend</h4>

                <article className={`${styles.cardsTecno} col-xl-10 col-xxl-7 row`}>

                    <div className={`${styles.cardTec} col`}>HTML</div>
                    <div className={`${styles.cardTec} col`}>CSS</div>
                    <div className={`${styles.cardTec} col`}>JAVASCRIPT</div>
                    <div className={`${styles.cardTec} col-7`}>Bootstrap - TailwindCSS</div>
                    <div className={`${styles.cardTec} col`}> JQuery</div>
                    <div className={`${styles.cardTec} col`}>React</div>
                    <div className={`${styles.cardTec} col`}>NextJS</div>


                </article>                
            
            </div>
           

        </section>




        <section className={`${styles.section} row section section-display d-flex`}>
                    
        <div className={`${styles.flecha} flecha col-1`}>
        </div>

        <div className={`${styles.frontend} col-10 row contenedor d-flex justify-content-evenly`}>
            <h4 className='col-1'>Backend</h4>

            <article className={`${styles.cardsTecno} col-xl-10 col-xxl-7 row d-flex justify-content-center`}>

                <div className={`${styles.cardTec} ${styles.backend} col `}>NodeJS</div>
                <div className={`${styles.cardTec} ${styles.backend} col `}>Express</div>
                <div className={`${styles.cardTec} ${styles.backend} col `}>MongoDB</div>
                <div className={`${styles.cardTec} col-12`}>React - NextJS | Server Side Rendering</div>
                <div className={`${styles.cardTec} col-12 row justify-content-center p-0 pt-4 pb-2`}>
                    <p>VPS Server</p>
                    <div className={`${styles.cardTec} ${styles.vpsCard} col-3`}>Ubuntu</div>
                    <div className={`${styles.cardTec} ${styles.vpsCard} col-3`}>Nginx</div>
                    <div className={`${styles.cardTec} ${styles.vpsCard} col-3`}>PM2</div>
                </div>
                

            </article>                

        </div>


        </section>
        </>
    )
}

export default Tecnologias