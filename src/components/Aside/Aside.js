import React, {useState, useEffect} from 'react'
import { Selector } from '../Selector/Selector'
import {traerListaPaises} from '../../helpers/traerListaPaises'

export const Aside = ({mostrarAside}) => {

  const [selectores, setSelectores] = useState([])

  useEffect(() => {
    
    const traer = async()=>{
      let data = await traerListaPaises()
      setSelectores(data)
    }
    traer()

  }, [])
  
  ///////////////////////////////////
  return (
    <aside className='aside'>

      {/* BOTON CERRAR */}
      <button className='boton-cerrar' onClick={()=>mostrarAside(false)}>
        <i className="fa-solid fa-x"></i>
      </button>

      {/* CAJA 1 - TITULO */}
      <div className='caja-titulo'>
        <p>Filtrado por</p>
        <p>Categorias</p>
      </div>
      
      <hr/>
      
      {/* CAJA 2 - CONTENEDOR DE FILTROS APLICADOS */}
      <div className='caja-de-filtros-aplicados'>
        <ul>
          <li>Luna <button><i className="fa-solid fa-x"></i></button></li>
          <li>Sol <button><i className="fa-solid fa-x"></i></button></li>
          <li>estrellas <button><i className="fa-solid fa-x"></i></button></li>
          <li>Galaxia <button><i className="fa-solid fa-x"></i></button></li>
          <li>Meteoritos <button><i className="fa-solid fa-x"></i></button></li>
        </ul>
        
        <button className='boton-clean'>Borrar filtros</button>
      </div>

      <hr/>

      {/* CAJA 3 - CONTENEDOR DE TODOS LOS SELECTORES */}
      { 

        selectores && selectores.map(x => <Selector elemento={x} key={x.titulo}/>)
      
      }

    </aside>
  )
}
