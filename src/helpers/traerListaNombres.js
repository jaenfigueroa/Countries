export const traerListaNombres = async() =>{

  const peticion = await fetch('https://restcountries.com/v3.1/all')
  const data = await peticion.json()

  let nombres = obtenerNombres(data)

  console.log(nombres)
  
  return nombres
}

//////////////////////////////////
const obtenerNombres = (array) => array.map(x => x.name.common.toLowerCase())


