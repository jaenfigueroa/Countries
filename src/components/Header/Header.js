import React from 'react'
import { NavLink } from 'react-router-dom'

export const Header = () => {
  return (
    <header className='header'>
      <h4 className='header__logo'>Countries</h4>
      <nav className='header__nav'>
        <NavLink to='/inicio' className={({isActive})=> isActive? 'header__opcion--activo': 'header__opcion' }>Inicio</NavLink>
        <NavLink to='/search' className={({isActive})=> isActive? 'header__opcion--activo': 'header__opcion' }>Search</NavLink>
      </nav>
    </header>
  )
}
