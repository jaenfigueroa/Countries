export const traerPaisbasico = async (nombre='peru') => {
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

  console.log(paisFormado)
  
  return paisFormado
}

