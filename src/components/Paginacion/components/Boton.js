import React from 'react'

export const Boton = ({numero, numeroActual}) => {

  return (
    <button className={`boton ${numero === numeroActual && 'boton--activo'}`}>{numero}</button> 
  )
}
