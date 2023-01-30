import React from 'react'
import { NavLink } from 'react-router-dom';

export const Inicio = () => {

  return (
    <section className='home'>

      {/* SLOGAN */}
      <div className='slogan'>
        <h3 className='slogan__titulo'>Countries</h3>
        <h4 className='slogan__subtitulo'>all over the world</h4>
      </div>

      {/* CONTENEDOR DE BOTONES */}
      <div className='contenedor-botones'>
        <NavLink to='/search' className='boton'>Search</NavLink>
        {/* <NavLink to='/compare' className='boton'>Compare</NavLink> */}
      </div>

    </section>
  )
}
