import React from 'react'

export const Tarjeta = ({pais}) => {

  const {img, nombre, continente, capital, idioma, moneda, area, codigo} = pais

  return (
    <article className='search__tarjeta'>

      {/* CONTENIDO */}
      <img className='tarjeta__bandera' src={img} alt={`bandera de ${nombre}`} />

      <div className='contenedor-informacion'>
        <h3 className='tarjeta__nombre'>{nombre}</h3>
        <p><strong>Continente</strong>: {continente}</p> 
        <p><strong>Capital</strong>: {capital}</p> 
        <p><strong>Idioma</strong>: {idioma}</p>
        <p><strong>Area</strong>: {area}M km<sup>2</sup></p>
        <p><strong>Moneda</strong>: {moneda}</p>
        <p><strong>Codigo Telefono</strong>: {codigo}</p>
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
