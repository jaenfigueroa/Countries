import React, { useEffect, useState } from 'react'
import { Aside } from '../../components/Aside/Aside'
import { Paginacion } from '../../components/Paginacion/Paginacion'
import { Tarjeta } from '../../components/Tarjeta/Tarjeta'
// import { traerListaPaises } from '../../helpers/traerListaPaises'
// import { traerPaisbasico } from '../../helpers/traerPaisBasico'
import { useAnchoPantalla } from '../../hooks/useAnchoPantalla'

export const Search = () => {

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


  //INFORMACION PROV DE UN PAIS //////////////////////////////
  const miPais = {
    nombre: 'Argentina',
    img: 'https://flagcdn.com/ar.svg',
    continente: 'America',
    capital: 'Buenos Aires',
    area: 2.78,
    idioma: 'Español',
    moneda: 'Pesos argentinos',
    codigo: '+544',
  }
  
  //TRAER LISTA DE PAISES ////////////////////////////////////

  // const [listaPaises, setListaPaises] = useState(traerListaPaises)


  //ALTEERNAR OPCIONES EN MOBILE
  const [opcionesVisibles, setOpcionesVisibles] = useState(false)

  const mostrarOpcionesMobile = () => {
    setOpcionesVisibles(!opcionesVisibles)
  }
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
                <select>
                  <option>Nombre A-Z</option>
                  <option>Nombre Z-A</option>
                  <option>Area Ascendente</option>
                  <option>Area Decendente</option>
                </select>
              </div>
            </header>
          )
        }


        <div className='cuerpo'>
          {/* CONTENEDOR DE TARJETAS */}
          <div className='main__contenedor-tarjetas'>
            <Tarjeta pais={miPais}/>
            <Tarjeta pais={miPais}/>
            <Tarjeta pais={miPais}/>
            <Tarjeta pais={miPais}/>
            <Tarjeta pais={miPais}/>
            <Tarjeta pais={miPais}/>
            <Tarjeta pais={miPais}/>
            <Tarjeta pais={miPais}/>
            <Tarjeta pais={miPais}/>
            <Tarjeta pais={miPais}/>
            <Tarjeta pais={miPais}/>
            <Tarjeta pais={miPais}/>
            <Tarjeta pais={miPais}/>
            <Tarjeta pais={miPais}/>
            <Tarjeta pais={miPais}/>
            <Tarjeta pais={miPais}/>
            <Tarjeta pais={miPais}/>
            <Tarjeta pais={miPais}/>
            <Tarjeta pais={miPais}/>
            <Tarjeta pais={miPais}/>
            <Tarjeta pais={miPais}/>
            <Tarjeta pais={miPais}/>
            <Tarjeta pais={miPais}/>
            <Tarjeta pais={miPais}/>
            <Tarjeta pais={miPais}/>
            <Tarjeta pais={miPais}/>
            <Tarjeta pais={miPais}/>
          </div>

          {/* NAVEGACION DE PAGINAS */}

          <Paginacion/>

        </div>

      </main>


    </section>
  )
}
