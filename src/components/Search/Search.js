import React, { useEffect, useReducer, useState } from 'react'
// import { traerListaPaises } from '../../helpers/traerListaPaises'
import { tipoFiltroReducer, TYPES } from '../../reducers/tipoFiltroReducer'
import { Aside } from './Aside/Aside'
import './Search.css'
import { Tarjeta } from './Tarjeta/Tarjeta'

export const Search = () => {

  //manejar visibilidad de las opciones de orden
  const [visible, setVisible] = useState(false)
  const handleVisible =()=> setVisible(!visible)

  //maanejar el tipo de filtro que hacer
  const [{fitro}, dispatch] = useReducer(tipoFiltroReducer, {filtro: TYPES.TODOS})

  const handleSelector = (type, payload)=> {
    dispatch({
      type: TYPES.LENGUAGE,
      payload: 'spanish'
    })
  }

  ///////////////////////////////////////////////
  return (
    <section className='seccion-search'>

      <section className='seccion-main'>

        <div className='search-main'>
          {/* BLOQUE IZQUIERDA */}
          <Aside className='aside'/>

          {/* BLOQUE DERECHA */}
          <section>
            
            <header>
              <p>254 resultados</p>
              <div>
                Ordenar por:
                <select>
                  <option>A-Z</option>
                  <option>Z-A</option>
                </select>
              </div>
            </header>

            <main className='search__contenedor'>
              <Tarjeta/>
              <Tarjeta/>
              <Tarjeta/>
              <Tarjeta/>
              <Tarjeta/>
              <Tarjeta/>
            </main>
          </section>

        </div>
      </section>
      

    </section>
  )
}
