import React from 'react'
import { useNavigate } from 'react-router-dom'
import { formatearNumero } from '../../helpers/formatearNumero'

export const Tarjeta = ({pais}) => {

  const {img, nombre, continente, capital, idioma, moneda, area} = pais

  const navigate = useNavigate()
  ////////////////////////////////////////////
  return (
    <article className='search__tarjeta' onClick={()=>navigate(`/individual/${nombre}`)}>

      {/* CONTENIDO */}
      <img className='tarjeta__bandera' src={img} alt={`bandera de ${nombre}`} />

      <div className='contenedor-informacion'>
        <h3 className='tarjeta__nombre'>{nombre}</h3>
        <p><strong>Capital</strong>: {capital}</p> 
        <p><strong>Continente</strong>: {continente}</p> 
        <p><strong>Idiomas</strong>: {idioma}</p>
        <p><strong>Moneda</strong>: {moneda}</p>
        <p><strong>Area</strong>: {formatearNumero(area)} km<sup>2</sup></p>
      </div>

    </article>
  )
}
