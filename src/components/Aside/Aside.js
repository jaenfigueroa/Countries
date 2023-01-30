import React from 'react'
import { Selector } from '../Selector/Selector'

export const Aside = ({mostrarAside}) => {



  ///////////////////////////////////
  return (
    <aside className='aside'>

      {/* BOTON CERRAR */}
      <button className='boton-cerrar' onClick={()=>mostrarAside(false)}>
        <i className="fa-solid fa-x"></i>
      </button>

      {/* CONTENEDOR DE SELECTORES */}
      <Selector/>
      <Selector/>
      <Selector/>

    </aside>
  )
}
