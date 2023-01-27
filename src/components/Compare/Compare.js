import React, { useEffect, useState } from 'react'
// import { traerPais } from '../../helpers/traerPais'
import './Compare.css'


export const Compare = () => {

  // const [pais, setPais] = useState({})

  // useEffect(() => {
  //   const traerPeticion = async ()=>{
  //     const resultado = await traerPais('peru')
    
  //     console.log(resultado)

  //     setPais(resultado)
  //   }
  //   traerPeticion()

  // }, [])
  

  return (
    <section className='seccion-compare'>
      <h4 className='titulo'>Peru</h4>

      <h5 className='subtitulo'>Capital</h5>
      <p>{}</p>

      <h5 className='subtitulo'>Area</h5>
      <p>458Km - 586Km</p>

    </section>
  )
}
