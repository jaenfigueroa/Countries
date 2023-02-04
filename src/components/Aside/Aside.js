import React, {useState, useEffect} from 'react'
import { Selector } from '../Selector/Selector'
import {traerCategorias} from '../../helpers/traerCategorias'
import { useNavigate } from 'react-router-dom'

export const Aside = ({mostrarAside, etiquetas, setEtiquetas}) => {

  const [selectores, setSelectores] = useState([])

  useEffect(() => {
    const traer = async()=>{
      let data = await traerCategorias()
      setSelectores(data)
    }
    traer()

  }, [])

  //MANEJAR LAS ETIQUETAS AGREGADAS PARA HACER EL FITRADO
  // const [etiquetas, setEtiquetas] = useState([
  //   // {
  //   //   tipo: 'continente',
  //   //   valor: 'America'
  //   // },
  //   // {
  //   //   tipo: 'continente',
  //   //   valor: 'Oceania'
  //   // },
  // ])
  
  const navegar = useNavigate()
  
  //AGREGAR UNA ETIQUETA NUEVA
  const agregarEtiqueta = (tipo, valor)=>{


    //VOLVER A LA PAGINA1, DESPUES DE AGREGAR UNA ETIQUETA
    navegar('/search/1')


    setEtiquetas([...etiquetas, {tipo, valor}])
  }

  //QUITAR UAN ETIQUETA DE LA LISTA
  const quitarEtiqueta = (valor) =>{

    //VOLVER A LA PAGINA 1, DESPUES DE QUITAR UNA ETIQUETA
    navegar('/search/1')


    let resultado = etiquetas.filter(x => x.valor !== valor)
    setEtiquetas(resultado)

    //quitar el check del elemento
    // Obtener el elemento checkbox con el nombre específico
    const checkbox = document.querySelector(`input[type="checkbox"][name=${valor}]`);
    checkbox.checked =  false
  }

  //QUITAR TODAS LAS ETIQUETAS DE UN SOLO CLICK
  const eliminarEtiquetas = () =>{


    //VOLVER A LA PAGINA 1 DESPUES DE ELIMINAR TODAS LAS ETIQUETAS
    navegar('/search/1')


    setEtiquetas([])

    const elementos = document.querySelectorAll(`input[type="checkbox"]`);

    elementos.forEach(x =>{
      x.checked = false
    })
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
                etiquetas.map((x, index) => {
                  return (
                    <li key={index}>{x.valor} <button onClick={()=>quitarEtiqueta(x.valor)}><i className="fa-solid fa-x" ></i></button></li>
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
        selectores && selectores.map(x => <Selector elemento={x} key={x.titulo} agregarEtiqueta={agregarEtiqueta} quitarEtiqueta={quitarEtiqueta}/>)
      }

    </aside>
  )
}
