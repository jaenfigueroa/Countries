export const ordenarListaReducer = (estado, accion) => {

  console.log(estado, accion)

  let {listaOrdenada} = estado
  let {tipo, payload} = accion
  
  console.log(tipo, payload)

  //////////////////////////////////
  switch (tipo) {
    case "MODIFICAR_LISTA":
      return { ...estado, listaOrdenada: [...payload] }
    case 'A-Z':
      return {...estado, listaOrdenada: ordenarAZ(listaOrdenada)}
    case 'Z-A':
      return {...estado, listaOrdenada: ordenarZA(listaOrdenada)}
    case 'Area-ascendente':
      return {...estado, listaOrdenada: ordenarAreaAscendente(listaOrdenada)}
    case 'Area-decendente':
      return {...estado, listaOrdenada: ordenarAreaDecendente(listaOrdenada)}
    default:
      return estado
  }
}

//ORDENAR DE A-Z///////////////////////////
const ordenarAZ = (lista)=>{

  return lista.sort((a, b) => {
    if (a.nombre < b.nombre) {
      return -1
    }
    if (a.nombre > b.nombre) {
      return 1
    }
    return 0
  })

}

//ORDENAR DE Z-A///////////////////////////
const ordenarZA = (lista)=>{

  return lista.sort((a, b) => {
    if (a.nombre > b.nombre) {
      return -1
    }
    if (a.nombre < b.nombre) {
      return 1
    }
    return 0
  })

}

//ORDENAR POR AREA ASCENDENTE//////////////
const ordenarAreaAscendente = (lista)=>{

  return lista.sort((a, b) => {
    if (a.area < b.area) {
      return -1
    }
    if (a.area > b.area) {
      return 1
    }
    return 0
  })

}

//ORDERNAR POR AREA DESENDENTE//////////////
const ordenarAreaDecendente = (lista)=>{

  return lista.sort((a, b) => {
    if (a.area > b.area) {
      return -1
    }
    if (a.area < b.area) {
      return 1
    }
    return 0
  })

}

////////////////////////////////////////////


// listaOrdenada: [
//   {
//     nombre: 'peru',
//     capital: 'lima',
//     banderaImg: '#',
//     continente: 'america',
//     area: 2545,
//   },
//   {
//     nombre: 'argentina',
//     capital: 'buenos aires',
//     banderaImg: '#',
//     continente: 'america',
//     area: 1254,
//   },
//   {
//     nombre: 'bolivia',
//     capital: 'webar',
//     banderaImg: '#',
//     continente: 'america',
//     area: 4855,
//   }
// ]