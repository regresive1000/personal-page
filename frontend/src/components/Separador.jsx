import styles from '../public/styles/Separador.module.scss'
import { useState } from 'react'

const Separador = ({title}) => {

  
    return (
    
    <div className={`${styles.separador} row separador-display`}>
            <div className={`${styles.cuadrado} cuadrado col-1`}></div>
            <div className='col-4 d-flex justify-content-center'>
                <div className={`${styles.flecha} flecha-horizontal`}></div>
            </div>
            <h4 className="col-1 subtitle">{title}</h4>
            <div className='col-4 d-flex justify-content-center'>
                <div className={`${styles.flecha} flecha-horizontal`}></div>
            </div>
    </div>

  )
}

export default Separador