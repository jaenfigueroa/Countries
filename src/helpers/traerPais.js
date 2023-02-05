export const traerPais = async (nombre) => {
  
  console.log('nombre de pais que se solicita:', nombre)

  // let url = `https://restcountries.com/v3.1/name/${nombre}`
  let url = `https://restcountries.com/v3.1/name/${nombre}?fullText=true`

  try {

    const peticion = await fetch(url)
    const data = await peticion.json()

    console.log(data);

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
      comun: data.name.common,
      oficial: data.name.official,
    },
    capital: data.capital.join(''),
    paisesVecinos: data.borders,
    banderaImg: data.flags.svg,
    escudoImg: data.coatOfArms.svg,
    area: data.area,
    mapa: data.maps.googleMaps,
    poblacion: data.population,
    continente: data.region,
    subcontinente: data.subregion,
    zonaHoraria: data.timezones,
    dominio: data.tld.join(''),
    moneda: traerMoneda(data.currencies),
    indiceGiniDesigualdad: data.gini,
    codigoTel: data.idd.root + data.idd.suffixes.join(''),
    paisIndependiente: data.independent,
    idiomas: traerIdiomas(data.languages),
    inicioSemana: data.startOfWeek,

    //COODENADAS DE LA CAPITAL
    coordenadasCapital: data.capitalInfo.latlng,

    //COORDENADAS DEL PAIS
    coordenadasPais: data.latlng
  }

  console.log('resultado:', paisFormado);

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
