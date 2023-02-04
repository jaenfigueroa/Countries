import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useAnchoPantalla } from '../../hooks/useAnchoPantalla'
import { Boton } from './components/Boton'

export const Paginacion = ({numero, lista, setListaSeparada, etiquetas, estado, }) => {


  // const [numPagina, setNumPagina] = useState(numero)
  /////////////////////77
  /////////////////////77
  /////////////////////77
  /////////////////////77

  //TOTAL DE LEEMNTOS DE LA LISTA ORIGINAL
  let totalElementos = lista.length
  //CANTIDAD DE ELEMENTOS POR CADA PAGINA
  const cantidad = 24


  useEffect(()=>{

    //EL PRIMER ELEMENTO DE LA PAGINA A MOSTRAR
    let inicio = (cantidad * (numero - 1))

    //LISTA DE LOS ELEMNTOS QUE SE VAN RENDERIZAR
    let listaQueSeMuestran = lista.slice(inicio, inicio + cantidad)

    setListaSeparada(listaQueSeMuestran)

  }, [lista, numero, setListaSeparada, etiquetas, estado])

  /////////////////////77
  /////////////////////77
  /////////////////////77
  /////////////////////77


  ///////////////////////////////7
  ///////////////////////////////7

  let numeroPaginas = Math.ceil(totalElementos / cantidad)

  ///////////////////////////////7
  ///////////////////////////////7





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
    else if (numero > numeroPaginas - 5) setPrimerNumero(numeroPaginas - 5)
    //defecto
    else setPrimerNumero(numero - 2)

  }, [numero, numeroPaginas])



  //////////////////////
  //////////////////////
  //////////////////////

  // const navegar = useNavigate()

  // // const navegarPagina = useCallback(()=>navegar('/search/1'), [navegar])

  // useEffect(()=>{

  //   navegar('/search/1')
    
  // },[lista])















  ////////////////////////////////////////////
  return (
      <nav className='nav-paginas'>


      {/* /////////////7 */}
      {/* /////////////7 */}
      {/* /////////////7 */}
      {/* /////////////7 */}

      

              {/* BLOQUE BOTON ATRAS*/}
              {
                Number(numero) !== 1 && (
                  <Link to={`/search/${Number(numero) - 1}`} className='boton-mover'><i className="fa-solid fa-chevron-left"></i>&nbsp;&nbsp;{palabras&&'Anterior'}</Link>
                )
              }
          
              {/* /////////////7 */}
              {/* /////////////7 */}
              {/* /////////////7 */}
              
              {
                numero >= 4 && (
                  <>
                    {/* PRIMER BOTON */}
                    <Boton numero={1} numeroActual={numero} />
                    {/* BLOQUE DE 3 PUNTOS */}
                    {
                      numero !== 4 && <i className="fa-solid fa-ellipsis icono-3puntos"></i> /* icono de 3 puntos */
                    }
                  </>
                )
              }

              {/* BLOQUE DOS: BOTONES CENTRALES */}
              <div className='contenedor-botones-juntos'>
                <Boton numero={primerNumero + 0} numeroActual={numero}/>
                <Boton numero={primerNumero + 1} numeroActual={numero}/>
                <Boton numero={primerNumero + 2} numeroActual={numero}/>
                <Boton numero={primerNumero + 3} numeroActual={numero}/>
                <Boton numero={primerNumero + 4} numeroActual={numero}/>
              </div>


              {/* BLOQUE  3 PUNTOS*/}
              {
                primerNumero <= numeroPaginas - 6 && <i className="fa-solid fa-ellipsis icono-3puntos"></i> /* icono de 3 puntos */
              }


              {/* BOTON ULTIMO BOTON */}

              <Boton numero={numeroPaginas} numeroActual={numero}/>



              {/* /////////////7 */}
              {/* /////////////7 */}
              {/* /////////////7 */}
              {/* /////////////7 */}
          
          
              {/* BLOQUE BOTON SIGUIENTE  */}
              {
                Number(numero) !== numeroPaginas && (
                  <Link to={`/search/${Number(numero) + 1}`} className='boton-mover'>{palabras&&'Siguiente'}&nbsp;&nbsp;<i className="fa-solid fa-chevron-right"></i></Link>
                )
              }
          

          
          {/* <Boton numero={1} numeroActual={numero}/>
          <Boton numero={2} numeroActual={numero}/>
          <Boton numero={3} numeroActual={numero}/>
          <Boton numero={4} numeroActual={numero}/>
          <Boton numero={5} numeroActual={numero}/>
          <Boton numero={6} numeroActual={numero}/> */}
          
    </nav>
    )
}
