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
    capital: 'Buenos Aires',
    area: 1544,
    continente: 'America',
    img: 'https://flagcdn.com/ar.svg'
  }
  
  //TRAER LISTA DE PAISES ////////////////////////////////////

  // const [listaPaises, setListaPaises] = useState(traerListaPaises)



  ///////////////////////////////////////////////
  return (
    <section className='search-layout'>
      {/* ASIDE */}
      { asideActivo && <Aside mostrarAside={mostrarAside}/> }
      
      {/* MAIN */}
      <main className='main'>

        {/* HEADER */}
        {
          !versionDesktop ? (
            <header className='main__header-mobile'>
              <p className='contador-resultados'>
                457 Resultados
              </p>

              <div className='contenedor-botones'>
                <button
                  className='boton'
                  onClick={()=>mostrarAside(true)}>Filtrar</button>
                <button className='boton'>Ordenar por</button>
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
                  <option>A-Z</option>
                  <option>Z-A</option>
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
          </div>

          {/* NAVEGACION DE PAGINAS */}

          <Paginacion/>

        </div>

      </main>


    </section>
  )
}
