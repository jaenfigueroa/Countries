import React, { useEffect, useReducer, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Aside } from '../../components/Aside/Aside'
import { Paginacion } from '../../components/Paginacion/Paginacion'
import { Tarjeta } from '../../components/Tarjeta/Tarjeta'
// import { Tarjeta } from '../../components/Tarjeta/Tarjeta'
import { traerListaPaises } from '../../helpers/traerListaPaises'
import { useAnchoPantalla } from '../../hooks/useAnchoPantalla'
import { useFiltrar } from '../../hooks/useFiltrar'
import { ordenarListaReducer } from '../../reducers/ordenarLista.reducer'


//////////////////////////////////////////////
export const Search = () => {

  //CREAR EL ESTADO DE LA LISTA DE ETIQUETAS
  const [etiquetas, setEtiquetas] = useState([
    // {
    //   tipo: 'continente',
    //   valor: 'America'
    // },
    // {
    //   tipo: 'continente',
    //   valor: 'Oceania'
    // },
  ])

  // const [selectores, setSelectores] = useState([])


  //FILTRAR CADA VEZ QUE SE ODIFICA LA LISTA DE ETIQUETAS
  // useEffect(()=>{

  //   dispatch({tipo: 'FILTRADO_POR_ETIQUETAS', payload: etiquetas})

  // }, [etiquetas]) 



  /////////////////////////////////////////////////////////
  /////////////////////////////////////////////////////////
  /////////////////////////////////////////////////////////

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

  const ordenarLista = (tipoOrden) => {
    dispatch({tipo: tipoOrden})
  } 

  //LLENAR EL ESTADO DE LISTA DE BANDERAS POR PRIMERA VEZ
  useEffect(()=>{

    const traerDatos = async()=>{
      const data = await traerListaPaises()
      // console.log(data)
    
      dispatch({
        tipo: "MODIFICAR_LISTA",
        payload: data
      })
    }

    traerDatos()
  },[])
  

  /////////////////////////////7
  /////////////////////////////7
  /////////////////////////////7

  //NUEVA FROMA. USANDO HOOK PERSONALIZADO FILTRAR
  // let lista = []

  const {listaRestantes, filtrarMemorizado} = useFiltrar(estado.listaOrdenada , etiquetas)


  /* USAR USE CALL BACK PARA MEMORIZAR EL VALOR QUE DEVULVE UNA FUNCION */
  // const listaMemorizada = useCallback(() => filtrarRestantes(), [etiquetas, estado])

  //FILTRAR CADA VEZ QUE SE ODIFICA LA LISTA DE ETIQUETAS
  useEffect(()=>{

    filtrarMemorizado()

    // listaMemorizada()

  // }, [etiquetas, listaRestantes, filtrarRestantes]) 
  }, [etiquetas, estado,filtrarMemorizado]) 



  ///////////////////////////////////////////////
  return (
    <section className='search-layout'>
      {/* ASIDE */}
      { asideActivo && (
        <Aside
          mostrarAside={mostrarAside}
          etiquetas={etiquetas}
          setEtiquetas={setEtiquetas} />
      ) }
      
      {/* MAIN */}
      <main className='main'>

        {/* HEADERS */}
        {
          !versionDesktop ? (
            /* HEADER EN MOBILE */
            <header className='main__header-mobile'>

              {/* NUMERO DE RESUTADOS */}
              <p className='contador-resultados'>
                {listaRestantes.length}
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
                    <li onClick={()=>ordenarLista('NOMBRE_AZ')}>Nombre A-Z</li>
                    <li onClick={()=>ordenarLista('NOMBRE_ZA')}>Nombre Z-A</li>
                    <li onClick={()=>ordenarLista('CONTINENTE_AZ')}>Continente A-Z</li>
                    <li onClick={()=>ordenarLista('CONTINENTE_ZA')}>Continente Z-A</li>
                    <li onClick={()=>ordenarLista('CAPITAL_AZ')}>Capital A-Z</li>
                    <li onClick={()=>ordenarLista('CAPITAL_ZA')}>Capital Z-A</li>
                    <li onClick={()=>ordenarLista('MONEDA_AZ')}>Moneda A-Z</li>
                    <li onClick={()=>ordenarLista('MONEDA_ZA')}>Moneda Z-A</li>
                    <li onClick={()=>ordenarLista('AREA_ASCENDENTE')}>Area Ascendente</li>
                    <li onClick={()=>ordenarLista('AREA_DECENDENTE')}>Area Decendente</li>
                  </div>
                  )
                }
              </div>
            </header>
          ) :
          (
            <header className='main__header-desktop'>
              {/* numero de resultados */}
              <p className='contador-resultados'>
                {listaRestantes.length} Resultados</p>

              {/* selector de como ordenar las tarjetas A-Z o Z-A */}
              <div className='selector-orden'>
                Ordenar por:
                {/* <select onChange={ordenarLista}> */}
                <select onChange={(e)=>ordenarLista(e.target.value)}>
                  <option value='NOMBRE_AZ'>Nombre A-Z</option>
                  <option value='NOMBRE_ZA'>Nombre Z-A</option>
                  <option value='CONTINENTE_AZ'>Continente A-Z</option>
                  <option value='CONTINENTE_ZA'>Continente Z-A</option>
                  <option value='CAPITAL_AZ'>Capital A-Z</option>
                  <option value='CAPITAL_ZA'>Capital Z-A</option>
                  <option value='MONEDA_AZ'>Moneda A-Z</option>
                  <option value='MONEDA_ZA'>Moneda Z-A</option>
                  <option value='AREA_ASCENDENTE'>Area Ascendente</option>
                  <option value='AREA_DECENDENTE'>Area Decendente</option>
                </select>
              </div>
            </header>
          )
        }


        <div className='cuerpo'>
          {/* CONTENEDOR DE TARJETAS */}
          <div className='main__contenedor-tarjetas'>
            {
              listaRestantes.length >= 1 && listaRestantes.map((x, index) =>(
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
