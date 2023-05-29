import styles from '../public/styles/Proyectos.module.scss';
import ModalProyect from './ModalProyect';


import jockeyImg from '../assets/imgs/jockey-club.png'
import apvImg from '../assets/imgs/apv.png'
import baseDatosImg from '../assets/imgs/baseDatos.png'
import vpsImg from '../assets/imgs/vps-sv.png'
import calcImg from '../assets/imgs/calculadora.png'
import climaImg from '../assets/imgs/weather.png'
import showImg from '../assets/imgs/show-searcher.png'




const Proyectos = () => {

    


  return (
    
    <>

    <section className={`${styles.section} row section section-display d-flex`}>
        <div className={`${styles.flecha} flecha col-1`}>
        </div>

        <div className={`${styles.proyectos} col-10 row contenedor d-flex justify-content-evenly`}>
            

            <article className={`${styles.cardsProyectos} col-8 row d-flex justify-content-center`} onClick={ () => {window.scrollTo({top: 4000})} }>

                <div className={`${styles.primerosProyectos} col-3`} >
                    <img src={jockeyImg} alt="" data-bs-toggle="modal" data-bs-target="#jockeyModal"/>
                    <ModalProyect bsTarget={"jockeyModal"} imagen={jockeyImg} />
                </div>
                <div className={`${styles.primerosProyectos} col-3`} >
                    <img src={apvImg} alt="" data-bs-toggle="modal" data-bs-target="#apvModal"/>
                    <ModalProyect bsTarget={"apvModal"} imagen={apvImg} />
                </div>
                <div className={`${styles.primerosProyectos} col-3`} >
                    <img src={baseDatosImg} alt="" data-bs-toggle="modal" data-bs-target="#baseDatosModal"/>
                    <ModalProyect bsTarget={"baseDatosModal"} imagen={baseDatosImg}/>
                </div>  
                <div className={`${styles.primerosProyectos} col-3`} >
                    <img src={vpsImg} alt="" data-bs-toggle="modal" data-bs-target="#vpsModal"/>
                    <ModalProyect bsTarget={"vpsModal"} imagen={vpsImg} />
                </div>  
                
                

            </article>                

        </div>

    </section>

    <section className={`${styles.section} row section section-display d-flex`}>
    <div className={`${styles.flecha} flecha col-1`}>
    </div>

    <div className={`${styles.proyectos} col-10 row contenedor d-flex justify-content-evenly`}>
        <h4 className='col-1'>Mis primeros proyectos</h4>

        <article className={`${styles.cardsProyectos} col-8 row d-flex justify-content-center`} onClick={ () => {window.scrollTo({top: 4900})} }>

            <div className={`${styles.primerosProyectos} col-3`} >
                <img src={calcImg} alt="" data-bs-toggle="modal" data-bs-target="#calculadoraModal"/>
                <ModalProyect bsTarget={"calculadoraModal"} imagen={calcImg} title={"Calculadora"} descripcion={"Esta es mi primer proyecto y aplicación web, donde estaba aprendiendo los principios de manejo de DOM (Document Object Model) y probando diversas funcionalidades y capacidades del lenguaje Javascript"}/>
            </div>
            <div className={`${styles.primerosProyectos} col-3`}>
                <img src={climaImg} alt="" data-bs-toggle="modal" data-bs-target="#climaModal"/>
                <ModalProyect bsTarget={"climaModal"} imagen={climaImg} title={"Aplicación del Clima"} descripcion={"Esta fue mi segunda aplicación donde me concentre en las peticiones HTTP, tanto en peticiones XML, Ajax, Fetch API y posteriormente Axios. Mi decision en esta aplicacion fue la implementación del metodo Fetch API que viene por defecto en el navegador, ya que es el metodo mas comun para peticiones en Javascript Moderno Vanilla (ya que en el pasado se utilizaba las peticiones XML, pero estas eran poco practicas e ilegibles en su mantenimiento)"}/>
            </div>
            <div className={`${styles.primerosProyectos} col-3`}>
                <img src={showImg} alt="" data-bs-toggle="modal" data-bs-target="#showsearcherModal"/>
                <ModalProyect bsTarget={"showsearcherModal"} imagen={showImg} title={"Buscador de Series"} descripcion={"Asi como la aplicación del clima que comente con anterioridad, en esta aplicación también se realiza una petición HTTP de tipo GET, en la que se le pide a una API de terceros un catalogo de series dependiendo el texto que se le pida. En esta aplicación me concentre en el manejo de datos de tipo Array y su visualización, no es una aplición muy vistosa, ya que su importancia esta en el manejo de información en cantidad sin importar el numero de estos datos "} />
            </div>  
            
            

        </article>                

    </div>

    </section>

    </>
  )
}

export default Proyectos