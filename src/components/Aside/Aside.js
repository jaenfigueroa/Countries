import React from 'react'

export const Aside = ({mostrarAside}) => {
  return (
    <aside className='aside'>

      <button className='boton-cerrar' onClick={()=>mostrarAside(false)}>
        <i className="fa-solid fa-x"></i>
      </button>
      Aside

    </aside>
  )
}
