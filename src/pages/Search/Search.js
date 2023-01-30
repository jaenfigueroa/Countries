import React, { useEffect, useState } from 'react'
import { Aside } from '../../components/Aside/Aside'
import { Paginacion } from '../../components/Paginacion/Paginacion'
import { Tarjeta } from '../../components/Tarjeta/Tarjeta'
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
    nombre: 'Peru',
    capital: 'Lima',
    area: 1544,
    continente: 'America',
    img: 'https://flagcdn.com/pe.svg'
  }
  

  ///////////////////////////////////////////////
  
  return (
    <section className='search-layout'>
      {/* ASIDE */}
      {
        asideActivo && <Aside mostrarAside={mostrarAside}/>
      }
      
      {/* MAIN */}
      <main className='main'>

        {/* HEADER */}
        {
          !versionDesktop ? (
            <header className='main__header-mobile'>
              <p className='contador-resultados'>457 Resultados</p>

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
              <p>457 Resultados</p>

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
        </div>

        {/* NAVEGACION DE PAGINAS */}

        <Paginacion/>

      </main>


    </section>
  )
}
