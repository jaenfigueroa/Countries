import React from 'react'

export const Tarjeta = ({pais}) => {

  const {nombre, capital, continente, area, img} = pais

  return (
    <article className='search__tarjeta'>

      {/* CONTENIDO */}
      <img className='tarjeta__bandera' src={img} alt={`bandera de ${nombre}`} />

      <div className='contenedor-informacion'>
        <h3 className='tarjeta__nombre'>{nombre}</h3>
        <p><strong>Capital</strong>: {capital}</p> 
        <p><strong>Continente</strong>: {continente}</p> 
        <p><strong>Area</strong>: {area}km2</p>
      </div>

      {/* ADORNOS */}
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

    </article>
  )
}
