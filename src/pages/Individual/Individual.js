import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { formatearNumero } from '../../helpers/formatearNumero'
import { traerPais } from '../../helpers/traerPais'
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
        <section className='informacion'>
          
            <div className='item'>
              <p className='titulo'>Continente</p>
              <p className='dato'>{pais.continente}</p>
            </div>

            <div className='item'>
              <p className='titulo'>Subcontinente</p>
              <p className='dato'>{pais.subcontinente}</p>
            </div>

            <div className='item'>
              <p className='titulo'>Area</p>
              <p className='dato'>{formatearNumero(pais.area)} m<sup>2</sup></p>
            </div>

            <div className='item'>
              <p className='titulo'>Capital</p>
              <p className='dato'>{pais.capital}</p>
            </div>

            <div className='item'>
              <p className='titulo'>Poblacion</p>
              <p className='dato'>{formatearNumero(pais.poblacion)}</p>
            </div>

            <div className='item'>
              <p className='titulo'>Moneda</p>
              <p className='dato'>{pais.moneda.nombre}</p>
            </div>

            {/* <p>Idiomas: </p> */}

        </section>



      
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
        {/* <section className='cliam y hora'>
          <h4 className='subtitulo'>Clima - hora</h4>

        </section> */}



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
