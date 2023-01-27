import React, { useState } from 'react'
import './Selector.css'

export const Selector = () => {

  const [botonActivo, setBotonActivo] = useState(false)

  const [opciones, setOpciones] = useState([
    {
      titulo: 'español',
      activo: false
    },
    {
      titulo: 'ingles',
      activo: false
    },
    {
      titulo: 'portugues',
      activo: false
    },    {
      titulo: 'portugues',
      activo: false
    },
    {
      titulo: 'portugues',
      activo: false
    },
    {
      titulo: 'portugues',
      activo: false
    },    {
      titulo: 'portugues',
      activo: false
    }
    ,    {
      titulo: 'portugues',
      activo: false
    }
  ])

  return (
    <div className='categoria'>
      <button className='titulo' onClick={()=>setBotonActivo(!botonActivo)}>
        Lenguage
        <i className={`fa-solid fa-chevron-down ${botonActivo&&'titulo--abierto'}`}/>
      </button>

      {botonActivo && (
        <ul className='caja'>

          {/* INPUT SEARCH */}
          <input type="text" name="" id="" placeholder='Buscar' className='buscador'/>

          {/* LISTA DE OPCIONES */}
          <div className='contenedor-opciones'>
            {
              opciones.map((x, index)=>(
                <label>
                  <input type="checkbox" name="example" value="option1"/>{x.titulo}
                </label>
              ))
            }
          </div>
        </ul>
        )}

    </div>
  )
}
