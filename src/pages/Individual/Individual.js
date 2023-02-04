import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { traerPais } from '../../helpers/traerPais'

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


  /////////////////////////////////////////////
  return (
    <section className='pais'>
      {
        pais && (
          <>
            {/* NOMBRE DE PAIS */}
            <div>
              <h4 className='pais__nombre'>{pais.nombres.comun}</h4>
              <h5 className='pais__nombre-completo'>{pais.nombres.oficial}</h5>
            </div>
            
            {/* CONTENEDOR DE LAS IMAGENES DE BANDERA Y ESCUDO */}
            <article className='pais__contenedor-bandera-escudo'>
              {/* BANDERA */}
              <div>
                <h4 className='subtitulo'>Bandera</h4>
                <div className='pais__caja-imagen'>
                  <img src={pais.banderaImg} alt="" />
                </div>
              </div>
              {/* ESCUDO */}
              <div>
                <h4 className='subtitulo'>Escudo</h4>
                <div className='pais__caja-imagen'>
                  <img src={pais.escudoImg} alt="" />
                </div>
              </div>
            </article>
          </>
        )
      }
    </section>
  )
}
