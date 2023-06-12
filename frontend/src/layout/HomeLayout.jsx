import Header from '../components/Header'
import { Outlet } from 'react-router-dom'
import { useEffect } from 'react'

import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'



import styles from '../public/styles/FondoEstrellas.module.scss'
import estrella1 from '../assets/imgs/stars1.png'

const HomeLayout = () => {


  useEffect(() => {


  // gsap.registerPlugin(ScrollTrigger, ScrollSmoother)
  gsap.registerPlugin(ScrollTrigger)
  const estrella1 = document.querySelector('#estrella1');
  const wrapper = document.querySelector('#wrapper');


  

      // ScrollSmoother.create({
      //   wrapper: '#wrapper',
      //   content: '#estrella1',
      //   smooth: 1.8,
      //   effects: true
      // })

    
      gsap.fromTo(estrella1, { backgroundPosition: "0% 100%"}, {
        backgroundPosition: "0% -200%",
        scrollTrigger: {
            trigger: estrella1,
            start: 'top top',
            end: '100%',
            scrub: true,
            
        }
      })
      
      gsap.fromTo(wrapper, { backgroundPosition: "0% 0%"}, {
        backgroundPosition: "0% -150%",
        scrollTrigger: {
            trigger: estrella1,
            start: 'top top',
            end: '100%',
            scrub: true,
            
        }
      })

  

  }, [])



  return (
    <>

        
          <div id='wrapper' className={styles.fondo}>
            <div id='estrella1' className={styles.estrella1}>
              <Header />
              <Outlet />
            </div>
          </div>
        
        
        
    </>
  )

}

export default HomeLayout