import { useEffect, useState } from 'react';
import styles from '../public/styles/Proyectos.module.scss';
import ModalProyect from './ModalProyect';


import jockeyImg from '../assets/imgs/jockey-club.png'
import apvImg from '../assets/imgs/apv.png'
import baseDatosImg from '../assets/imgs/baseDatos.png'
import vpsImg from '../assets/imgs/vps-sv.png'
import calcImg from '../assets/imgs/calculadora.png'
import climaImg from '../assets/imgs/weather.png'
import showImg from '../assets/imgs/show-searcher.png'
import todoDndImg from '../assets/imgs/todoDnd.png'



const Proyectos = () => {

    function handleClickScroll(e) {
        console.log(e.target)
        if (e.target.className === 'miniatura-modal') {
            e.target.scrollIntoView({ behavior: 'smooth'})
        }
    }
    


  return (
    
    <>

    <section className={`${styles.section} row section section-display d-flex`}>
        <div className={`${styles.flecha} flecha col-1`}>
        </div>

        <div className={`${styles.proyectos} col-10 row contenedor d-flex justify-content-evenly`}>
            

            <article id='proyectos' className={`${styles.cardsProyectos} col-12 row d-flex justify-content-center`} onClick={ (e) => {handleClickScroll(e)} }>

                <div className={`${styles.primerosProyectos} col-3`} >
                    <img src={todoDndImg} alt="" data-bs-toggle="modal" data-bs-target="#todoDnd" className='miniatura-modal'/>
                    <ModalProyect link="dnd" booleanLink={true} bsTarget={"todoDnd"} imagen={todoDndImg} title={"Drag and Drop, To Do List"} descripcion={`Aplicación donde es una "to do list" integrada con la funcionalidad Drag And Drop, donde tiene funcionalidades desde se puede manjear los datos de la aplicación a su gusto (tanto elementos, como columnas) y estas van a ser guardadas dentro del LocalStorage del navegador. Es escalable todo lo que se quiera ya que esta hecha con una logica que permite que no haya conflicto entre columnas y demas elementos.`} />
                </div>
                <div className={`${styles.primerosProyectos} col-3`} >
                    <img src={jockeyImg} alt="" data-bs-toggle="modal" data-bs-target="#jockeyModal" className='miniatura-modal'/>
                    <ModalProyect link="www.jockeyclubposadas.com" booleanLink={false} bsTarget={"jockeyModal"} imagen={jockeyImg}  title={"Jockey Club Posadas"} descripcion={"Mi primer trabajo formal donde realice la Landing page al Jockey Club Posadas y que aun sigue en desarrollo porque estoy a la espera de unas imagenes que me tienen que enviar aun, pero la página ya esta en la web con los assets por default a la espera"} />
                </div>
                <div className={`${styles.primerosProyectos} col-3`} >
                    <img src={apvImg} alt="" data-bs-toggle="modal" data-bs-target="#apvModal" className='miniatura-modal'/>
                    <ModalProyect bsTarget={"apvModal"} imagen={apvImg}  booleanLink={false} title={"Administrador de Pacientes"} descripcion={"Una aplicación que tiene registro de usuarios, autenticación, encriptación de contraseñas, y manejo de datos C.R.U.D. Se administra pacientes que son guardados en una base de datos y estos datos pueden crearse, leerse, actualizarse y eliminarse"} />
                </div>
                <div className={`${styles.primerosProyectos} col-3`} >
                    <img src={baseDatosImg} alt="" data-bs-toggle="modal" data-bs-target="#baseDatosModal"/>
                    <ModalProyect bsTarget={"baseDatosModal"} imagen={baseDatosImg} booleanLink={false} title={"Base de datos MongoDB"} descripcion={"Esa es mi base de datos, en la que administro distintas aplicaciónes y manejo todo tipo de peticiones (CRUD)"} />
                </div>  
                <div className={`${styles.primerosProyectos} col-3`} >
                    <img src={vpsImg} alt="" data-bs-toggle="modal" data-bs-target="#vpsModal" className='miniatura-modal'/>
                    <ModalProyect bsTarget={"vpsModal"} imagen={vpsImg} title={"Servidor VPS"} booleanLink={false} descripcion={"Configuración y Deploy de servidor VPS, donde he utilizado herramientas como PM2 y Nginx. Este servidor tiene una IP publica donde se levanta el servidor de cada aplicación web, y las peticiones que llegan son redireccionadas a cada aplicación a travez de Reverse Proxy"} />
                </div>  
                
                

            </article>                

        </div>

    </section>

    <section id='primeros-proyectos' className={`${styles.section} row section section-display d-flex`}>
    <div className={`${styles.flecha} flecha col-1`}>
    </div>

    <div className={`${styles.proyectos} col-10 row contenedor d-flex justify-content-evenly`}>
        <h4 className='col-1'>Mis primeros proyectos</h4>

        <article className={`${styles.cardsProyectos} col-12 row d-flex justify-content-center`} onClick={  (e) => {handleClickScroll(e)}  }>

            <div className={`${styles.primerosProyectos} col-3`} >
                <img src={calcImg} alt="" data-bs-toggle="modal" data-bs-target="#calculadoraModal" className='miniatura-modal'/>
                <ModalProyect bsTarget={"calculadoraModal"} imagen={calcImg} title={"Calculadora"} descripcion={"Esta es mi primer proyecto y aplicación web, donde estaba aprendiendo los principios de manejo de DOM (Document Object Model) y probando diversas funcionalidades y capacidades del lenguaje Javascript"}/>
            </div>
            <div className={`${styles.primerosProyectos} col-3`}>
                <img src={climaImg} alt="" data-bs-toggle="modal" data-bs-target="#climaModal" className='miniatura-modal'/>
                <ModalProyect bsTarget={"climaModal"} imagen={climaImg} title={"Aplicación del Clima"} descripcion={"Esta fue mi segunda aplicación donde me concentre en las peticiones HTTP, tanto en peticiones XML, Ajax, Fetch API y posteriormente Axios. Mi decision en esta aplicacion fue la implementación del metodo Fetch API que viene por defecto en el navegador, ya que es el metodo mas comun para peticiones en Javascript Moderno Vanilla (ya que en el pasado se utilizaba las peticiones XML, pero estas eran poco practicas e ilegibles en su mantenimiento)"}/>
            </div>
            <div className={`${styles.primerosProyectos} col-3`}>
                <img src={showImg} alt="" data-bs-toggle="modal" data-bs-target="#showsearcherModal" className='miniatura-modal'/>
                <ModalProyect bsTarget={"showsearcherModal"} imagen={showImg} title={"Buscador de Series"} descripcion={"Asi como la aplicación del clima que comente con anterioridad, en esta aplicación también se realiza una petición HTTP de tipo GET, en la que se le pide a una API de terceros un catalogo de series dependiendo el texto que se le pida. En esta aplicación me concentre en el manejo de datos de tipo Array y su visualización, no es una aplición muy vistosa, ya que su importancia esta en el manejo de información en cantidad sin importar el numero de estos datos "} />
            </div>  
            
            

        </article>                

    </div>

    </section>

    </>
  )
}

export default Proyectos