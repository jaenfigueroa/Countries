import React from 'react'
import { NavLink } from 'react-router-dom';
import './Home.css'

export const Home = () => {

  return (
    <>
      <section className='seccion__home'>
        <div className='home__slogan'>
          <h3 className='slogan__titulo'>Countries</h3>
          <h4 className='slogan__subtitulo'>all over the world</h4>
        </div>
        <div className='contenedor-botones'>
            <NavLink to='/search' className='boton-primario'>Search</NavLink>
            <NavLink to='/random' className='boton-primario'>Random</NavLink>
            <NavLink to='/compare' className='boton-primario'>Compare</NavLink>
          </div>
      </section>

      <section className='seccion'>

      </section>
    </>
  )
}
