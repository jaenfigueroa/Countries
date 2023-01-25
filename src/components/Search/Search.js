import React from 'react'
import './Search.css'

export const Search = () => {
  return (
    <section className='seccion-search'>

      <div className='search__filtrado'></div>

      <div className='search__main'>
        <span className='search__tarjetas-header'>
          {/* RESULTADOS */}
          <h4>251 Resultados</h4>
          {/* SELECTOR */}
          <div className='search__resultados'>
            <label htmlFor="">ordenar por:</label>
            <select>
              <option>Nombre (A-Z)</option>
              <option>Nombre (Z-A)</option>
              <option>Capital (A-Z)</option>
              <option>Capital (Z-A)</option>
              <option>Continente (A-Z)</option>
              <option>Continente (Z-A)</option>
              <option>Población (Asc)</option>
              <option>Población (Des)</option>
              <option>Área (Asc)</option>
              <option>Área (Des)</option>
              <option>Z. Horaria (Asc)</option>
              <option>Z. Horaria (Des)</option>
            </select>
          </div>

        </span>
        <span className='search__tarjetas-contenedor'>
          <article className='search__tarjeta'></article>
          <article className='search__tarjeta'></article>
          <article className='search__tarjeta'></article>
          <article className='search__tarjeta'></article>
        </span>
      </div>

    </section>
  )
}
