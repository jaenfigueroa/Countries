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

  //MANEJAR LAS ETIQUETAS AGREGADAS PARA HACER EL FITRADO
  const [etiquetas, setEtiquetas] = useState([
    {
      tipo: 'continente',
      valor: 'America'
    },
    {
      tipo: 'continente',
      valor: 'Oceania'
    },
    {
      tipo: 'idioma',
      valor: 'Español'
    },
    {
      tipo: 'idioma',
      valor: 'Ingles'
    },
    {
      tipo: 'moneda',
      valor: 'sol peruano'
    },
    {
      tipo: 'moneda',
      valor: 'euro'
    }
  ])
  

  //AGREGAR UNA ETIQUETA NUEVA
  // const agragarEtiqueta = (tipo, valor)=>{
  //   setEtiquetas([...etiquetas, {tipo, valor}])
  // }

  //QUITAR UAN ETIQUETA DE LA LISTA
  const quitarEtiqueta = (valor) =>{

    let resultado = etiquetas.filter(x => x.valor !== valor)

    setEtiquetas(resultado)
  }

  //QUITAR TODAS LAS ETIQUETAS DE UN SOLO CLICK
  const eliminarEtiquetas = () =>{
    setEtiquetas([])
  }
  
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
      
      
      {/* CAJA 2 - CONTENEDOR DE FILTROS APLICADOS */}

      {
        etiquetas.length > 0 && (
          <>
          <hr/>

          <div className='caja-de-filtros-aplicados'>
            <ul>
              {
                etiquetas.map(x => {
                  return (
                    <li>{x.valor} <button onClick={()=>quitarEtiqueta(x.valor)}><i className="fa-solid fa-x"></i></button></li>
                  )
                })
              }
            </ul>
            
            <button className='boton-clean' onClick={eliminarEtiquetas}>Borrar filtros</button>
          </div>
          </>
        )
      }

      <hr/>

      {/* CAJA 3 - CONTENEDOR DE TODOS LOS SELECTORES */}
      { 
        selectores && selectores.map(x => <Selector elemento={x} key={x.titulo}/>)
      }

    </aside>
  )
}
