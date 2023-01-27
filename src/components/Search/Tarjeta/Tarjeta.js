import React from 'react'
import './Tarjeta.css'

export const Tarjeta = () => {
  return (
    <article className='search__tarjeta'>
      <div className='contenedor-clavos'>
        <div>
          <div></div>
          <div></div>
        </div>
        <div>
          <div></div>
          <div></div>
        </div>
      </div>
      <h3 className='tarjeta__nombre'>peru</h3>
      <img className='tarjeta__bandera' src="https://flagcdn.com/pe.svg" alt="bandera de peru" />
      <div className='contenedor-informacion'>
        <p><strong>Capital</strong>: Lima</p>
        <p><strong>Continente</strong>: America</p>
        <p><strong>Area</strong>: 451km2</p>
      </div>
    </article>
  )
}
