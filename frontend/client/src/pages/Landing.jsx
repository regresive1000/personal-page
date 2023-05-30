import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import { useEffect } from 'react'

import HelloMain from '../components/HelloMain'
import QuienSoy from '../components/QuienSoy'
import Separador from '../components/Separador'
import Tecnologias from '../components/Tecnologias'
import Proyectos from '../components/Proyectos'
import SeparadorMail from '../components/SeparadorMail'
import Contacto from '../components/Contacto'


const Landing = () => {

  

  gsap.registerPlugin(ScrollTrigger);



  useEffect(() => {

    if (ScrollTrigger.isTouch !== 1) {

    


  
      //SECTIONS
  
      let items = gsap.utils.toArray('.section-display')
      let counter = 1;
      let num = 50;
      items.forEach(item => {
        const flecha = item.querySelector('.flecha');
        console.log(item)
        counter++
        if(counter % 2 === 0) {
          num = -100; 
        } else {
          num = 100
        }
        gsap.fromTo(item, { opacity: 0, x: num }, {
          opacity: 1, x: 0,
          scrollTrigger: {
            trigger: item,
            start: '-600',
            
            end: '-200',
            scrub: true
          }
        })
        gsap.fromTo(flecha, { height: 0 }, {
          height: '100%',
          scrollTrigger: {
            trigger: flecha,
            start: '-700',
            
            end: '-50',
            scrub: true
          }
        })
  
        
          
        
  
      })
  
      // SEPARADOR TECNOLOGIAS
  
      let itemsSeparador = gsap.utils.toArray('.separador-display');
      console.log(itemsSeparador)
      if (itemsSeparador.length) {
  
        itemsSeparador.forEach( e => {
          const flechaH = e.querySelectorAll('.flecha-horizontal');
          const cuadrado = e.querySelector('.cuadrado');
          const subtitle = e.querySelector('.subtitle')
          gsap.fromTo(flechaH, { width: 0 }, {
            width: '100%',
            scrollTrigger: {
              trigger: e,
              start: '-800',
              
              end: '-50',
              scrub: true
            }
          })
          gsap.fromTo(cuadrado, { width: 0, height: 0 }, {
            width: '20px', height: "20px",
            scrollTrigger: {
              trigger: e,
              start: '-800',
              
              end: '-50',
              scrub: true
            }
          })
          gsap.fromTo(subtitle, { opacity: 0 }, {
            opacity: 1,
            scrollTrigger: {
              trigger: e,
              start: '-800',
              
              end: '-50',
              scrub: true
            }
          })
    
        })
  
      }
      
  
  
    } 
    


  }, [])

  
  

  return (
    <>
      
      <main>
        
        <HelloMain />
        <QuienSoy />
        <Separador title={"Tecnologias"} />
        <Tecnologias />
        <Separador title={"Proyectos"} />
        <Proyectos />
        {/* <SeparadorMail /> */}
        <Separador title={"Contactame"} />
        <Contacto />
      </main>
    
    </>
  )
}

export default Landing