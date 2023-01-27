//TIPOS DE VALORES POSIBLES
export const TYPES = {
  TODOS: 'TODOS',
  NOMBRE: 'NOMBRE',
  LENGUAGE: 'LENGUAGE',
  CAPITAL: 'CAPITAL',
  CONTINENTE: 'CONTINENTE'
}

//ESTADO INICIAL
const estadoInicial = {filtro: TYPES.TODOS}

//EL REDUCER CREADO
export const tipoFiltroReducer = (estado = estadoInicial, accion) => {

  const {payload: dato} = accion

  ////////////////////////////////////////////
  switch (accion.type) {
    case TYPES.TODOS:
     return traerPaises('https://restcountries.com/v3.1/all')

    case TYPES.NOMBRE:
    return traerPaises('https://restcountries.com/v3.1/name/'+dato)

    case TYPES.LENGUAGE:
      return traerPaises('https://restcountries.com/v3.1/lang/'+dato)

    case TYPES.CAPITAL:
      return traerPaises('https://restcountries.com/v3.1/capital/'+dato)

    case TYPES.CONTINENTE:
      return traerPaises('https://restcountries.com/v3.1/region/'+dato)

    default:
      return estado
  }

}



//FUNCION QUE TRAE LAS LISTA DE LOS PAISES
const traerPaises = (url)=>{

  try {
    const peticion = fetch(url)
    const data = peticion.json()
  
    console.log(data)

    return 'vaca'

  } catch (error) {
    console.log(error);
  }
}