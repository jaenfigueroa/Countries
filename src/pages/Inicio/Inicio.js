import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom';


const obtenerNombres = (array) => array.map(x => x.name.common.toLowerCase())
const obtenerNumeroAzar = (numeroMax) =>{
  return Math.floor(Math.random() * numeroMax);
}

export const Inicio = () => {

  const navigate = useNavigate()

  const traerListaNombres = async() =>{

    const peticion = await fetch('https://restcountries.com/v3.1/all')
    const data = await peticion.json()
  
    let nombres = obtenerNombres(data)
    let numeroAzar = obtenerNumeroAzar(nombres.length)
  
    // console.log(nombres)
    // console.log(numeroAzar)
    
    navigate(`/individual/${nombres[numeroAzar]}`)
    // return nombres
  }


  //////////////////////////////
  return (
    <section className='home'>

      {/* SLOGAN */}
      <div className='slogan'>
        <h3 className='slogan__titulo'>Countries</h3>
        <h4 className='slogan__subtitulo'>all over the world</h4>
      </div>

      {/* CONTENEDOR DE BOTONES */}
      <div className='contenedor-botones'>
        <NavLink to='/search' className='boton'>Search</NavLink>
        {/* <NavLink to='/individual' className='boton'>Random</NavLink> */}
        <button className='boton' onClick={traerListaNombres}>Random</button>
      </div>

    </section>
  )
}
