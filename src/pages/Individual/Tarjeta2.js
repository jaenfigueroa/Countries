import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

export const Tarjeta2 = ({codigo}) => {

  const navigate = useNavigate()
  // console.log(codigo)

  const [pais, setPais] = useState({})

  useEffect(()=>{
    const traerInformacion = async () =>{
      const peticion = await fetch(`https://restcountries.com/v3.1/alpha/${codigo}`)
      const data = await peticion.json()

      // console.log(data[0])

      setPais({
        nombre: data[0].name.common,
        capital: data[0].capital,
        banderaImg: data[0].flags.svg,
        area: data[0].area,
      })
    }

    traerInformacion()

  },[codigo])

  return (
    <article className='tarjeta2' onClick={()=> navigate(`/individual/${pais.nombre.toLowerCase()}`)}>

      {/* CONTENIDO */}
      <img className='tarjeta__bandera' src={pais.banderaImg} alt={`bandera de ${pais.nombre}`} />

      <div className='contenedor-informacion'>
        <h3 className='tarjeta__nombre'>{pais.nombre}</h3>
        <p><strong>Capital</strong>: {pais.capital}</p> 
        <p><strong>Area</strong>: {formatearNumero(pais.area)} km<sup>2</sup></p>
      </div>

    </article>
  )
}

// //FORMATAER UMEROS GRANDE POR ESPACIOSN CADA 3 CIFRAS
const formatearNumero = (numero)=>{
  return Number(numero).toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
}