import React, { useState } from 'react'

export const Selector = ({elemento}) => {

  // console.log(elemento);
  const [botonActivo, setBotonActivo] = useState(false)

  const abrirCaja = ()=> setBotonActivo(!botonActivo)

  /////////////////////////////////////////////////
  return (
    <div className='selector'>
      
      {/* BOTON PARA ABRIR */}
      <button className='boton' onClick={abrirCaja}>
        {elemento.titulo} <i className={`fa-solid fa-chevron-down ${botonActivo&&'boton--abierto'}`}/>
      </button>

      {/* CONTENIDO */}
      {botonActivo && (
        <article className='caja'>

          {/* INPUT PARA FILTRAR */}
          <input
            className='input'
            type="text"
            placeholder='Buscar' />

          {/* CONTENEDOR DE OPCIONES */}
          <div className='contenedor-opciones'>
            {
              elemento.opciones.map(x =>(
                <label>
                  <input type="checkbox" value="opcion1"/>{x}
                </label>
              ))
            }
          </div>
        </article>
      )}

    </div>
  )
}
