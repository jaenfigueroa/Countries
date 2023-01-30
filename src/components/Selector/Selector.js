import React, { useState } from 'react'

export const Selector = () => {

  const [botonActivo, setBotonActivo] = useState(false)

  const [opciones, setOpciones] = useState([
    {
      titulo: 'Español',
      activo: false,
    },
    {
      titulo: 'Ingles',
      activo: false
    },
    {
      titulo: 'Frances',
      activo: false
    },
    {
      titulo: 'Arabe',
      activo: false
    },

  ])

  const abrirCaja = ()=> setBotonActivo(!botonActivo)

  return (
    <div className='selector'>
      
      {/* BOTON PARA ABRIR */}
      <button className='boton' onClick={abrirCaja}>
        Lenguage <i className={`fa-solid fa-chevron-down ${botonActivo&&'boton--abierto'}`}/>
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
              opciones.map((opcion)=>(
                <label>
                  <input type="checkbox" value="opcion1"/>{opcion.titulo}
                </label>
              ))
            }
          </div>
        </article>
      )}

    </div>
  )
}
