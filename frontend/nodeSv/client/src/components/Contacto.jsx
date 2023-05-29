import { useState, useEffect } from 'react'
import axios from 'axios'

import styles from '../public/styles/Contacto.module.scss'

const Contacto = () => {

    const [email, setEmail] = useState('');
    const [asunto, setAsunto] = useState('');
    const [mensaje, setMensaje] = useState('');
    const [post, setPost] = useState({});

    console.log(import.meta.VITE_BACKEND_URL)

    useEffect(() => {
        setPost({
            email,
            asunto,
            mensaje
        })
    }, [email, asunto, mensaje])

    async function handleSubmit(e) {
        e.preventDefault();

        if(email === '' || mensaje === '' || asunto === '') {
            return alert('Todos los campos deben estar completos')
        }


        const url = 'http://localhost:3222/'

        try {
            await axios.post(url, { post })
            .then(res => {
                console.log(res)
            })
        } catch (error) {
            console.log(error)
            return
        }
        
        const msjExito = document.querySelector('.parrafo');
        msjExito.style.opacity = 1;
        setTimeout(() => {
            msjExito.style.opacity = 0;
        }, 5000)

    }
    

  return (


    <section className={`${styles.section} row section section-display d-flex`}>
        

        <form id='contacto' action='/' className={`${styles.form} col-6 d-flex align-items-evenly flex-column`} onSubmit={ (e) => handleSubmit(e) }>
            <div className={`${styles.input} mb-5`}>
                <label htmlFor="email" className="form-label">Dirección de Email</label>
                <input type="email" className="form-control" id="email" placeholder="email@ejemplo.com" onChange={ (e) => {setEmail(e.target.value)} } />
            </div>
            <div className={`${styles.input} mb-5`}>
                <label htmlFor="asunto" className="form-label">Asunto</label>
                <input type="text" className="form-control" id="asunto" placeholder="Meetign sobre ..." onChange={ (e) => {setAsunto(e.target.value)} }/>
            </div>
            <div className={`${styles.input} mb-6`}>
                <label htmlFor="exampleFormControlTextarea1" className="form-label">Mensaje</label>
                <textarea className="form-control" id="exampleFormControlTextarea1" placeholder='Hola Nicolas! Me comunico por este medio para...' onChange={ (e) => { setMensaje(e.target.value) } } />
            </div>

            <input type="submit" className={`${styles.button} mt-5`} value={"Enviar Mensaje"} />


            <div className=' mensaje-exito text-center  mt-5'><p className={`${styles.p} parrafo`}>Mensaje Enviado Correctamente 👏</p></div>

        </form>

        

    </section>
  )
}

export default Contacto