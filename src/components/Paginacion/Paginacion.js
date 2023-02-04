import React, { useEffect, useState } from 'react'
import { Boton } from './components/Boton'

export const Paginacion = ({numero, lista, setListaSeparada, etiquetas, estado }) => {

  //TOTAL DE ELEMENTOS DE LA LISTA ORIGINAL
  let totalElementos = lista.length
  //CANTIDAD DE ELEMENTOS POR CADA PAGINA
  // const cantidad = 24
  const cantidad = 27


  useEffect(()=>{

    //EL PRIMER ELEMENTO DE LA PAGINA A MOSTRAR
    let inicio = (cantidad * (numero - 1))

    //LISTA DE LOS ELEMENTOS QUE SE VAN RENDERIZAR
    let listaQueSeMuestran = lista.slice(inicio, inicio + cantidad)

    setListaSeparada(listaQueSeMuestran)

  }, [lista, numero, setListaSeparada, etiquetas, estado])

  ///////////////////////////////7
  ///////////////////////////////7

  const numeroPaginas = Math.ceil(totalElementos / cantidad)

  ///////////////////////////////7
  ///////////////////////////////7
  const [botones, setBotones] = useState([])

  //CREAR EL ARRAY DE LO NUMEROS QUE SE VAN A RENDERIZAR EN LOS BOTONES
  useEffect(()=>{
    let array = []

    for (let i = 0; i < numeroPaginas; i++) {
      array = [...array, i + 1]
    }

    setBotones(array)

  },[lista, numeroPaginas])
  ////////////////////////////////////////////
  return (
    <nav className='nav-paginas'>
      {
        numeroPaginas > 1 && botones.map(valor => {
          return (
            <Boton numero={valor} numeroActual={numero} key={valor}/>
          )
        })
      }
    </nav>
  )
}
