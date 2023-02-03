import { useEffect, useState } from "react"

export const useFiltrar = (lista, etiquetas) => {

  console.log(lista, etiquetas)

  const [restantes, setRestantes] = useState([])

  ////////////////////////////////////////////////
  const filtrarRestantes = () =>{

    let granString = generarUnSoloString(etiquetas)
    let restantes = []

    lista.forEach(pais => {
      let resultado = comprobarCoincidencias(pais, granString)
      // console.log(resultado)

      if (resultado) {
        restantes = [...restantes, pais]
      }

    })
    // console.log(restantes);
    // return restantes

    setRestantes(restantes)
  }

  // useEffect(() => {
  //   filtrarRestantes()
  // }, [lista])
  

  return {
    listaRestantes: restantes,
    filtrarRestantes
  }
}



//FILTRADO//////////////////////////////////////////
//GENERAR UN GRAN STRING QUE CONTENGA TODAS LAS ETIQUETAS
function generarUnSoloString(etiquetas){
  let string = ''
  
  etiquetas.forEach(x =>{
      string += '-'+x.valor
  })

  let resultado = string.toLowerCase()
  return resultado
}

//COMPROBAR LAS COINCIDENCIAS
function comprobarCoincidencias(pais, granString){
  for (const key in pais) {
    ///////////////////////////////////////////////////
    if(isNaN(pais[key]) && pais[key]){
      let palabras = pais[key].split(' - ')

      const resultado = palabras.some(word => granString.includes(word));

      if (resultado) {
        return true
      }
    }
  }
  return false
}
