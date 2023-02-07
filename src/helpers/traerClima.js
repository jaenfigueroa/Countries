export const traerClima = async(latitud, longitud) => {

  const peticion = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitud}&lon=${longitud}&appid=92cb5013439f9a880d7f01b358c7e171`)

  // const data = await peticion.json()

  console.log(peticion)
}