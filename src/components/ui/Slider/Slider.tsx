import React, { FC } from 'react'
import { Slide } from 'react-slideshow-image'
import styles from "./Slider.module.css"
import 'react-slideshow-image/dist/styles.css'


interface Props {
    images:string[]
}



const Slider:FC<Props> = ({images}) => {


    return (
      <Slide
      easing='ease'
      duration={3000}
      indicators
      >
          {images.map(products => {
              const url = `${products}`
              return(
                  <div className={styles['each-slide']} key={products}>
                      <div style={{
                          backgroundImage:`url(${url})`,
                          backgroundSize:"cover",
                      }}>
                      </div>
                  </div>
              )
          })}
      </Slide>
    )
  }
  
  export default Slider