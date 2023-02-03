export const ordenarListaReducer = (estado, accion) => {

  // console.log(estado, accion)

  let {listaOrdenada} = estado
  let {tipo, payload} = accion
  
  // console.log(tipo, payload)

  //////////////////////////////////
  switch (tipo) {

    /* LA PRIMERA ASIGANCION PARA EL ESTADO */
    case "MODIFICAR_LISTA":
      return { ...estado, listaOrdenada: [...payload] }

    /* LOS FILTROS DE ORDEN */
    case 'NOMBRE_AZ':
      return {...estado, listaOrdenada: ordenarAZ(listaOrdenada)}
    case 'NOMBRE_ZA':
      return {...estado, listaOrdenada: ordenarZA(listaOrdenada)}
    case 'AREA_ASCENDENTE':
      return {...estado, listaOrdenada: ordenarAreaAscendente(listaOrdenada)}
    case 'AREA_DECENDENTE':
      return {...estado, listaOrdenada: ordenarAreaDecendente(listaOrdenada)}
    case 'CONTINENTE_AZ':
      return {...estado, listaOrdenada: ordenarContinenteAZ(listaOrdenada)}
    case 'CONTINENTE_ZA':
      return {...estado, listaOrdenada: ordenarContinenteZA(listaOrdenada)}
    case 'CAPITAL_AZ':
      return {...estado, listaOrdenada: ordenarCapitalAZ(listaOrdenada)}
    case 'CAPITAL_ZA':
      return {...estado, listaOrdenada: ordenarCapitalZA(listaOrdenada)}
    case 'MONEDA_AZ':
      return {...estado, listaOrdenada: ordenarMonedaAZ(listaOrdenada)}
    case 'MONEDA_ZA':
      return {...estado, listaOrdenada: ordenarMonedaZA(listaOrdenada)}
        
    /* LOS FILTROS POR ETIQUETAS */
    case 'FILTRADO_POR_ETIQUETAS':
      return {...estado, listaOrdenada: filtrarUsandoEtiquetas(listaOrdenada, payload)}
        
    default:
      return estado
  }
}

//ORDENAMIENTO///////////////////////////////
////////////////////////////////////////////
//ORDENAR DE A-Z///////////////////////////
const ordenarAZ = (lista)=>{
  return lista.sort((a, b) => {
    if (a.nombre < b.nombre) return -1
    if (a.nombre > b.nombre) return 1
    return 0
  })
}

//ORDENAR DE Z-A///////////////////////////
const ordenarZA = (lista)=>{
  return lista.sort((a, b) => {
    if (a.nombre > b.nombre) return -1
    if (a.nombre < b.nombre) return 1
    return 0
  })
}

//ORDENAR POR AREA ASCENDENTE//////////////
const ordenarAreaAscendente = (lista)=>{
  return lista.sort((a, b) => a.area - b.area)
}

//ORDERNAR POR AREA DESENDENTE//////////////
const ordenarAreaDecendente = (lista)=>{
  return lista.sort((a, b) => b.area - a.area)
}

//ORDENAR POR CONTINENTE A-Z//////////////////////////////////////////
const ordenarContinenteAZ = (lista)=>{
  return lista.sort((a, b) => {
    if (a.continente < b.continente) return -1
    if (a.continente > b.continente) return 1
    return 0
  })
}
//ORDENAR POR CONTINENTE Z-A//////////////////////////////////////////
const ordenarContinenteZA = (lista)=>{
  return lista.sort((a, b) => {
    if (a.continente > b.continente) return -1
    if (a.continente < b.continente) return 1
    return 0
  })
}

//ORDENAR POR CAPITAL A-Z//////////////////////////////////////////
const ordenarCapitalAZ = (lista)=>{
  return lista.sort((a, b) => {
    if (a.capital < b.capital) return -1
    if (a.capital > b.capital)  return 1
    return 0
  })
}
//ORDENAR POR CAPITAL Z-A//////////////////////////////////////////
const ordenarCapitalZA = (lista)=>{
  return lista.sort((a, b) => {
    if (a.capital > b.capital) return -1
    if (a.capital < b.capital) return 1
    return 0
  })
}

//ORDENAR POR MONEDA A-Z//////////////////////////////////////////
const ordenarMonedaAZ = (lista)=>{
  return lista.sort((a, b) => {
    if (a.moneda < b.moneda) return -1
    if (a.moneda > b.moneda) return 1
    return 0
  })
}
//ORDENAR POR MONEDA Z-A//////////////////////////////////////////
const ordenarMonedaZA = (lista)=>{
  return lista.sort((a, b) => {
    if (a.moneda > b.moneda) return -1
    if (a.moneda < b.moneda) return 1
    return 0
  })
}

//FILTRADO//////////////////////////////////////////
////////////////////////////////////////////
////////////////////////////////////////////
const filtrarUsandoEtiquetas = (lista, etiquetas) =>{

  // console.log('se filtro por etiquetas')
  // console.log(lista)
  // console.log(etiquetas);

  let granString = generarUnSoloString(etiquetas)
  // console.log(granString);

  let restantes = []

  lista.forEach(pais => {
    let resultado = comprobarCoincidencias(pais, granString)

    console.log(resultado)

    if (resultado) {
      // console.log('vaca')

      restantes = [...restantes, pais]
    }

  })

  console.log(restantes);

  // return lista
  return restantes
}

//GENERAR UN GRAN STRING QUE CONTENGA TODAS LAS ETIQUETAS
function generarUnSoloString(etiquetas){
  let string = ''
  
  etiquetas.forEach(x =>{
      string += '-'+x.valor
  })

  let resultado = string.toLowerCase()

  console.log(resultado)

  return resultado
}

//COMPROBAR LAS COINCIDENCIAS
function comprobarCoincidencias(pais, granString){
  for (const key in pais) {

    console.log(pais[key])
    
    if(isNaN(pais[key]) && pais[key] && granString.includes(pais[key].toLowerCase()) ){

      // console.log(pais[key])
      // console.log(pais[key].toLowerCase())
      return true
      // console.log('si');
    }
  }
  return false
}
















// listaOrdenada: [
//   {
//     nombre: 'peru',
//     capital: 'lima',
//     banderaImg: '#',
//     continente: 'america',
//     area: 2545,
//   },
// ]