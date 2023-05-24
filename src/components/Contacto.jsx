import styles from '../public/styles/Contacto.module.scss'

const Contacto = () => {
  return (
    <section className={`${styles.section} row section section-display d-flex`}>
        

        <form action="" className={`${styles.form} col-6 d-flex align-items-evenly flex-column`}>
            <div className={`${styles.input} mb-5`}>
                <label htmlFor="exampleFormControlInput1" className="form-label">Dirección de Email</label>
                <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="email@ejemplo.com" />
            </div>
            <div className={`${styles.input} mb-5`}>
                <label htmlFor="exampleFormControlInput1" className="form-label">Asunto</label>
                <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Meetign sobre ..." />
            </div>
            <div className={`${styles.input} mb-6`}>
                <label htmlFor="exampleFormControlTextarea1" className="form-label">Mensaje</label>
                <textarea className="form-control" id="exampleFormControlTextarea1" placeholder='Hola Nicolas! Me comunico por este medio para...' />
            </div>

            <button className={`${styles.button} mt-5`}>
                Enviar Mensaje
            </button>


        </form>

        

    </section>
  )
}

export default Contacto