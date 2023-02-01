import React, { useState } from 'react'

export const Selector = ({elemento}) => {

  // console.log(elemento)

  const [botonActivo, setBotonActivo] = useState(false)

  const abrirCaja = ()=> setBotonActivo(!botonActivo)

  //MANEJAR LOS ELEMENTOS A MOSTRAR - FILTRADO

  const [lista, setLista] = useState(elemento.opciones)

  const filtrarOpciones = (evento)=>{

    let busqueda = evento.target.value.toLowerCase()

    let resultados = elemento.opciones.filter(x => x.includes(busqueda))

    // console.log(resultados)
    setLista(resultados)
  } 

  /////////////////////////////////////////////////
  return (
    <div className='selector'>
      
      {/* BOTON PARA ABRIR */}
      <button className='boton' onClick={abrirCaja}>
        {elemento.titulo + ` (${elemento.opciones.length})`} <i className={`fa-solid fa-chevron-down ${botonActivo&&'boton--abierto'}`}/>
      </button>

      {/* CONTENIDO */}
      {botonActivo && (
        <article className='caja'>

          {/* INPUT PARA FILTRAR */}
          <input
            className='input'
            type="text"
            placeholder='Buscar'
            onChange={filtrarOpciones} />

          <p className='numero'>{lista.length}</p>

          {/* CONTENEDOR DE OPCIONES */}
          <div className='contenedor-opciones'>
            {
              lista.map((x, index) =>(
                x && (
                  <label key={index}>
                    <input type="checkbox" value="opcion1"/>{x}
                  </label>
                )
              ))
            }
          </div>
        </article>
      )}

    </div>
  )
}
