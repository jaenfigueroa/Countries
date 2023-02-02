import React, { useEffect, useReducer, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Aside } from '../../components/Aside/Aside'
import { Paginacion } from '../../components/Paginacion/Paginacion'
import { Tarjeta } from '../../components/Tarjeta/Tarjeta'
import { traerListaPaises } from '../../helpers/traerListaPaises'
import { useAnchoPantalla } from '../../hooks/useAnchoPantalla'
import { ordenarListaReducer } from '../../reducers/ordenarLista.reducer'


//////////////////////////////////////////////
export const Search = () => {

  //OBTNER LA VARIABLE PAGIAN DE LA URL
  const {pagina} = useParams()

  //CONTROLAR LA VISIBILIDAD DEL ASIDE /////////////////////////
  const [versionDesktop, setVersionDesktop] = useState(false)
  const [asideActivo, setAsideActivo] = useState(false)

  /* con mi hook personlizado -useAnchoPantalla */
  const {ancho} = useAnchoPantalla()

  useEffect(() => {
    if (ancho > 1024) {
      setVersionDesktop(true)
      setAsideActivo(true)
    }
    else {
      setVersionDesktop(false)
      setAsideActivo(false)
    }

  }, [ancho])

  const mostrarAside = (valor)=>{
    setAsideActivo(valor)
  }


  //ALTEERNAR OPCIONES EN MOBILE
  const [opcionesVisibles, setOpcionesVisibles] = useState(false)

  const mostrarOpcionesMobile = () => {
    setOpcionesVisibles(!opcionesVisibles)
  }



  //USAR USE-REDUCER PARA ORDENAR LAS LISTA/////////////////
  const [estado, dispatch] = useReducer(ordenarListaReducer, {listaOrdenada: []})

  const ordenarLista = (evento) => {

    let tipoOrden = (evento.target.value)
    console.log(tipoOrden)

    dispatch({tipo: tipoOrden})
  } 

  //LLENAR EL ESTADO POR PRIMERA VEZ
  useEffect(()=>{

    const traerDatos = async()=>{
      const data = await traerListaPaises()
      console.log(data)
    
      dispatch({
        tipo: "MODIFICAR_LISTA",
        payload: data
      })
    }

    traerDatos()
  },[])
  
  ///////////////////////////////////////////////
  return (
    <section className='search-layout'>
      {/* ASIDE */}
      { asideActivo && <Aside mostrarAside={mostrarAside}/> }
      
      {/* MAIN */}
      <main className='main'>

        {/* HEADERS */}
        {
          !versionDesktop ? (
            /* HEADER EN MOBILE */
            <header className='main__header-mobile'>

              {/* NUMERO DE RESUTADOS */}
              <p className='contador-resultados'>
                457 Resultados
              </p>

              {/* CONTENEDOR DE BOTONES */}
              <div className='contenedor-botones'>
                <button
                  className='boton'
                  onClick={()=>mostrarAside(true)}>
                  <i className="fa-solid fa-sliders"></i>
                  Filtrar
                </button>

                <button className='boton' onClick={mostrarOpcionesMobile}>
                  <i className="fa-solid fa-arrow-right-arrow-left flechas"></i>
                  Ordenar por
                </button>

                {/* OPCIONES EN MOBILE */}
                {
                  opcionesVisibles && (
                  <div className='contenedor-opciones'>
                    <li>Nombre A-Z</li>
                    <li>Nombre Z-A</li>
                    <li>Area Ascendente</li>
                    <li>Area Decendente</li>
                  </div>
                  )
                }
              </div>
            </header>
          ) :
          (
            <header className='main__header-desktop'>
              {/* numero de resultados */}
              <p className='contador-resultados'>585 Resultados</p>
              

              {/* selector de como ordenar las tarjetas A-Z o Z-A */}
              <div className='selector-orden'>
                Ordenar por:
                <select onChange={ordenarLista}>
                  <option value='A-Z'>Nombre A-Z</option>
                  <option value='Z-A'>Nombre Z-A</option>
                  <option value='Area-ascendente'>Area Ascendente</option>
                  <option value='Area-decendente'>Area Decendente</option>
                </select>
              </div>
            </header>
          )
        }


        <div className='cuerpo'>
          {/* CONTENEDOR DE TARJETAS */}
          <div className='main__contenedor-tarjetas'>
            {
              estado.listaOrdenada.length >= 1 && estado.listaOrdenada.map((x, index) =>(
                <Tarjeta pais={x} key={index}/>
              ))
            }
          </div>

          {/* NAVEGACION DE PAGINAS */}

          <Paginacion numero={pagina}/>

        </div>

      </main>


    </section>
  )
}
