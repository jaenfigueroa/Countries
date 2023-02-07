export const traerPais = async (nombre) => {
  
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

    /* BLOQUE 1 */
    nombres: {
      codigo: data.altSpellings[0],
      comun: data.name.common, /* USADO */
      oficial: data.name.official, /* USADO */
    },
    banderaImg: data.flags.svg, /* USADO */
    escudoImg: data.coatOfArms.svg, /* USADO */
    coordenadasCapital: data.capitalInfo.latlng, /* USADO */
    coordenadasPais: data.latlng, /* USADO */

    /* BLOQUE 2 */
    continente: data.region, /* USADO */
    subcontinente: data.subregion, /* USADO */
    area: data.area, /* USADO */
    capital: data.capital.join(''), /* USADO */
    poblacion: data.population, /* USADO */
    moneda: traerMoneda(data.currencies), /* USADO */
    indiceGiniDesigualdad: data.gini,
    idiomas: traerIdiomas(data.languages), /* USADO */
    
    paisIndependiente: data.independent, /* USADO */
    dominio: data.tld[0],  /* USADO */
    codigoTel: data.idd.root + data.idd.suffixes.join(''), /* USADO */
    
    /* BLOQUE 3 */
    paisesVecinos: data.borders, /* USADO */
    
    /* BLOQUE 4 */
    inicioSemana: data.startOfWeek,
    zonaHoraria: data.timezones,
    
    /* NO SE PARA QUE USARLO */
    mapa: data.maps.googleMaps, 
  }

  // console.log('resultado:', paisFormado);

  return paisFormado
}



///////////////////////////////////////
const traerIdiomas = (objeto)=>{
  const resultado = []

  for (const key in objeto) {
    resultado.unshift(objeto[key])
  }

  return resultado.join(', ')
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
