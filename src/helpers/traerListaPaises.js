export const traerListaPaises = async () => {
  const peticion = await fetch('https://restcountries.com/v3.1/all')
  const data = await peticion.json()

  // console.log(data);


  let resultado = data.map(pais =>{

    return {
      img: pais.flags.svg,
      nombre: pais.name.common,
      continente: pais.region,
      capital: traerCapital(pais),
      // idioma: 'Español',
      idioma: traerIdiomas(pais.languages),
      moneda: traerMoneda(pais.currencies),
      area: pais.area.toLocaleString(),
    }
  })

  // console.log(resultado)

  return resultado
}


//TRAER LA CAPITAL DEL PAIS///////////////////////
const traerCapital = (pais)=>{

  if (pais.capital) {
    return pais.capital[0].toLowerCase() 
  } else{
    return ''
  }
}

//TRAER LA MONEDA DEL PAIS///////////////////////
const traerMoneda = (objeto) => {

  const resultado = []

  for (const key in objeto) {

    let objeto2 = objeto[key]
    for (const key in objeto2) {
      resultado.push(objeto2[key])
    }
  }

  return resultado[0]
}


///////////////////////////////////////
const traerIdiomas = (objeto)=>{
  const resultado = []

  for (const key in objeto) {
    resultado.push(objeto[key])
  }

  return resultado.reverse().join(' - ')
}