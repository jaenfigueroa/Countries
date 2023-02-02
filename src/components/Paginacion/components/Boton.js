import React from 'react'
import { Link } from 'react-router-dom'

export const Boton = ({numero, numeroActual}) => {

  return (
    <Link to={`/search/${numero}`} className={`boton ${numero === Number(numeroActual) && 'boton--activo'}`}>{numero}</Link> 
  )
}
