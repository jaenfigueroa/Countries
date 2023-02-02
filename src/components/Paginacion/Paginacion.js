import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useAnchoPantalla } from '../../hooks/useAnchoPantalla'
import { Boton } from './components/Boton'

export const Paginacion = ({numero, ultimo=50}) => {

  /* Mi Hook: devuelve el ancho el ancho de pantalla */
  const {ancho} = useAnchoPantalla()

  /* CONTROLA LAS PALABRAS DE ANTERIOR O SIGUIENTE */
  const [palabras, setpalabras] = useState(false)

  useEffect(()=>{
    if (ancho > 480) setpalabras(true)
    else setpalabras(false)

  }, [ancho])

  /* manejar el primer numero de la paginacion */
  const [primerNumero, setPrimerNumero] = useState(0)

  useEffect(()=>{

    //controlar los botones del principio
    if (numero <= 3) setPrimerNumero(1)
    //controlar los botones del final
    else if (numero > ultimo - 5) setPrimerNumero(ultimo - 5)
    //defecto
    else setPrimerNumero(numero - 2)

  }, [numero, ultimo])



  ////////////////////////////////////////////
  return (
    <nav className='nav-paginas'>

      {
        Number(numero) !== 1 && (
          <Link to={`/search/${Number(numero) - 1}`} className='boton-mover'><i className="fa-solid fa-chevron-left"></i>&nbsp;&nbsp;{palabras&&'Anterior'}</Link>
        )
      }

      {
        numero >= 4 && (
          <>
            <Boton numero={1} numeroActual={numero} />
            {
              numero !== 4 && <i className="fa-solid fa-ellipsis icono-3puntos"></i> /* icono de 3 puntos */
            }
          </>
        )
      }

      <div className='contenedor-botones-juntos'>
        <Boton numero={primerNumero + 0} numeroActual={numero}/>
        <Boton numero={primerNumero + 1} numeroActual={numero}/>
        <Boton numero={primerNumero + 2} numeroActual={numero}/>
        <Boton numero={primerNumero + 3} numeroActual={numero}/>
        <Boton numero={primerNumero + 4} numeroActual={numero}/>
      </div>

      {
        primerNumero <= ultimo - 6 && <i className="fa-solid fa-ellipsis icono-3puntos"></i> /* icono de 3 puntos */
      }

      <Boton numero={ultimo} numeroActual={numero}/>

      {
        Number(numero) !== ultimo && (
          <Link to={`/search/${Number(numero) + 1}`} className='boton-mover'>{palabras&&'Siguiente'}&nbsp;&nbsp;<i className="fa-solid fa-chevron-right"></i></Link>
        )
      }
      
    </nav>
  )
}
