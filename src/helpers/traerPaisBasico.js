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
    nombreSimbolo: data.altSpellings[0],
    capital: data.capital.join(''),
    banderaImg: data.flags.svg,
    continente: data.region,
    subcontinente: data.subregion,
    zonaHoraria: data.timezones,
    area: data.area,
    poblacion: data.population,
  }

  // console.log('resultado:', paisFormado);

  return paisFormado
}

