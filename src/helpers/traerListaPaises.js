export const traerListaPaises = async () => {
  const peticion = await fetch('https://restcountries.com/v3.1/all')
  const data = await peticion.json()

  console.log(data);


  let resultado = data.map(pais =>{

    return {
      nombre: pais.name.common,
      img: pais.flags.svg,
      continente: pais.region,
      capital: traerCapital(pais),
      area: 2.78,
      idioma: 'Español',
      moneda: 'Pesos argentinos',
    }
  })

  console.log(resultado)

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

