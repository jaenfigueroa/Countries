import React from 'react'
import { Selector } from '../Selector/Selector'

export const Aside = ({mostrarAside}) => {


  const selectores = [

    {
      titulo: 'Nombre',
      opciones: ['peru', 'chile', 'argentina'],
    },
    {
      titulo: 'Nombre Completo',
      opciones: ['Republica del peru', 'Republica de argetina', 'Republica de Chile'],
    },
    {
      titulo: 'Codigo de pais',
      opciones: ['PE - peru', 'CH - Chile', 'AR - Argentina'],
    },
    {
      titulo: 'Ciudad Capital',
      opciones: ['Lima - Peru', 'Santiago - Chile', 'Buenos Aires - Argetina'],
    },
    {
      titulo: 'Codigo de telefono',
      opciones: ['51 - Peru', '56 - Chile', '565 - Argentina'],
    },

    /* SELECTORES CON CHECKBOX Y BUSCADOR */
    {
      titulo: 'Region',
      opciones: ['America', 'africa', 'europa', 'oceania']
    },
    {
      titulo: 'Subregion',
      opciones: ['America del norte', 'america del sur', 'america del centro']
    },
    {
      titulo: 'idioma',
      opciones: ['Español', 'Ingles', 'Portugues']
    },
    {
      titulo: 'Moneda',
      opciones: ['Nuevo sol', 'Dolar', 'Euro', 'Pesos chilenos']
    },
    {
      titulo: 'Bloque regional',
      opciones: ['union europea', 'union africana', 'union oceanica']
    },
  ]

  ///////////////////////////////////
  return (
    <aside className='aside'>

      <div className='caja-titulo'>
        <p>Filtrado por</p>
        <p>Categorias</p>
      </div>
      
      <hr/>
      
      <div className='caja-de-filtros-aplicados'>
        <ul>
          <li>Luna <button>X</button></li>
          <li>Sol <button>X</button></li>
          <li>estrellas <button>X</button></li>
          <li>Galaxia <button>X</button></li>
          <li>Meteoritos <button>X</button></li>
        </ul>
        
        <button className='boton-clean'>Borrar filtros</button>
      </div>

      <hr/>

      {/* BOTON CERRAR */}
      <button className='boton-cerrar' onClick={()=>mostrarAside(false)}>
        <i className="fa-solid fa-x"></i>
      </button>

      {/* CONTENEDOR DE SELECTORES */}
      { selectores.map(x => <Selector elemento={x} key={x.titulo}/>) }

    </aside>
  )
}
