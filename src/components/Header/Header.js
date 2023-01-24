import React from 'react'
import { NavLink } from 'react-router-dom'
import './Header.css'

export const Header = () => {
  return (
    <header className='header'>
      <h4 className='header__logo'>Countries</h4>
      <nav className='header__nav'>
        <NavLink to='/home' className={({isActive})=> isActive? 'header__opcion--activo': 'header__opcion' }>Home</NavLink>
        <NavLink to='/search' className={({isActive})=> isActive? 'header__opcion--activo': 'header__opcion' }>Search</NavLink>
        <NavLink to='/random' className={({isActive})=> isActive? 'header__opcion--activo': 'header__opcion' }>Random</NavLink>
        <NavLink to='/compare' className={({isActive})=> isActive? 'header__opcion--activo': 'header__opcion' }>Compare</NavLink>
      </nav>
    </header>
  )
}
