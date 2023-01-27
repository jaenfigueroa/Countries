export const traerListaPaises = async () => {
  
  const peticion = await fetch('https://restcountries.com/v3.1/all')
  const data = await peticion.json()

  console.log(data);

  return 'vaca'
}
