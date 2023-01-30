import React, { useEffect, useState } from 'react'
import { useAnchoPantalla } from '../../hooks/useAnchoPantalla'

export const Paginacion = ({numero=5, ultimo=42}) => {

  /* Mi Hook: devuelve el ancho el ancho de pantalla */
  const {ancho} = useAnchoPantalla()

  /* CONTROLA LAS PALABRAS DE ANTERIOR O SIGUIENTE */
  const [palabras, setpalabras] = useState(false)

  useEffect(()=>{
    if (ancho > 480) setpalabras(true)
    else setpalabras(false)

  }, [ancho])


  ////////////////////////////////////////////
  return (
    <nav className='nav-paginas'>

      {
        numero > 4 && (
          <a className='boton-mover'><i className="fa-solid fa-chevron-left"></i>&nbsp;&nbsp;{palabras&&'Anterior'}</a>
        )
      }

      {
        numero >= 4 && (
          <>
            <button className='botones'>1</button>
            {
              numero !== 4 && <i class="fa-solid fa-ellipsis icono-3puntos"></i>
            }
          </>
        )
      }

      <div className='contenedor-botones-juntos'>
        <button className='botones'>{numero - 2}</button>
        <button className='botones'>{numero - 1}</button>
        <button className='botones'>{numero}</button>
        <button className='botones'>{numero + 1}</button>
        <button className='botones'>{numero + 2}</button>
      </div>

      {
        numero <= ultimo - 4 && <i class="fa-solid fa-ellipsis icono-3puntos"></i>
      }

      <button className='botones'>{ultimo}</button>

      {
        numero <= ultimo - 4 && (
          <a className='boton-mover'>{palabras&&'Siguiente'}&nbsp;&nbsp;<i class="fa-solid fa-chevron-right"></i></a>
        )
      }
      
    </nav>
  )
}
