export const traerCategorias = async () => {
  
  const peticion = await fetch('https://restcountries.com/v3.1/all')
  const data = await peticion.json()

  // console.log(data);

  let resultadoFinal = [
    {
      titulo: 'paises', /* titulo para la lista del selector */
      tipo: 'nombre', /* tipo de etiqueta, usado para el filtrado */
      opciones: obtenerNombres(data).sort()
    },
    {
      titulo: 'continentes',
      tipo: 'continente',
      opciones: obtenerContinentes(data).sort()
    },
    {
      titulo: 'capitales',
      tipo: 'capital',
      opciones: obtenerCapitales(data).sort()
    },
    // {
    //   titulo: 'idiomas',
    //   tipo: 'idioma',
    //   opciones: obtenerIdiomas(data).sort()
    // },
    {
      titulo: 'monedas',
      tipo: 'moneda',
      opciones: obtenerMonedas(data).sort()
    },

    /* EN DUDA SI DEJAR O NO */
    // {
    //   titulo: 'codigo de pais',
    //   opciones: obtenerCodigos(data).sort()
    // },
    // {
    //   titulo: 'codigo Telefonico',
    //   opciones: obtenerCodigosTelefono(data).sort()
    // },
  ]

  // console.log(resultadoFinal)

  return resultadoFinal
}


//OBTENER LA LISTA DE FLAGS (PE, AR, CO, BO) /////////////////////
// const obtenerCodigos = (array) => {
//   return array.map(x => x = x.altSpellings[0])
// }

//OBTENER DE LAS CIUDADES CAPITALES //////////////////////////////
const obtenerCapitales= (array) => {
  return array.map(x => {
    if (x.capital) {
      return x.capital[0].toLowerCase() 
    } else{
      return ''
    }
  })
}


//OBTENER LA LISTA DE CONTINENTES /////////////////////
const obtenerContinentes = (array) => {
  let resultados = array.map(x => x = x.region.toLowerCase())

  return [...new Set(resultados)]
}

//OBTENER LA LISTA DE sub - CONTINENTES /////////////////////
// const obtenerSubcontinentes = (array) => {
//   let resultados = array.map(x => x = x.subregion)

//   return [...new Set(resultados)]
// }

//OBTENER LA LISTA DE IDIOMAS /////////////////////
// const obtenerIdiomas = (array) => {
  
//   let resultados = array.map(x => {
//     let objetoLenguages = x.languages
//     return objetoLenguages
//   })

//   let resultadoFinal = resultados.filter(x => x !== undefined)


//   // console.log(resultadoFinal)

//   let x = []
  
//   for (const key in resultadoFinal) {
    
//     let primerValor = Object.values(resultadoFinal[key])

//     x = [...x, ...primerValor]
//   }

//   // console.log(x);

//   let sinRepetir = [...new Set(x)] /* ELIMINAR REPETIDOS */

//   // console.log(siRepetir).toLowerCase()

//   // return x
//   const minusculas  = sinRepetir.map (x => x = x.toLowerCase())

//   // console.log(minusculas);

//   return minusculas
// }

//OBTENER LISTA DE MONEDAS//////////////
const obtenerMonedas = (array) => {
  let resultados =  array.map(x => x = x.currencies)

  let resultadoFinal = resultados.filter(x => x !== undefined)

  let x = []
  
  for (const key in resultadoFinal) {
    
    let primerValor = Object.values(resultadoFinal[key])[0]

    x = [...x, primerValor.name.toLowerCase()]
  }

  return [...new Set(x)]
}


//OBTENER LISTA DE CODIGOS DE TELFONO
// const obtenerCodigosTelefono = (array)=>{

//   let resultado = array.map(x => {

//     let informacion = x.idd

//     let prefijo = ''
//     let sufijo = ''

//     if (informacion.suffixes !== undefined && informacion.root !== undefined) {

//       /* prefijo */
//       prefijo = informacion.root

//       /* sufijo */

//       let listaSufijos = informacion.suffixes
//       // console.log(listaSufijos)

//       sufijo = listaSufijos[0]
//     }

//     if (prefijo && sufijo) {
//       return prefijo + sufijo 
//     } else {
//       return ''
//     }

//   })

//   let resultadoFinal = resultado.filter(x => x !== undefined)

//   return [...new Set(resultadoFinal)]
// }

//OBTENER LISTA DE NOMBRES DE LOS PAISES
const obtenerNombres = (array) => {

  return array.map(x => x.name.common.toLowerCase())
}