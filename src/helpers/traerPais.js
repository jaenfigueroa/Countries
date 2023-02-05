export const traerPais = async (nombre) => {
  
  // console.log('nombre de pais que se solicita:', nombre)

  // let url = `https://restcountries.com/v3.1/name/${nombre}`
  let url = `https://restcountries.com/v3.1/name/${nombre}?fullText=true`

  try {

    const peticion = await fetch(url)
    const data = await peticion.json()

    // console.log(data);

    return armarPais(data[0])
    
  } catch (error) {
    console.log(error)
  }
  
}



////////////////////////////////////////////////https://restcountries.com/v3.1/name/chile
const armarPais = (data)=>{

  // console.log('inicio:',data)

  const paisFormado = {
    nombres: {
      codigo: data.altSpellings[0],
      comun: data.name.common, /* USADO */
      oficial: data.name.official, /* USADO */
    },
    banderaImg: data.flags.svg, /* USADO */
    escudoImg: data.coatOfArms.svg, /* USADO */
    coordenadasCapital: data.capitalInfo.latlng, /* USADO */
    coordenadasPais: data.latlng, /* USADO */

    capital: data.capital.join(''),
    area: data.area,
    poblacion: data.population,
    moneda: traerMoneda(data.currencies),
    indiceGiniDesigualdad: data.gini,
    paisIndependiente: data.independent,
    idiomas: traerIdiomas(data.languages),
    continente: data.region,
    subcontinente: data.subregion,
    dominio: data.tld.join(''),
    codigoTel: data.idd.root + data.idd.suffixes.join(''),
    
    paisesVecinos: data.borders,
    
    inicioSemana: data.startOfWeek,
    zonaHoraria: data.timezones,
    
    mapa: data.maps.googleMaps, 
  }

  // console.log('resultado:', paisFormado);

  return paisFormado
}



///////////////////////////////////////
const traerIdiomas = (objeto)=>{
  const resultado = []

  for (const key in objeto) {
    resultado.push(objeto[key])
  }

  return resultado
}

///////////////////////////////////////
const traerMoneda = (objeto) => {
  const resultado = []

  for (const key in objeto) {

    let objeto2 = objeto[key]
    for (const key in objeto2) {
      resultado.push(objeto2[key])
    }
  }

  return {
    nombre: resultado[0],
    simbolo: resultado[1]
  }
}
