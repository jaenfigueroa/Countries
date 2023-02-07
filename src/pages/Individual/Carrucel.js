import React, { useEffect, useState } from 'react'

export const Carrucel = ({nombre, categoria}) => {

  console.log(nombre)

  const [imagenes, setImagenes] = useState()

  useEffect(()=>{
    const traerImagenes = async () =>{

      const peticion = await fetch(`https://pixabay.com/api/?key=33435736-0bc5f29313ec2f94a8cd9b5cd&q=${nombre}&image_type=photo&pretty=true&lang=en&category=${categoria}`)
      const data = await peticion.json()

      let listaImagenes = data.hits.map(x => x = x.largeImageURL)
      setImagenes(listaImagenes)
    }

    traerImagenes()
  },[categoria, nombre])

  console.log(nombre)

  if (imagenes && imagenes.length > 0) {
    return (
      <div className='carrucel'>
        {
          imagenes.map((x, index) =>(
            <div className='carrucel__img' style={{backgroundImage: `url(${x})`}} key={index}></div>
          ))
        }
      </div>
    )
  } else{
    return(
      <div className='carrucel'>
        <p className='aviso'>No hay imagenes disponibles</p>
      </div>
  )}
}
