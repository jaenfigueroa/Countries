// export const traerPaisbasico = (nombre) => {
//   console.log('nombre que llega:', nombre)
  
//   return fetch(`https://restcountries.com/v3.1/name/${nombre}`)
//   .then((peticion) => peticion.json())
//   .then((data) => armarPais(data[0]))
//   .catch((error) => console.log(error))
// }

export const traerPaisbasico = async (nombre) => {
  console.log('nombre que llega:', nombre)

  try {
    const peticion = await fetch(`https://restcountries.com/v3.1/name/${nombre}`)
    const data = await peticion.json()

    return armarPais(data[0])
    
  } catch (error) {
    console.log(error)
  }
}


////////////////////////////////////////////////
const armarPais = (data)=>{

  // console.log('inicio:',data)

  const paisFormado = {
    nombre: data.name.common,
    capital: data.capital.join(''),
    banderaImg: data.flags.svg,
    continente: data.region,
    area: data.area,
  }

  // console.log('resultado:', paisFormado);

  return paisFormado
}

