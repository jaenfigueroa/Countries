import { useCallback, useState } from "react"

export const useFiltrar = (lista, etiquetas) => {

  const [restantes, setRestantes] = useState([])

  //USAR USE CALL BACK PARA MEMORIZAR EL VALOR QUE DEVULVE UNA FUNCION
  // const filtrarMemorizado = useCallback(() => filtrarRestantes, [lista, etiquetas])
  const filtrarMemorizado = useCallback(() => {
  
    ////////////////////////////////////////////////

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
  
      // setRestantes(restantes)
  
      //SI HAY RESULTADOS DE COINCIDENCIAS CON LAS ETIQUETAS, MOSTRAR ESA LISTA
      if (restantes.length >= 1) {
        setRestantes(restantes)
      //PERO SI NO HAY COINCIDENCIAS, ENTONCES MOSTRAR LA LISTA ORIGINAL
      } else{
        setRestantes(lista)
      }
      
  
  
    }
  
  , [etiquetas, lista])


  
  return {
    listaRestantes: restantes,
    // filtrarRestantes
    filtrarMemorizado
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
