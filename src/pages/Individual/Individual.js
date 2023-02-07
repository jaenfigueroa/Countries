import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { traerPais } from '../../helpers/traerPais'
import { Caja } from './Caja'
import { Carrucel } from './Carrucel'
import { Mapa } from './Mapa'
import { Tarjeta2 } from './Tarjeta2'

/////////////////////////////////////////////
export const Individual = () => {

  const {nombre} = useParams()
  const [pais, setPais] = useState()

  useEffect(()=>{

    const solicitarPais = async ()=>{

      let data =  await traerPais(nombre)
      // console.log(data)

      setPais(data)
    }

    solicitarPais()

  },[nombre])


  useEffect(()=>{
    window.scrollTo(0, 0);
  }, [nombre])


  /////////////////////////////////////////////




  /////////////////////////////////////////////
  if(pais){
    return (
      <>
        {/* BLOQUE 1 */}
        <section className='pais'>
          {/* NOMBRE DE PAIS */}
          <div>
            <h4 className='pais__nombre'>{pais.nombres.comun}</h4>
            <h5 className='pais__nombre-completo'>{pais.nombres.oficial}</h5>
          </div>
          
          {/* CONTENEDOR DE LAS IMAGENES DE BANDERA Y ESCUDO */}
          <article className='pais__contenedor-bandera-escudo'>
            {/* BANDERA */}
            {
              pais.banderaImg && (
                <div>
                  <h4 className='subtitulo'>Bandera</h4>
                  <div className='pais__caja-imagen'>
                    <img src={pais.banderaImg} alt="" />
                  </div>
                </div>
              )
            }
            {/* ESCUDO */}
            {
              pais.escudoImg && (
                <div>
                  <h4 className='subtitulo'>Escudo</h4>
                  <div className='pais__caja-imagen'>
                    <img src={pais.escudoImg} alt="" />
                  </div>
                </div>
              )
            }
          </article>
        </section>



        <h4 className='subtitulo'>Informacion</h4>
        
        {/* BLOQUE 2 */}
        <Caja pais={pais}/>



      
        {/* BLOQUE 3 */}
        <section className='capital'>
          <h4 className='subtitulo'>Mapa</h4>
          <Mapa
            latitud_capital={pais.coordenadasCapital[0]}
            longitud_capital={pais.coordenadasCapital[1]}
            latitud_pais={pais.coordenadasPais[0]}
            longitud_pais={pais.coordenadasPais[1]} />
        </section>




        {/* BLOQUE 4 */}
        {
          pais.paisesVecinos && (
            <section className='paises-vecinos'>
              <h4 className='subtitulo'>Paises vecinos</h4>
    
              <div className='contenedor-paises-vecinos'>
              {
                pais.paisesVecinos.map((x, index) => {
                  return(
                    <Tarjeta2 codigo={x} key={index}/>
                  )
                })
              }
              </div>
              
            </section>
          )
        }

        {/* BLOQUE 5 */}

        <h4 className='subtitulo'>Paisajes</h4>

        <section className='seccion-carrucel'>
          <Carrucel  nombre = {pais.nombres.comun} categoria={'nature'}/>
        </section>

        {/* BLOQUE 6 */}

        <h4 className='subtitulo'>Comida</h4>

        <section className='seccion-carrucel'>
          <Carrucel  nombre = {pais.nombres.comun} categoria={'food'}/>
        </section>

        {/* BLOQUE 6 */}

        <h4 className='subtitulo'>Animales</h4>

        <section className='seccion-carrucel'>
          <Carrucel  nombre = {pais.nombres.comun} categoria={'animals'}/>
        </section>

      </>
    )
  } else{
    /* AVISO EN CASO NO EXISTA INFORMACION DE ESE PAIS */
    return (
      <div className='pais__aviso'>
        {/* <h3 >No existe informacion sobre este pais</h3> */}
      </div>
    )
  }
}
